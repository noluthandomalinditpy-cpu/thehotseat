/**
 * The Hot Seat by N — backend (Google Sheets + Google Drive photos + auto-reply).
 *
 * Sheet tabs:
 *   "Services"  (category | name | price)
 *   "Gallery"   (category | caption | image_url)   <- image_url can be a normal link OR a Google Drive share link
 *   "Bookings"  (created automatically)
 *
 * Optional: put gallery photos in a Google Drive folder and paste its ID into GALLERY_FOLDER_ID.
 * Sub-folders become gallery categories (e.g. folders named Nails, Lashes, Make-Up...).
 */
const OWNER_EMAIL = "noluthandomalindi.tpy@gmail.com";
const BRAND = "The Hot Seat by N";
const GALLERY_FOLDER_ID = ""; // e.g. "1AbCdEfGhIjKlMnOpQrStUvWxYz123456" (the part after /folders/ in the Drive URL)
const CACHE_SECONDS = 120;    // how long gallery/services are cached (keeps the site fast)

/* ---------- GET: services + gallery ---------- */

function doGet(e) {
  const action = String((e && e.parameter && e.parameter.action) || "").toLowerCase();
  const key = action === "gallery" ? "gallery" : "services";
  let out = [];
  try {
    const cache = CacheService.getScriptCache();
    const hit = cache.get(key);
    if (hit) return json_(hit);
    out = key === "gallery" ? getGallery_() : sheetRows_("Services");
    const text = JSON.stringify(out);
    try { cache.put(key, text, CACHE_SECONDS); } catch (err) { /* too big to cache: fine */ }
    return json_(text);
  } catch (err) {
    console.error(err);
    return json_("[]"); // the website falls back to its built-in data
  }
}

function json_(text) {
  return ContentService.createTextOutput(text).setMimeType(ContentService.MimeType.JSON);
}

function sheetRows_(name) {
  const sh = SpreadsheetApp.getActive().getSheetByName(name);
  if (!sh) return [];
  const values = sh.getDataRange().getDisplayValues(); // display values: prices come through exactly as typed
  if (values.length < 2) return [];
  const head = values[0].map(h => String(h).trim().toLowerCase().replace(/\s+/g, "_"));
  return values.slice(1)
    .filter(r => String(r[0]).trim())
    .map(r => Object.fromEntries(head.map((h, i) => [h, String(r[i]).trim()])));
}

/* ---------- Gallery: real Google Drive pictures ---------- */

function getGallery_() {
  // 1) rows from the "Gallery" tab (Drive share links are converted to image links automatically)
  const rows = sheetRows_("Gallery").map(r => {
    const id = driveId_(r.image_url);
    if (id) { r.image_url = driveImg_(id, 800); r.full_url = driveImg_(id, 1600); }
    return r;
  }).filter(r => r.image_url);
  // 2) photos from the Drive folder, if one is configured
  const fromDrive = GALLERY_FOLDER_ID ? folderImages_(GALLERY_FOLDER_ID) : [];
  return rows.concat(fromDrive);
}

function driveId_(url) {
  const s = String(url || "").trim();
  const m = s.match(/\/d\/([-\w]{20,})/) || s.match(/[?&]id=([-\w]{20,})/);
  return m ? m[1] : "";
}

function driveImg_(id, width) {
  return "https://lh3.googleusercontent.com/d/" + id + "=w" + width;
}

function folderImages_(folderId) {
  const out = [];
  const addFrom = (folder, category) => {
    const files = folder.getFiles();
    while (files.hasNext()) {
      const f = files.next();
      if (String(f.getMimeType()).indexOf("image/") !== 0) continue;
      const raw = f.getName().replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim();
      const camera = /^(img|dsc|pxl|photo|image|screenshot|whatsapp)?[\s]*[\d ]+/i.test(raw); // IMG_2034 etc. makes a poor caption
      out.push({
        category: category,
        caption: camera ? category : raw,
        image_url: driveImg_(f.getId(), 800),
        full_url: driveImg_(f.getId(), 1600)
      });
    }
  };
  const root = DriveApp.getFolderById(folderId);
  addFrom(root, "Gallery");
  const subs = root.getFolders();
  while (subs.hasNext()) { const s = subs.next(); addFrom(s, s.getName()); }
  return out;
}

/** Run this ONCE from the editor after setting GALLERY_FOLDER_ID so the website can display the photos. */
function makeGalleryPublic() {
  if (!GALLERY_FOLDER_ID) throw new Error("Set GALLERY_FOLDER_ID first.");
  DriveApp.getFolderById(GALLERY_FOLDER_ID).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
}

/* ---------- POST: booking request ---------- */

function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return json_('{"ok":false,"error":"bad request"}'); }
  if (d.website) return json_('{"ok":true}'); // honeypot: bots fill this in
  d.name = String(d.name || "").trim();
  d.email = String(d.email || "").trim();
  if (!d.name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) return json_('{"ok":false,"error":"name and valid email required"}');

  // 1) save to the Bookings tab (lock so two simultaneous bookings don't collide)
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const ss = SpreadsheetApp.getActive();
    let sh = ss.getSheetByName("Bookings");
    if (!sh) {
      sh = ss.insertSheet("Bookings");
      sh.appendRow(["Timestamp", "Name", "Email", "Phone", "Branch", "Service", "Preferred date", "Message"]);
      sh.setFrozenRows(1);
    }
    const row = sh.getLastRow() + 1;
    sh.getRange(row, 4).setNumberFormat("@");  // keep the leading 0 on phone numbers
    sh.getRange(row, 7).setNumberFormat("@");  // keep the date exactly as submitted
    sh.getRange(row, 1, 1, 8).setValues([[new Date(), d.name, d.email, String(d.phone || ""), d.branch || "", d.service || "", String(d.date || ""), d.message || ""]]);
  } finally {
    lock.releaseLock();
  }

  // 2) notify the owner first (most important), then 3) auto-reply. One failing must not block the other.
  try {
    MailApp.sendEmail({
      to: OWNER_EMAIL, replyTo: d.email, name: BRAND,
      subject: "New booking request: " + d.name,
      body: ["name", "email", "phone", "branch", "service", "date", "message"].map(k => k + ": " + (d[k] || "")).join("\n")
    });
  } catch (err) { console.error("Owner email failed: " + err); }

  try {
    const first = esc_(d.name.split(" ")[0]);
    MailApp.sendEmail({
      to: d.email, replyTo: OWNER_EMAIL, name: BRAND,
      subject: "We've received your request – " + BRAND,
      htmlBody: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;border:1px solid #EFD3C7">
      <div style="background:#B0125E;color:#fff;padding:20px;text-align:center;font-size:22px">${BRAND}</div>
      <div style="padding:24px;color:#3A0F25;line-height:1.6;background:#FBF1F4">
      <p>Hi ${first},</p>
      <p>Thank you for choosing us. Your request for <b>${esc_(d.service) || "an appointment"}</b> at <b>${esc_(d.branch) || "our salon"}</b>${d.date ? " on <b>" + esc_(d.date) + "</b>" : ""} is in, and a member of our team will confirm your slot within 24 hours.</p>
      <p>Need us sooner? WhatsApp or call <b>063 972 6432</b>.</p>
      <p>With love,<br>Noluthando &amp; the team</p></div></div>`
    });
  } catch (err) { console.error("Auto-reply failed: " + err); }

  return json_('{"ok":true}');
}

function esc_(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

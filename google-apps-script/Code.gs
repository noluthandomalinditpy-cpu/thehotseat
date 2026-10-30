/**
 * The Hot Seat by N — backend (Google Sheets + auto-reply).
 * Sheet tabs: "Services" (category | name | price), "Gallery" (category | caption | image_url), "Bookings" (created automatically).
 */
const OWNER_EMAIL = "noluthandomalindi.tpy@gmail.com";
const BRAND = "The Hot Seat by N";

function doGet(e) {
  const name = (e.parameter.action || "").toLowerCase() === "gallery" ? "Gallery" : "Services";
  const [head, ...rows] = SpreadsheetApp.getActive().getSheetByName(name).getDataRange().getValues();
  const out = rows.filter(r => r[0]).map(r => Object.fromEntries(head.map((h, i) => [String(h).trim().toLowerCase(), r[i]])));
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName("Bookings");
  if (!sh) { sh = ss.insertSheet("Bookings"); sh.appendRow(["Timestamp","Name","Email","Phone","Branch","Service","Preferred date","Message"]); }
  sh.appendRow([new Date(), d.name, d.email, d.phone, d.branch, d.service, d.date, d.message]);

  const first = String(d.name || "there").split(" ")[0];
  MailApp.sendEmail({
    to: d.email, replyTo: OWNER_EMAIL, name: BRAND,
    subject: "We've received your request – " + BRAND,
    htmlBody: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;border:1px solid #EFD3C7">
      <div style="background:#B0125E;color:#fff;padding:20px;text-align:center;font-size:22px">${BRAND}</div>
      <div style="padding:24px;color:#3A0F25;line-height:1.6;background:#FBF1F4">
      <p>Hi ${first},</p>
      <p>Thank you for choosing us. Your request for <b>${d.service || "an appointment"}</b> at <b>${d.branch || "our salon"}</b>${d.date ? " on <b>" + d.date + "</b>" : ""} is in, and a member of our team will confirm your slot within 24 hours.</p>
      <p>Need us sooner? WhatsApp or call <b>063 972 6432</b>.</p>
      <p>With love,<br>Noluthando &amp; the team</p></div></div>`
  });
  MailApp.sendEmail(OWNER_EMAIL, "New booking request: " + d.name, Object.entries(d).map(([k, v]) => k + ": " + v).join("\n"));
  return ContentService.createTextOutput("ok");
}

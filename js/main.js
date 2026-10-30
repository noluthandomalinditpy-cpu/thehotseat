const C=window.CONFIG,$=(s,r=document)=>r.querySelector(s);
const pages=[["index.html","Home"],["about.html","About Us"],["services.html","Services"],["gallery.html","Gallery"],["contact.html","Contact"]];
const cur=location.pathname.split("/").pop()||"index.html";
$("#site-header").innerHTML=`<header><div class="wrap nav"><a class="logo" href="index.html">The Hot Seat <small>by N</small></a>
<button class="burger" aria-label="Menu" aria-expanded="false">&#9776;</button>
<nav aria-label="Main"><ul>${pages.map(([h,n])=>`<li><a href="${h}"${h===cur?' aria-current="page"':''}>${n}</a></li>`).join("")}</ul></nav></div></header>`;
$("#site-footer").innerHTML=`<footer><div class="wrap">
<div><h3>The Hot Seat by N</h3><p>Nails, hair, make-up and lashes, done properly.</p></div>
<div><h3>Visit us</h3><p>Mall of the South<br>East Gate</p></div>
<div><h3>Talk to us</h3><p><a href="tel:+27639726432">${C.PHONE}</a><br><a href="mailto:${C.EMAIL}">${C.EMAIL}</a></p></div>
<div><h3>Pages</h3><p>${pages.map(([h,n])=>`<a href="${h}">${n}</a>`).join("<br>")}</p></div></div>
<p class="copy">&copy; ${new Date().getFullYear()} The Hot Seat by N. Founded by Noluthando Malindi.</p></footer>
<a class="wa" target="_blank" rel="noopener" aria-label="Chat on WhatsApp" href="https://wa.me/${C.WHATSAPP}?text=${encodeURIComponent("Hi The Hot Seat, I'd like to book an appointment.")}"><svg viewBox="0 0 32 32"><path d="M16 3A13 13 0 0 0 4.800 22.600L3 29l6.600-1.700A13 13 0 1 0 16 3zm0 2.400a10.600 10.600 0 1 1-5.600 19.600l-.4-.2-3.900 1 1-3.800-.3-.4A10.600 10.600 0 0 1 16 5.400zm-4.300 5.500c-.3 0-.7.100-1 .5-.4.400-1.300 1.300-1.300 3.100s1.400 3.600 1.500 3.800c.2.200 2.600 4.100 6.400 5.600 3.100 1.200 3.700 1 4.400.9.700-.1 2.200-.9 2.500-1.800.3-.9.300-1.600.2-1.800-.1-.2-.4-.3-.8-.5-.4-.2-2.200-1.100-2.500-1.200-.3-.1-.6-.2-.8.200-.2.400-.9 1.200-1.100 1.400-.2.200-.4.300-.8.100-.4-.2-1.600-.6-3-1.900-1.100-1-1.900-2.200-2.100-2.600-.2-.4 0-.6.200-.8l.6-.7c.2-.2.200-.4.400-.6.100-.2.100-.5 0-.7l-1.100-2.700c-.3-.7-.6-.6-.8-.6z"/></svg></a>`;
const b=$(".burger"),ul=$("nav ul");
b.onclick=()=>b.setAttribute("aria-expanded",ul.classList.toggle("open"));

async function load(action,fallback){
  if(!C.SCRIPT_URL)return fallback;
  try{const r=await fetch(`${C.SCRIPT_URL}?action=${action}`);const d=await r.json();return d.length?d:fallback}
  catch(e){return fallback}
}
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const cats=a=>[...new Set(a.map(x=>x.category))];
const opts=all=>cats(all).map(c=>`<optgroup label="${esc(c)}">${all.filter(s=>s.category===c).map(s=>`<option>${esc(s.name)}</option>`).join("")}</optgroup>`).join("");
function tabs(el,list,pick){
  el.innerHTML=["All",...list].map((c,i)=>`<button aria-pressed="${i==0}">${esc(c)}</button>`).join("");
  el.onclick=e=>{const t=e.target.closest("button");if(!t)return;
    el.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===t));pick(t.textContent)}
}
if($("#services"))load("services",FALLBACK_SERVICES).then(all=>{
  const draw=f=>{$("#services").innerHTML=cats(all).filter(c=>f==="All"||c===f).map(c=>`<div class="svc-group"><h3>${esc(c)}</h3>${all.filter(s=>s.category===c).map(s=>`<div class="svc"><span>${esc(s.name)}</span><span>${esc(s.price)}</span></div>`).join("")}</div>`).join("")};
  tabs($("#svc-tabs"),cats(all),draw);draw("All");
});
if($("#service"))load("services",FALLBACK_SERVICES).then(all=>$("#service").innerHTML=opts(all));
if($("#gallery"))load("gallery",FALLBACK_GALLERY).then(all=>{
  const shades=["#B0125E","#D9AE9C","#8E1A57","#C98A9E"];
  const draw=f=>{$("#gallery").innerHTML=all.filter(g=>f==="All"||g.category===f).map((g,i)=>`<button class="tile" data-src="${esc(g.image_url)}">${g.image_url?`<img loading="lazy" src="${esc(g.image_url)}" alt="${esc(g.caption||g.category)}">`:`<div class="ph" style="height:${g.h||240}px;background:${shades[i%4]}">${esc(g.category)}</div>`}<span class="cap">${esc(g.caption||g.category)}</span></button>`).join("")};
  tabs($("#gal-tabs"),cats(all),draw);draw("All");
  const dlg=$("#lightbox");$("#gallery").onclick=e=>{const t=e.target.closest(".tile");if(t&&t.dataset.src){$("img",dlg).src=t.dataset.src;dlg.showModal()}};
  dlg.onclick=()=>dlg.close();
});
const f=$("#booking");
if(f)f.onsubmit=async e=>{
  e.preventDefault();const m=$("#msg"),btn=$("button",f);
  if($("[name=website]",f).value)return;
  if(!f.checkValidity()){f.reportValidity();return}
  const data=Object.fromEntries(new FormData(f));delete data.website;
  btn.disabled=true;btn.textContent="Sending…";m.className="msg";
  try{
    if(!C.SCRIPT_URL)throw 0;
    await fetch(C.SCRIPT_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(data)});
    m.className="msg ok";m.textContent=`Thank you, ${data.name.split(" ")[0]}! We've received your request and sent a confirmation to ${data.email}. We'll reply within 24 hours.`;f.reset();
  }catch(err){
    m.className="msg err";m.textContent=C.SCRIPT_URL?"Something went wrong. Please try again or WhatsApp us.":"The form isn't connected to Google Sheets yet. Add your Apps Script URL in js/data.js (see README).";
  }
  btn.disabled=false;btn.textContent="Send booking request";
};

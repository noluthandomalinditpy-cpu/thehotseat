// Settings + fallback data. Live data comes from your Google Sheet once SCRIPT_URL is set.
window.CONFIG={
  SCRIPT_URL:"https://script.google.com/macros/s/AKfycbwoUmaAkWT0xznosSMV40eV-mov12AHuXHv7oo-dFASgVv5QPe4yCOAJ_suAXpyv-nk2g/exec", // paste your Google Apps Script Web App URL here (see README.md)
  WHATSAPP:"27639726432",
  PHONE:"063 972 6432",
  EMAIL:"noluthandomalindi.tpy@gmail.com"
};
const S=(c,n,p)=>({category:c,name:n,price:p});
window.FALLBACK_SERVICES=[
 S("Nails","Acrylic","From R300"),S("Nails","Gel-X","From R300"),S("Nails","Manicure","From R250"),S("Nails","Pedicure","From R270"),S("Nails","Soak Off","R150"),S("Nails","Nail Repair","R200"),
 S("Braids & Styles","Cornrows","From R150"),S("Braids & Styles","Boho Braids","From R450"),S("Braids & Styles","Knotless Braids","From R650"),S("Braids & Styles","Goddess Braids","From R650"),S("Braids & Styles","Box Braids","From R550"),S("Braids & Styles","Weave Install","From R500"),
 S("Wigs & Weaves","Ponytail","From R350"),S("Wigs & Weaves","Full Frontal","From R1200"),S("Wigs & Weaves","Sew-in","From R370"),S("Wigs & Weaves","Pixie Cut","From R700"),S("Wigs & Weaves","Half Wig","From R850"),S("Wigs & Weaves","Hairline Lace","From R200"),
 S("Make-Up","Bridal Look","From R3500"),S("Make-Up","Full Glam","From R4500"),S("Make-Up","Soft Glam","From R2300"),S("Make-Up","Bold Glam","From R1800"),S("Make-Up","Natural Glam","From R1200"),S("Make-Up","Touch-Up","From R650"),
 S("Lashes","Volume Set","From R100"),S("Lashes","Hybrid Set","From R90"),S("Lashes","Classic","From R90"),S("Lashes","Cat Eye Set","From R120"),S("Lashes","Wispy Set","From R100"),S("Lashes","Mega Volume","From R180")
];
// Gallery fallback: real photos go in the Google Sheet (image_url column)
window.FALLBACK_GALLERY=["Nails","Braids & Styles","Wigs & Weaves","Make-Up","Lashes","Nails","Make-Up","Braids & Styles","Lashes"].map((c,i)=>({category:c,caption:c,image_url:"",height:[220,300,260][i%3],width:[260,240,300][i%3]}));

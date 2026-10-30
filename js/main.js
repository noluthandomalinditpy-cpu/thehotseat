window.CONFIG = {
  SCRIPT_URL: "",
  WHATSAPP: "27639726432",
  PHONE: "063 972 6432",
  EMAIL: "noluthandomalindi.tpy@gmail.com"
};

const S = (category, name, price) => ({ category, name, price });

window.FALLBACK_SERVICES = [
  S("Nails", "Acrylic", "From R300"),
  S("Nails", "Gel-X", "From R300"),
  S("Nails", "Manicure", "From R250"),
  S("Nails", "Pedicure", "From R270"),
  S("Nails", "Soak Off", "R150"),
  S("Nails", "Nail Repair", "R200"),

  S("Hair Category 1", "Cornrows", "From R150"),
  S("Hair Category 1", "Boho Braids", "From R450"),
  S("Hair Category 1", "Knotless Braids", "From R650"),
  S("Hair Category 1", "Goddess Braids", "From R650"),
  S("Hair Category 1", "Straight Up", "From R350"),
  S("Hair Category 1", "Straight Back", "From R350"),

  S("Hair Category 2", "Ponytail", "From R350"),
  S("Hair Category 2", "Full Frontal", "From R1200"),
  S("Hair Category 2", "Sew-in", "From R370"),
  S("Hair Category 2", "Pixie Cut", "From R700"),
  S("Hair Category 2", "Half Up Half Down", "From R850"),
  S("Hair Category 2", "Basic Installation", "From R150"),

  S("Make-Up", "Bridal Look", "From R3500"),
  S("Make-Up", "Full Glam", "From R4500"),
  S("Make-Up", "Soft Glam", "From R2300"),
  S("Make-Up", "Bold Glam", "From R1800"),
  S("Make-Up", "Natural Glam", "From R1200"),
  S("Make-Up", "Make-up with Rhinestones", "From R3200"),

  S("Lashes", "Volume Set", "From R100"),
  S("Lashes", "Hybrid Set", "From R90"),
  S("Lashes", "Classic", "From R90"),
  S("Lashes", "Cat Eye Set", "From R120"),
  S("Lashes", "Wispy Set", "From R100"),
  S("Lashes", "Mega Volume Set", "From R100")
];

window.FALLBACK_GALLERY = [
  { category: "Nails", caption: "Luxury set", image_url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80" },
  { category: "Hair Category 1", caption: "Braids and texture", image_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" },
  { category: "Make-Up", caption: "Soft glam finish", image_url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80" },
  { category: "Lashes", caption: "Lash volume styling", image_url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80" },
  { category: "Hair Category 2", caption: "Elegant install", image_url: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80" },
  { category: "Nails", caption: "Pink manicure", image_url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80" },
  { category: "Make-Up", caption: "Bridal glam", image_url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80" },
  { category: "Hair Category 1", caption: "Silky braids", image_url: "https://images.unsplash.com/photo-1521590832167-7b6d26ee568c?auto=format&fit=crop&w=900&q=80" },
  { category: "Lashes", caption: "Classic lash set", image_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80" }
];

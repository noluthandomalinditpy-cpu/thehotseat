:root {
  --rose: #d81e75;
  --rose-deep: #8f1d52;
  --rose-soft: #f7dfe9;
  --blush: #f9f1f6;
  --pearl: #fff9fb;
  --champagne: #f4d8c4;
  --gold: #d9b08d;
  --ink: #3b1b2c;
  --muted: #704a5e;
  --line: rgba(143, 29, 82, 0.15);
  --shadow: 0 20px 40px rgba(96, 30, 60, 0.12);
  --max-width: 1180px;
}

* {
  box-sizing: border-box;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Jost", sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at top left, rgba(216, 30, 117, 0.12), transparent 28%),
    radial-gradient(circle at bottom right, rgba(244, 216, 196, 0.6), transparent 24%),
    linear-gradient(180deg, var(--blush), #fff);
  line-height: 1.7;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 15% 20%, rgba(255,255,255,0.9) 0 3%, transparent 5%),
    radial-gradient(circle at 75% 30%, rgba(255,255,255,0.9) 0 3%, transparent 5%),
    radial-gradient(circle at 40% 70%, rgba(255,255,255,0.9) 0 3%, transparent 5%),
    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.9) 0 3%, transparent 5%);
  opacity: 0.7;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
}

p {
  color: var(--muted);
}

h1,
h2,
h3 {
  font-family: "Cormorant Garamond", serif;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: var(--ink);
}

h1 {
  font-size: clamp(3rem, 6vw, 5.5rem);
}

h2 {
  font-size: clamp(2.2rem, 4vw, 3.4rem);
}

h3 {
  font-size: 2rem;
}

button,
input,
select,
textarea {
  font: inherit;
}

:focus-visible {
  outline: 3px solid var(--rose);
  outline-offset: 3px;
}

.wrap {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.25rem;
}

section {
  padding: clamp(4rem, 7vw, 6.5rem) 0;
}

.eyebrow {
  margin-bottom: 0.75rem;
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--rose);
}

.lead {
  max-width: 62ch;
  font-size: 1.08rem;
  margin-top: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0.85rem 1.7rem;
  border-radius: 999px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, var(--rose) 0%, var(--rose-deep) 100%);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 12px 24px rgba(164, 34, 92, 0.24);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 28px rgba(164, 34, 92, 0.28);
}

.btn-ghost {
  background: rgba(255,255,255,0.7);
  border-color: rgba(143, 29, 82, 0.18);
  color: var(--rose-deep);
  box-shadow: none;
}

header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 249, 251, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(143, 29, 82, 0.12);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
}

.logo {
  text-decoration: none;
  color: var(--rose-deep);
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  font-size: 2rem;
}

.logo small {
  font-family: "Jost", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

nav ul {
  display: flex;
  align-items: center;
  gap: 1.7rem;
  list-style: none;
}

nav a {
  text-decoration: none;
  color: var(--ink);
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

nav a:hover,
nav a[aria-current="page"] {
  color: var(--rose-deep);
  border-color: var(--rose);
}

.burger {
  display: none;
  background: none;
  border: 0;
  font-size: 2rem;
  color: var(--rose-deep);
  cursor: pointer;
}

.hero {
  position: relative;
  overflow: hidden;
  padding-top: clamp(4rem, 8vw, 7rem);
  padding-bottom: 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 2.5rem;
  align-items: center;
}

.hero-copy h1 span {
  color: var(--rose);
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.mini-trust {
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 2.2rem;
}

.mini-trust div {
  background: rgba(255,255,255,0.5);
  border: 1px solid rgba(143, 29, 82, 0.12);
  border-radius: 18px;
  padding: 1rem;
}

.mini-trust strong {
  display: block;
  font-size: clamp(1.4rem, 2vw, 2rem);
  color: var(--rose-deep);
}

.mini-trust span {
  color: var(--muted);
  font-size: 0.85rem;
}

.hero-visual {
  position: relative;
  display: grid;
  place-items: center;
}

.photo-frame {
  overflow: hidden;
  border-radius: 30% 30% 20% 20% / 24% 24% 18% 18%;
  box-shadow: var(--shadow);
  border: 8px solid rgba(255,255,255,0.8);
}

.photo-large {
  max-width: 500px;
  width: min(100%, 500px);
}

.photo-large img {
  width: 100%;
  height: 650px;
  object-fit: cover;
}

.floating-card {
  position: absolute;
  right: 1rem;
  bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(143, 29, 82, 0.12);
  border-radius: 18px;
  padding: 1rem 1.1rem;
  box-shadow: var(--shadow);
}

.floating-card span {
  display: block;
  color: var(--muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.floating-card strong {
  display: block;
  color: var(--rose-deep);
  font-size: 1.1rem;
}

.stats-bar {
  background: linear-gradient(135deg, var(--rose) 0%, var(--rose-deep) 100%);
  color: #fff;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  gap: 1rem;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.stats-grid b {
  display: block;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.2rem, 4vw, 4rem);
  color: #ffdfe9;
}

.stats-grid span {
  color: rgba(255,255,255,0.9);
  font-size: 0.9rem;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading.center {
  text-align: center;
}

.section-heading .lead {
  margin-left: auto;
  margin-right: auto;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
}

.service-card {
  display: block;
  background: rgba(255,255,255,0.72);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1.5rem 1.4rem;
  text-decoration: none;
  box-shadow: 0 12px 26px rgba(123, 43, 77, 0.05);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: rgba(143, 29, 82, 0.28);
}

.service-card .icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(216,30,117,0.12), rgba(244,216,196,0.8));
  color: var(--rose-deep);
  font-size: 1.4rem;
}

.service-card h3 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: var(--ink);
  font-size: 2rem;
}

.service-card p {
  margin: 0;
  color: var(--muted);
}

.static-card {
  background: rgba(255,255,255,0.8);
}

.three-up {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.feature-band {
  background: linear-gradient(135deg, rgba(247,223,233,0.7), rgba(255,255,255,0.75));
}

.feature-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2.5rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  display: grid;
  gap: 0.85rem;
}

.feature-list li {
  position: relative;
  padding-left: 1.6rem;
  color: var(--muted);
}

.feature-list li::before {
  content: "✦";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--rose);
}

.feature-gallery img {
  width: 100%;
  min-height: 420px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.gallery-preview {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.gallery-preview img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 18px 30px rgba(85, 36, 58, 0.08);
}

.cta-banner {
  padding-top: 0;
}

.banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 2.5rem;
  background: linear-gradient(135deg, rgba(216,30,117,0.08), rgba(244,216,196,0.5));
  border: 1px solid rgba(143, 29, 82, 0.14);
  border-radius: 28px;
}

.page-head {
  padding: 5rem 0 3rem;
  background: linear-gradient(135deg, rgba(244,216,196,0.6), rgba(247,223,233,0.85));
}

.about-grid,
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
}

.about-photo img,
.contact-info {
  border-radius: 26px;
  box-shadow: var(--shadow);
}

.about-photo img {
  width: 100%;
  height: 520px;
  object-fit: cover;
}

.contact-info {
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(143, 29, 82, 0.12);
  padding: 2rem;
}

.contact-info p {
  margin-top: 1.1rem;
}

.contact-info strong {
  color: var(--ink);
}

.contact-actions {
  margin-top: 1.8rem !important;
}

.booking-form,
.services-panel {
  background: rgba(255,255,255,0.82);
  border: 1px solid rgba(143, 29, 82, 0.14);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 18px 28px rgba(85, 36, 58, 0.07);
}

.booking-form {
  display: grid;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

label {
  display: grid;
  gap: 0.45rem;
  color: var(--ink);
  font-weight: 500;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.82rem 0.9rem;
  border-radius: 12px;
  background: rgba(255,255,255,0.82);
  border: 1px solid rgba(143, 29, 82, 0.18);
  color: var(--ink);
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.hp {
  position: absolute;
  left: -9999px;
}

.msg {
  display: none;
  margin-top: 0.25rem;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  font-weight: 500;
}

.msg.ok {
  display: block;
  background: rgba(91, 170, 116, 0.12);
  color: #215f35;
}

.msg.err {
  display: block;
  background: rgba(210, 86, 86, 0.12);
  color: #833b3b;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.tabs button {
  border: 1px solid rgba(143, 29, 82, 0.18);
  background: rgba(255,255,255,0.7);
  color: var(--ink);
  border-radius: 999px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-weight: 500;
}

.tabs button[aria-pressed="true"] {
  background: linear-gradient(135deg, var(--rose) 0%, var(--rose-deep) 100%);
  color: #fff;
  border-color: transparent;
}

.services-panel {
  display: grid;
  gap: 2rem;
}

.service-group h3 {
  color: var(--rose-deep);
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(143, 29, 82, 0.12);
}

.service-item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 0.9rem 0;
  border-bottom: 1px dashed rgba(143, 29, 82, 0.16);
}

.service-item strong {
  font-weight: 600;
  color: var(--ink);
}

.service-item span {
  color: var(--rose-deep);
  font-weight: 600;
  white-space: nowrap;
}

.inline-cta {
  margin-top: 2rem;
}

.gallery-grid {
  columns: 3 260px;
  column-gap: 1rem;
  margin-top: 1.5rem;
}

.gallery-tile {
  display: block;
  width: 100%;
  break-inside: avoid;
  background: rgba(255,255,255,0.8);
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 1rem;
  cursor: zoom-in;
  border: 1px solid rgba(143, 29, 82, 0.12);
}

.gallery-tile img {
  width: 100%;
  display: block;
  transition: transform 0.2s ease;
}

.gallery-tile:hover img {
  transform: scale(1.03);
}

.gallery-caption {
  padding: 0.8rem 0.9rem 1rem;
  font-weight: 500;
  color: var(--ink);
}

#lightbox {
  width: min(90vw, 900px);
  border: 0;
  border-radius: 20px;
  padding: 0;
  overflow: hidden;
  background: transparent;
}

#lightbox::backdrop {
  background: rgba(33, 17, 24, 0.8);
}

#lightbox img {
  width: 100%;
  max-height: 80vh;
  object-fit: cover;
}

footer {
  background: #2a1420;
  color: #efd9e4;
  padding: 3rem 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

footer h3 {
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

footer p,
footer a {
  color: rgba(255,255,255,0.76);
  text-decoration: none;
}

footer a:hover {
  color: #fff;
}

.copy {
  text-align: center;
  margin-top: 2rem;
  color: rgba(255,255,255,0.7);
  font-size: 0.88rem;
}

.wa {
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 60;
  width: 62px;
  height: 62px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #25d366;
  box-shadow: 0 16px 26px rgba(31, 87, 56, 0.25);
}

.wa svg {
  width: 30px;
  height: 30px;
  fill: #fff;
}

@media (max-width: 900px) {
  .hero-grid,
  .feature-layout,
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .gallery-preview {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .burger {
    display: block;
  }

  nav ul {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 76px;
    padding: 1rem 1.25rem 1.5rem;
    background: rgba(255,249,251,0.96);
    border-bottom: 1px solid rgba(143, 29, 82, 0.08);
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  nav ul.open {
    display: flex;
  }

  .stats-grid,
  .form-row,
  .mini-trust {
    grid-template-columns: 1fr 1fr;
  }

  .banner-content {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 520px) {
  .stats-grid,
  .form-row,
  .mini-trust,
  .gallery-preview {
    grid-template-columns: 1fr;
  }

  .photo-large img {
    height: 460px;
  }

  .nav {
    min-height: 70px;
  }

  .logo {
    font-size: 1.7rem;
  }

  .contact-info,
  .booking-form,
  .services-panel {
    padding: 1.2rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto !important;
    transition: none !important;
  }
}

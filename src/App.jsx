import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/bwr-logo.png";
import bbb from "./assets/bbb.png";
import tamko from "./assets/tamko.png";
import satisfaction from "./assets/satisfaction.png";
import crewDormers from "./assets/crew-dormers.jpg";
import colonial from "./assets/finished-colonial.jpg";
import tearOff from "./assets/tear-off.jpg";
import skylightCrew from "./assets/skylight-crew.jpg";
import brickReroof from "./assets/brick-reroof.jpg";
import workTruck from "./assets/work-truck.jpg";
import dumpTrailer from "./assets/dump-trailer.jpg";
import cape from "./assets/finished-cape.jpg";
import fascia from "./assets/rotted-fascia.jpg";
import newShingles from "./assets/new-shingles.jpg";
import decking from "./assets/decking.jpg";
import pipeBoot from "./assets/pipe-boot.jpg";
import cupola from "./assets/cupola.jpg";
import gutterAfter from "./assets/gutter-after.jpg";
import billWhite from "./assets/bill-white.jpg";
import steveCrew from "./assets/steve-crew.jpg";
import crew1984 from "./assets/crew-1984.jpg";
import brickHouse from "./assets/brick-house.jpg";

// ------------------------------------------------------------ Content (from bwroof.com: home, about, services, gutters, skylights, commercial, FAQ, contact)
const COMPANY = "Bill White Roofing & Specialty Co., Inc.";
const ABBR = "bwr";
const END_DATE = "2026-11-30T23:59:59-06:00";
const ORIGINAL = "https://www.bwroof.com/";

const PHONE = "(205) 942-8374";
const PHONE_TEL = "+12059428374";
const EMAIL = "info@bwroof.com";
const LOCATION = "Bessemer, AL 35022";
const GOOGLE_URL = "https://g.co/kgs/a8hTTf7";
const HOURS = [["Mon – Fri", "7:30 am – 5:00 pm"], ["Sat – Sun", "By appointment"]];

const NAV = [
  ["Services", "#services"],
  ["Our Story", "#story"],
  ["Reviews", "#reviews"],
  ["Areas", "#areas"],
  ["Contact", "#contact"],
];

const CRAFT = [
  ["Hand-nailed", "We hand nail everything. Nail guns are faster, but there is no substitute for the quality of hand nailing."],
  ["Every board checked", "We strip the old shingles, inspect the decking, replace soft or rotted wood and re-secure it to the rafters."],
  ["Steve on every job", "Owner Steve White, son of founder Bill White, is on site for each and every project."],
  ["Cleaned up daily", "Tarps and plywood protect your siding and plants, and we clean up thoroughly each day."],
];

const SERVICES = [
  {
    title: "Roof Repair",
    img: pipeBoot,
    alt: "Roofer sealing a pipe boot on an asphalt shingle roof",
    text: "Leaks, storm damage, missing or curling shingles, flashing, fascia and soffits. Small repairs are best done before they become big ones.",
    items: ["Leak & emergency repairs", "Shingle repair", "Flashing, fascia & soffits"],
  },
  {
    title: "Roof Replacement",
    img: tearOff,
    alt: "Bill White Roofing crew tearing off an old roof on a two-story home",
    text: "We never recommend a full re-roof unless it is necessary. When it is, we never place shingles over bad plywood.",
    items: ["Full tear-off or re-roof", "Decking inspection & replacement", "New roof installation"],
  },
  {
    title: "Gutters & Guards",
    img: gutterAfter,
    alt: "Repaired roof edge with new gutters and micromesh gutter guards",
    text: "Your gutters and roof work together. We repair and replace gutters and recommend micromesh guards that keep out even fine debris.",
    items: ["Gutter repair & replacement", "Micromesh gutter guards", "Downspouts"],
  },
  {
    title: "Commercial Roofing",
    img: brickReroof,
    alt: "Crew re-roofing a brick building",
    text: "For small and medium-sized businesses: new construction, re-roofing, repairs and maintenance, so you can keep running.",
    items: ["Inspections & maintenance programs", "Repair & replacement", "Waterproofing"],
  },
  {
    title: "Skylights",
    img: skylightCrew,
    alt: "Two roofers working around a skylight",
    text: "New skylight installation to brighten a room or add ventilation, plus repairs to leaking or cracked skylights.",
    items: ["Installation, free estimates", "Re-seal & re-slope", "Glass, frame & weatherstripping"],
  },
  {
    title: "Free Roof Inspection",
    img: cupola,
    alt: "Roofer next to a copper cupola on a shingle roof",
    text: "Not sure your roof needs work? We'll inspect it for free and walk you through what we find, repair or replace.",
    items: ["Whole-roof inspection", "Honest repair-vs-replace advice", "Detailed estimate"],
  },
];

const SIGNS = [
  ["Stains on ceilings or walls", "Discoloration inside is a sign the roof needs attention."],
  ["Leaks in the attic", "Check the attic after a rainstorm."],
  ["Sagging roof deck", "Decking or rafters bowing down may be wet from a leak."],
  ["Daylight in the attic", "If light gets in, water can too."],
  ["Curled, cracked or missing shingles", "Shingles at the end of their life."],
  ["Dark, dirty or wet shingles", "Trapped moisture points to a deeper problem."],
  ["Black sand in the gutters", "Worn shingles shed their granules."],
  ["Peeling paint near the roofline", "Often poor attic ventilation."],
  ["Wear around chimneys, vents & pipes", "These areas usually fail first, and can often be repaired on their own."],
];

const PROCESS = [
  ["Protect", "Tarps and protective plywood cover siding, walls and plants."],
  ["Strip", "All old shingles come off so we can see the whole deck."],
  ["Inspect the deck", "Soft, wet or rotting wood is found and replaced."],
  ["Re-secure", "Decking is fastened to the rafters and missing nails replaced."],
  ["Install", "Your choice of roofing material, hand nailed."],
  ["Final inspection", "A thorough check that every detail was done right."],
];

const STORY = [
  ["1969", "Founded in Bluff Park", "Bill White starts the company out of his home in Bluff Park. He loved meeting and talking with people, and great customer service became the foundation of the business.", billWhite, "Founder Bill White"],
  ["1984", "Up on the roofs", "Bill worked six days a week and was up on the roofs with his crew.", crew1984, "Bill White with his original roofing crew in 1984"],
  ["2013", "Steve takes over", "When Bill fell ill in 2013, his son Steve took over the company and has continued his father's legacy to this day.", steveCrew, "Steve White, son of Bill, with the roofing crew"],
];

const CREDENTIALS = [
  "Licensed with the Alabama Home Builders Licensure Board",
  "Licensed with the Alabama State Licensing Board for General Contractors",
  "Member, Subcontractors Association of Alabama",
  "Member, Greater Birmingham Association of Home Builders",
];

// Verbatim from the Customer Reviews section of bwroof.com.
const REVIEWS = [
  ["Bill White Roofing is the company to use. Steve White and his crew are very detailed in their work and are concerned with doing the job correctly at a fair price. They were easy to deal with and made it a hassle free process. Great roofing company.", "Ted C"],
  ["Mr. White repaired a damaged area on my porch roof. His crew arrived when they said they would be there. Mr. [W]hite checked in several times to supervise the repair, and everything was cleaned up when they left. I was very pleased with the work and would use this roofing company again.", "Dianne B"],
  ["Easy to work with as far as explaining priorities of necessary repairs. Very good pricing. My wife loved that they cleaned up so well she was not sure they had been there yet.", "John G"],
  ["I was selling my home in Haddon (Ross Bridge) and needed to get some repairs done. Steve gave the most competitive price, and he (along with 2 workers) did an excellent job. Steve also took care of a couple other things to boot!", "Paul J"],
  ["Bill White Roofing is the company that fixed the roof at my apartment. Steve White arrived personally to inspect and repair the damage. It was the Saturday before Thanksgiving this year. He fixed the problem that was causing water to drip into our child's bedroom. Speaking with Steve afterwards, I am confident that he performs confident work and is a man of his word.", "Mark R"],
  ["Great service and fair price for repairs to my storm damaged roof. Really top notch folks!", "James H"],
];

const AREAS = ["Birmingham", "Bessemer", "Hoover", "Homewood", "Vestavia Hills", "Mountain Brook", "Pelham", "Alabaster", "Helena", "McCalla", "Trussville", "Leeds"];

const FAQS = [
  ["How long does a new roof last?", "Most quality roof replacements last 20–30 years depending on materials and maintenance. A properly installed asphalt shingle roof lasts about 20–25 years, less with frequent severe weather."],
  ["Should I repair or replace?", "Consider replacement if your roof is over 20 years old, has widespread damage, or needs frequent repairs. We never recommend a full re-roof unless it is necessary, and we'll walk you through our findings either way."],
  ["How often should my roof be inspected?", "Have it inspected regularly and after severe weather. Catching small issues early keeps them from becoming costly repairs. Our inspections are free."],
  ["What roofing materials work best in Alabama?", "Asphalt shingles and metal roofing perform well in Alabama's heat, humidity and storms while providing good value."],
  ["Do you do commercial roofs?", "Yes. We handle inspections, maintenance programs, repairs, replacement and waterproofing for small and medium-sized businesses."],
  ["What affects the cost of a repair?", "The extent of the damage, materials needed, how accessible the roof is, and labor. Minor repairs cost less than structural work or full sections."],
];

const GALLERY = [
  [colonial, "Finished roof on a white colonial with dormers"],
  [workTruck, "Bill White Roofing work truck loaded for a job"],
  [cape, "Finished roof on a Cape Cod style home"],
  [dumpTrailer, "Crew loading a dump trailer during a tear-off"],
  [newShingles, "New architectural shingles"],
  [brickHouse, "Brick home with a new gray roof"],
];

// ------------------------------------------------------------ Components
function Nails({ light }) {
  return <div className={`nails${light ? " light" : ""}`} aria-hidden="true">{Array.from({ length: 9 }, (_, i) => <span key={i} />)}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap header-row">
        <a className="brand" href="#top" aria-label={`${COMPANY} home`}>
          <img src={logo} alt="Bill White Roofing & Specialty Co., Inc. · Your Roof is Our Roof" />
        </a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="nav-call" href={`tel:${PHONE_TEL}`}><Phone size={17} /> {PHONE}</a>
        </nav>
        <button type="button" className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Family-owned roofers · Birmingham since 1969</p>
          <h1>Your roof is <span className="script">our roof.</span></h1>
          <p className="hero-sub">Roof repair, replacement, gutters and skylights across the Birmingham area, hand nailed by a crew led by Steve White, son of founder Bill White.</p>
          <div className="hero-actions">
            <a className="btn btn-red" href={`tel:${PHONE_TEL}`}><Phone size={19} /> Call {PHONE}</a>
            <a className="btn btn-line" href="#contact">Free roof inspection <ArrowRight size={18} /></a>
          </div>
          <div className="hero-badges">
            <a href="https://www.bbb.org/search?find_text=Bill%20White%20Roofing%20%26%20Specialty&find_loc=Bessemer%2C%20AL" target="_blank" rel="noopener noreferrer"><img src={bbb} alt="BBB Accredited Business, A+ rating" /></a>
            <img src={tamko} alt="TAMKO Pro Certified Contractor" />
            <img src={satisfaction} alt="Satisfaction guaranteed" />
          </div>
        </div>
        <div className="hero-visual">
          <div className="gable">
            <img src={crewDormers} alt="Bill White Roofing crew replacing a roof on a home with dormers" />
          </div>
          <div className="ridge-tag"><strong>1969</strong><span>Est. in Bluff Park</span></div>
          <div className="hours-card">
            <Clock size={18} />
            <div><strong>Mon–Fri 7:30–5:00</strong><span>Weekends by appointment</span></div>
          </div>
        </div>
      </div>
      <div className="shingle-band" aria-hidden="true" />
    </section>
  );
}

function Craft() {
  return (
    <section className="craft">
      <div className="wrap">
        <div className="craft-grid">
          {CRAFT.map(([t, d]) => (
            <div key={t} className="craft-item">
              <span className="nailhead" aria-hidden="true" />
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">What we do</p>
          <h2>Every part of the roof, <span className="script">done right.</span></h2>
          <p className="lead">Residential and commercial roofing for Birmingham and the Over the Mountain area. One call and roofing is off your list.</p>
        </div>
        <div className="service-grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="service">
              <div className="service-img"><img src={s.img} alt={s.alt} loading="lazy" /></div>
              <div className="service-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>{s.items.map((i) => <li key={i}><Check size={15} /> {i}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Signs() {
  const [checked, setChecked] = useState([]);
  const toggle = (i) => setChecked((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]));
  return (
    <section className="section signs">
      <div className="wrap signs-grid">
        <div className="signs-side">
          <p className="eyebrow light">Roof check</p>
          <h2>Do you need <span className="script">a roofer?</span></h2>
          <p>You might not realize your roof needs repair until there are buckets on the floor. Tap anything you've noticed. (Please don't climb up there yourself.)</p>
          <div className={`signs-result${checked.length ? " is-on" : ""}`} aria-live="polite">
            {checked.length === 0 ? (
              <span>Nothing checked yet.</span>
            ) : (
              <>
                <strong>{checked.length} {checked.length === 1 ? "sign" : "signs"} noticed.</strong>
                <span>Call for a free inspection so we can find the cause.</span>
                <a className="btn btn-red" href={`tel:${PHONE_TEL}`}><Phone size={18} /> {PHONE}</a>
              </>
            )}
          </div>
        </div>
        <ul className="sign-list">
          {SIGNS.map(([t, d], i) => (
            <li key={t}>
              <button type="button" className={checked.includes(i) ? "is-checked" : ""} onClick={() => toggle(i)} aria-pressed={checked.includes(i)}>
                <span className="box">{checked.includes(i) && <Check size={16} />}</span>
                <span><strong>{t}</strong><small>{d}</small></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process">
      <div className="wrap process-grid">
        <div className="process-copy">
          <p className="eyebrow">A new roof, from the rafters up</p>
          <h2>Six courses <span className="script">to a solid roof.</span></h2>
          <p className="lead">We never place shingles over bad plywood. Before the new roof goes on, the deck under it has to be right.</p>
          <img className="process-img" src={decking} alt="New decking boards being laid on a roof" loading="lazy" />
        </div>
        <ol className="courses">
          {PROCESS.map(([t, d], i) => (
            <li key={t} style={{ "--i": i }}>
              <span className="course-num">{i + 1}</span>
              <div><h3>{t}</h3><p>{d}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="section story" id="story">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Our story</p>
          <h2>Two generations <span className="script">of White roofers.</span></h2>
          <p className="lead">We started in Bluff Park and our office is just outside the Hoover city limits, so we consider the Over the Mountain area home.</p>
        </div>
        <div className="timeline">
          {STORY.map(([year, title, text, img, alt]) => (
            <article key={year} className="moment">
              <div className="moment-img"><img src={img} alt={alt} loading="lazy" /></div>
              <span className="moment-year">{year}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
          <article className="moment moment-today">
            <span className="moment-year">Today</span>
            <h3>Still on the roof</h3>
            <p>“Your roof is our roof.” We treat every home and business as if it were our own, and we're grateful for every customer, no matter the size of the project.</p>
            <a className="btn btn-red" href={`tel:${PHONE_TEL}`}><Phone size={18} /> {PHONE}</a>
          </article>
        </div>
        <div className="creds">
          <div className="cred-badges">
            <img src={bbb} alt="BBB Accredited Business, A+ rating" loading="lazy" />
            <img src={tamko} alt="TAMKO Pro Certified Contractor" loading="lazy" />
            <img src={satisfaction} alt="Satisfaction guaranteed" loading="lazy" />
          </div>
          <ul>{CREDENTIALS.map((c) => <li key={c}><Check size={16} /> {c}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="eyebrow light">Customer reviews</p>
            <h2>Neighbors, <span className="script">in their words.</span></h2>
          </div>
          <a className="btn btn-line light" href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">Read & leave reviews on Google <ArrowUpRight size={17} /></a>
        </div>
        <div className="review-grid">
          {REVIEWS.map(([t, n]) => (
            <figure key={n} className="review">
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>“{t}”</blockquote>
              <figcaption>{n}</figcaption>
            </figure>
          ))}
        </div>
        <p className="source">Quoted word for word from the Customer Reviews section of bwroof.com.</p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery" aria-label="Recent work">
      {GALLERY.map(([img, alt]) => <figure key={alt}><img src={img} alt={alt} loading="lazy" /></figure>)}
    </section>
  );
}

function Areas() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section areas" id="areas">
      <div className="wrap areas-grid">
        <div>
          <p className="eyebrow">Where we work</p>
          <h2>Birmingham & <span className="script">Over the Mountain.</span></h2>
          <ul className="area-list">{AREAS.map((a) => <li key={a}><MapPin size={14} /> {a}</li>)}</ul>
          <img className="areas-img" src={fascia} alt="Rotted fascia board found and repaired during a roof job" loading="lazy" />
        </div>
        <div>
          <p className="eyebrow">Common questions</p>
          <div className="faq">
            {FAQS.map(([q, a], i) => (
              <div key={q} className={`faq-item${open === i ? " is-open" : ""}`}>
                <button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  {q} <ChevronDown size={20} />
                </button>
                {open === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ sector: "Residential", service: "", name: "", phone: "", email: "", address: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "Please call us instead.");
      setStatus("sent");
      setMessage(data.demo ? "Thanks! This is a concept preview, so nothing was sent. Please call us at " + PHONE + "." : "Thanks! We'll be in touch shortly to set up your inspection.");
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <p className="eyebrow light">Free roof inspection</p>
          <h2>Let's take a look <span className="script">at your roof.</span></h2>
          <a className="big-phone" href={`tel:${PHONE_TEL}`}><Phone size={30} /> {PHONE}</a>
          <ul className="contact-list">
            <li><Mail size={18} /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><MapPin size={18} /> {LOCATION}</li>
          </ul>
          <table className="hours">
            <tbody>{HOURS.map(([d, h]) => <tr key={d}><th>{d}</th><td>{h}</td></tr>)}</tbody>
          </table>
          <Nails light />
        </div>
        <form className="quote-form" onSubmit={submit}>
          {status === "sent" ? <p className="form-done" role="status">{message}</p> : (
            <>
              <fieldset className="sector">
                <legend>Job sector</legend>
                {["Residential", "Commercial"].map((s) => (
                  <label key={s} className={form.sector === s ? "is-on" : ""}><input type="radio" name="sector" value={s} checked={form.sector === s} onChange={() => update("sector", s)} /> {s}</label>
                ))}
              </fieldset>
              <label>Service needed
                <select value={form.service} onChange={(e) => update("service", e.target.value)}>
                  <option value="">Choose one</option>
                  <option>Roof repair</option>
                  <option>Roof replacement</option>
                  <option>Roof inspection</option>
                  <option>Gutters</option>
                  <option>Skylight</option>
                  <option>Other</option>
                </select>
              </label>
              <div className="row">
                <label>Name *<input required value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label>
                <label>Phone *<input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" /></label>
              </div>
              <div className="row">
                <label>Email<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>
                <label>Property address<input value={form.address} onChange={(e) => update("address", e.target.value)} autoComplete="street-address" /></label>
              </div>
              <label>What's going on?<textarea rows={4} value={form.notes} onChange={(e) => update("notes", e.target.value)} /></label>
              <div className="hp" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} /></label></div>
              {status === "error" && <p className="form-error" role="alert">{message}</p>}
              <button className="btn btn-red" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Request my free inspection"} <ArrowRight size={18} /></button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shingle-band dark" aria-hidden="true" />
      <div className="wrap footer-grid">
        <div>
          <div className="footer-logo"><img src={logo} alt={COMPANY} loading="lazy" /></div>
          <p>Family owned and operated since 1969. Roof repair, replacement, gutters, skylights and commercial roofing for the Birmingham area.</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>{SERVICES.map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}</ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />{LOCATION}</p>
          <p>Mon–Fri 7:30 am–5:00 pm<br />Sat–Sun by appointment</p>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {COMPANY}. Concept redesign by Blueprint WebStudio · Independent concept · not for official use. Current site: <a href={ORIGINAL}>bwroof.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-row">
          <span>Free roof inspections · BBB A+ · Since 1969</span>
          <a href={`tel:${PHONE_TEL}`}><Phone size={14} /> Call {PHONE}</a>
        </div>
      </div>
      <Header />
      <main>
        <Hero />
        <Craft />
        <Services />
        <Signs />
        <Process />
        <Story />
        <Reviews />
        <Gallery />
        <Areas />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}

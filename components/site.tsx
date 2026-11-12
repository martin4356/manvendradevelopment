"use client";

import { useState } from "react";
import {
  ArrowUpRight, Menu, X, Code2, Smartphone, Palette, Search,
  Megaphone, MousePointer2, Layers3, Sparkles, Check, Mail,
  MapPin, ArrowRight, MoveUpRight, Instagram, Facebook, Linkedin
} from "lucide-react";

const services = [
  { n: "01", icon: Code2, title: "Website Design & Development", text: "Responsive, fast and easy-to-manage websites built around your business goals." },
  { n: "02", icon: Smartphone, title: "Mobile App Development", text: "Practical mobile experiences that help your customers connect with your business." },
  { n: "03", icon: Palette, title: "Graphic Design", text: "Distinctive logos, banners, business cards and creative assets for your brand." },
  { n: "04", icon: Search, title: "SEO Services", text: "Improve your search visibility with thoughtful on-page and technical SEO." },
  { n: "05", icon: Megaphone, title: "PPC & Digital Marketing", text: "Focused campaigns designed to reach the right audience and generate enquiries." },
  { n: "06", icon: MousePointer2, title: "Social Media Marketing", text: "Consistent social content and campaigns that keep your brand in the conversation." }
];

const capabilities = [
  { title: "Web experiences", tag: "DESIGN + DEVELOPMENT", text: "Business websites, landing pages, e-commerce and custom web applications.", number: "01" },
  { title: "Brand identity", tag: "VISUAL COMMUNICATION", text: "Logo systems, marketing graphics and digital assets with a clear point of view.", number: "02" },
  { title: "Digital growth", tag: "VISIBILITY + PERFORMANCE", text: "SEO, paid campaigns and social media support to help your business grow online.", number: "03" }
];

export default function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const service = String(form.get("service") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject details:\n${message}`);
    window.location.href = `mailto:manvendradevelopment@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" /> DIGITAL IDEAS. REAL-WORLD IMPACT.
        <span className="announcement-right">ASHOKNAGAR · MADHYA PRADESH</span>
      </div>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Manvendra Development home">
          <span className="brand-mark">MD<span>.</span></span>
          <span className="brand-name">MANVENDRA <b>DEVELOPMENT</b></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {[["Home","#home"],["About","#about"],["Services","#services"],["Work","#work"],["Contact","#contact"]].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a project <ArrowUpRight size={16}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> INDEPENDENT DIGITAL STUDIO</div>
            <h1>Make your<br/>next move <span className="text-gradient">digital.</span></h1>
            <p className="hero-lead">We build thoughtful websites, useful applications and memorable brands that move businesses forward.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let’s talk about your project <ArrowUpRight size={18}/></a>
              <a className="text-link" href="#services">Explore services <ArrowRight size={16}/></a>
            </div>
            <div className="hero-proof">
              <div className="proof-symbol"><Sparkles size={17}/></div>
              <div><strong>18+ years</strong><span>of website design & development experience</span></div>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract creative digital artwork">
            <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
            <div className="art-grid"/>
            <div className="art-card card-top"><span className="card-kicker">IDEAS INTO</span><strong>IMPACT<span>↗</span></strong><i>Digital, made meaningful.</i></div>
            <div className="art-sphere"><div className="sphere-inner"/><span>MD</span></div>
            <div className="art-card card-bottom"><span className="mini-dot"/> DESIGN <b>×</b> TECHNOLOGY <b>×</b> GROWTH</div>
            <div className="art-sticker">BUILD<br/>WHAT’S<br/>NEXT <ArrowUpRight size={20}/></div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/></div>
        </section>

        <section className="ticker" aria-label="Our services">
          <div className="ticker-track">
            {Array.from({length: 2}).map((_, i) => <div className="ticker-set" key={i}>
              {["WEB DEVELOPMENT","MOBILE APPS","BRAND DESIGN","SEO","DIGITAL MARKETING"].map((item) => <span key={item}>{item}<i>✳</i></span>)}
            </div>)}
          </div>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-label"><span>01 / ABOUT US</span><span>BUILT ON EXPERIENCE</span></div>
          <div className="about-grid">
            <h2>Good work starts<br/>with <span className="text-gradient">good thinking.</span></h2>
            <div className="about-copy">
              <p className="large-copy">Manvendra Development brings design, technology and digital strategy together to help businesses build a stronger presence online.</p>
              <p>With 18+ years of experience in website design and development, we focus on clear communication, practical solutions and dependable support — from the first idea to launch and beyond.</p>
              <a className="text-link dark-link" href="#contact">Get to know us <ArrowUpRight size={16}/></a>
            </div>
          </div>
          <div className="stats-row">
            <div><strong>18<span>+</span></strong><small>YEARS OF EXPERIENCE</small></div>
            <div><strong>360<span>°</span></strong><small>CREATIVE + DIGITAL THINKING</small></div>
            <div><strong>1<span>×</span></strong><small>FOCUSED PARTNER FOR YOUR PROJECT</small></div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-wrap">
            <div className="section-label"><span>02 / WHAT WE DO</span><span>IDEAS, BUILT WITH PURPOSE</span></div>
            <div className="section-heading">
              <h2>Creative services.<br/><span className="text-gradient">Practical solutions.</span></h2>
              <p>Everything you need to shape your online presence, connect with customers and keep moving forward.</p>
            </div>
            <div className="service-grid">
              {services.map(({n, icon: Icon, title, text}) => <article className="service-card" key={n}>
                <div className="service-top"><span>{n}</span><Icon size={25} strokeWidth={1.5}/></div>
                <h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Enquire about ${title}`}><ArrowUpRight size={19}/></a>
              </article>)}
            </div>
          </div>
        </section>

        <section className="work section-wrap section-pad" id="work">
          <div className="section-label"><span>03 / OUR APPROACH</span><span>THOUGHTFUL FROM START TO FINISH</span></div>
          <div className="section-heading work-heading">
            <h2>From first thought<br/>to <span className="text-gradient">finished work.</span></h2>
            <p>Every project is different. Our process keeps the important things clear: your goals, your audience and the result you need.</p>
          </div>
          <div className="capability-list">
            {capabilities.map((item) => <article className="capability" key={item.number}>
              <span className="cap-number">{item.number}</span>
              <div className="cap-main"><small>{item.tag}</small><h3>{item.title}</h3></div>
              <p>{item.text}</p><ArrowUpRight className="cap-arrow" size={22}/>
            </article>)}
          </div>
          <div className="work-note"><Layers3 size={18}/><span>Have a project in mind? Let’s shape the right solution together.</span><a href="#contact">Tell us about it <ArrowUpRight size={16}/></a></div>
        </section>

        <section className="learning">
          <div className="section-wrap learning-inner">
            <div><div className="eyebrow"><span className="eyebrow-line"/> LEARN WITH US</div><h2>Build your skills.<br/><span className="text-gradient">Build your future.</span></h2></div>
            <div className="learning-copy"><p>Looking to learn practical digital skills? We also offer online classes with flexible morning, evening and weekend batches.</p><div className="class-price"><strong>₹1,000*</strong><span>/ month<br/>*Starting fee; confirm course details with us.</span></div><a className="button button-outline" href="#contact">Ask about classes <ArrowUpRight size={17}/></a></div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="section-wrap">
            <div className="section-label"><span>04 / GET IN TOUCH</span><span>LET’S MAKE SOMETHING GOOD</span></div>
            <div className="contact-grid">
              <div className="contact-intro"><h2>Have an idea?<br/><span className="text-gradient">Let’s build it.</span></h2><p>Tell us a little about what you’re looking to create. We’ll get back to you to discuss the next steps.</p>
                <div className="contact-detail"><Mail size={18}/><a href="mailto:manvendradevelopment@gmail.com">manvendradevelopment@gmail.com</a></div>
                <div className="contact-detail"><MapPin size={18}/><span>Guna Road, Near Raj Laxmi Residency,<br/>Ashoknagar, Madhya Pradesh, India</span></div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row"><label>Your name<input name="name" required placeholder="Name"/></label><label>Email address<input name="email" type="email" required placeholder="you@example.com"/></label></div>
                <label>What do you need?
                  <select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Website Design & Development</option><option>Mobile App Development</option><option>Graphic Design</option><option>SEO Services</option><option>PPC / Digital Marketing</option><option>Online Classes</option><option>Something else</option></select>
                </label>
                <label>Tell us about your project<textarea name="message" rows={4} required placeholder="A few details about your idea, goals or timeline..."/></label>
                <button className="button button-primary submit-button" type="submit">Send enquiry <ArrowUpRight size={18}/></button>
                {sent && <p className="form-note">Your email app should open with your enquiry. If it doesn’t, email us directly at manvendradevelopment@gmail.com.</p>}
                <p className="form-note">This form opens your email application; it does not store submissions on this website.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-top">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">MD<span>.</span></span><span className="brand-name">MANVENDRA <b>DEVELOPMENT</b></span></a>
          <p>Professional development<br/>with flexible pricing.</p>
          <a className="back-top" href="#home">BACK TO TOP <MoveUpRight size={16}/></a>
        </div>
        <div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} Manvendra Development. All rights reserved.</span><span>MADE WITH PURPOSE <i>✳</i></span><span>ASHOKNAGAR, INDIA</span></div>
      </footer>
    </>
  );
}

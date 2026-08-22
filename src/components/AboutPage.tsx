import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import {
  ArrowRight, BarChart3, Check, Globe2, Handshake, Instagram, Leaf, Linkedin,
  Mail, Menu, Phone, Search, ShieldCheck, Sparkles, X, Youtube,
} from 'lucide-react';

import heroImage from '@/assets/about-hero.jpg';
import partnershipImage from '@/assets/about-partnership.jpg';
import defenseImage from '@/assets/about-defense.jpg';
import energyImage from '@/assets/about-energy.jpg';
import oilGasImage from '@/assets/about-oilgas.jpg';

const navItems = [
  { label: 'Home', to: '/', hash: 'home' },
  { label: 'About', to: '/about', hash: undefined },
  { label: 'Services', to: '/', hash: 'services' },
  { label: 'Contact', to: '/', hash: 'contact' },
] as const;

const valueCards = [
  { icon: ShieldCheck, title: 'Integrity', text: 'We believe that sustainable business relationships are built on integrity, transparency, and respect for applicable laws and regulations.' },
  { icon: Handshake, title: 'Partnership', text: 'We seek long-term partnerships that create value for all parties.' },
  { icon: BarChart3, title: 'Professionalism', text: 'We work with qualified partners and approach every opportunity with professionalism, careful evaluation, and clear objectives.' },
  { icon: Sparkles, title: 'Innovation', text: 'We seek to introduce advanced technologies and innovative solutions to the Iraqi market.' },
  { icon: Leaf, title: 'Sustainability', text: 'We support projects capable of generating long-term economic, industrial, and environmental value.' },
];

const defenseAreas = [
  'Counter-UAS / Anti-Drone Systems', 'Surveillance & Detection', 'Critical Infrastructure Protection',
  'Security Technologies', 'Defense Equipment', 'Military Transport Solutions', 'Technical Support & Maintenance',
];

const energyAreas = [
  'Solar Power Plants', 'Solar Energy Systems', 'Energy Storage', 'Hybrid Energy Systems',
  'Waste-to-Energy', 'Industrial Renewable Energy', 'Energy Efficiency', 'Sustainable Infrastructure',
];

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return <div className={`brand ${compact ? 'brand-compact' : ''}`}><div className="brand-mark"><span>K</span><i /></div><div><strong>كوديا المستقبل</strong><small>KODIA AL-MUSTAQBAL</small></div></div>;
}

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = navItems.map(({ label, to, hash }) => (
    <Link key={label} to={to} {...(hash ? { hash } : {})} onClick={() => setMenuOpen(false)}>{label}</Link>
  ));

  return (
    <div className="app about-page">
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <Link className="logo-link" to="/"><Brand /></Link>
        <nav className={menuOpen ? 'nav-open' : ''}>{navLinks}</nav>
        <div className="nav-actions">
          <button className="icon-button" aria-label="Search"><Search size={18} /></button>
          <span className="nav-divider" />
          <Link className="nav-cta" to="/" hash="contact">Contact Us <ArrowRight size={14} /></Link>
        </div>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="about-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(2, 24, 51, .96) 8%, rgba(2, 24, 51, .74) 45%, rgba(2, 24, 51, .3) 100%), url(${heroImage})` }}>
          <div className="about-hero-content">
            <p className="eyebrow">About Kodia</p>
            <h1>Connecting Iraq with<br /><em>international expertise.</em></h1>
            <p className="about-hero-copy">
              An Iraqi company building strategic commercial, industrial, investment, and technology
              partnerships between Iraq and international markets.
            </p>
            <div className="button-row">
              <Link className="button button-gold" to="/" hash="contact">Contact Us <ArrowRight size={16} /></Link>
              <Link className="button button-outline" to="/" hash="services">Our Services</Link>
            </div>
          </div>
        </section>

        <section className="about-split section-pad">
          <Reveal className="about-split-copy">
            <p className="eyebrow">01 — Who We Are</p>
            <h2>Partnerships built between Iraq and the world.</h2>
            <p>
              Kodia is an Iraqi company established to develop strategic commercial, industrial,
              investment, and technology partnerships between Iraq and international markets.
            </p>
            <p>
              We work to identify opportunities for cooperation between reputable international companies
              and the Iraqi market and transform these opportunities into practical and sustainable projects.
            </p>
            <p>
              Our activities focus on strategically important sectors of the Iraqi economy, with particular
              emphasis on defense and security, clean energy, oil &amp; gas, industrial development, and real estate.
            </p>
          </Reveal>
          <Reveal className="about-split-media" delay={120}>
            <img src={partnershipImage} alt="International business partners meeting in a modern boardroom" loading="lazy" width={1408} height={1008} />
          </Reveal>
        </section>

        <section className="vision-mission section-pad">
          <Reveal className="vm-card">
            <span className="vm-index">02</span>
            <h3>Our Vision</h3>
            <p>
              To become a leading Iraqi platform for international industrial partnerships, advanced
              technologies, sustainable energy, and strategic investment.
            </p>
          </Reveal>
          <Reveal className="vm-card vm-card-gold" delay={110}>
            <span className="vm-index">03</span>
            <h3>Our Mission</h3>
            <p>
              To connect international expertise and technology with real opportunities in Iraq and build
              long-term partnerships that create economic, industrial, and sustainable value.
            </p>
          </Reveal>
        </section>

        <section className="about-values section-pad">
          <Reveal className="about-section-head">
            <p className="eyebrow">04 — Our Values</p>
            <h2>The principles behind every partnership.</h2>
          </Reveal>
          <div className="about-values-grid">
            {valueCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 70}>
                  <article className="about-value-card">
                    <div className="about-value-icon"><Icon size={19} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="sector sector-dark">
          <Reveal className="sector-media">
            <img src={defenseImage} alt="Radar and surveillance systems protecting critical infrastructure" loading="lazy" width={1408} height={1008} />
          </Reveal>
          <Reveal className="sector-copy" delay={100}>
            <p className="eyebrow">05 — Defense &amp; Security</p>
            <h2>Defense &amp; Security Solutions</h2>
            <p>
              Kodia develops cooperation with qualified international manufacturers and technology providers
              in the defense and security sectors.
            </p>
            <p>
              We seek to introduce appropriate technologies and solutions to the Iraqi market through
              professional, transparent, and officially compliant channels.
            </p>
            <h4>Areas of Interest</h4>
            <ul className="sector-list">
              {defenseAreas.map((area) => <li key={area}><Check size={14} />{area}</li>)}
            </ul>
            <div className="sector-note">
              <h4>Our Approach</h4>
              <p>
                Kodia works with qualified international companies to identify suitable solutions for the
                requirements of Iraqi government and security institutions. All defense and security-related
                cooperation is conducted subject to applicable Iraqi laws, regulations, licensing requirements,
                and official procurement procedures.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="sector sector-light sector-reverse">
          <Reveal className="sector-media">
            <img src={energyImage} alt="Solar power plant with energy storage units at sunset" loading="lazy" width={1408} height={1008} />
          </Reveal>
          <Reveal className="sector-copy" delay={100}>
            <p className="eyebrow">06 — Clean Energy</p>
            <h2>Clean Energy &amp; Renewable Solutions</h2>
            <p>
              Iraq has significant potential and growing requirements in renewable and sustainable energy.
            </p>
            <p>
              Kodia seeks to develop partnerships with international technology providers and investors to
              introduce reliable, scalable, and cost-effective clean-energy solutions.
            </p>
            <h4>Areas of Interest</h4>
            <ul className="sector-list">
              {energyAreas.map((area) => <li key={area}><Check size={14} />{area}</li>)}
            </ul>
            <div className="sector-note">
              <h4>Our Goal</h4>
              <p>
                To support Iraq's transition toward a more reliable, diversified, and sustainable energy
                future through international technology and investment partnerships.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="sector-banner" style={{ backgroundImage: `linear-gradient(90deg, rgba(3, 25, 53, .95) 10%, rgba(3, 25, 53, .55) 70%), url(${oilGasImage})` }}>
          <Reveal className="sector-banner-copy">
            <p className="eyebrow">07 — Oil &amp; Gas</p>
            <h2>Oil &amp; Gas Solutions</h2>
            <p>
              Oil and gas remain among the most strategically important sectors of the Iraqi economy.
            </p>
            <p>
              Kodia works to connect leading international manufacturers, engineering companies, and
              technology providers with opportunities throughout Iraq's oil, gas, refining, and energy sectors.
            </p>
          </Reveal>
        </section>

        <section className="cta section-pad" id="contact">
          <div>
            <p className="eyebrow">Start a Conversation</p>
            <h2>Let's Build What Comes Next.</h2>
            <p>Discover Kodia Al-Mustaqbal and learn more about our areas of business and capabilities.</p>
          </div>
          <a className="button button-gold" href="mailto:Kodialmustakbel@gmail.com">Contact Us <ArrowRight size={16} /></a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand compact />
            <p>A diversified Iraqi company operating across contracting, real estate, pharmaceutical trade, general trading, investment, and commercial activities.</p>
          </div>
          <div className="footer-column"><h4>Quick Links</h4>{navLinks}</div>
          <div className="footer-column business-links">
            <h4>Our Business</h4>
            <Link to="/" hash="services">General Contracting &amp; Construction</Link>
            <Link to="/" hash="services">Real Estate</Link>
            <Link to="/" hash="services">Pharmaceutical &amp; Medical Trade</Link>
            <Link to="/" hash="services">General Trading &amp; Supply</Link>
          </div>
          <div className="footer-column contact-column">
            <h4>Contact Info</h4>
            <Link to="/" hash="contact"><Globe2 size={14} />Baghdad, Iraq</Link>
            <a href="tel:+9647732777001"><Phone size={14} /><bdi dir="ltr">+964 7732777001</bdi></a>
            <a href="mailto:Kodialmustakbel@gmail.com"><Mail size={14} />Kodialmustakbel@gmail.com</a>
          </div>
          <div className="footer-column social-column">
            <h4>Follow Us</h4>
            <div className="socials">
              <a href="#contact" aria-label="LinkedIn"><Linkedin size={15} /></a>
              <a href="#contact" aria-label="Youtube"><Youtube size={15} /></a>
              <a href="#contact" aria-label="Instagram"><Instagram size={15} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Kodia Al-Mustaqbal. All rights reserved.</span><span>Baghdad, Iraq</span></div>
      </footer>
    </div>
  );
}

export default AboutPage;

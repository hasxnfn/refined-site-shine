import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, BarChart3, BriefcaseBusiness, Building2,
  ChevronRight, Globe2, Handshake, HeartPulse, Instagram, Linkedin,
  Mail, Menu, Phone, Search, ShieldCheck, Sparkles, Truck, X, Youtube,
} from 'lucide-react';

type Language = 'en' | 'ar';

const images = {
  hero: 'https://images.pexels.com/photos/33047484/pexels-photo-33047484.png?auto=compress&cs=tinysrgb&h=650&w=940',
  construction: 'https://images.pexels.com/photos/17291326/pexels-photo-17291326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  realEstate: 'https://images.pexels.com/photos/16494354/pexels-photo-16494354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  medical: 'https://images.pexels.com/photos/13060613/pexels-photo-13060613.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  trading: 'https://images.pexels.com/photos/27732803/pexels-photo-27732803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  investment: 'https://images.pexels.com/photos/26974755/pexels-photo-26974755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  future: 'https://images.pexels.com/photos/31780931/pexels-photo-31780931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const translations = {
  en: {
    nav: ['Home', 'About', 'Services', 'Contact'],
    heroEyebrow: 'KODIA AL-MUSTAQBAL', heroTitleA: 'Building Opportunities.', heroTitleB: 'Shaping the Future.',
    heroText: 'A diversified Iraqi company delivering solutions across contracting, real estate, pharmaceutical trade, general commerce, and strategic business activities.',
    services: 'Explore Our Services', contact: 'Contact Us', expertiseLabel: 'Our Business', expertise: 'Areas of Expertise', allServices: 'View All Services',
    aboutTitle: 'Driven by Vision. Built on Trust.', aboutText: 'Kodia Al-Mustaqbal is a diversified Iraqi company based in Baghdad, operating across multiple commercial sectors with a commitment to professionalism, quality, reliability, and sustainable growth.', discover: 'Discover Our Company',
    why: 'Why Kodia Al-Mustaqbal', values: 'Our Values', future: "Part of Iraq's Future of Growth and Development.", cta: "Let's Build What Comes Next.", ctaText: 'Discover Kodia Al-Mustaqbal and learn more about our areas of business and capabilities.',
    footerText: 'A diversified Iraqi company operating across contracting, real estate, pharmaceutical trade, general trading, investment, and commercial activities.', quick: 'Quick Links', business: 'Our Business', follow: 'Follow Us', location: 'Baghdad, Iraq', rights: '© 2026 Kodia Al-Mustaqbal. All rights reserved.',
  },
  ar: {
    nav: ['الرئيسية', 'من نحن', 'خدماتنا', 'اتصل بنا'],
    heroEyebrow: 'كوديا المستقبل', heroTitleA: 'نبني الفرص.', heroTitleB: 'نصنع المستقبل.',
    heroText: 'شركة عراقية متنوعة تقدم حلولاً في مجالات المقاولات والعقارات والتجارة الدوائية والتجارة العامة والأنشطة التجارية والاستراتيجية.',
    services: 'استكشف خدماتنا', contact: 'اتصل بنا', expertiseLabel: 'أعمالنا', expertise: 'مجالات الخبرة', allServices: 'عرض جميع الخدمات',
    aboutTitle: 'رؤية تقودنا. وثقة تبنينا.', aboutText: 'كوديا المستقبل شركة عراقية متنوعة مقرها بغداد، تعمل في قطاعات تجارية متعددة، ملتزمة بالمهنية والجودة والموثوقية والنمو المستدام.', discover: 'اكتشف شركتنا',
    why: 'لماذا كوديا المستقبل', values: 'قيمنا', future: 'جزء من مستقبل العراق للنمو والتنمية.', cta: 'لنبنِ ما هو قادم.', ctaText: 'اكتشف كوديا المستقبل وتعرف على مجالات أعمالنا وقدراتنا.',
    footerText: 'شركة عراقية متنوعة تعمل في المقاولات والعقارات والتجارة الدوائية والتجارة العامة والاستثمار والأنشطة التجارية.', quick: 'روابط سريعة', business: 'أعمالنا', follow: 'تابعنا', location: 'بغداد، العراق', rights: '© 2026 كوديا المستقبل. جميع الحقوق محفوظة.',
  },
};

const expertise = [
  { image: images.construction, icon: Building2, en: ['General Contracting & Construction', 'Supporting development activities through professional execution and reliable delivery.'], ar: ['المقاولات العامة والإنشاءات', 'دعم مشاريع التطوير من خلال التنفيذ المهني والتسليم الموثوق.'] },
  { image: images.realEstate, icon: Building2, en: ['Real Estate', 'Engaging in real estate opportunities with a focus on development and long-term value.'], ar: ['العقارات', 'الاستثمار في الفرص العقارية مع التركيز على التطوير والقيمة طويلة الأمد.'] },
  { image: images.medical, icon: HeartPulse, en: ['Pharmaceutical & Medical Trade', 'Supporting pharmaceutical and medical-related commercial activities.'], ar: ['التجارة الدوائية والطبية', 'دعم الأنشطة التجارية المرتبطة بالمنتجات الدوائية والطبية.'] },
  { image: images.trading, icon: Globe2, en: ['General Trading & Supply', 'Commercial trading and supply connecting products and business needs.'], ar: ['التجارة العامة والتجهيز', 'التجارة والتجهيز التجاري لربط المنتجات باحتياجات الأعمال.'] },
  { image: images.investment, icon: BarChart3, en: ['Investment & Business Development', 'Exploring strategic opportunities and supporting sustainable growth.'], ar: ['الاستثمار وتطوير الأعمال', 'استكشاف الفرص الاستراتيجية ودعم النمو المستدام.'] },
  { image: images.future, icon: BriefcaseBusiness, en: ['Commercial & Strategic Activities', 'Additional commercial activities aligned with our capabilities and vision.'], ar: ['الأنشطة التجارية والاستراتيجية', 'أنشطة تجارية إضافية تنسجم مع قدراتنا ورؤيتنا.'] },
];

const whyItems = [
  { icon: ShieldCheck, en: ['Professionalism', 'Committed to professional standards across all areas of operation.'], ar: ['المهنية', 'ملتزمون بالمعايير المهنية في جميع مجالات العمل.'] },
  { icon: Sparkles, en: ['Diversified Expertise', 'Multiple business disciplines united under one corporate vision.'], ar: ['خبرات متنوعة', 'تخصصات أعمال متعددة تجمعها رؤية مؤسسية واحدة.'] },
  { icon: Handshake, en: ['Reliability', 'Building relationships through consistency, transparency, and responsibility.'], ar: ['الموثوقية', 'نبني العلاقات بالاستمرارية والشفافية والمسؤولية.'] },
  { icon: BarChart3, en: ['Future-Oriented', 'Focused on sustainable growth and opportunities in Iraq.'], ar: ['نظرة مستقبلية', 'نركز على النمو المستدام والفرص في العراق.'] },
];

const values = [
  { icon: ShieldCheck, en: 'Integrity', ar: 'النزاهة' }, { icon: Sparkles, en: 'Quality', ar: 'الجودة' }, { icon: Handshake, en: 'Commitment', ar: 'الالتزام' }, { icon: Globe2, en: 'Innovation', ar: 'الابتكار' }, { icon: HeartPulse, en: 'Responsibility', ar: 'المسؤولية' },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return <div className={`brand ${compact ? 'brand-compact' : ''}`}><div className="brand-mark"><span>K</span><i /></div><div><strong>كوديا المستقبل</strong><small>KODIA AL-MUSTAQBAL</small></div></div>;
}

function KodiaSite() {
  const [language, setLanguage] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];
  const isArabic = language === 'ar';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLanguage = () => setLanguage((current) => current === 'en' ? 'ar' : 'en');

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    setMenuOpen(false);
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    const start = window.scrollY;
    const distance = top - start;
    const duration = 600;
    const startTime = performance.now();
    const easeInOutCubic = (progress: number) => progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + distance * easeInOutCubic(progress));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  return <div className={isArabic ? 'app rtl' : 'app'} dir={isArabic ? 'rtl' : 'ltr'}>
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a className="logo-link" href="#home" onClick={handleAnchorClick}><Brand /></a>
      <nav className={menuOpen ? 'nav-open' : ''}>{t.nav.map((item, index) => <a key={item} href={['#home', '#about', '#services', '#contact'][index]} onClick={handleAnchorClick}>{item}</a>)}</nav>
      <div className="nav-actions"><button className="icon-button" aria-label="Search"><Search size={18} /></button><span className="nav-divider" /><button className="lang-toggle" onClick={toggleLanguage}>{isArabic ? 'EN' : 'العربية'}</button><a className="nav-cta" href="#contact" onClick={handleAnchorClick}>{t.contact} <ArrowRight size={14} /></a></div>
      <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg, rgba(2, 24, 51, .98) 5%, rgba(2, 24, 51, .84) 35%, rgba(2, 24, 51, .28) 80%), url(${images.hero})` }}>
        <div className="hero-content"><p className="eyebrow">{t.heroEyebrow}</p><h1>{t.heroTitleA}<br /><em>{t.heroTitleB}</em></h1><p className="hero-copy">{t.heroText}</p><div className="button-row"><a className="button button-gold" href="#services" onClick={handleAnchorClick}>{t.services} <ArrowRight size={16} /></a><a className="button button-outline" href="#contact" onClick={handleAnchorClick}>{t.contact}</a></div></div>
        <div className="hero-brand"><div className="hero-symbol">K<i /></div><div className="hero-arabic">كوديا المستقبل</div><div className="hero-english">KODIA AL-MUSTAQBAL</div></div>
        <div className="scroll-cue"><span>01</span><i /><span>{isArabic ? 'مرر للأسفل' : 'SCROLL DOWN'}</span><ArrowDown size={14} /></div><div className="hero-curve" />
      </section>

      <section className="expertise section-pad" id="services"><div className="section-top"><div><p className="eyebrow">{t.expertiseLabel}</p><h2>{t.expertise}</h2></div><a className="text-link" href="#services">{t.allServices} <ChevronRight size={15} /></a></div><div className="expertise-grid">{expertise.map((item, index) => { const Icon = item.icon; const copy = item[language]; return <article className="business-card" key={copy[0]}><div className="card-image"><img src={item.image} alt={copy[0]} /><div className="card-icon"><Icon size={17} /></div></div><div className="card-content"><div className="card-number">0{index + 1}</div><h3>{copy[0]}</h3><p>{copy[1]}</p><a className="round-arrow" href="#contact" aria-label={copy[0]} onClick={handleAnchorClick}><ArrowRight size={14} /></a></div></article> })}</div></section>

      <section className="about section-pad" id="about"><div className="about-image"><img src={images.future} alt="Baghdad architecture" /></div><div className="about-copy"><p className="eyebrow">{isArabic ? 'من نحن' : 'Who We Are'}</p><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><a className="button button-gold" href="#contact" onClick={handleAnchorClick}>{t.discover} <ArrowRight size={16} /></a></div></section>

      <section className="why section-pad"><p className="eyebrow">{isArabic ? 'رؤيتنا' : 'Our Difference'}</p><h2>{t.why}</h2><div className="why-grid">{whyItems.map((item) => { const Icon = item.icon; const copy = item[language]; return <article className="why-item" key={copy[0]}><Icon className="gold-icon" size={27} /><h3>{copy[0]}</h3><p>{copy[1]}</p></article> })}</div></section>

      <section className="values section-pad"><h2>{t.values}</h2><div className="values-list">{values.map((item) => { const Icon = item.icon; return <div className="value" key={item.en}><Icon size={21} /><span>{item[language]}</span></div> })}</div></section>

      <section className="future-banner" style={{ backgroundImage: `linear-gradient(90deg, rgba(3, 25, 53, .95), rgba(3, 25, 53, .42)), url(${images.hero})` }}><h2>{t.future}</h2><div className="banner-line" /></section>

      <section className="cta section-pad" id="contact"><div><p className="eyebrow">{isArabic ? 'تواصل معنا' : 'Start a Conversation'}</p><h2>{t.cta}</h2><p>{t.ctaText}</p></div><a className="button button-gold" href="mailto:Kodialmustakbel@gmail.com">{t.contact} <ArrowRight size={16} /></a></section>
    </main>

    <footer className="footer"><div className="footer-main"><div className="footer-brand"><Brand compact /><p>{t.footerText}</p></div><div className="footer-column"><h4>{t.quick}</h4>{t.nav.map((item, index) => <a key={item} href={['#home', '#about', '#services', '#contact'][index]} onClick={handleAnchorClick}>{item}</a>)}</div><div className="footer-column business-links"><h4>{t.business}</h4><a href="#services" onClick={handleAnchorClick}>{expertise[0][language][0]}</a><a href="#services" onClick={handleAnchorClick}>{expertise[1][language][0]}</a><a href="#services" onClick={handleAnchorClick}>{expertise[2][language][0]}</a><a href="#services" onClick={handleAnchorClick}>{expertise[3][language][0]}</a></div><div className="footer-column contact-column"><h4>{isArabic ? 'معلومات الاتصال' : 'Contact Info'}</h4><a href="#contact" onClick={handleAnchorClick}><Globe2 size={14} />{t.location}</a><a href="tel:+9647732777001"><Phone size={14} /><bdi dir="ltr">+964 7732777001</bdi></a><a href="mailto:Kodialmustakbel@gmail.com"><Mail size={14} />Kodialmustakbel@gmail.com</a></div><div className="footer-column social-column"><h4>{t.follow}</h4><div className="socials"><a href="#contact" aria-label="LinkedIn"><Linkedin size={15} /></a><a href="#contact" aria-label="Youtube"><Youtube size={15} /></a><a href="#contact" aria-label="Instagram"><Instagram size={15} /></a></div><button className="footer-lang" onClick={toggleLanguage}>{isArabic ? 'العربية' : 'EN'} <span>|</span> {isArabic ? 'EN' : 'العربية'}</button></div></div><div className="footer-bottom"><span>{t.rights}</span><span>{isArabic ? 'بغداد، العراق' : 'Baghdad, Iraq'}</span></div></footer>
  </div>;
}

export default KodiaSite;

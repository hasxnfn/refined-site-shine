import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, Building2, ChevronRight, Factory, Flame,
  Globe2, Handshake, Instagram, Landmark, Leaf, Lightbulb, Linkedin,
  Mail, MapPin, Menu, Phone, Search, ShieldCheck, Sparkles, Target,
  TrendingUp, X, Youtube,
} from 'lucide-react';

import sectorDefense from '@/assets/sector-defense.jpg';
import sectorEnergy from '@/assets/sector-energy.jpg';
import sectorOilGas from '@/assets/sector-oilgas.jpg';
import sectorIndustrial from '@/assets/sector-industrial.jpg';
import sectorRealEstate from '@/assets/sector-realestate.jpg';

type Language = 'en' | 'ar';
type L = { en: string; ar: string };
type LL = { en: string[]; ar: string[] };

const heroImage = 'https://images.pexels.com/photos/33047484/pexels-photo-33047484.png?auto=compress&cs=tinysrgb&h=650&w=940';
const aboutImage = 'https://images.pexels.com/photos/31780931/pexels-photo-31780931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const t = {
  nav: [
    { label: { en: 'Home', ar: 'الرئيسية' }, href: '#home' },
    { label: { en: 'About', ar: 'من نحن' }, href: '#about' },
    { label: { en: 'Sectors', ar: 'قطاعاتنا' }, href: '#sectors' },
    { label: { en: 'Partnerships', ar: 'الشراكات الدولية' }, href: '#partnerships' },
    { label: { en: 'Projects', ar: 'مشاريعنا' }, href: '#projects' },
    { label: { en: 'News', ar: 'الأخبار' }, href: '#news' },
    { label: { en: 'Contact', ar: 'تواصل معنا' }, href: '#contact' },
  ],
  tagline: { en: 'Connecting Global Expertise with Opportunities in Iraq', ar: 'نربط الخبرة العالمية بالفرص في العراق' },
  contact: { en: 'Contact Us', ar: 'تواصل معنا' },
  heroEyebrow: { en: 'Strategic Partnerships • Industrial Solutions • Sustainable Development', ar: 'شراكات استراتيجية • حلول صناعية • تنمية مستدامة' },
  heroTitleA: { en: 'Connecting Global Expertise', ar: 'نربط الخبرة العالمية' },
  heroTitleB: { en: 'with Opportunities in Iraq', ar: 'بالفرص في العراق' },
  heroText: {
    en: 'Kodia is an Iraqi company focused on strategic partnerships, industrial development, defense and security solutions, clean energy, oil & gas, and real estate development.',
    ar: 'كوديا شركة عراقية متخصصة في الشراكات الاستراتيجية والتطوير الصناعي وحلول الدفاع والأمن والطاقة النظيفة والنفط والغاز والتطوير العقاري.',
  },
  heroText2: {
    en: 'We connect international companies, advanced technologies, investment opportunities, and industrial expertise with the growing needs of the Iraqi market.',
    ar: 'نربط الشركات العالمية والتقنيات المتقدمة والفرص الاستثمارية والخبرات الصناعية باحتياجات السوق العراقي المتنامية.',
  },
  exploreSectors: { en: 'Explore Our Sectors', ar: 'استكشف قطاعاتنا' },
  sectorsEyebrow: { en: 'Our Core Sectors', ar: 'قطاعاتنا الأساسية' },
  sectorsTitle: { en: 'Sectors We Operate In', ar: 'القطاعات التي نعمل فيها' },
  partnerBanner: { en: 'Looking for a Reliable Partner in Iraq?', ar: 'هل تبحث عن شريك موثوق في العراق؟' },
  partnerBannerText: {
    en: 'Are you an international manufacturer, technology provider, investor, engineering company, or industrial group looking for opportunities in Iraq? Kodia is ready to explore long-term strategic partnerships.',
    ar: 'هل أنت شركة مصنّعة عالمية أو مزوّد تقنيات أو مستثمر أو شركة هندسية أو مجموعة صناعية تبحث عن فرص في العراق؟ كوديا مستعدة لاستكشاف شراكات استراتيجية طويلة الأمد.',
  },
  explorePartnership: { en: 'Explore Partnership Opportunities', ar: 'استكشف فرص الشراكة' },
  aboutEyebrow: { en: 'About Kodia', ar: 'عن كوديا' },
  aboutTitle: { en: 'Who We Are', ar: 'من نحن' },
  aboutP1: {
    en: 'Kodia is an Iraqi company established to develop strategic commercial, industrial, investment, and technology partnerships between Iraq and international markets.',
    ar: 'كوديا شركة عراقية تأسست لتطوير شراكات تجارية وصناعية واستثمارية وتقنية استراتيجية بين العراق والأسواق الدولية.',
  },
  aboutP2: {
    en: 'We work to identify opportunities for cooperation between reputable international companies and the Iraqi market, and transform these opportunities into practical and sustainable projects across strategically important sectors of the Iraqi economy.',
    ar: 'نعمل على تحديد فرص التعاون بين الشركات العالمية الرصينة والسوق العراقي، وتحويل هذه الفرص إلى مشاريع عملية ومستدامة في القطاعات الاستراتيجية للاقتصاد العراقي.',
  },
  valuesEyebrow: { en: 'Our Values', ar: 'قيمنا' },
  valuesTitle: { en: 'What We Stand For', ar: 'ما نؤمن به' },
  areasOfInterest: { en: 'Areas of Interest', ar: 'مجالات الاهتمام' },
  partnershipsEyebrow: { en: 'International Partnerships', ar: 'الشراكات الدولية' },
  weWelcome: { en: 'We welcome cooperation with', ar: 'نرحب بالتعاون مع' },
  weOffer: { en: 'What We Offer Our International Partners', ar: 'ما نقدمه لشركائنا الدوليين' },
  intlVision: {
    en: "We believe that Iraq's future development requires strong international partnerships, advanced technologies, investment, and local expertise. Kodia seeks to be the bridge connecting these elements.",
    ar: 'نؤمن بأن تنمية العراق المستقبلية تتطلب شراكات دولية قوية وتقنيات متقدمة واستثماراً وخبرة محلية. وتسعى كوديا لتكون الجسر الذي يربط هذه العناصر.',
  },
  govEyebrow: { en: 'Government & Institutional Cooperation', ar: 'التعاون الحكومي والمؤسسي' },
  govTitle: { en: 'Professional Institutional Engagement', ar: 'تعامل مؤسسي احترافي' },
  govText: {
    en: 'Kodia works to develop opportunities with Iraqi government institutions and relevant public-sector entities through official and legally compliant channels. Our approach is based on professionalism, transparency, compliance, and long-term cooperation.',
    ar: 'تعمل كوديا على تطوير الفرص مع المؤسسات الحكومية العراقية والجهات العامة ذات الصلة عبر قنوات رسمية ومتوافقة قانونياً. ويقوم نهجنا على المهنية والشفافية والامتثال والتعاون طويل الأمد.',
  },
  projectsEyebrow: { en: 'Projects', ar: 'المشاريع' },
  projectsTitle: { en: 'Our Projects & Opportunities', ar: 'مشاريعنا وفرصنا' },
  whyEyebrow: { en: 'Why Kodia?', ar: 'لماذا كوديا؟' },
  whyTitle: { en: 'Why Partner With Kodia?', ar: 'لماذا الشراكة مع كوديا؟' },
  newsEyebrow: { en: 'News & Insights', ar: 'الأخبار والرؤى' },
  newsTitle: { en: 'Latest News & Developments', ar: 'آخر الأخبار والمستجدات' },
  newsText: { en: "This section will present Kodia's latest activities, including:", ar: 'يعرض هذا القسم أحدث أنشطة كوديا، ومنها:' },
  contactEyebrow: { en: 'Contact', ar: 'تواصل معنا' },
  contactTitle: { en: "Let's Build the Future Together", ar: 'لنبنِ المستقبل معاً' },
  contactText: {
    en: 'Are you an international company looking for a reliable partner in Iraq? Are you an investor interested in Iraq? Do you have a technology, product, or industrial solution that could serve the Iraqi market? Let\'s discuss the opportunity.',
    ar: 'هل أنت شركة دولية تبحث عن شريك موثوق في العراق؟ أو مستثمر مهتم بالعراق؟ أو لديك تقنية أو منتج أو حل صناعي يخدم السوق العراقي؟ لنناقش الفرصة معاً.',
  },
  contactForm: { en: 'Contact Form', ar: 'نموذج التواصل' },
  send: { en: 'Send Inquiry', ar: 'إرسال الطلب' },
  sent: { en: 'Thank you — we will get back to you shortly.', ar: 'شكراً لك — سنعاود التواصل معك قريباً.' },
  quick: { en: 'Quick Links', ar: 'روابط سريعة' },
  sectorsLabel: { en: 'Sectors', ar: 'القطاعات' },
  follow: { en: 'Follow Us', ar: 'تابعنا' },
  contactInfo: { en: 'Contact Info', ar: 'معلومات الاتصال' },
  location: { en: 'Baghdad, Iraq', ar: 'بغداد، العراق' },
  rights: { en: '© 2026 Kodia. All rights reserved.', ar: '© 2026 كوديا. جميع الحقوق محفوظة.' },
  footerText: {
    en: 'An Iraqi company developing strategic partnerships in defense and security, clean energy, oil & gas, industrial development, and real estate.',
    ar: 'شركة عراقية تطوّر شراكات استراتيجية في الدفاع والأمن، والطاقة النظيفة، والنفط والغاز، والتطوير الصناعي، والعقارات.',
  },
};

const formFields: L[] = [
  { en: 'Full Name', ar: 'الاسم الكامل' },
  { en: 'Company', ar: 'الشركة' },
  { en: 'Country', ar: 'الدولة' },
  { en: 'Email', ar: 'البريد الإلكتروني' },
  { en: 'Phone', ar: 'الهاتف' },
  { en: 'Sector of Interest', ar: 'القطاع المهتم به' },
];

const sectors: {
  id: string; image: string; icon: typeof ShieldCheck; label: L; title: L;
  short: L; intro: L[]; areas: LL; approachTitle: L; approach: L[];
}[] = [
  {
    id: 'defense', image: sectorDefense, icon: ShieldCheck,
    label: { en: 'Defense & Security', ar: 'الدفاع والأمن' },
    title: { en: 'Defense & Security Solutions', ar: 'حلول الدفاع والأمن' },
    short: { en: 'Advanced defense, security, surveillance, and critical infrastructure protection solutions.', ar: 'حلول متقدمة للدفاع والأمن والمراقبة وحماية البنى التحتية الحيوية.' },
    intro: [
      { en: 'Kodia develops cooperation with qualified international manufacturers and technology providers in the defense and security sectors.', ar: 'تطوّر كوديا التعاون مع الشركات المصنّعة ومزوّدي التقنيات الدوليين المؤهلين في قطاعي الدفاع والأمن.' },
      { en: 'We seek to introduce appropriate technologies and solutions to the Iraqi market through professional, transparent, and officially compliant channels.', ar: 'نسعى لإدخال التقنيات والحلول المناسبة إلى السوق العراقي عبر قنوات مهنية وشفافة ومتوافقة رسمياً.' },
    ],
    areas: {
      en: ['Counter-UAS / Anti-Drone Systems', 'Surveillance & Detection', 'Critical Infrastructure Protection', 'Security Technologies', 'Defense Equipment', 'Military Transport Solutions', 'Technical Support & Maintenance'],
      ar: ['أنظمة مكافحة الطائرات المسيّرة', 'المراقبة والكشف', 'حماية البنى التحتية الحيوية', 'التقنيات الأمنية', 'المعدات الدفاعية', 'حلول النقل العسكري', 'الدعم الفني والصيانة'],
    },
    approachTitle: { en: 'Our Approach', ar: 'نهجنا' },
    approach: [
      { en: 'Kodia works with qualified international companies to identify suitable solutions for the requirements of Iraqi government and security institutions.', ar: 'تعمل كوديا مع شركات دولية مؤهلة لتحديد الحلول المناسبة لمتطلبات المؤسسات الحكومية والأمنية العراقية.' },
      { en: 'All defense and security-related cooperation is conducted subject to applicable Iraqi laws, regulations, licensing requirements, and official procurement procedures.', ar: 'يخضع كل تعاون متعلق بالدفاع والأمن للقوانين والأنظمة العراقية النافذة ومتطلبات الترخيص وإجراءات الشراء الرسمية.' },
    ],
  },
  {
    id: 'energy', image: sectorEnergy, icon: Leaf,
    label: { en: 'Clean Energy', ar: 'الطاقة النظيفة' },
    title: { en: 'Clean Energy & Renewable Solutions', ar: 'الطاقة النظيفة والحلول المتجددة' },
    short: { en: 'Renewable energy, solar power, energy storage, and sustainable energy solutions.', ar: 'الطاقة المتجددة والطاقة الشمسية وتخزين الطاقة وحلول الطاقة المستدامة.' },
    intro: [
      { en: 'Iraq has significant potential and growing requirements in renewable and sustainable energy.', ar: 'يمتلك العراق إمكانات كبيرة واحتياجات متنامية في مجال الطاقة المتجددة والمستدامة.' },
      { en: 'Kodia seeks to develop partnerships with international technology providers and investors to introduce reliable, scalable, and cost-effective clean-energy solutions.', ar: 'تسعى كوديا لتطوير شراكات مع مزوّدي التقنيات والمستثمرين الدوليين لإدخال حلول طاقة نظيفة موثوقة وقابلة للتوسّع وفعّالة من حيث الكلفة.' },
    ],
    areas: {
      en: ['Solar Power Plants', 'Solar Energy Systems', 'Energy Storage', 'Hybrid Energy Systems', 'Waste-to-Energy', 'Industrial Renewable Energy', 'Energy Efficiency', 'Sustainable Infrastructure'],
      ar: ['محطات الطاقة الشمسية', 'أنظمة الطاقة الشمسية', 'تخزين الطاقة', 'أنظمة الطاقة الهجينة', 'تحويل النفايات إلى طاقة', 'الطاقة المتجددة الصناعية', 'كفاءة الطاقة', 'البنى التحتية المستدامة'],
    },
    approachTitle: { en: 'Our Goal', ar: 'هدفنا' },
    approach: [
      { en: "To support Iraq's transition toward a more reliable, diversified, and sustainable energy future through international technology and investment partnerships.", ar: 'دعم انتقال العراق نحو مستقبل طاقة أكثر موثوقية وتنوعاً واستدامة عبر شراكات تقنية واستثمارية دولية.' },
    ],
  },
  {
    id: 'oilgas', image: sectorOilGas, icon: Flame,
    label: { en: 'Oil & Gas', ar: 'النفط والغاز' },
    title: { en: 'Oil & Gas Solutions', ar: 'حلول النفط والغاز' },
    short: { en: 'Industrial equipment, energy infrastructure, oil & gas technologies, and related services.', ar: 'المعدات الصناعية والبنى التحتية للطاقة وتقنيات النفط والغاز والخدمات المرتبطة بها.' },
    intro: [
      { en: 'Oil and gas remain among the most strategically important sectors of the Iraqi economy.', ar: 'يبقى النفط والغاز من أكثر القطاعات أهمية استراتيجية في الاقتصاد العراقي.' },
      { en: "Kodia works to connect leading international manufacturers, engineering companies, and technology providers with opportunities throughout Iraq's oil, gas, refining, and energy sectors.", ar: 'تعمل كوديا على ربط كبرى الشركات المصنّعة والهندسية ومزوّدي التقنيات بالفرص في قطاعات النفط والغاز والتكرير والطاقة في العراق.' },
    ],
    areas: {
      en: ['Industrial Valves', 'Industrial Pumps', 'Compressors', 'Turbines', 'Heat Exchangers', 'Refinery Equipment', 'Gas Processing', 'Storage Systems', 'Transportation Equipment', 'Industrial Maintenance'],
      ar: ['الصمامات الصناعية', 'المضخات الصناعية', 'الضواغط', 'التوربينات', 'المبادلات الحرارية', 'معدات المصافي', 'معالجة الغاز', 'أنظمة الخزن', 'معدات النقل', 'الصيانة الصناعية'],
    },
    approachTitle: { en: 'Our Approach', ar: 'نهجنا' },
    approach: [
      { en: 'We seek reliable international partners capable of providing high-quality equipment, advanced technologies, engineering expertise, and long-term technical support for the Iraqi market.', ar: 'نبحث عن شركاء دوليين موثوقين قادرين على توفير معدات عالية الجودة وتقنيات متقدمة وخبرات هندسية ودعم فني طويل الأمد للسوق العراقي.' },
    ],
  },
  {
    id: 'industrial', image: sectorIndustrial, icon: Factory,
    label: { en: 'Industrial Development', ar: 'التطوير الصناعي' },
    title: { en: 'Industrial Development & Manufacturing Partnerships', ar: 'التطوير الصناعي وشراكات التصنيع' },
    short: { en: 'Industrial projects, local assembly, manufacturing partnerships, and technology cooperation.', ar: 'مشاريع صناعية وتجميع محلي وشراكات تصنيع وتعاون تكنولوجي.' },
    intro: [
      { en: "Kodia's industrial strategy goes beyond product supply.", ar: 'تتجاوز استراتيجية كوديا الصناعية مجرد توريد المنتجات.' },
      { en: 'We seek to develop long-term industrial partnerships that can include local assembly, manufacturing cooperation, technology cooperation, training, and progressive industrial development.', ar: 'نسعى لبناء شراكات صناعية طويلة الأمد تشمل التجميع المحلي والتعاون التصنيعي والتقني والتدريب والتطوير الصناعي التدريجي.' },
    ],
    areas: {
      en: ['Industrial Plants', 'Local Assembly', 'Manufacturing Partnerships', 'Technology Cooperation', 'Heavy Equipment', 'Industrial Machinery', 'Transport Equipment', 'Factory Development', 'Technical Training'],
      ar: ['المنشآت الصناعية', 'التجميع المحلي', 'شراكات التصنيع', 'التعاون التكنولوجي', 'المعدات الثقيلة', 'الآلات الصناعية', 'معدات النقل', 'تطوير المصانع', 'التدريب الفني'],
    },
    approachTitle: { en: 'Our Phased Approach', ar: 'نهجنا المرحلي' },
    approach: [
      { en: 'Market Entry → Product Development → Local Assembly → Training → Progressive Industrial Cooperation', ar: 'دخول السوق ← تطوير المنتج ← التجميع المحلي ← التدريب ← التعاون الصناعي التدريجي' },
      { en: 'Our objective is to establish sustainable industrial capabilities in Iraq while maintaining the technical standards and quality requirements of our international partners.', ar: 'هدفنا بناء قدرات صناعية مستدامة في العراق مع الحفاظ على المعايير الفنية ومتطلبات الجودة لدى شركائنا الدوليين.' },
    ],
  },
  {
    id: 'realestate', image: sectorRealEstate, icon: Building2,
    label: { en: 'Real Estate Development', ar: 'التطوير العقاري' },
    title: { en: 'Real Estate & Property Development', ar: 'العقارات والتطوير العقاري' },
    short: { en: 'Residential, commercial, mixed-use, hospitality, and strategic property development.', ar: 'مشاريع سكنية وتجارية ومتعددة الاستخدامات وضيافة وتطوير عقاري استراتيجي.' },
    intro: [
      { en: 'Kodia explores strategic opportunities in real estate, property development, infrastructure, and mixed-use projects.', ar: 'تستكشف كوديا الفرص الاستراتيجية في العقارات والتطوير العقاري والبنى التحتية والمشاريع متعددة الاستخدامات.' },
    ],
    areas: {
      en: ['Residential Developments', 'Commercial Projects', 'Mixed-Use Developments', 'Hospitality', 'Land Development', 'Investment Partnerships', 'Infrastructure Projects'],
      ar: ['المجمعات السكنية', 'المشاريع التجارية', 'المشاريع متعددة الاستخدامات', 'الضيافة', 'تطوير الأراضي', 'شراكات استثمارية', 'مشاريع البنى التحتية'],
    },
    approachTitle: { en: 'Our Approach', ar: 'نهجنا' },
    approach: [
      { en: 'We seek partnerships with experienced developers, investors, engineering companies, and international real estate groups interested in the Iraqi market.', ar: 'نسعى لشراكات مع مطوّرين ومستثمرين وشركات هندسية ومجموعات عقارية دولية ذات خبرة ومهتمة بالسوق العراقي.' },
    ],
  },
];

const visionMission: { icon: typeof Target; title: L; text: L }[] = [
  {
    icon: Target, title: { en: 'Our Vision', ar: 'رؤيتنا' },
    text: { en: 'To become a leading Iraqi platform for international industrial partnerships, advanced technologies, sustainable energy, and strategic investment.', ar: 'أن نكون منصة عراقية رائدة للشراكات الصناعية الدولية والتقنيات المتقدمة والطاقة المستدامة والاستثمار الاستراتيجي.' },
  },
  {
    icon: Handshake, title: { en: 'Our Mission', ar: 'رسالتنا' },
    text: { en: 'To connect international expertise and technology with real opportunities in Iraq and build long-term partnerships that create economic, industrial, and sustainable value.', ar: 'ربط الخبرات والتقنيات الدولية بالفرص الحقيقية في العراق وبناء شراكات طويلة الأمد تخلق قيمة اقتصادية وصناعية ومستدامة.' },
  },
];

const values: { icon: typeof ShieldCheck; title: L; text: L }[] = [
  { icon: ShieldCheck, title: { en: 'Integrity', ar: 'النزاهة' }, text: { en: 'We believe that sustainable business relationships are built on integrity, transparency, and respect for applicable laws and regulations.', ar: 'نؤمن بأن العلاقات التجارية المستدامة تُبنى على النزاهة والشفافية واحترام القوانين والأنظمة النافذة.' } },
  { icon: Handshake, title: { en: 'Partnership', ar: 'الشراكة' }, text: { en: 'We seek long-term partnerships that create value for all parties.', ar: 'نسعى إلى شراكات طويلة الأمد تخلق قيمة لجميع الأطراف.' } },
  { icon: Sparkles, title: { en: 'Professionalism', ar: 'المهنية' }, text: { en: 'We work with qualified partners and approach every opportunity with professionalism, careful evaluation, and clear objectives.', ar: 'نعمل مع شركاء مؤهلين ونتعامل مع كل فرصة بمهنية وتقييم دقيق وأهداف واضحة.' } },
  { icon: Lightbulb, title: { en: 'Innovation', ar: 'الابتكار' }, text: { en: 'We seek to introduce advanced technologies and innovative solutions to the Iraqi market.', ar: 'نسعى لإدخال التقنيات المتقدمة والحلول المبتكرة إلى السوق العراقي.' } },
  { icon: Leaf, title: { en: 'Sustainability', ar: 'الاستدامة' }, text: { en: 'We support projects capable of generating long-term economic, industrial, and environmental value.', ar: 'ندعم المشاريع القادرة على توليد قيمة اقتصادية وصناعية وبيئية طويلة الأمد.' } },
];

const partnerTypes: LL = {
  en: ['International Manufacturers', 'Technology Providers', 'Investors', 'Engineering Companies', 'Industrial Groups', 'Energy Companies', 'Infrastructure Developers'],
  ar: ['الشركات المصنّعة الدولية', 'مزوّدو التقنيات', 'المستثمرون', 'الشركات الهندسية', 'المجموعات الصناعية', 'شركات الطاقة', 'مطوّرو البنى التحتية'],
};

const partnerServices: LL = {
  en: ['Market Entry Support', 'Company Registration Support', 'Government & Institutional Coordination', 'Business Development', 'Project Identification', 'Local Market Intelligence', 'Partner Development', 'Technical & Commercial Coordination', 'After-Sales Support'],
  ar: ['دعم دخول السوق', 'دعم تسجيل الشركات', 'التنسيق الحكومي والمؤسسي', 'تطوير الأعمال', 'تحديد المشاريع', 'معلومات السوق المحلي', 'تطوير الشركاء', 'التنسيق الفني والتجاري', 'دعم ما بعد البيع'],
};

const govCapabilities: LL = {
  en: ['Identifying institutional requirements', 'Supporting registration procedures', 'Coordinating official communications', 'Developing project proposals', 'Connecting qualified international suppliers with Iraqi requirements', 'Supporting technical and commercial discussions', 'Following up on project development'],
  ar: ['تحديد المتطلبات المؤسسية', 'دعم إجراءات التسجيل', 'تنسيق المراسلات الرسمية', 'إعداد مقترحات المشاريع', 'ربط المورّدين الدوليين المؤهلين بالمتطلبات العراقية', 'دعم المناقشات الفنية والتجارية', 'متابعة تطوير المشاريع'],
};

const projects: { title: L; text: L }[] = [
  { title: { en: 'Current Projects', ar: 'المشاريع الحالية' }, text: { en: 'Active projects and ongoing development opportunities.', ar: 'مشاريع نشطة وفرص تطوير جارية.' } },
  { title: { en: 'Completed Projects', ar: 'المشاريع المنجزة' }, text: { en: 'Selected projects and successful cooperation with international partners.', ar: 'مشاريع مختارة وتعاون ناجح مع شركاء دوليين.' } },
  { title: { en: 'Strategic Opportunities', ar: 'الفرص الاستراتيجية' }, text: { en: 'Investment and industrial opportunities under development.', ar: 'فرص استثمارية وصناعية قيد التطوير.' } },
  { title: { en: 'Case Studies', ar: 'دراسات الحالة' }, text: { en: 'Detailed examples of our approach, partnerships, and project development.', ar: 'أمثلة تفصيلية عن نهجنا وشراكاتنا وتطوير مشاريعنا.' } },
];

const whyKodia: { icon: typeof Globe2; title: L; text: L }[] = [
  { icon: MapPin, title: { en: 'Local Market Knowledge', ar: 'معرفة بالسوق المحلي' }, text: { en: 'Strong understanding of the Iraqi market and its business environment.', ar: 'فهم عميق للسوق العراقي وبيئة الأعمال فيه.' } },
  { icon: Globe2, title: { en: 'International Network', ar: 'شبكة دولية' }, text: { en: 'Connections with international manufacturers, technology providers, investors, and industrial companies.', ar: 'علاقات مع شركات مصنّعة ومزوّدي تقنيات ومستثمرين وشركات صناعية دولية.' } },
  { icon: Landmark, title: { en: 'Institutional Experience', ar: 'خبرة مؤسسية' }, text: { en: 'Experience in developing cooperation with Iraqi institutions and organizations.', ar: 'خبرة في تطوير التعاون مع المؤسسات والجهات العراقية.' } },
  { icon: Factory, title: { en: 'Industrial Expertise', ar: 'خبرة صناعية' }, text: { en: 'Understanding of industrial projects, equipment, technology cooperation, and local development.', ar: 'فهم للمشاريع الصناعية والمعدات والتعاون التكنولوجي والتطوير المحلي.' } },
  { icon: TrendingUp, title: { en: 'Business Development', ar: 'تطوير الأعمال' }, text: { en: 'Ability to identify opportunities and transform them into structured commercial projects.', ar: 'القدرة على تحديد الفرص وتحويلها إلى مشاريع تجارية منظمة.' } },
  { icon: Target, title: { en: 'Long-Term Vision', ar: 'رؤية طويلة الأمد' }, text: { en: 'We focus on sustainable partnerships rather than short-term transactions.', ar: 'نركز على الشراكات المستدامة بدلاً من الصفقات قصيرة الأمد.' } },
];

const newsTopics: LL = {
  en: ['Strategic partnerships', 'International business meetings', 'Industrial cooperation', 'Energy projects', 'Oil & gas opportunities', 'International exhibitions', 'New investment opportunities', 'Iraq market developments'],
  ar: ['الشراكات الاستراتيجية', 'اللقاءات التجارية الدولية', 'التعاون الصناعي', 'مشاريع الطاقة', 'فرص النفط والغاز', 'المعارض الدولية', 'فرص استثمارية جديدة', 'مستجدات السوق العراقي'],
};

function Brand({ compact = false, lang }: { compact?: boolean; lang: Language }) {
  return (
    <div className={`brand ${compact ? 'brand-compact' : ''}`}>
      <div className="brand-mark"><span>K</span><i /></div>
      <div>
        <strong className="brand-name">KODIA</strong>
        <small>{t.tagline[lang]}</small>
      </div>
    </div>
  );
}

function KodiaSite() {
  const [language, setLanguage] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);
  const isArabic = language === 'ar';
  const g = (value: L) => value[language];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLanguage = () => setLanguage((current) => (current === 'en' ? 'ar' : 'en'));

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
    const ease = (p: number) => (p < 0.5 ? 4 * p ** 3 : 1 - (-2 * p + 2) ** 3 / 2);
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      window.scrollTo(0, start + distance * ease(progress));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  return (
    <div className={isArabic ? 'app rtl' : 'app'} dir={isArabic ? 'rtl' : 'ltr'}>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <a className="logo-link" href="#home" onClick={handleAnchorClick}><Brand lang={language} /></a>
        <nav className={menuOpen ? 'nav-open' : ''}>
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={handleAnchorClick}>{g(item.label)}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-button" aria-label="Search"><Search size={18} /></button>
          <span className="nav-divider" />
          <button className="lang-toggle" onClick={toggleLanguage}>{isArabic ? 'EN' : 'العربية'}</button>
          <a className="nav-cta" href="#contact" onClick={handleAnchorClick}>{g(t.contact)} <ArrowRight size={14} /></a>
        </div>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section
          className="hero"
          id="home"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(2, 24, 51, .98) 5%, rgba(2, 24, 51, .84) 35%, rgba(2, 24, 51, .28) 80%), url(${heroImage})` }}
        >
          <div className="hero-content">
            <p className="eyebrow">{g(t.heroEyebrow)}</p>
            <h1>{g(t.heroTitleA)}<br /><em>{g(t.heroTitleB)}</em></h1>
            <p className="hero-copy">{g(t.heroText)}</p>
            <p className="hero-copy">{g(t.heroText2)}</p>
            <div className="button-row">
              <a className="button button-gold" href="#sectors" onClick={handleAnchorClick}>{g(t.exploreSectors)} <ArrowRight size={16} /></a>
              <a className="button button-outline" href="#about" onClick={handleAnchorClick}>{g(t.aboutTitle)}</a>
            </div>
          </div>
          <div className="hero-brand">
            <div className="hero-symbol">K<i /></div>
            <div className="hero-arabic">KODIA</div>
            <div className="hero-english">{g(t.tagline)}</div>
          </div>
          <div className="scroll-cue"><span>01</span><i /><span>{isArabic ? 'مرر للأسفل' : 'SCROLL DOWN'}</span><ArrowDown size={14} /></div>
          <div className="hero-curve" />
        </section>

        <section className="expertise section-pad" id="sectors">
          <div className="section-top">
            <div>
              <p className="eyebrow">{g(t.sectorsEyebrow)}</p>
              <h2>{g(t.sectorsTitle)}</h2>
            </div>
            <a className="text-link" href="#defense" onClick={handleAnchorClick}>{g(t.areasOfInterest)} <ChevronRight size={15} /></a>
          </div>
          <div className="expertise-grid sectors-grid">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <a className="business-card" key={sector.id} href={`#${sector.id}`} onClick={handleAnchorClick}>
                  <img className="card-photo" src={sector.image} alt={g(sector.label)} loading="lazy" width={900} height={1200} />
                  <div className="card-shade" />
                  <div className="card-body">
                    <div className="card-icon"><Icon size={16} /></div>
                    <div className="card-number">0{index + 1}</div>
                    <h3>{g(sector.label)}</h3>
                    <p>{g(sector.short)}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="partner-banner" style={{ backgroundImage: `linear-gradient(90deg, rgba(3, 25, 53, .95), rgba(3, 25, 53, .55)), url(${heroImage})` }}>
          <div>
            <h2>{g(t.partnerBanner)}</h2>
            <p>{g(t.partnerBannerText)}</p>
          </div>
          <a className="button button-gold" href="#partnerships" onClick={handleAnchorClick}>{g(t.explorePartnership)} <ArrowRight size={16} /></a>
        </section>

        <section className="about section-pad" id="about">
          <div className="about-image"><img src={aboutImage} alt="Baghdad skyline" loading="lazy" /></div>
          <div className="about-copy">
            <p className="eyebrow">{g(t.aboutEyebrow)}</p>
            <h2>{g(t.aboutTitle)}</h2>
            <p>{g(t.aboutP1)}</p>
            <p>{g(t.aboutP2)}</p>
          </div>
        </section>

        <section className="vision section-pad">
          <div className="vision-grid">
            {visionMission.map((item) => {
              const Icon = item.icon;
              return (
                <article className="vision-card" key={item.title.en}>
                  <Icon className="gold-icon" size={26} />
                  <h3>{g(item.title)}</h3>
                  <p>{g(item.text)}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="why section-pad" id="values">
          <p className="eyebrow">{g(t.valuesEyebrow)}</p>
          <h2>{g(t.valuesTitle)}</h2>
          <div className="why-grid values-grid">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <article className="why-item" key={item.title.en}>
                  <Icon className="gold-icon" size={26} />
                  <h3>{g(item.title)}</h3>
                  <p>{g(item.text)}</p>
                </article>
              );
            })}
          </div>
        </section>

        {sectors.map((sector, index) => {
          const Icon = sector.icon;
          return (
            <section className={`sector-detail section-pad ${index % 2 ? 'sector-alt' : ''}`} id={sector.id} key={sector.id}>
              <div className="sector-media">
                <img src={sector.image} alt={g(sector.title)} loading="lazy" width={900} height={1200} />
              </div>
              <div className="sector-copy">
                <p className="eyebrow"><Icon size={15} /> {g(sector.label)}</p>
                <h2>{g(sector.title)}</h2>
                {sector.intro.map((paragraph) => <p key={paragraph.en}>{g(paragraph)}</p>)}
                <h4>{g(t.areasOfInterest)}</h4>
                <ul className="chip-list">
                  {sector.areas[language].map((area) => <li className="chip" key={area}>{area}</li>)}
                </ul>
                <h4>{g(sector.approachTitle)}</h4>
                {sector.approach.map((paragraph) => <p key={paragraph.en}>{g(paragraph)}</p>)}
              </div>
            </section>
          );
        })}

        <section className="partnerships section-pad" id="partnerships">
          <p className="eyebrow">{g(t.partnershipsEyebrow)}</p>
          <h2>{g(t.heroTitleA)} {g(t.heroTitleB)}</h2>
          <p className="lead">{isArabic
            ? 'توفّر كوديا منصة للشركات الدولية الباحثة عن فرص موثوقة وطويلة الأمد في العراق.'
            : 'Kodia provides a platform for international companies seeking reliable and long-term opportunities in Iraq.'}</p>
          <div className="two-col">
            <div>
              <h4>{g(t.weWelcome)}</h4>
              <ul className="chip-list">
                {partnerTypes[language].map((item) => <li className="chip" key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h4>{g(t.weOffer)}</h4>
              <ul className="chip-list">
                {partnerServices[language].map((item) => <li className="chip" key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <p className="lead vision-note">{g(t.intlVision)}</p>
        </section>

        <section className="government section-pad" id="government">
          <p className="eyebrow">{g(t.govEyebrow)}</p>
          <h2>{g(t.govTitle)}</h2>
          <p className="lead">{g(t.govText)}</p>
          <ul className="tick-list">
            {govCapabilities[language].map((item) => (
              <li key={item}><ChevronRight size={15} />{item}</li>
            ))}
          </ul>
        </section>

        <section className="projects section-pad" id="projects">
          <p className="eyebrow">{g(t.projectsEyebrow)}</p>
          <h2>{g(t.projectsTitle)}</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title.en}>
                <h3>{g(project.title)}</h3>
                <p>{g(project.text)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="why section-pad" id="why">
          <p className="eyebrow">{g(t.whyEyebrow)}</p>
          <h2>{g(t.whyTitle)}</h2>
          <div className="why-grid why-six">
            {whyKodia.map((item) => {
              const Icon = item.icon;
              return (
                <article className="why-item" key={item.title.en}>
                  <Icon className="gold-icon" size={26} />
                  <h3>{g(item.title)}</h3>
                  <p>{g(item.text)}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="news section-pad" id="news">
          <p className="eyebrow">{g(t.newsEyebrow)}</p>
          <h2>{g(t.newsTitle)}</h2>
          <p className="lead">{g(t.newsText)}</p>
          <ul className="chip-list">
            {newsTopics[language].map((item) => <li className="chip chip-dark" key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">{g(t.contactEyebrow)}</p>
            <h2>{g(t.contactTitle)}</h2>
            <p>{g(t.contactText)}</p>
            <div className="contact-info">
              <a href="mailto:Kodialmustakbel@gmail.com"><Mail size={15} />Kodialmustakbel@gmail.com</a>
              <a href="tel:+9647732777001"><Phone size={15} /><bdi dir="ltr">+964 7732777001</bdi></a>
              <a href="https://wa.me/9647732777001" target="_blank" rel="noreferrer"><Handshake size={15} />WhatsApp</a>
              <span><MapPin size={15} />{g(t.location)}</span>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={(event) => { event.preventDefault(); setSent(true); }}
          >
            <h3>{g(t.contactForm)}</h3>
            <div className="form-grid">
              {formFields.map((field) => (
                <label key={field.en}>
                  <span>{g(field)}</span>
                  <input type="text" name={field.en} required={field.en === 'Full Name' || field.en === 'Email'} />
                </label>
              ))}
              <label className="full">
                <span>{isArabic ? 'الرسالة' : 'Message'}</span>
                <textarea name="message" rows={4} />
              </label>
            </div>
            <button className="button button-gold" type="submit">{g(t.send)} <ArrowRight size={16} /></button>
            {sent ? <p className="form-note">{g(t.sent)}</p> : null}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand compact lang={language} />
            <p>{g(t.footerText)}</p>
          </div>
          <div className="footer-column">
            <h4>{g(t.quick)}</h4>
            {t.nav.map((item) => <a key={item.href} href={item.href} onClick={handleAnchorClick}>{g(item.label)}</a>)}
          </div>
          <div className="footer-column">
            <h4>{g(t.sectorsLabel)}</h4>
            {sectors.map((sector) => (
              <a key={sector.id} href={`#${sector.id}`} onClick={handleAnchorClick}>{g(sector.label)}</a>
            ))}
          </div>
          <div className="footer-column contact-column">
            <h4>{g(t.contactInfo)}</h4>
            <a href="#contact" onClick={handleAnchorClick}><Globe2 size={14} />{g(t.location)}</a>
            <a href="tel:+9647732777001"><Phone size={14} /><bdi dir="ltr">+964 7732777001</bdi></a>
            <a href="mailto:Kodialmustakbel@gmail.com"><Mail size={14} />Kodialmustakbel@gmail.com</a>
          </div>
          <div className="footer-column social-column">
            <h4>{g(t.follow)}</h4>
            <div className="socials">
              <a href="#contact" aria-label="LinkedIn" onClick={handleAnchorClick}><Linkedin size={15} /></a>
              <a href="#contact" aria-label="Youtube" onClick={handleAnchorClick}><Youtube size={15} /></a>
              <a href="#contact" aria-label="Instagram" onClick={handleAnchorClick}><Instagram size={15} /></a>
            </div>
            <button className="footer-lang" onClick={toggleLanguage}>{isArabic ? 'العربية' : 'EN'} <span>|</span> {isArabic ? 'EN' : 'العربية'}</button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{g(t.rights)}</span>
          <span>{g(t.location)}</span>
        </div>
      </footer>
    </div>
  );
}

export default KodiaSite;

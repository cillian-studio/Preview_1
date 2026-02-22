"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Accessibility,
  ChevronDown,
  Menu,
  X,
  Send,
  Award,
  ArrowUp,
  User,
  ExternalLink,
} from "lucide-react";

/* ─── Animated Section Wrapper ─── */
function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

/* ─── Section Title ─── */
function SectionTitle({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-10 md:mb-16">
      <h2
        className={`font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <div className="elegant-divider mx-auto mb-6" />
      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto ${
            light ? "text-white/80" : "text-text-light"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── Navigation ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#team", label: "Team" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md shadow-black/5 py-3"
          : "bg-white shadow-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="Tischlerei Kout"
            width={200}
            height={44}
            className="h-7 sm:h-10 w-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-text-light hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Anfrage senden
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white mx-4 mt-2 rounded-xl p-6 shadow-xl border border-warm-dark/20"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-text-light hover:text-accent transition-colors font-medium border-b border-warm-dark/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 bg-accent text-white text-center px-5 py-3 rounded-lg font-semibold"
          >
            Anfrage senden
          </a>
        </motion.div>
      )}
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark" />

      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65 0.02' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              2deg,
              transparent,
              transparent 8px,
              rgba(255,255,255,0.08) 8px,
              rgba(255,255,255,0.08) 9px,
              transparent 9px,
              transparent 22px,
              rgba(255,255,255,0.05) 22px,
              rgba(255,255,255,0.05) 23px,
              transparent 23px,
              transparent 35px,
              rgba(255,255,255,0.06) 35px,
              rgba(255,255,255,0.06) 36px
            )`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
            <Award className="w-4 h-4 text-accent-light" />
            <span className="text-white/90 text-sm font-medium">
              Zertifizierter Meisterbetrieb seit 1964
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Ihr Wiener
            <br />
            <span className="text-accent-light">Tischler</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
            Sonderlösungen sind unser Spezialgebiet. Seit über 60 Jahren
            Ihr zuverlässiger Partner für Tischlerarbeiten, Sicherheitstüren
            und Sanierung in Wien.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white px-6 sm:px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all hover:shadow-xl hover:shadow-accent/30"
            >
              Unsere Leistungen
              <ChevronDown className="w-5 h-5" />
            </a>
            <a
              href="tel:+4314921309"
              className="sm:hidden inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white px-6 py-4 rounded-xl text-base font-medium"
            >
              <Phone className="w-5 h-5" />
              +43 1 492 13 09
            </a>
            <a
              href="#kontakt"
              className="hidden sm:inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              Kontakt
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/ihr-wiener-tischler.png"
                alt="Ihr Wiener Tischler"
                width={200}
                height={170}
                className="drop-shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent-light font-[family-name:var(--font-heading)]">
                  60+
                </div>
                <div className="text-white/70 text-sm mt-2">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent-light font-[family-name:var(--font-heading)]">
                  Wien
                </div>
                <div className="text-white/70 text-sm mt-2">1160 &middot; Ottakring</div>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto text-accent-light" />
                <div className="text-white/70 text-sm mt-2">&#220;A-Zertifiziert</div>
              </div>
              <div className="text-center">
                <Accessibility className="w-12 h-12 mx-auto text-accent-light" />
                <div className="text-white/70 text-sm mt-2">Barrierefreiheit</div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm text-center italic">
                &bdquo;Zertifiziertes Unternehmen für Sicherheits- und
                Feuerschutztüren &middot; Spezialwerkstätte für Sonderkonstruktionen&ldquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}

/* ─── Services ─── */
const services = [
  {
    img: "/images/ic-tischlerarbeiten.png",
    title: "Tischlerarbeiten",
    desc: "Maßanfertigungen und individuelle Lösungen für jeden Anspruch. Von der Planung bis zur Montage - alles aus Meisterhand.",
    quote: "Sonderlösungen sind unser Spezialgebiet",
  },
  {
    img: "/images/ic-sicherheit.png",
    title: "Sicherheits- & Feuerschutztüren",
    desc: "Als ÜA-zertifiziertes Unternehmen liefern und montieren wir Sicherheits-, Feuerschutz- und Fluchttüren komplett aus einer Hand.",
    quote: "Alles aus einer Hand",
  },
  {
    img: "/images/ic-wartung.png",
    title: "Sanierung – Wartung – Service",
    desc: "Sanierungskonzepte mit gewerksübergreifender Ausführung. Wir koordinieren alle Gewerke und führen zuverlässig aus.",
    quote: "Gewerksübergreifende Ausführung",
  },
  {
    img: "/images/ic-barrierefreiheit.png",
    title: "Barrierefreiheit",
    desc: "Barrieren vermeiden und entfernen! Unser Geschäftsführer ist zertifizierter Experte für barrierefreies Bauen nach Austrian Standards.",
    quote: "Barrieren vermeiden und entfernen",
  },
];

function Services() {
  return (
    <Section id="leistungen" className="py-16 md:py-24 lg:py-32 bg-warm wood-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Unsere Stärken"
          subtitle="Zertifiziertes Unternehmen für Sicherheits- und Feuerschutztüren. Spezialwerkstätte für Sonderkonstruktionen. Sanierungskonzepte für gewerksübergreifende Arbeiten."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="service-card bg-white rounded-2xl p-8 shadow-sm border border-warm-dark/50 group"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-6">
                <Image src={s.img} alt={s.title} width={70} height={70} className="object-contain" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary mb-3">
                {s.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <p className="text-accent text-sm font-medium italic">
                &bdquo;{s.quote}&ldquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── About ─── */
const aboutItems = [
  {
    img: "/images/ic-history.png",
    title: "Firmengeschichte",
    desc: "1964 gegründet von Adolf Kout als einer der jüngsten Tischlermeister Wiens. Heute unter der Leitung von Ing. Mst. Andreas Distel — Ihr Tischler mit über 60 Jahren Erfahrung.",
    detail: "Von der Möbeltischlerei zur Spezialwerkstätte für Sicherheits- und Feuerschutztüren. 2004 ÜA-zertifiziert.",
  },
  {
    img: "/images/ic-lehrling.png",
    title: "Lehrlingsausbildung",
    desc: "Wir bilden in unserem Betrieb Lehrlinge des Berufsbildes \u201ETischlerei\u201C aus. Die Lehrlingsausbildung besitzt in unserem Unternehmen eine lange Tradition.",
    detail: "In die Ausbildung neuer Generationen zu investieren ist unumgänglich!",
  },
  {
    img: "/images/ic-time.png",
    title: "Geschäftszeiten",
    desc: "Montag – Donnerstag: 7:00 – 12:00 und 14:00 – 16:30 Uhr. Freitag: 7:00 – 12:00 Uhr.",
    detail: "Wir haben keine Betriebssperre!",
  },
];

function About() {
  return (
    <Section id="ueber-uns" className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Über uns"
          subtitle="Tradition trifft Innovation — Wiener Handwerkskunst seit 1964"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {aboutItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border border-warm-dark/30 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <Image src={item.img} alt={item.title} width={60} height={60} className="object-contain" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-text-light leading-relaxed mb-4">{item.desc}</p>
                <p className="text-accent font-semibold text-sm">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { year: "1964", event: "Gründung durch Adolf Kout" },
              { year: "2003", event: "Übernahme als GesmbH" },
              { year: "2004", event: "ÜA-Zertifizierung" },
              { year: "Heute", event: "60+ Jahre Erfahrung" },
            ].map((m, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-accent-light font-[family-name:var(--font-heading)]">
                  {m.year}
                </div>
                <div className="text-white/70 text-sm mt-2">{m.event}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── Team ─── */
function Team() {
  const team = [
    {
      name: "Ing. Mst. Andreas Distel",
      role: "Geschäftsführung",
      photo: "/images/team-distel.jpg",
      bio: [
        "Fachschule für Innenausbau – HTL Mödling",
        "Holztechnik Praktikerlehrgang – HTL Mödling",
        "Zertifizierter Experte für Barrierefreiheit",
        "Experte für Brandschutz- und Rauchschutztüren",
        "Aktiv in der Normung & Innungsarbeit",
        "IM-Stv. der Landesinnung Wien seit 2017",
      ],
      extra: "Seit 1997 im Unternehmen, seit 2003 geschäftsführender Gesellschafter. Handels- und gewerberechtlicher Geschäftsführer.",
    },
    {
      name: "Mag. Sonja Schindl",
      role: "Assistenz der Geschäftsführung",
      bio: [
        "Handelsakademie – Matura mit gutem Erfolg",
        "WU Wien – Internationale Betriebswirtschaft",
        "Ausbilderkurs inkl. Fachgespräch – WIFI Wien",
        "Ersthelferin gem. ASchG und AStV",
      ],
      extra: "Seit 2001 im Unternehmen. Verwaltung und Organisation.",
    },
  ];

  return (
    <Section id="team" className="py-16 md:py-24 lg:py-32 bg-warm wood-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Unser Team" subtitle="Kompetenz und Erfahrung für Ihr Projekt" />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-warm-dark/30 hover:shadow-lg transition-shadow flex flex-col"
            >
              {person.photo ? (
                <div className="h-72 sm:h-96 overflow-hidden">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={683}
                    height={1024}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="h-72 sm:h-96 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <User className="w-24 h-24 text-white/30" />
                </div>
              )}
              <div className="bg-gradient-to-r from-primary to-primary-light px-6 py-5 text-white">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                  {person.name}
                </h3>
                <p className="text-accent-light font-medium mt-1">{person.role}</p>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-text-light text-sm mb-4 leading-relaxed">{person.extra}</p>
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                  Qualifikationen
                </h4>
                <ul className="space-y-2 flex-1">
                  {person.bio.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-text-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-text-muted text-sm mt-8">
          Foto: &copy; Foto Weinwurm GMBH
        </p>
      </div>
    </Section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    message: "",
    consent: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="kontakt" className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Kontakt" subtitle="Treten Sie mit uns in Kontakt!" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-warm-dark/30">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-4">
                  Nachricht gesendet!
                </h3>
                <p className="text-text-light">
                  Vielen Dank für Ihre Anfrage. Wir melden uns so bald wie möglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-warm-dark/30">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Ihr Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl border border-warm-dark bg-cream/50 text-text"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Ihr Unternehmen
                    </label>
                    <input
                      type="text"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl border border-warm-dark bg-cream/50 text-text"
                      placeholder="Firma GmbH"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Ihre E-Mail-Adresse <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl border border-warm-dark bg-cream/50 text-text"
                      placeholder="email@beispiel.at"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Ihre Nachricht <span className="text-accent">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl border border-warm-dark bg-cream/50 text-text resize-none"
                      placeholder="Beschreiben Sie Ihr Anliegen. Skizzen und Fotos können gerne per E-Mail nachgereicht werden."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Dürfen wir Kontakt aufnehmen? <span className="text-accent">*</span>
                    </label>
                    <select
                      required
                      value={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl border border-warm-dark bg-cream/50 text-text"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="ja">Ja</option>
                      <option value="nein">Nein</option>
                    </select>
                  </div>
                  <p className="text-xs text-text-muted">
                    * Pflichtfeld. Ihre Daten werden ausschließlich in unserem Unternehmen verwaltet
                    und in keiner Form an Dritte weitergeleitet.
                  </p>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-light text-white py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Nachricht senden
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 border border-warm-dark/30">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary mb-2">
                Für Anfragen
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-4">
                Für Anfragen empfehlen wir eine kurze Beschreibung und wenn möglich die Übermittlung
                von Skizzen und Fotos.
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                <p className="text-sm text-text font-medium">
                  <strong>Hinweis:</strong> Bitte beachten Sie, dass Anfragen ohne Kontaktdaten
                  (Postleitzahl, Telefonnummer, Anrede) von uns nicht bearbeitet werden.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-warm-dark/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary">
                  Bürozeiten
                </h3>
              </div>
              <div className="space-y-2 text-text-light text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-warm-dark/30">
                  <span>Montag – Donnerstag</span>
                  <span className="font-medium text-text">7:00–12:00 &amp; 14:00–16:30</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-warm-dark/30">
                  <span>Freitag</span>
                  <span className="font-medium text-text">7:00–12:00</span>
                </div>
              </div>
              <p className="mt-4 text-accent font-semibold text-sm">
                Wir haben keine Betriebssperre!
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
                Tischlerei KOUT GesmbH
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <p className="font-medium">Neumayrgasse 16</p>
                    <p className="text-white/70">1160 Wien, Österreich</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Neumayrgasse+16,+1160+Wien"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent-light text-sm mt-1 hover:underline"
                    >
                      Auf Google Maps anzeigen <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent-light" />
                  </div>
                  <a href="tel:+4314921309" className="font-medium hover:text-accent-light transition-colors">
                    +43 1 492 13 09
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent-light" />
                  </div>
                  <a href="mailto:office@tischlerei-kout.at" className="font-medium hover:text-accent-light transition-colors">
                    office@tischlerei-kout.at
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-accent">
                TISCHLEREI KOUT
              </span>
              <p className="text-white/50 text-xs tracking-wider">
                seit 1964 &middot; Meisterbetrieb &middot; GesmbH
              </p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Ihr Wiener Tischler seit 1964. Zertifizierter Fachbetrieb für Sicherheits- und
              Feuerschutztüren, Sonderkonstruktionen und barrierefreies Bauen.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Image src="/images/ihr-wiener-tischler-white.png" alt="Ihr Wiener Tischler" width={80} height={68} />
              <Image src="/images/ua-badge.png" alt="ÜA Zertifiziert" width={40} height={40} />
              <Image src="/images/ast-siegel.png" alt="AST Siegel" width={40} height={40} />
              <Image src="/images/rollstuhl.png" alt="Barrierefreiheit" width={40} height={40} />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#leistungen", label: "Leistungen" },
                { href: "#ueber-uns", label: "Über uns" },
                { href: "#team", label: "Team" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-accent-light transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-light shrink-0" />
                Neumayrgasse 16, 1160 Wien
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-light shrink-0" />
                <a href="tel:+4314921309" className="hover:text-white transition-colors">
                  +43 1 492 13 09
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-light shrink-0" />
                <a href="mailto:office@tischlerei-kout.at" className="hover:text-white transition-colors">
                  office@tischlerei-kout.at
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Tischlerei KOUT GesmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="/impressum" className="text-white/40 hover:text-white transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-white/40 hover:text-white transition-colors">
              Datenschutz
            </a>
            <a href="/agb" className="text-white/40 hover:text-white transition-colors">
              AGB
            </a>
          </div>
          <a
            href="#"
            className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
            aria-label="Nach oben"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

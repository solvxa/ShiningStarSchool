"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  MapPin, 
  BookOpen, 
  Users, 
  Trophy, 
  ChevronRight, 
  Download, 
  Phone, 
  Globe, 
  Star, 
  ShieldCheck, 
  Mail, 
  CheckCircle, 
  Monitor, 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Building2,
  GraduationCap 
} from "lucide-react";

import campuses from "@/data/campuses.json";
import academics from "@/data/academics.json";

const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const Twitter = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

function AnimatedStatNumber({ 
  target, 
  suffix = "", 
  prefix = "", 
  duration = 2 
}: { 
  target: number; 
  suffix?: string; 
  prefix?: string; 
  duration?: number; 
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let frameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / (duration * 1000);
      const progress = Math.min(elapsed, 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeOut * target);
      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Home() {
  const [activeCampus, setActiveCampus] = useState(campuses[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Academics", href: "#academics" },
    { name: "Why SSPS", href: "#why-ssps" },
    { name: "Campuses", href: "#campuses" },
    { name: "Life", href: "#life" },
    { name: "Admissions", href: "#admissions" },
  ];

  const faqs = [
    {
      q: "When do admissions open for the academic session 2026-2027?",
      a: "Admissions are currently open for all classes from Playgroup to Matric (Grade 10) and F.Sc across all 8 campuses. Early applications are strongly recommended as seats are limited to maintain ideal teacher-student ratios."
    },
    {
      q: "Which education board is Shining Star Public School affiliated with?",
      a: "SSPS is officially affiliated with the Federal Board of Intermediate and Secondary Education (FBISE) Islamabad (Affiliation Code: 1234), with a consistent track record of 100% board distinctions."
    },
    {
      q: "Is safe school transport facility available?",
      a: "Yes, SSPS provides safe, well-monitored school vans and buses covering all major residential sectors across Rawalpindi and Islamabad."
    },
    {
      q: "What digital tools and smart learning facilities are offered?",
      a: "Our campuses feature interactive smartboards, dedicated computer and science laboratories, audio-visual learning aids, and a specialized Parent Portal App for real-time tracking of attendance, homework, and exam results."
    }
  ];

  return (
    <main id="top" className="min-h-screen bg-slate-50 text-slate-800 selection:bg-amber-400 selection:text-slate-900">
      {/* 1. TOP MICRO-HEADER */}
      <header className="w-full bg-[#0A192F] text-slate-200 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs text-slate-300">
            <a 
              href="tel:0515202802" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone size={13} className="text-amber-400" /> 
              <span>051-5202802</span>
            </a>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck size={13} className="text-amber-400" />
              <span>FBISE Affiliation No: 1234</span>
            </div>
            <span className="hidden lg:inline-block text-slate-600">|</span>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <MapPin size={13} className="text-amber-400" />
              <span>8 Campuses Across Rawalpindi & Islamabad</span>
            </div>
          </div>

          {/* Right quick actions & language */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Admissions 2026-27 Open</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <Globe size={13} className="text-amber-400" />
              <span className="text-slate-200 font-semibold">EN</span>
              <span className="text-slate-500">/</span>
              <span className="hover:text-amber-400 cursor-pointer transition-colors">اردو</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.06)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Brand Logo & Name */}
            <Link href="#top" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform group-hover:scale-105">
                <Image 
                  src="/images/Logo_M.png" 
                  alt="Shining Star Public School Logo" 
                  width={56} 
                  height={56} 
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col shrink-0">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-[#0A192F] text-lg sm:text-xl tracking-tight leading-tight font-serif whitespace-nowrap">
                    Shining Star
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 whitespace-nowrap">
                    Est. 1980
                  </span>
                </div>
                <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-amber-600 leading-tight whitespace-nowrap">
                  Public Schools
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 after:transition-all hover:after:w-full whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              <Link
                href="#campuses"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#0A192F] bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all shadow-xs whitespace-nowrap"
              >
                <Monitor size={14} className="text-amber-600" />
                <span>Parent Portal</span>
              </Link>
              <Link
                href="#admissions"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Sparkles size={14} />
                <span>Apply for 2026</span>
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="#admissions"
                className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 shadow-xs"
              >
                <Sparkles size={12} />
                <span>Apply</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:text-[#0A192F] hover:bg-slate-100 transition-colors border border-slate-200"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl"
            >
              <div className="flex flex-col space-y-2 mb-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#campuses"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-[#0A192F] bg-slate-100 border border-slate-300"
                >
                  <Monitor size={16} className="text-amber-600" />
                  <span>Parent Portal Login</span>
                </Link>
                <Link
                  href="#admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-md shadow-amber-500/30"
                >
                  <Sparkles size={16} />
                  <span>Apply for Admission 2026</span>
                </Link>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5"><Phone size={13} className="text-amber-600" /> 051-5202802</span>
                <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-amber-600" /> FBISE: 1234</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 3. HERO ANNOUNCEMENT BANNER */}
      <div className="bg-[#0A192F] text-white py-2.5 px-4 text-center border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-medium">
          <span className="truncate">
            Admissions Open for Academic Session 2026-2027 • Merit Scholarships Available
          </span>
          <Link href="#admissions" className="inline-flex items-center gap-1 text-amber-400 font-bold hover:underline ml-1">
            Register Today →
          </Link>
        </div>
      </div>

      {/* 4. HERO SHOWCASE SECTION */}
      <section className="relative w-full bg-slate-900 overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[340px] sm:min-h-[460px] lg:min-h-[580px] max-h-[720px]">
          <Image
            src="/images/hero.png"
            alt="Shining Star Public School Tayyab Square Campus"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center brightness-[0.98]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none"></div>
          
          <div className="absolute bottom-6 right-6 max-w-7xl mx-auto flex items-center justify-end gap-3 pointer-events-auto">
            <Link
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/30 text-sm transition-all hover:scale-102"
            >
              <Sparkles size={16} />
              <span>Admissions 2026</span>
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-slate-800 font-bold px-6 py-3 rounded-xl shadow-lg text-sm transition-all"
            >
              <span>Learn More</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HERO ACTIONS & TRUST STATS */}
      <section className="px-4 sm:px-6 lg:px-8 pt-10 pb-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Dual Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14 w-full max-w-2xl"
          >
            <Link
              href="#campuses"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0A192F] text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-[#102a4e] transition-all shadow-xl shadow-[#0A192F]/15 hover:-translate-y-0.5"
            >
              <MapPin size={18} className="text-amber-400" />
              <span>Book a Campus Tour</span>
            </Link>
            <a
              href="#admissions"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-base hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Download size={18} className="text-amber-500" />
              <span>Download Prospectus</span>
            </a>
          </motion.div>
          
          {/* 4 Trust Stats with Running Numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 w-full max-w-6xl">
            {[
              { 
                icon: Star, 
                target: 40,
                suffix: "+",
                unit: "Years",
                title: "Legacy of Excellence",
                subtitle: "Nurturing since 1980" 
              },
              { 
                icon: Building2, 
                target: 8,
                suffix: "",
                unit: "Campuses",
                title: "Across Twin Cities",
                subtitle: "Rawalpindi & Islamabad" 
              },
              { 
                icon: Trophy, 
                target: 100,
                suffix: "%",
                unit: "",
                title: "FBISE Distinction",
                subtitle: "Board position holders" 
              },
              { 
                icon: Users, 
                target: 23000,
                suffix: "+",
                unit: "",
                title: "Alumni Network",
                subtitle: "Leaders worldwide" 
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-slate-50 hover:bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-amber-400/50 transition-all duration-300 text-center flex flex-col items-center justify-center group cursor-default"
              >
                <div className="w-9 h-9 mb-2 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="font-extrabold text-2xl sm:text-3xl text-[#0A192F] font-serif tracking-tight leading-tight flex items-baseline justify-center gap-1">
                  <AnimatedStatNumber target={item.target} suffix={item.suffix} duration={2} />
                  {item.unit && <span className="text-xs sm:text-sm font-bold text-amber-600 font-sans">{item.unit}</span>}
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  {item.title}
                </p>
                <p className="text-[11px] text-slate-500 hidden sm:block mt-0.5">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ABOUT US SECTION */}
      <section id="about" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="lg:w-1/2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] mb-6 leading-tight font-serif">
              Four Decades of Educational Excellence
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
              For over four decades, <strong className="text-slate-900 font-semibold">Shining Star Public School</strong> has been a trusted benchmark in primary, secondary, and higher secondary education. Founded in 1980 with just 36 students, SSPS has blossomed into an illustrious network of 8 vibrant campuses across Rawalpindi and Islamabad.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">FBISE Recognized</h4>
                  <p className="text-xs text-slate-500">Official affiliation with top merit standing.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Holistic Personality</h4>
                  <p className="text-xs text-slate-500">Debates, sports galas, and science exhibitions.</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-slate-50 border-l-4 border-amber-500 rounded-r-2xl">
              <p className="text-slate-700 italic font-medium text-sm sm:text-base leading-relaxed">
                "We do not merely teach curriculum; we sculpt character, inspire intellectual curiosity, and empower tomorrow’s leaders to serve society with distinction."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="lg:w-1/2 w-full"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200 bg-slate-900 group">
              <iframe 
                src="https://www.youtube.com/embed/pKHsDHe_QM8?si=sh4xfv3yxadJrd6G" 
                title="Shining Star Public School Documentary" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. LEADERSHIP VISION SECTION - COMPACT & PERFECTLY ALIGNED (LEFT TEXT/RIGHT IMAGE, THEN LEFT IMAGE/RIGHT TEXT) */}
      <section id="leadership" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] mb-3 font-serif">
              Leadership Vision
            </h2>
            <p className="text-base text-slate-600">
              Guided by four decades of institutional wisdom, driven by contemporary innovation.
            </p>
          </div>

          <div className="space-y-6">
            {/* CARD 1: FOUNDER & DIRECTOR (LEFT TEXT, RIGHT IMAGE) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md border border-slate-200/80 hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Text */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-serif leading-tight">
                    Ch. Muhammad Tayyab
                  </h3>
                  <p className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-wider mb-4">
                    Founder & Director
                  </p>

                  <div className="border-l-3 border-amber-500 pl-4 py-1 mb-4 bg-amber-50/50 rounded-r-xl">
                    <p className="text-slate-800 italic text-base sm:text-lg leading-relaxed font-medium">
                      "Our mission since 1980 has been to provide accessible, high-standard education rooted in moral discipline and academic distinction."
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Guiding SSPS for over 40 years across 8 flourishing campuses, ensuring affordable fee structures and ethical development for more than 23,000 successful alumni.
                  </p>
                </div>

                {/* Right Side: Image */}
                <div className="lg:col-span-5 flex justify-center w-full">
                  <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-slate-100">
                    <Image
                      src="/images/director.jpg"
                      alt="Ch. Muhammad Tayyab - Director"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: DEPUTY DIRECTOR (LEFT IMAGE, RIGHT TEXT) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md border border-slate-200/80 hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Image */}
                <div className="lg:col-span-5 flex justify-center w-full order-2 lg:order-1">
                  <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-slate-100">
                    <Image
                      src="/images/deputy-director.png"
                      alt="Ch. Ahmed Ali Tayyab - Deputy Director R&D"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>
                </div>

                {/* Right Side: Text */}
                <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-serif leading-tight">
                    Ch. Ahmed Ali Tayyab
                  </h3>
                  <p className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-wider mb-4">
                    Deputy Director (Research & Development)
                  </p>

                  <div className="border-l-3 border-[#0A192F] pl-4 py-1 mb-4 bg-slate-50 rounded-r-xl">
                    <p className="text-slate-800 italic text-base sm:text-lg leading-relaxed font-medium">
                      "Modern education must cultivate critical inquiry, technological competence, and problem-solving to empower students for a changing world."
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Spearheading smart campus technologies, modernized STEM laboratories, and pedagogical innovation to ensure SSPS students stay ahead in the 21st-century knowledge economy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. ACADEMIC PROGRAMS GRID */}
      <section id="academics" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] mb-3 font-serif">
              Academic Excellence
            </h2>
            <p className="text-base text-slate-600">
              A comprehensive curriculum spanning from early developmental years to higher secondary board certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academics.map((prog, i) => {
              const IconComponent = i === 0 ? Sparkles : i === 1 ? BookOpen : GraduationCap;
              return (
                <motion.div 
                  key={prog.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.08 }} 
                  className="bg-white hover:bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                        <IconComponent size={20} />
                      </div>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {prog.grades}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0A192F] font-serif mb-2 leading-tight">
                      {prog.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 min-h-[40px]">
                      {prog.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-5">
                      {prog.highlights.map((h, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle size={15} className="text-amber-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="#admissions"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A192F] group-hover:text-amber-600 transition-colors"
                    >
                      <span>Explore Details</span>
                      <ChevronRight size={14} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[11px] font-semibold text-slate-400">2026-27</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE SSPS - FEATURE MATRIX */}
      <section id="why-ssps" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A192F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-serif">
              Why Parents Choose SSPS
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              A holistic educational ecosystem that blends academic rigor, state-of-the-art infrastructure, and timeless moral values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                image: "/images/feat_results_pak.jpg", 
                title: "100% FBISE Results", 
                desc: "Consistently producing high percentage board position holders and medical/engineering entries year after year." 
              },
              { 
                image: "/images/feat_tech_pak.jpg", 
                title: "Smart Tech Integration", 
                desc: "Interactive smart screens, high-speed computer labs, and a dedicated Parent Portal App for instant updates." 
              },
              { 
                image: "/images/feat_growth_pak.jpg", 
                title: "360° Personality Growth", 
                desc: "Debating societies, sports galas, robotics showcases, science exhibitions, and community leadership initiatives." 
              },
              { 
                image: "/images/feat_facilities_pak.jpg", 
                title: "Modern Lab Facilities", 
                desc: "Fully equipped Physics, Chemistry, Biology, and Computer Science laboratories adhering to international standards." 
              },
              { 
                image: "/images/feat_values_pak.jpg", 
                title: "Values & Moral Ethics", 
                desc: "Strong cultural and ethical foundation harmoniously synchronized with 21st-century global academic excellence." 
              },
              { 
                image: "/images/feat_counseling_pak.jpg", 
                title: "Student Counseling", 
                desc: "Proactive psychological well-being, career guidance, and personalized academic mentoring for every learner." 
              },
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.06 }} 
                className="bg-white/5 backdrop-blur-md overflow-hidden rounded-3xl border border-white/10 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300 flex flex-col group"
              >
                <div className="h-52 w-full relative overflow-hidden">
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent"></div>
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2.5 font-serif group-hover:text-amber-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INTERACTIVE CAMPUS EXPLORER */}
      <section id="campuses" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] mb-4 font-serif">
              Explore Our 8 Campuses
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Strategically located across Rawalpindi and Islamabad to provide safe, easily accessible premier schooling for your child.
            </p>
          </div>
          
          {/* Campus Selector Badges */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-5xl mx-auto">
            {campuses.map(campus => (
              <button 
                key={campus.id}
                onClick={() => setActiveCampus(campus)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activeCampus.id === campus.id 
                    ? 'bg-[#0A192F] text-amber-400 shadow-lg shadow-[#0A192F]/20 ring-2 ring-amber-400' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {campus.name}
              </button>
            ))}
          </div>

          {/* Active Campus Display Card */}
          <motion.div 
            key={activeCampus.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center shadow-xl shadow-slate-200/50"
          >
            {/* Interactive Embedded Map */}
            <div className="flex-1 w-full bg-slate-100 rounded-2xl aspect-video lg:aspect-[16/10] relative overflow-hidden shadow-inner border border-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.45564187104696!2d73.01335342114436!3d33.58856188290786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95bdc8f5cae9%3A0x5d3efdd175743ee6!2sShining%20Star%20Public%20School!5e0!3m2!1sen!2s!4v1790268693494!5m2!1sen!2s" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title={`Map of ${activeCampus.name}`}
              ></iframe>
            </div>

            {/* Campus Information & Contact */}
            <div className="flex-1 w-full">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] mb-4 font-serif">
                {activeCampus.name}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <MapPin size={22} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase block">Campus Address</span>
                    <span className="text-slate-800 font-medium text-sm sm:text-base">{activeCampus.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <Phone size={22} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase block">Direct Phone Line</span>
                    <a href={`tel:${activeCampus.phone}`} className="text-[#0A192F] font-bold text-base hover:text-amber-600 transition-colors">
                      {activeCampus.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase block">Visiting Hours</span>
                    <span className="text-slate-800 font-medium text-sm">Monday – Saturday: 8:00 AM – 2:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://maps.google.com/?q=Shining+Star+Public+School" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-[#0A192F] text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-[#102a4e] transition-all shadow-md"
                >
                  <ExternalLink size={16} />
                  <span>Open in Google Maps</span>
                </a>
                <a 
                  href={`tel:${activeCampus.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-amber-600 transition-all shadow-md shadow-amber-500/25"
                >
                  <Phone size={16} />
                  <span>Call Campus Office</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 11. LIFE AT SSPS PHOTO GALLERY */}
      <section id="life" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] mb-4 font-serif">
            Life at SSPS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            Experience the vibrant campus spirit, athletic meets, science expos, and cultural celebrations shaping our students.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[260px]">
            {/* Sports Gala */}
            <div 
              className="sm:col-span-2 row-span-2 bg-slate-100 rounded-3xl relative overflow-hidden group flex items-end p-6 sm:p-8 border border-slate-200 bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('/images/sport.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-0 group-hover:from-black/90 transition-all duration-300"></div>
              <div className="relative z-10 text-left w-full">
                <h3 className="text-white font-bold text-2xl sm:text-3xl font-serif mb-2 drop-shadow-md">
                  Annual Sports Gala
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md hidden sm:block">
                  Fostering teamwork, endurance, sportsmanship, and physical fitness across all campuses.
                </p>
              </div>
            </div>
            
            {/* Science Expo */}
            <div 
              className="bg-slate-100 rounded-3xl relative overflow-hidden group flex items-end p-5 border border-slate-200 bg-cover bg-center shadow-md"
              style={{ backgroundImage: "url('/images/science.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-0 group-hover:from-black/90 transition-all duration-300"></div>
              <div className="relative z-10 text-left">
                <h3 className="text-white font-bold text-lg font-serif">Science Expo</h3>
              </div>
            </div>
            
            {/* Debate Competition */}
            <div 
              className="bg-slate-100 rounded-3xl relative overflow-hidden group flex items-end p-5 border border-slate-200 bg-cover bg-center shadow-md"
              style={{ backgroundImage: "url('/images/debate.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-0 group-hover:from-black/90 transition-all duration-300"></div>
              <div className="relative z-10 text-left">
                <h3 className="text-white font-bold text-lg font-serif">Debate Championship</h3>
              </div>
            </div>
            
            {/* Prize Distribution */}
            <div 
              className="sm:col-span-2 bg-slate-100 rounded-3xl relative overflow-hidden group flex items-end p-6 border border-slate-200 bg-cover bg-center shadow-md"
              style={{ backgroundImage: "url('/images/prize.PNG')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-0 group-hover:from-black/90 transition-all duration-300"></div>
              <div className="relative z-10 text-left">
                <h3 className="text-white font-bold text-xl font-serif">Annual Prize Distribution Ceremony</h3>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <a 
              href="https://www.facebook.com/shiningstarpublicschools" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2.5 bg-[#1877F2] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#0C63D4] transition-all shadow-xl shadow-blue-500/20 hover:scale-102"
            >
              <Facebook size={20} />
              <span>Explore More Student Events on Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS 2026 */}
      <section id="admissions" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] mb-4 font-serif">
              Admission Process 2026-2027
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Join the Shining Star family in 4 streamlined steps designed for student and parent convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { 
                step: "01", 
                title: "Online Inquiry / Form", 
                desc: "Fill the admission registration form online or visit any campus front desk.",
                icon: Globe 
              },
              { 
                step: "02", 
                title: "Campus Assessment", 
                desc: "Informal concept evaluation to assess child's current grade readiness.",
                icon: MapPin 
              },
              { 
                step: "03", 
                title: "Parent Interaction", 
                desc: "Interactive orientation discussion with the campus principal and faculty.",
                icon: Users 
              },
              { 
                step: "04", 
                title: "Fee & Enrollment", 
                desc: "Fee submission, welcome package, syllabus collection and class allotment.",
                icon: ShieldCheck 
              },
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center flex flex-col items-center hover:bg-white hover:shadow-xl hover:border-amber-400/60 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#0A192F] text-amber-400 rounded-2xl flex items-center justify-center mb-4 shadow-md">
                  <s.icon size={26} />
                </div>
                <span className="text-xs font-black tracking-widest text-amber-600 uppercase mb-1">
                  Step {s.step}
                </span>
                <h4 className="font-bold text-base text-[#0A192F] mb-2 font-serif">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-14 p-8 bg-gradient-to-r from-[#0A192F] to-[#122b52] rounded-3xl text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-serif mb-1 text-white">Ready to Enroll Your Child?</h3>
              <p className="text-slate-300 text-sm">Download the prospectus or contact our central admissions desk today.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a 
                href="tel:0515202802"
                className="bg-white text-[#0A192F] hover:bg-slate-100 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all"
              >
                Call: 051-5202802
              </a>
              <button 
                onClick={() => alert("Please contact the admissions office at 051-5202802 or visit Tayyab Square campus to collect the 2026 Admission Kit.")}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-amber-500/30 transition-all cursor-pointer"
              >
                Apply Online Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] mb-4 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Clear answers to the most common questions from prospective parents.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0A192F] hover:text-amber-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-amber-500" : ""}`} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <p className="pt-3">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. COMPREHENSIVE FOOTER */}
      <footer id="contact" className="bg-[#0A192F] text-slate-300 pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand info */}
          <div>
            <div className="flex items-center gap-3.5 mb-6">
              <div className="bg-white p-2 rounded-2xl shadow-md shrink-0 w-14 h-14 flex items-center justify-center">
                <Image 
                  src="/images/Logo_M.png" 
                  alt="Shining Star Public School Logo" 
                  width={48} 
                  height={48} 
                  className="object-contain w-full h-full" 
                />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white font-serif leading-tight">Shining Star</h3>
                <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Public Schools</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Nurturing Mind, Character & Leadership Since 1980. Affiliated with the Federal Board of Intermediate & Secondary Education (FBISE), Islamabad.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/shiningstarpublicschools" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-transparent text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600 hover:border-transparent text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500 hover:border-transparent text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-bold text-base mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span> 
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#about" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all">About SSPS</Link></li>
              <li><Link href="#leadership" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all">Leadership Vision</Link></li>
              <li><Link href="#academics" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all">Academic Overview</Link></li>
              <li><Link href="#campuses" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all">Our 8 Campuses</Link></li>
              <li><Link href="#life" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all">Life at SSPS</Link></li>
              <li><Link href="#admissions" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all">Admissions 2026-27</Link></li>
            </ul>
          </div>

          {/* Portals & Information */}
          <div>
            <h4 className="font-bold text-base mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span> 
              Portals & Resources
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li>
                <Link href="#admissions" className="hover:text-white transition flex items-center gap-2">
                  <Globe size={15} className="text-amber-400" /> Online Admission 2026
                </Link>
              </li>
              <li>
                <Link href="#campuses" className="hover:text-white transition flex items-center gap-2">
                  <Monitor size={15} className="text-amber-400" /> Parent Portal Login
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition flex items-center gap-2">
                  <BookOpen size={15} className="text-amber-400" /> Curriculum & FBISE Tracks
                </Link>
              </li>
              <li>
                <Link href="#admissions" className="hover:text-white transition flex items-center gap-2">
                  <Download size={15} className="text-amber-400" /> School Prospectus
                </Link>
              </li>
              <li>
                <Link href="#admissions" className="hover:text-white transition flex items-center gap-2">
                  <ShieldCheck size={15} className="text-amber-400" /> Code of Discipline
                </Link>
              </li>
            </ul>
          </div>

          {/* Head Office Contact */}
          <div>
            <h4 className="font-bold text-base mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span> 
              Head Office Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
                <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" /> 
                <span className="text-slate-300 leading-relaxed">
                  Tayyab Square, Misrial Road, Rawalpindi, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
                <Phone size={18} className="text-amber-400 shrink-0" /> 
                <a href="tel:0515202802" className="font-bold text-white hover:text-amber-400 transition-colors">
                  051-5202802 / 051-5202803
                </a>
              </li>
              <li className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
                <Mail size={18} className="text-amber-400 shrink-0" /> 
                <a href="mailto:ssps1980@gmail.com" className="font-medium text-white hover:text-amber-400 transition-colors">
                  ssps1980@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© 1980 – 2026 Shining Star Public Schools (SSPS). All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#top" className="hover:text-amber-400 transition-colors">Back to Top ↑</Link>
            <Link href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

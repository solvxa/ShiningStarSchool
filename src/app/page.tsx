"use client";
import { motion } from "framer-motion";
import { MapPin, BookOpen, Users, Trophy, ChevronRight, Download, Phone, Globe, Star, PlayCircle, ShieldCheck, Mail, CheckCircle, Monitor, Heart, Activity } from "lucide-react";

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const Twitter = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
import Image from "next/image";
import Link from "next/link";
import campuses from "@/data/campuses.json";
import testimonials from "@/data/testimonials.json";
import academics from "@/data/academics.json";
import { useState } from "react";

export default function Home() {
  const [activeCampus, setActiveCampus] = useState(campuses[0]);

  return (
    <main className="min-h-screen bg-background">
      {/* Top Micro-Bar */}
      <div className="bg-primary text-white text-sm py-2 px-6 flex justify-between items-center hidden md:flex">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Phone size={14} /> 051-5202802</span>
          <span className="flex items-center gap-1"><ShieldCheck size={14} /> FBISE Affiliation Code: 1234</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe size={14} /> EN | UR
        </div>
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="SSPS Logo" width={50} height={50} className="object-contain" />
          <div>
            <h1 className="font-bold text-primary text-xl leading-tight">Shining Star<br/>Public Schools</h1>
            <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full font-semibold">Est. 1980</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-6 text-sm font-medium text-primary">
          <Link href="#about" className="hover:text-secondary transition">About</Link>
          <Link href="#academics" className="hover:text-secondary transition">Academics</Link>
          <Link href="#campuses" className="hover:text-secondary transition">Campuses</Link>
          <Link href="#life" className="hover:text-secondary transition">Life at SSPS</Link>
        </div>
        <div className="flex gap-3">
          <button className="hidden md:block border-2 border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary/5 transition">Parent App Login</button>
          <button className="bg-secondary text-white px-5 py-2 rounded-lg font-bold shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transition">Apply for 2026</button>
        </div>
      </nav>

      {/* Hero Image Section */}
      <section className="w-full bg-white relative">
        <img src="/images/hero.png" alt="Shining Star Public School" className="w-full h-auto block" />
      </section>

      {/* Hero Actions & Stats Section */}
      <section className="px-6 lg:px-20 pt-12 pb-20 bg-gray-50 flex flex-col items-center border-b border-gray-100 relative z-10">
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full max-w-4xl"
        >
          <button className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition shadow-xl shadow-primary/20">
            Book a Campus Tour
          </button>
          <button className="w-full sm:w-auto bg-white text-primary border border-gray-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
            <Download size={20} /> Download Prospectus
          </button>
        </motion.div>
        
        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl"
        >
          {[
            { icon: Star, title: "40+ Years", desc: "Legacy of Excellence" },
            { icon: MapPin, title: "8 Campuses", desc: "Across Twin Cities" },
            { icon: Trophy, title: "100%", desc: "FBISE Distinction" },
            { icon: Users, title: "23,000+", desc: "Alumni Network" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 text-center hover:-translate-y-2 transition-all duration-300 cursor-default">
              <item.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-extrabold text-3xl text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-slate font-medium uppercase tracking-wider">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-bold text-sm mb-6 uppercase tracking-widest">
              Our Legacy
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">About Us</h2>
            <p className="text-lg text-slate mb-6 leading-relaxed">
              For over four decades, Shining Star Public School has been a trusted name in education, nurturing young minds with knowledge, discipline, and values. From a humble start in 1980 with just 36 students, the school has grown into one of the region’s most respected institutions, excelling in academics, extracurriculars, and community service.
            </p>
            <p className="text-lg text-slate leading-relaxed border-l-4 border-secondary pl-4 py-2 bg-gray-50 rounded-r-xl">
              With modern facilities and a legacy of achievements, we shape future leaders excelling in every field.
            </p>
          </motion.div>
          <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="lg:w-1/2 w-full">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-4 ring-gray-50">
              <iframe 
                src="https://www.youtube.com/embed/pKHsDHe_QM8?si=sh4xfv3yxadJrd6G" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Director's Vision */}
      <section id="leadership" className="py-24 px-6 lg:px-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Leadership Vision</h2>
            <p className="text-slate max-w-2xl mx-auto">Guided by experience, driven by innovation. Meet the minds shaping the future of SSPS.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 relative">
              <div className="text-8xl text-secondary/10 absolute top-4 left-4 font-serif">"</div>
              <p className="text-lg text-slate italic mb-8 relative z-10 pt-6">Affordable, Quality Education Rooted in Values. Our core mission is to provide an inclusive environment where every child is empowered to discover their potential and shine brightly in their community.</p>
              <div className="flex items-center gap-5 border-t border-gray-100 pt-6">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-md">
                  <Image src="/images/director.jpg" alt="Ch. Muhammad Tayyab" width={64} height={64} className="object-cover w-full h-full" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl">Ch. Muhammad Tayyab</h4>
                  <p className="text-sm text-secondary font-semibold tracking-wide uppercase">Director</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 relative">
              <div className="text-8xl text-secondary/10 absolute top-4 left-4 font-serif">"</div>
              <p className="text-lg text-slate italic mb-8 relative z-10 pt-6">Modernizing Pedagogy through Smart Classrooms & Critical Thinking. We prepare our students not just to ace their board exams, but to navigate and lead in the fast-paced modern world.</p>
              <div className="flex items-center gap-5 border-t border-gray-100 pt-6">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-md">
                  <Image src="/images/deputy-director.png" alt="Ch. Ahmed Ali Tayyab" width={64} height={64} className="object-cover w-full h-full" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl">Ch. Ahmed Ali Tayyab</h4>
                  <p className="text-sm text-secondary font-semibold tracking-wide uppercase">Deputy Director (R&D)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Programs Grid */}
      <section id="academics" className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Academic Excellence</h2>
            <p className="text-slate max-w-2xl mx-auto">A comprehensive and modern curriculum spanning from early childhood to higher secondary education.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {academics.map((prog, i) => (
              <motion.div key={prog.id} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.1}} className="group bg-gray-50 rounded-3xl p-8 hover:bg-primary transition-all duration-300 cursor-pointer border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-primary group-hover:text-white mb-2 transition-colors">{prog.title}</h3>
                <p className="text-secondary font-semibold mb-4 bg-secondary/10 inline-block px-3 py-1 rounded-full text-sm group-hover:bg-white/10 group-hover:text-secondary-light">{prog.grades}</p>
                <p className="text-slate group-hover:text-gray-200 mb-6 transition-colors">{prog.description}</p>
                <ul className="space-y-3">
                  {prog.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate font-medium group-hover:text-gray-300 transition-colors">
                      <CheckCircle size={18} className="text-secondary" /> {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SSPS? (Feature Matrix) */}
      <section className="py-24 px-6 lg:px-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose SSPS?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">A holistic approach to education combining modern tech-driven facilities with strong ethical values.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: "/images/feat_results_pak.jpg", title: "100% FBISE Results", desc: "Consistently producing high percentage position holders year after year." },
              { image: "/images/feat_tech_pak.jpg", title: "Smart Tech Integration", desc: "Interactive smartboards and a dedicated Android/iOS Parent Portal App." },
              { image: "/images/feat_growth_pak.jpg", title: "360° Personality Growth", desc: "Debate societies, athletic leagues, science expos, and community service clubs." },
              { image: "/images/feat_facilities_pak.jpg", title: "Modern Facilities", desc: "Fully equipped Physics, Chemistry, Bio & CS labs, with a safe transport network." },
              { image: "/images/feat_values_pak.jpg", title: "Values & Cultural Framework", desc: "Ethical grounding seamlessly blended with modern global standards." },
              { image: "/images/feat_counseling_pak.jpg", title: "Student Counseling", desc: "Dedicated academic guidance and proactive mental well-being support." },
            ].map((feature, i) => (
              <motion.div key={i} initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay: i*0.05}} className="bg-white/5 backdrop-blur-md overflow-hidden rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col group">
                <div className="h-48 w-full relative overflow-hidden">
                  <Image src={feature.image} alt={feature.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Flow */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Admission Process 2026</h2>
            <p className="text-slate max-w-2xl mx-auto">Join the Shining Star family in 4 simple steps.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
            {[
              { step: 1, title: "Online Application", icon: Globe },
              { step: 2, title: "Campus Visit & Assessment", icon: MapPin },
              { step: 3, title: "Parent Interview", icon: Users },
              { step: 4, title: "Admission Confirmation", icon: ShieldCheck },
            ].map((s, i) => (
              <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.1}} className="relative z-10 flex flex-col items-center bg-white p-4 w-48 mb-8 md:mb-0">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg ring-4 ring-white">
                  <s.icon size={28} />
                </div>
                <div className="text-secondary font-bold mb-1">Step {s.step}</div>
                <h4 className="font-bold text-primary text-center text-sm">{s.title}</h4>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition shadow-xl shadow-secondary/30">
              Start Application Now
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Campus Explorer */}
      <section id="campuses" className="py-24 px-6 lg:px-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Explore Our Campuses</h2>
            <p className="text-slate max-w-2xl mx-auto">State-of-the-art facilities designed to foster learning, creativity, and physical well-being across the twin cities.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {campuses.map(campus => (
              <button 
                key={campus.id}
                onClick={() => setActiveCampus(campus)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${activeCampus.id === campus.id ? 'bg-primary text-white shadow-lg ring-2 ring-primary ring-offset-2' : 'bg-white text-slate hover:bg-gray-100 border border-gray-200'}`}
              >
                {campus.name}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeCampus.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 flex flex-col md:flex-row gap-10 items-center shadow-xl shadow-gray-200/30"
          >
            <div className="flex-1 w-full bg-gray-100 rounded-2xl aspect-video relative overflow-hidden group shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.45564187104696!2d73.01335342114436!3d33.58856188290786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95bdc8f5cae9%3A0x5d3efdd175743ee6!2sShining%20Star%20Public%20School!5e0!3m2!1sen!2s!4v1790268693494!5m2!1sen!2s" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin">
              </iframe>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-primary mb-4">{activeCampus.name}</h3>
              <div className="space-y-4 mb-8">
                <p className="text-slate flex items-center gap-3 text-lg bg-gray-50 p-4 rounded-xl"><MapPin size={24} className="text-secondary" /> {activeCampus.address}</p>
                <p className="text-slate flex items-center gap-3 text-lg bg-gray-50 p-4 rounded-xl"><Phone size={24} className="text-secondary" /> {activeCampus.phone}</p>
              </div>
              <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition flex items-center justify-center gap-2 shadow-lg">
                Open in Google Maps <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Life at SSPS / Facebook Teaser */}
      <section id="life" className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Life at SSPS</h2>
          <p className="text-slate max-w-2xl mx-auto mb-12">Experience the vibrant activities, sports galas, science expos and cultural events shaping our students' lives.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {/* Sports Gala */}
            <div 
              className="sm:col-span-2 row-span-2 bg-gray-100 rounded-3xl relative overflow-hidden group flex items-end p-6 border border-gray-200 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/sport.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 group-hover:bg-black/40 transition"></div>
              <div className="relative z-10 text-left w-full">
                <p className="text-secondary font-bold text-sm mb-1 uppercase tracking-wider shadow-sm">Recent Event</p>
                <h3 className="text-white font-bold text-2xl drop-shadow-md">Annual Sports Gala 2025</h3>
              </div>
            </div>
            
            {/* Science Expo */}
            <div 
              className="bg-gray-100 rounded-3xl relative overflow-hidden group flex items-end p-5 border border-gray-200 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/science.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 group-hover:bg-black/40 transition"></div>
              <h3 className="relative z-10 text-white font-bold text-lg drop-shadow-md">Science Expo</h3>
            </div>
            
            {/* Debate Competition */}
            <div 
              className="bg-gray-100 rounded-3xl relative overflow-hidden group flex items-end p-5 border border-gray-200 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/debate.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 group-hover:bg-black/40 transition"></div>
              <h3 className="relative z-10 text-white font-bold text-lg drop-shadow-md">Debate Competition</h3>
            </div>
            
            {/* Prize Distribution */}
            <div 
              className="sm:col-span-2 bg-gray-100 rounded-3xl relative overflow-hidden group flex items-end p-5 border border-gray-200 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/prize.PNG')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 group-hover:bg-black/40 transition"></div>
              <h3 className="relative z-10 text-white font-bold text-lg drop-shadow-md">Annual Prize Distribution Ceremony</h3>
            </div>
          </div>

          <a href="https://www.facebook.com/shiningstarpublicschools" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-xl font-bold mt-12 hover:bg-[#0C63D4] transition shadow-xl shadow-blue-500/20">
            <Facebook size={24} /> View All Activity on Facebook
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary pt-20 pb-10 px-6 lg:px-20 text-white border-t-4 border-secondary">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-xl shadow-inner"><Image src="/images/logo.png" alt="SSPS" width={50} height={50} className="object-contain" /></div>
              <h3 className="font-bold text-xl leading-tight text-white">Shining Star<br/>Public Schools</h3>
            </div>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">Nurturing Mind, Character & Leadership Since 1980. Affiliated with the Federal Board of Intermediate & Secondary Education (FBISE).</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/shiningstarpublicschools" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-transparent transition-all shadow-lg"><Facebook size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600 hover:border-transparent transition-all shadow-lg"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500 hover:border-transparent transition-all shadow-lg"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6 text-white flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div> Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link href="#about" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">About Us</Link></li>
              <li><Link href="#academics" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Academics Overview</Link></li>
              <li><Link href="#campuses" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Our Campuses</Link></li>
              <li><Link href="#life" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Life at SSPS</Link></li>
              <li><Link href="#" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Careers / Jobs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-white flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div> Portals & Info</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link href="#" className="hover:text-white transition flex items-center gap-2"><Globe size={16} /> Online Admission 2026</Link></li>
              <li><Link href="#" className="hover:text-white transition flex items-center gap-2"><Monitor size={16} /> Parent Portal Login</Link></li>
              <li><Link href="#" className="hover:text-white transition flex items-center gap-2"><BookOpen size={16} /> Fee Structure & Policies</Link></li>
              <li><Link href="#" className="hover:text-white transition flex items-center gap-2"><Download size={16} /> Download Prospectus (PDF)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-white flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"></div> Contact Us</h4>
            <ul className="space-y-5 text-gray-400 text-sm">
              <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/20 transition cursor-default">
                <MapPin size={20} className="text-secondary shrink-0 mt-0.5" /> 
                <span className="leading-relaxed">Main Head Office, <br/>Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/20 transition cursor-default">
                <Phone size={20} className="text-secondary shrink-0" /> 
                <span className="font-medium text-white text-base">051-5202802</span>
              </li>
              <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/20 transition cursor-default">
                <Mail size={20} className="text-secondary shrink-0" /> 
                <span className="font-medium text-white text-base">ssps1980@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
          <p>Copyright © 2026 Shining Star Public Schools. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-secondary transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary transition">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

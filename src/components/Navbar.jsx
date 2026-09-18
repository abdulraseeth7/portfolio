import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Clock, Globe } from 'lucide-react';

export default function Navbar() {
  const [time, setTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Live clock in IST / Local
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // Section ScrollSpy
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', num: '01' },
    { name: 'Skills', href: '#skills', id: 'skills', num: '02' },
    { name: 'Projects', href: '#projects', id: 'projects', num: '03' },
    { name: 'Experience', href: '#experience', id: 'experience', num: '04' },
    { name: 'Contact', href: '#contact', id: 'contact', num: '05' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 md:px-8 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none">
      <div 
        className={`max-w-7xl mx-auto rounded-full pointer-events-auto transition-all duration-300 ${
          scrolled 
            ? 'bg-[#F6F5ED]/90 backdrop-blur-xl border-2 border-black/15 shadow-[0_10px_30px_rgba(0,0,0,0.12)] py-2.5 px-4 sm:px-6' 
            : 'bg-white/60 backdrop-blur-md border border-black/10 shadow-sm py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* LOGO & BRAND MONOGRAM */}
          <a href="#" className="group flex items-center gap-2.5 text-decoration-none">
            {/* Tactile Stamp Monogram */}
            <div className="relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#121212] rounded-xl flex items-center justify-center text-[#CEEC2E] font-archivo text-lg sm:text-xl shadow-md group-hover:rotate-12 group-hover:scale-105 transition-all duration-300 border border-white/20">
                R
              </div>
              {/* Year Stamp Tag */}
              <div className="absolute -top-1.5 -right-2 bg-[#CEEC2E] text-[#121212] font-archivo text-[9px] font-bold px-1 py-0.2 rounded shadow-sm border border-black/80 rotate-12 group-hover:rotate-0 transition-transform">
                '26
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-archivo text-sm sm:text-base tracking-tight uppercase text-[#121212] group-hover:text-black transition-colors">
                  ABDUL RASEETH
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#9B7FE6] opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-black/60 -mt-1 font-medium">
                Software &amp; Full Stack Developer
              </span>
            </div>
          </a>



          {/* DESKTOP NAV LINKS WITH HIGHLIGHT PILL */}
          <nav className="hidden md:flex items-center gap-1 bg-black/5 p-1 rounded-full border border-black/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-archivo uppercase tracking-wider transition-all duration-200 ${
                    isActive 
                      ? 'bg-[#CEEC2E] text-black font-black shadow-sm scale-105 border border-black/20' 
                      : 'text-black/75 hover:text-black hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden sm:flex items-center gap-2">
            <a 
              href="#contact" 
              className="group relative inline-flex items-center gap-1.5 bg-[#121212] hover:bg-black text-[#CEEC2E] font-archivo text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 border border-white/20"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-black hover:bg-black/10 transition-colors border border-black/10 bg-white/80"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* MOBILE DROPDOWN OVERLAY */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 bg-[#F6F5ED]/95 backdrop-blur-2xl rounded-3xl border-2 border-black/15 shadow-2xl flex flex-col gap-3 font-semibold text-sm pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-black/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CEEC2E]"></span>
              <span className="text-xs font-mono font-bold uppercase text-black/70">NAVIGATION MENU</span>
            </div>
            <span className="text-xs font-mono text-black/50">{time} IST</span>
          </div>

          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2.5 px-4 rounded-2xl flex items-center justify-between transition-all ${
                  isActive 
                    ? 'bg-[#CEEC2E] text-black font-archivo shadow-sm border border-black/20' 
                    : 'text-black hover:bg-black/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-black/40">{link.num}</span>
                  <span className="font-archivo text-sm uppercase tracking-wider">{link.name}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-black/40" />
              </a>
            );
          })}

          <div className="pt-3 border-t border-black/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-mono text-black/70">
              <span className="w-2 h-2 rounded-full bg-[#CEEC2E] animate-ping"></span>
              <span>Available for Hire</span>
            </div>
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#121212] text-[#CEEC2E] text-xs font-archivo uppercase px-4 py-2 rounded-full shadow-md"
            >
              Get In Touch ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


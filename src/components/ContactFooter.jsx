import React, { useState } from 'react';
import LilacStar from './LilacStar';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Sparkles,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopy = () => {
    navigator.clipboard.writeText('raseethabdul23@gmail.com');
    setCopiedEmail(true);
    confetti({ particleCount: 40, spread: 70, origin: { y: 0.8 } });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    confetti({ particleCount: 70, spread: 90, origin: { y: 0.6 } });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-dark-paper text-white pt-16 pb-12 overflow-hidden select-none">
      
      {/* Decorative Lilac Stars in Dark Mode */}
      <div className="absolute top-10 left-8 z-10 animate-float-slow">
        <LilacStar className="w-14 h-14" rotation={-15} color="#B49DF8" />
      </div>
      <div className="absolute bottom-20 right-10 z-10 animate-float-reverse">
        <LilacStar className="w-12 h-12" rotation={25} color="#B49DF8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Big Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lime" />
            <span className="text-xs font-mono uppercase text-lime tracking-widest font-semibold">
              START A CONVERSATION
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-archivo uppercase tracking-tight text-white leading-none">
            LET'S WORK <span className="text-lime">TOGETHER</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 font-sans max-w-xl mx-auto">
            Available for full-time software engineering roles, full-stack web platforms, and ML solution collaborations.
          </p>
        </div>

        {/* Two-Column Contact Interaction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Action Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="bg-neutral-900 border-2 border-white/20 rounded-2xl p-6 relative group shadow-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-lime font-bold">
                PRIMARY INBOX
              </span>
              <h3 className="font-archivo text-xl sm:text-2xl text-white mt-1 mb-2">
                raseethabdul23@gmail.com
              </h3>
              <p className="text-xs text-white/60 mb-4">
                Tirunelveli, Tamil Nadu | Fast responses within 24 hours for project inquiries or opportunities.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="flex-1 bg-lime text-ink hover:bg-lime-light font-archivo text-xs uppercase py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-ink" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                </button>
                <a
                  href="mailto:raseethabdul23@gmail.com"
                  className="bg-white/10 hover:bg-white/20 text-white font-archivo text-xs uppercase py-2.5 px-4 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct</span>
                </a>
              </div>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="bg-neutral-900 border-2 border-white/20 rounded-2xl p-6 relative group shadow-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-lime font-bold">
                INSTANT MESSAGING
              </span>
              <h3 className="font-archivo text-xl text-white mt-1 mb-2">
                +91 8122314410
              </h3>
              <p className="text-xs text-white/60 mb-4">
                Available on WhatsApp and direct telephone for career &amp; project opportunities.
              </p>
              <a
                href="https://wa.me/918122314410"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-archivo text-xs uppercase py-2 px-4 rounded-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/raseeth"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-neutral-900 hover:bg-neutral-800 border border-white/20 p-3 rounded-xl flex items-center justify-center gap-2 text-xs font-archivo uppercase text-white transition-colors"
              >
                <Github className="w-4 h-4 text-lime" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-neutral-900 hover:bg-neutral-800 border border-white/20 p-3 rounded-xl flex items-center justify-center gap-2 text-xs font-archivo uppercase text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Quick Message Form */}
          <div className="lg:col-span-7 bg-[#1A1A1A] border-2 border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <h3 className="font-archivo text-xl uppercase tracking-tight text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-white/60 mt-0.5">
                  Drop a project idea, inquiry, or greeting.
                </p>
              </div>
              <span className="bg-lime text-ink text-[10px] font-archivo uppercase px-2 py-0.5 rounded">
                '26 PORTFOLIO
              </span>
            </div>

            {formSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-lime rounded-full flex items-center justify-center text-ink mx-auto text-2xl font-archivo shadow-lg animate-bounce">
                  ✓
                </div>
                <h4 className="font-archivo text-2xl text-white uppercase">
                  Message Dispatched!
                </h4>
                <p className="text-sm text-white/70 max-w-sm mx-auto">
                  Thank you for reaching out! I will review your message and get back to you promptly.
                </p>
                <button
                  onClick={() => {
                    setFormSent(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="text-xs font-mono uppercase text-lime underline hover:text-white pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-lime transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/70 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-lime transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/70 mb-1.5">
                    Project Details or Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project scope, timeline, or engineering opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-lime transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-lime hover:bg-lime-light text-ink font-archivo text-xs sm:text-sm uppercase tracking-wider py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:translate-y-[-1px] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Sub-Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime"></span>
            <span>© 2026 ABDUL RASEETH. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Designed &amp; Developed with Editorial Paper Art</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full transition-colors text-[11px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

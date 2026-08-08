import React from 'react';
import { Flame, Check, Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82c-1.02-.88-1.64-2.13-1.72-3.52h-3.1v13.86c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.28 0 .55.04.8.12V10.5a5.86 5.86 0 0 0-.8-.06 5.82 5.82 0 1 0 5.82 5.82V9.02a7.9 7.9 0 0 0 4.62 1.48V7.4a4.85 4.85 0 0 1-2.9-1.58z" />
    </svg>
  );
}

interface FooterProps {
  onNav: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

export default function Footer({ onNav }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: 'home' | 'services' | 'about' | 'contact') => {
    onNav(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-darker text-white pt-20 pb-10 relative overflow-hidden bg-grain">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 accent-bar" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">

          {/* Column 1: Company Profile */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleLinkClick('home')}>
              <div className="flex items-center justify-center h-11 w-11 bg-brand-accent group-hover:scale-105 transition-transform">
                <Flame className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  primo<span className="text-brand-accent">.</span>
                </span>
                <span className="block text-[9px] font-semibold tracking-[0.18em] text-gray-400 uppercase -mt-0.5">
                  Energy Oil &amp; Gas Co. Ltd
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Primo Energy Oil &amp; Gas Co. Limited is a Nigerian energy company committed to delivering high-quality petroleum products and energy solutions to businesses, industries, institutions, and households.
            </p>

            <div className="pt-2 text-xs text-gray-500">
              &copy; {currentYear} Primo Energy Oil &amp; Gas Co. Limited. All rights reserved.
              <span className="block mt-1 font-mono">CAC Registration No: 7830522</span>
            </div>
          </div>

          {/* Column 2: Quick Navigations */}
          <div className="space-y-5">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-3">
              Navigations
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {[
                  { label: 'Home Page', page: 'home' as const },
                  { label: 'Services Index', page: 'services' as const },
                  { label: 'About Our Fleet', page: 'about' as const },
                  { label: 'Contact Desk', page: 'contact' as const },
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.page)}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-accent transition text-left"
                  >
                    <Check className="h-3.5 w-3.5 text-brand-accent" />
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Corporate Contacts */}
          <div className="space-y-5">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-3">
              Head Office
            </h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <span>Plot 471, Construction Ave Central Area, FCT Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-accent shrink-0" />
                <a href="tel:+2347025513466" className="font-mono hover:text-white transition">
                  +2347025513466, +234808860893
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-accent shrink-0" />
                <a href="mailto:diesel@primo.com.ng" className="hover:text-white transition">
                  diesel@primo.com.ng
                </a>
              </div>
            </div>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 text-xs text-brand-accent font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-emerald-500"></span>
                </span>
                24-Hour Customer Support
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com/PrimoEnergyOilandGas" target="_blank" rel="noopener noreferrer" aria-label="Primo Energy on Facebook" className="h-10 w-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent/30 hover:-translate-y-0.5 transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com/primoenergyoilandgas" target="_blank" rel="noopener noreferrer" aria-label="Primo Energy on Instagram" className="h-10 w-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent/30 hover:-translate-y-0.5 transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://tiktok.com/@primoenergy20" target="_blank" rel="noopener noreferrer" aria-label="Primo Energy on TikTok" className="h-10 w-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent/30 hover:-translate-y-0.5 transition-all">
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/company/primo-energy-oil-gas-co-limited" target="_blank" rel="noopener noreferrer" aria-label="Primo Energy on LinkedIn" className="h-10 w-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent/30 hover:-translate-y-0.5 transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

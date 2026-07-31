import React, { useState } from 'react';
import { Menu, X, Flame, ChevronRight, Phone } from 'lucide-react';

interface HeaderProps {
  activePage: 'home' | 'services' | 'about' | 'contact';
  setActivePage: (page: 'home' | 'services' | 'about' | 'contact') => void;
  onRequestQuote: () => void;
}

export default function Header({ activePage, setActivePage, onRequestQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: 'home' | 'services' | 'about' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: 'home' | 'services' | 'about' | 'contact') => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-dark group-hover:bg-brand-accent transition-colors duration-300">
              <Flame className="h-5 w-5 text-white animate-pulse" />
            </div>
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-brand-dark">
                Primo<span className="text-brand-accent">.</span>
              </span>
              <span className="block text-[10px] font-semibold tracking-widest text-brand-muted uppercase -mt-1">
                Primo Energy Oil & Gas Co. Limited
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-[15px] font-medium transition-colors relative py-1.5 ${
                  activePage === item.id 
                    ? 'text-brand-accent' 
                    : 'text-brand-dark/70 hover:text-brand-accent'
                }`}
              >
                {item.label}
                {activePage === item.id && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-brand-accent" />
                )}
              </button>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+2347025513466" 
              className="flex items-center gap-2 text-sm text-brand-dark/70 hover:text-brand-accent transition-colors"
            >
              <Phone className="h-4 w-4 text-brand-accent" />
              <span className="font-mono font-medium">+234 702 551 3466</span>
            </a>
            <button
              onClick={onRequestQuote}
              className="bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-2.5 text-sm font-semibold rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-brand-dark hover:bg-gray-100 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="space-y-1.5 px-4 py-4 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                  activePage === item.id 
                    ? 'bg-brand-light text-brand-accent border-l-4 border-brand-accent' 
                    : 'text-brand-dark/70 hover:bg-gray-50 hover:text-brand-accent'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="border-t border-gray-100 pt-4 mt-2 space-y-4">
              <div className="flex items-center justify-between px-4 text-sm text-brand-muted">
                <span>Direct Inquiries:</span>
                <a href="tel:+2347025513466" className="font-mono font-semibold text-brand-dark flex items-center gap-1.5 hover:text-brand-accent">
                  <Phone className="h-3.5 w-3.5" /> +234 702 551 3466
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white text-center font-bold py-3 px-4 rounded-lg transition"
              >
                Request a Quote — Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

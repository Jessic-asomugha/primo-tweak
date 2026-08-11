import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activePage: 'home' | 'services' | 'about' | 'contact';
  setActivePage: (page: 'home' | 'services' | 'about' | 'contact') => void;
  onRequestQuote: () => void;
}

export default function Header({ activePage, setActivePage, onRequestQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/40 backdrop-blur-md shadow-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="/primo_energy_horizontal_orange_flame.svg"
              alt="Primo Energy logo"
              className="h-11 w-auto"
            />

          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-sm font-medium px-4 py-2 transition-all ${
                  activePage === item.id
                    ? 'text-brand-accent bg-brand-accent/5'
                    : 'text-brand-dark/70 hover:text-brand-accent hover:bg-brand-accent/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={onRequestQuote}
              className="bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-dark hover:bg-brand-light transition"
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
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-semibold transition-colors ${
                  activePage === item.id
                    ? 'bg-brand-accent/10 text-brand-accent'
                    : 'text-brand-dark/70 hover:bg-brand-light hover:text-brand-accent'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="border-t border-gray-100 pt-4 mt-2 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white text-center font-bold py-3 px-4 transition"
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

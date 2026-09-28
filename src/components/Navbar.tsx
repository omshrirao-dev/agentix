import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Websites', href: '#websites' },
    { name: 'SEO Mastery', href: '#seo' },
    { name: 'Social & VFX', href: '#social-media' },
    { name: 'Reels Gallery', href: '#reels' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#0d021ad4] backdrop-blur-xl border-b border-fuchsia-500/20 shadow-lg shadow-purple-950/40' 
          : 'py-5 bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single clean element) */}
          <a 
            href="#" 
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
          >
            <span className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-fuchsia-500/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-white" />
            </span>
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight">
              Agenti<span className="text-fuchsia-400">X</span>
              <span className="hidden sm:inline font-normal text-xs text-fuchsia-300/70 ml-2 tracking-widest uppercase">
                / {PERSONAL_INFO.name}
              </span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean text with hover indicators) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-fuchsia-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-fuchsia-400 after:to-purple-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Connect */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-fuchsia-200 bg-fuchsia-950/40 hover:bg-fuchsia-900/50 border border-fuchsia-500/30 rounded-lg transition-all hover:border-fuchsia-400/60 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 rounded-lg shadow-md shadow-fuchsia-900/40 hover:shadow-fuchsia-500/30 transition-all hover:-translate-y-0.5 whitespace-nowrap active:translate-y-0"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2 text-fuchsia-300 bg-fuchsia-950/60 border border-fuchsia-500/30 rounded-lg"
              aria-label="Call Om Shrirao"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#110321]/95 backdrop-blur-2xl border-b border-fuchsia-500/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-xs uppercase tracking-wider text-fuchsia-400 font-semibold mb-2">
            Navigation
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-fuchsia-300 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-fuchsia-200 bg-fuchsia-950/80 border border-fuchsia-500/40 rounded-lg"
            >
              <Phone className="w-4 h-4 text-fuchsia-400" />
              <span>Call: {PERSONAL_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg text-center"
            >
              Start Your Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

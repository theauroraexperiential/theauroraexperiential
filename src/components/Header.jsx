import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Videos', href: '#videos' },
    { label: 'Music', href: '#music' },
    { label: 'Events', href: '#events' },
    { label: 'Cities', href: '#cities' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal-900/90 backdrop-blur-md border-b border-charcoal-700/50 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-widest uppercase text-white hover:text-gold-400 transition-colors">
          Sana Arora
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#booking"
            className="px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-semibold rounded-full transition-all box-glow"
          >
            Book Live Performance
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-charcoal-900 border-b border-charcoal-800 py-6 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-200 hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block text-center mt-4 px-6 py-3 bg-gold-500 text-charcoal-900 font-semibold rounded-full"
          >
            Book Live Performance
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

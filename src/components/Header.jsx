import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import aeLogo from '../assets/AE logo without bg.png';

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
    { label: 'About Us', href: '#about' },
    { label: 'Artists', href: '#artists' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'How It Works', href: '#how-it-works' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal-900/95 backdrop-blur-md border-b border-charcoal-700/50 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 z-50">
          <img src={aeLogo} alt="The Aurora Experiential Logo" className="h-12 md:h-14 object-contain" />
          <div className="flex flex-col leading-none">
            <span className="text-white font-extrabold text-sm md:text-base tracking-wide uppercase">The Aurora</span>
            <span className="text-gold-400 font-semibold text-[9px] md:text-[10px] tracking-[0.2em] uppercase">Experiential</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-semibold tracking-wide text-slate-300 hover:text-gold-400 transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#booking"
            className="px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-bold rounded-full transition-all box-glow shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-charcoal-900/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-40">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-slate-200 hover:text-gold-400 tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-4 bg-gold-500 text-charcoal-900 font-bold text-lg rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

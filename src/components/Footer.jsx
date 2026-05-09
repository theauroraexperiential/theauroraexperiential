import React from 'react';
import { Camera } from 'lucide-react';
import aeLogo from '../assets/AE logo without bg.png';

const Footer = () => {
  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800 pt-12 md:pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <img src={aeLogo} alt="The Aurora Experiential" className="h-14 object-contain filter brightness-110" />
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-base tracking-wide uppercase">The Aurora</span>
                <span className="text-gold-400 font-semibold text-[10px] tracking-[0.2em] uppercase">Experiential</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              Live Entertainment Curation Agency. <br/>
              Curating high-energy experiences that drive footfall and unforgettable nights.
            </p>
            <a href="https://www.instagram.com/theauroraexperiential/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gold-500/70 hover:text-gold-400 transition-colors group">
              <div className="w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:border-gold-500/80 transition-colors">
                 <Camera size={16} />
              </div>
              <span className="text-sm font-semibold tracking-wider">@theauroraexperiential</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#about" className="text-sm font-semibold text-slate-400 hover:text-gold-400 uppercase tracking-wider transition-colors">About</a>
            <a href="#artists" className="text-sm font-semibold text-slate-400 hover:text-gold-400 uppercase tracking-wider transition-colors">Artists</a>
            <a href="#why-us" className="text-sm font-semibold text-slate-400 hover:text-gold-400 uppercase tracking-wider transition-colors">Why Us</a>
            <a href="#booking" className="text-sm font-semibold text-slate-400 hover:text-gold-400 uppercase tracking-wider transition-colors">Contact</a>
          </div>

        </div>

        <div className="border-t border-charcoal-800 pt-6 md:pt-8 pb-2 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} The Aurora Experiential. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-600 font-medium">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

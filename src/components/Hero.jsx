import React from 'react';
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-charcoal-900/60 z-10" /> {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full">
           <iframe 
            src="https://www.youtube.com/embed/qfhCLafiCHY?autoplay=1&mute=1&controls=0&loop=1&playlist=qfhCLafiCHY" 
            title="Sana Arora Custom Hero Background"
            className="w-[300%] h-[300%] -top-[100%] -left-[100%] relative object-cover opacity-40 pointer-events-none"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up tracking-tight">
          Live Music That <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">Feels Personal</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Sana Arora brings soulful vocals, stage presence, and high-energy live performances to weddings, corporate events, college festivals, and premium private shows.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <a 
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-bold text-lg rounded-full transition-all box-glow transform hover:-translate-y-1"
          >
            Book Sana Now
          </a>
          <a 
            href="#videos"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-semibold text-lg rounded-full transition-all flex items-center justify-center gap-2"
          >
            <PlayCircle size={20} /> Watch Performances
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        <a href="#about" className="text-white/50 hover:text-white flex flex-col items-center gap-2 transition-colors">
          <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

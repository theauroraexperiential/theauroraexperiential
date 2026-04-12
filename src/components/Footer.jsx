import React from 'react';
import { Camera, MonitorPlay, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-800 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-widest uppercase text-white mb-2">
              Sana Arora
            </h2>
            <p className="text-slate-400 text-sm">
              Live Singer • Performer • Artist
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.instagram.com/sanaarora10/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-gold-400 transition-colors">
              <Camera size={24} />
            </a>
            <a href="https://www.youtube.com/channel/UCM7-sYi6RKJIOY8PBjqL5_Q" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-gold-400 transition-colors">
              <MonitorPlay size={24} />
            </a>
            <a href="https://open.spotify.com/artist/33Q40lJ8jvHRpaAS8sb0dJ" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-gold-400 transition-colors">
              <Music size={24} />
            </a>
          </div>

        </div>

        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sana Arora. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

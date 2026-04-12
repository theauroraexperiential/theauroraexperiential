import React from 'react';
import { Mic2, Star, Music } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-charcoal-800 border border-charcoal-700">
               <img 
                 src="/assets/images/hero.jpg" 
                 alt="Sana Arora Live Performance" 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextSibling.style.display = 'flex';
                 }}
               />
               <div className="absolute inset-0 hidden items-center justify-center text-charcoal-700 bg-charcoal-800/50">
                  <span className="text-sm tracking-widest uppercase opacity-50">Local Image Placeholder</span>
               </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold-500/20 rounded-2xl z-0" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">About the Artist</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">A Voice That Captivates</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Originating from Delhi, Sana Arora is a versatile singer and guitarist who brings a magnetic stage presence to every live event. Known for her expressive vocal range and dynamic renditions, she blends Bollywood, romantic, folk, and contemporary elements into unforgettable sets.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-charcoal-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 border border-charcoal-700 flex items-center justify-center shrink-0">
                  <Star className="text-gold-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Sa Re Ga Ma Pa Finalist</h4>
                  <p className="text-slate-400">Gained national recognition as a standout finalist in the 2023 season.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 border border-charcoal-700 flex items-center justify-center shrink-0">
                  <Mic2 className="text-gold-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Versatile Performer</h4>
                  <p className="text-slate-400">Accompanied by her guitar or a full live band, adapting to the emotional core of any event.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 border border-charcoal-700 flex items-center justify-center shrink-0">
                  <Music className="text-gold-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Dynamic Repertoire</h4>
                  <p className="text-slate-400">From high-energy anthems to soulful unplugged melodies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

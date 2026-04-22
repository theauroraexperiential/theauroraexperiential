import React from 'react';
import { Music, Mic, Guitar, Radio, PartyPopper, Users, Sparkles } from 'lucide-react';

const EventTypes = () => {
  const musicActs = [
    { name: 'Bollywood Bands', icon: <Music size={20} /> },
    { name: 'Sufi Bands', icon: <Mic size={20} /> },
    { name: 'Punjabi Acts', icon: <PartyPopper size={20} /> },
    { name: 'Western Bands', icon: <Guitar size={20} /> },
    { name: 'Ghazal Performances', icon: <Users size={20} /> },
    { name: 'DJ-Based Live Bands', icon: <Radio size={20} /> },
    { name: 'Grand Choirs', icon: <Sparkles size={20} /> }
  ];

  const entertainmentActs = [
    { name: 'Haldi & Mehndi Bands' },
    { name: 'Emcees & Anchors' },
    { name: 'Stand-up Comedians' },
    { name: 'Magicians' }
  ];

  return (
    <section id="artists" className="py-24 bg-charcoal-800 relative z-10 w-full border-t border-charcoal-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gold-500 uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-gold-500"></span> Our Artists & Experiences <span className="w-8 h-[1px] bg-gold-500"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Curated Talent For Every Vibe</h3>
          <p className="text-lg text-slate-300 font-medium">
            We offer a diverse range of curated talent to match every vibe and audience, ensuring an unforgettable experience for your guests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Music & Bands */}
          <div className="bg-charcoal-900 rounded-3xl p-8 md:p-10 border border-charcoal-700 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:bg-gold-500/10"></div>
            
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="p-2 bg-charcoal-800 rounded-lg text-gold-500"><Music size={24} /></span>
              Music & Bands
            </h4>
            <div className="flex flex-wrap gap-3">
              {musicActs.map((act, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-5 py-3 bg-charcoal-800 border border-charcoal-700 rounded-xl text-slate-200 hover:text-gold-400 hover:border-gold-500/30 transition-all shadow-sm group/item"
                >
                  <span className="text-gold-500/50 group-hover/item:text-gold-400 transition-colors">{act.icon}</span>
                  <span className="font-semibold text-sm tracking-wide">{act.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Event Entertainment */}
          <div className="bg-charcoal-900 rounded-3xl p-8 md:p-10 border border-charcoal-700 shadow-xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:bg-amber-500/10"></div>
            
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="p-2 bg-charcoal-800 rounded-lg text-amber-500"><PartyPopper size={24} /></span>
              Event Entertainment
            </h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {entertainmentActs.map((act, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-5 py-3 bg-charcoal-800 border border-charcoal-700 rounded-xl text-slate-200 hover:text-amber-400 hover:border-amber-500/30 transition-all shadow-sm"
                >
                  <Sparkles size={16} className="text-amber-500/50" />
                  <span className="font-semibold text-sm tracking-wide">{act.name}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-charcoal-800/50 rounded-xl border border-charcoal-700/50">
              <p className="text-slate-400 italic text-sm text-center">
                …and more, based on your venue and audience preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTypes;

import React from 'react';
import { Building2, UtensilsCrossed, Gem, HeartHandshake, Briefcase } from 'lucide-react';

const Cities = () => {
  const clients = [
    { name: "Clubs & Lounges", icon: <Building2 size={24} /> },
    { name: "Restaurants & Cafes", icon: <UtensilsCrossed size={24} /> },
    { name: "Luxury Venues", icon: <Gem size={24} /> },
    { name: "Wedding Planners", icon: <HeartHandshake size={24} /> },
    { name: "Corporate Event Companies", icon: <Briefcase size={24} /> }
  ];

  return (
    <section id="clients" className="relative z-10 w-full pt-20 pb-12 border-t border-charcoal-700/50 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gold-500 uppercase mb-3">Partnerships</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Who We Work With</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {clients.map((client, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 px-6 py-4 bg-charcoal-800 border border-charcoal-700 rounded-2xl text-slate-300 hover:text-white hover:border-gold-500/50 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] group"
            >
              <span className="text-gold-500/70 group-hover:text-gold-400 transition-colors">{client.icon}</span>
              <span className="font-semibold">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cities;

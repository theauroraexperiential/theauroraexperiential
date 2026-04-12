import React from 'react';
import { Sparkles } from 'lucide-react';

const EventTypes = () => {
  const events = [
    'Corporate Events', 'Wedding Events', 'Exhibition Events', 
    'College Events', 'Charity Events', 'Festival Events', 
    'Fashion Show Events', 'Inauguration Events', 'Social Events', 
    'Live Concert Events', 'Private Party Events', 'Club Events'
  ];

  return (
    <section id="events" className="relative z-10 w-full">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Event Categories</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">Performances Tailored For</h3>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {events.map((event, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-2 px-6 py-3 bg-charcoal-900 border border-charcoal-700 rounded-full text-slate-200 hover:text-white hover:border-gold-500/50 transition-colors shadow-sm"
          >
            <Sparkles size={16} className="text-gold-500" />
            <span className="font-medium">{event}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventTypes;

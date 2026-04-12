import React from 'react';
import { MapPin } from 'lucide-react';

const Cities = () => {
  const cities = [
    "Delhi", "Mumbai", "Bangalore", "Gurgaon", "Jaipur", "Kolkata", 
    "Chennai", "Noida", "Goa", "Jodhpur", "Jaisalmer", "Udaipur", 
    "Ahmedabad", "Chandigarh", "Hyderabad", "Pune", "Lucknow", 
    "Agra", "Srinagar", "Dehradun", "Rishikesh", "Manali", "Shimla"
  ];

  return (
    <section id="cities" className="relative z-10 w-full pt-10 border-t border-charcoal-700/50">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Coverage</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Available Nationwide</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Sana performs across India. From premium destination weddings in Udaipur to corporate galas in Mumbai and college fests in Delhi.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-4">
        {cities.map((city, idx) => (
          <div key={idx} className="flex items-center justify-center gap-2 text-slate-300">
            <MapPin size={16} className="text-gold-500/70" />
            <span className="font-medium text-sm hover:text-white transition-colors cursor-default">{city}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cities;

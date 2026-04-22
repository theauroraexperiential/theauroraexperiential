import React from 'react';
import { Search, SlidersHorizontal, CheckCircle2, Trophy } from 'lucide-react';

const Gallery = () => {
  const steps = [
    {
      icon: <Search size={32} />,
      title: "Understand Your Venue",
      desc: "We learn your audience, vibe, and goals"
    },
    {
      icon: <SlidersHorizontal size={32} />,
      title: "Curate the Right Artists",
      desc: "Tailored recommendations based on your needs"
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Seamless Execution",
      desc: "We handle coordination, setup, and performance"
    },
    {
      icon: <Trophy size={32} />,
      title: "Deliver Impact",
      desc: "Better crowd, better energy, better revenue"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-charcoal-800 border-t border-charcoal-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gold-500 uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-gold-500"></span> Process <span className="w-8 h-[1px] bg-gold-500"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">How It Works</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-[1px] bg-gradient-to-r from-transparent via-charcoal-600 to-transparent z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-charcoal-900 rounded-full border-2 border-charcoal-700 flex items-center justify-center mb-6 text-gold-500 group-hover:border-gold-500/50 group-hover:scale-110 transition-all shadow-xl group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                {step.icon}
              </div>
              <div className="bg-charcoal-900/50 p-6 rounded-2xl border border-charcoal-700 w-full h-full">
                 <div className="text-gold-500 font-bold text-sm mb-2 opacity-60">STEP 0{idx + 1}</div>
                 <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                 <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import React from 'react';
import { TrendingUp, Sparkles, UserCheck, ShieldCheck, Zap } from 'lucide-react';

const StreamingLinks = () => {
  const reasons = [
    {
      title: 'Increase Footfall',
      desc: 'Drive repeat customers and increase venue capacity.',
      icon: <TrendingUp size={32} />
    },
    {
      title: 'High-Energy Nights',
      desc: 'Create memorable, talked-about experiences.',
      icon: <Zap size={32} />
    },
    {
      title: 'Curated Selection',
      desc: 'Artists perfectly matched to your specific audience.',
      icon: <UserCheck size={32} />
    },
    {
      title: 'Zero Hassle',
      desc: 'End-to-end management from booking to performance.',
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-charcoal-900 border-t border-charcoal-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gold-500 uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-gold-500"></span> Why Work With Us <span className="w-8 h-[1px] bg-gold-500"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            We Focus on Results,<br/> <span className="text-slate-400 font-light">Not Just Performances</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="group flex flex-col p-8 bg-charcoal-800 rounded-2xl border border-charcoal-700 hover:border-gold-500/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-transparent to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{reason.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gold-500/10 via-amber-500/10 to-gold-500/10 border border-gold-500/20 rounded-2xl p-8 text-center max-w-4xl mx-auto backdrop-blur-sm">
          <p className="text-xl md:text-2xl font-semibold text-white">
            "We don’t just send artists. We help you build experiences that drive business growth."
          </p>
        </div>
      </div>
    </section>
  );
};

export default StreamingLinks;

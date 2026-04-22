import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-gold-500 uppercase mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-gold-500"></span> About Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                We Don’t Just Provide Artists.<br />
                <span className="text-slate-400 font-light">We Create Experiences That Bring People Back.</span>
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                With over 6+ years in the industry, we specialize in curating the right talent for the right audience, helping venues increase engagement, retention, and revenue through live entertainment.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mt-4">
                Whether it’s a packed Saturday night at a club or an intimate live music evening at a restaurant, we ensure seamless execution from start to finish.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-charcoal-800">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center">
                  <Target className="text-gold-400" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white">Curated Talent</h4>
                <p className="text-sm text-slate-400 leading-relaxed">The right artist for your specific venue vibe and audience demographics.</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-charcoal-800 border border-charcoal-700 flex items-center justify-center">
                  <Zap className="text-gold-400" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white">Seamless Execution</h4>
                <p className="text-sm text-slate-400 leading-relaxed">End-to-end management ensuring a flawless, high-energy event every time.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-charcoal-800 border border-charcoal-700">
               <img 
                 src="/assets/images/about-live.jpg" 
                 alt="Live Entertainment Performance" 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextSibling.style.display = 'flex';
                 }}
               />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-charcoal-500 bg-charcoal-800/80">
                  <Users size={48} className="mb-4 text-charcoal-600" />
                  <span className="text-sm tracking-widest uppercase font-semibold">Venue Crowd Placeholder</span>
               </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold-500/20 rounded-2xl z-0" />
            <div className="absolute top-10 -left-10 w-32 h-32 bg-gold-500/10 blur-3xl rounded-full z-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Silk from './Silk';

const BookingCTA = () => {
  return (
    <section id="booking" className="py-16 md:py-24 relative z-10 border-t border-charcoal-800 overflow-hidden bg-charcoal-900">
      <div className="absolute inset-0 z-0">
        <Silk speed={3} scale={1.2} color="#b28e20" noiseIntensity={1.2} rotation={180} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/80 to-charcoal-900/90 pointer-events-none" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Let’s Create Your Next <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">Packed Night</span>
        </h2>
        <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          Looking to elevate your venue experience with the right artists? Let’s connect and curate something your audience will keep coming back for.
        </p>

        <div className="bg-charcoal-800/80 backdrop-blur-md rounded-3xl p-5 sm:p-8 md:p-12 border border-charcoal-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-8 text-left">
              <div>
                <h4 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-2">Direct Contact</h4>
                <p className="text-slate-400 text-sm">Reach out to us directly to discuss your venue needs.</p>
              </div>

              <div className="space-y-6">
                <a href="tel:+918800275465" className="flex items-center gap-4 text-white hover:text-gold-400 transition-colors group">
                  <div className="w-12 h-12 bg-charcoal-900 rounded-full flex items-center justify-center border border-charcoal-700 group-hover:border-gold-500/50">
                    <Phone size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium mb-1">Phone</div>
                    <div className="font-semibold text-lg">+91 8800275465</div>
                  </div>
                </a>

                <a href="mailto:theauroraexperiential@gmail.com" className="flex items-center gap-4 text-white hover:text-gold-400 transition-colors group min-w-0">
                  <div className="w-12 h-12 flex-shrink-0 bg-charcoal-900 rounded-full flex items-center justify-center border border-charcoal-700 group-hover:border-gold-500/50">
                    <Mail size={20} className="text-gold-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 font-medium mb-1">Email</div>
                    <div className="font-semibold text-sm sm:text-base md:text-lg break-all">theauroraexperiential@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-charcoal-900 p-6 sm:p-8 rounded-2xl border border-charcoal-700 flex flex-col justify-center h-full">
              <h4 className="text-xl font-bold text-white mb-6">Ready to start?</h4>
              <a 
                href="tel:+918800275465"
                className="w-full py-5 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-charcoal-900 font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-1 flex justify-center items-center gap-2"
              >
                Book a Call <ArrowRight size={20} />
              </a>
              <p className="text-slate-500 text-xs text-center mt-4">We'll get back to you within 24 hours.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;

import React from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';

const BookingCTA = () => {
  return (
    <section id="booking" className="py-24 bg-charcoal-800 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal-900 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for an Unforgettable Event?</h2>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Book Sana Arora for your next live event. Fill out the details below or contact her team directly to discuss availability and performance options.
        </p>

        <div className="bg-charcoal-900 rounded-3xl p-8 md:p-12 border border-charcoal-700 shadow-2xl">
          <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Event Type</label>
                <select className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>College Fest</option>
                  <option>Private Party</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Location</label>
                <input 
                  type="text" 
                  placeholder="City, State"
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Message / Details</label>
              <textarea 
                rows="4" 
                placeholder="Tell us about the event..."
                className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="button"
              className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-bold text-lg rounded-xl transition-all box-glow flex justify-center items-center gap-2"
            >
              <Calendar size={20} /> Request Booking Quote
            </button>
          </form>

          {/* Direct Contact Options */}
          <div className="mt-12 pt-8 border-t border-charcoal-800 flex justify-center gap-8 text-slate-400">
            <a href="mailto:booking@sanaarora.com" className="hover:text-gold-400 transition-colors flex items-center gap-2">
              <Mail size={18} /> booking@sanaarora.com
            </a>
            <a href="tel:+919876543210" className="hover:text-gold-400 transition-colors flex items-center gap-2">
              <Phone size={18} /> +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;

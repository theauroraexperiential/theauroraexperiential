import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

const FeaturedVideos = () => {
  const driveLink = "https://drive.google.com/drive/folders/1v22Rvntm3r2_ITPrnET_-742j4PiVmOJ?usp=share_link";

  return (
    <section id="samples" className="py-24 bg-charcoal-800 border-t border-charcoal-700 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-charcoal-700/50 via-charcoal-800 to-charcoal-800 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-gold-500 uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold-500"></span> Artist Samples
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Hear The Difference
            </h3>
            <p className="text-lg text-slate-300 font-medium mb-8 leading-relaxed">
              Explore some of our curated artists and live performances. See the energy and talent we bring to every stage.
            </p>
            
            <a 
              href={driveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-charcoal-900 border border-gold-500/50 hover:border-gold-400 hover:bg-gold-500/10 text-gold-400 font-bold text-lg rounded-full transition-all group shadow-lg"
            >
              <Play size={20} className="fill-current" /> Browse Media Folder <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="relative space-y-6">
             <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-charcoal-900 border border-charcoal-700 relative group">
                <iframe 
                  src="https://www.youtube.com/embed/qfhCLafiCHY" 
                  title="Sana Arora - Featured Live Performance"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
               <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-charcoal-900 border border-charcoal-700">
                  <iframe 
                    src="https://www.youtube.com/embed/SLLIaiN9WIs" 
                    title="Sana Arora - Performance 2"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
               </div>
               
               <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center group/card transition-colors hover:bg-charcoal-700">
                  <a href={driveLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full h-full text-center p-4">
                    <div className="w-10 h-10 bg-gold-500/20 group-hover/card:bg-gold-500/30 rounded-full flex items-center justify-center mb-2 text-gold-500 transition-colors">
                      <Play size={16} className="fill-current ml-1" />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 group-hover/card:text-white transition-colors">View More in Drive</span>
                  </a>
               </div>
             </div>

             {/* Decorative */}
             <div className="absolute -bottom-4 -left-4 w-full h-full border border-charcoal-600 rounded-2xl z-[-1] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;

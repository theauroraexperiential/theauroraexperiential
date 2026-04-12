import React from 'react';

const FeaturedVideos = () => {
  const primaryVideo = "https://www.youtube.com/embed/qfhCLafiCHY";
  const dummyVideos = [
    "https://www.youtube.com/embed/SLLIaiN9WIs", // Shamiyana
    "https://www.youtube.com/embed/VIDEO_ID_3", // Dummy
    "https://www.youtube.com/embed/VIDEO_ID_4"  // Dummy
  ];

  return (
    <section id="videos" className="py-24 bg-charcoal-900 border-t border-charcoal-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Watch Live</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Featured Performances</h3>
        </div>

        {/* Primary Video */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-charcoal-800 border border-charcoal-700 mb-8 relative group">
          <iframe 
            src={primaryVideo} 
            title="Sana Arora - Featured Live Performance"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Grid Videos */}
        <div className="grid md:grid-cols-3 gap-6">
          {dummyVideos.map((src, index) => (
            <div key={index} className="w-full aspect-video rounded-xl overflow-hidden bg-charcoal-800 border border-charcoal-700 relative">
               <iframe 
                src={src} 
                title={`Sana Arora - Performance Video ${index + 1}`}
                className="w-full h-full relative z-10"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center z-0">
                 <span className="text-slate-500 text-sm">Video Unavailable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;

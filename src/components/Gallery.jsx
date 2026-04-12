import React from 'react';

const Gallery = () => {
  const localImages = [
    '/assets/images/gallery-1.jpg',
    '/assets/images/gallery-2.jpg',
    '/assets/images/gallery-3.jpg',
    '/assets/images/gallery-4.jpg'
  ];

  return (
    <section className="py-24 bg-charcoal-900 border-t border-charcoal-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Moments</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Live In Action</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {localImages.map((src, idx) => (
            <div key={idx} className="aspect-square relative group overflow-hidden rounded-xl bg-charcoal-800 border border-charcoal-700">
              <img 
                src={src}
                alt={`Sana Arora Gallery Image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                     e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="absolute inset-0 hidden items-center justify-center text-charcoal-500">
                  <span className="text-xs uppercase tracking-wider text-center px-4">Local Image<br/>/assets/images/gallery-{idx+1}.jpg</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

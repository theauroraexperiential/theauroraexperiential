import React from 'react';
import { ExternalLink, Music, MonitorPlay, Camera } from 'lucide-react';

const StreamingLinks = () => {
  const platforms = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/33Q40lJ8jvHRpaAS8sb0dJ',
      desc: 'Listen to latest tracks',
      icon: <Music size={32} />
    },
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/in/artist/sana-arora/1520783798',
      desc: 'Stream full discography',
      icon: <Music size={32} />
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCM7-sYi6RKJIOY8PBjqL5_Q',
      desc: 'Watch music videos',
      icon: <MonitorPlay size={32} />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sanaarora10/',
      desc: 'Follow for updates',
      icon: <Camera size={32} />
    }
  ];

  return (
    <section id="music" className="py-24 bg-charcoal-900 border-t border-charcoal-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Listen Now</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Stream & Follow</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <a 
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-8 bg-charcoal-800 rounded-2xl border border-charcoal-700 hover:border-gold-500/50 transition-all box-glow transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Shine effect on hover container */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/0 via-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-white mb-6 group-hover:text-gold-400 transition-colors">
                {platform.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{platform.name}</h4>
              <p className="text-sm text-slate-400 mb-6">{platform.desc}</p>
              <div className="text-gold-500 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Visit Profile <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingLinks;

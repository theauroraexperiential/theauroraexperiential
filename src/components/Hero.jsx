import React from 'react';
import { PlayCircle, ArrowRight, ChevronDown, Music, Mic, Headphones, Guitar, Radio, Disc3 } from 'lucide-react';
import Silk from './Silk';
import ShinyText from './ShinyText';

const floatingIcons = [
  { Icon: Music,      top: '14%', left: '6%',   size: 28, delay: '0s',   duration: '6s',   anim: 'float1', opacity: 0.08 },
  { Icon: Mic,        top: '18%', right: '8%',   size: 22, delay: '1s',   duration: '5s',   anim: 'float2', opacity: 0.06 },
  { Icon: Headphones, top: '72%', left: '4%',    size: 26, delay: '0.5s', duration: '7s',   anim: 'float3', opacity: 0.07 },
  { Icon: Guitar,     top: '68%', right: '5%',   size: 30, delay: '2s',   duration: '6s',   anim: 'float1', opacity: 0.06 },
  { Icon: Radio,      top: '42%', left: '2%',    size: 20, delay: '1.5s', duration: '5.5s', anim: 'float2', opacity: 0.05 },
  { Icon: Disc3,      top: '38%', right: '3%',   size: 24, delay: '0.8s', duration: '6.5s', anim: 'float3', opacity: 0.07 },
  { Icon: Music,      top: '88%', left: '20%',   size: 16, delay: '2.5s', duration: '5s',   anim: 'float1', opacity: 0.05 },
  { Icon: Mic,        top: '86%', right: '18%',  size: 18, delay: '1.2s', duration: '7s',   anim: 'float2', opacity: 0.06 },
  { Icon: Headphones, top: '10%', left: '78%',   size: 18, delay: '3s',   duration: '6s',   anim: 'float3', opacity: 0.05 },
  { Icon: Disc3,      top: '52%', left: '94%',   size: 22, delay: '0.3s', duration: '5.5s', anim: 'float1', opacity: 0.06 },
];

const Hero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden bg-charcoal-900">

      {/* ── Silk Background ── */}
      <div className="absolute inset-0 z-0">
        <Silk speed={5} scale={1} color="#d4af37" noiseIntensity={1.5} rotation={0} />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/50 to-charcoal-900 z-10 pointer-events-none" />
      </div>

      {/* ── Ambient Glow Orbs ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[8%] w-[400px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* ── Floating Musical Icons ── */}
      <div className="absolute inset-0 z-[5] pointer-events-none hidden md:block">
        {floatingIcons.map(({ Icon, top, left, right, size, delay, duration, anim, opacity }, i) => (
          <div
            key={i}
            className="absolute text-gold-400"
            style={{
              top, left, right,
              opacity,
              animation: `${anim} ${duration} ease-in-out ${delay} infinite`,
            }}
          >
            <Icon size={size} strokeWidth={1.2} />
          </div>
        ))}
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-20 text-center px-6 w-full max-w-5xl mx-auto">

        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-gold-500/20 bg-gold-500/[0.06] backdrop-blur-sm animate-fade-in-up">
          <div className="flex items-end gap-[2px] h-3">
            <div className="w-[2px] rounded-full bg-gold-500 animate-sound-wave-1" />
            <div className="w-[2px] rounded-full bg-gold-500 animate-sound-wave-2" />
            <div className="w-[2px] rounded-full bg-gold-500 animate-sound-wave-3" />
          </div>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-400">Live Entertainment Agency</span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-extrabold text-white mb-8 animate-fade-in-up tracking-[-0.02em] leading-[1.05]">
          Curated Live Entertainment That{' '}
          <br className="hidden md:block" />
          <ShinyText
            text="Fills Your Venue"
            speed={3}
            color="#d4af37"
            shineColor="#ffffff"
            spread={100}
            className="text-transparent"
          />
        </h1>

        {/* Subheading */}
        <p
          className="text-base md:text-lg lg:text-xl text-slate-300/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.15s' }}
        >
          From Bollywood & Sufi bands to DJs and stand-up acts, we help clubs, restaurants, and events create high-energy experiences that drive footfall and unforgettable nights.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#artists"
            className="w-full sm:w-auto px-8 py-4 bg-white/[0.05] border border-white/20 hover:border-gold-400/60 hover:bg-gold-500/10 text-white hover:text-gold-400 font-semibold text-base rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 group backdrop-blur-sm"
          >
            <PlayCircle size={20} className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            View Artist Samples
          </a>
          <a
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-charcoal-900 font-bold text-base rounded-full transition-all duration-300 shadow-[0_4px_24px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.4)] transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
          >
            Book a Quick Call
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* ── Scroll Indicator — absolutely at bottom, independent of content flow ── */}
      <div
        className="absolute bottom-6 left-1/2 z-20 animate-fade-in-up"
        style={{ transform: 'translateX(-50%)', animationDelay: '0.6s' }}
      >
        <a href="#about" className="flex flex-col items-center gap-1.5 text-white/30 hover:text-gold-400 transition-colors duration-500 group">
          <div className="flex items-end justify-center gap-[2.5px] h-4">
            <div className="w-[2px] rounded-full bg-current animate-sound-wave-1" />
            <div className="w-[2px] rounded-full bg-current animate-sound-wave-2" />
            <div className="w-[2px] rounded-full bg-current animate-sound-wave-3" />
            <div className="w-[2px] rounded-full bg-current animate-sound-wave-4" />
            <div className="w-[2px] rounded-full bg-current animate-sound-wave-5" />
          </div>
          <ChevronDown size={16} className="animate-bounce-slow opacity-60 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

    </section>
  );
};

export default Hero;

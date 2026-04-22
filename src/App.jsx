import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import EventTypes from './components/EventTypes';
import StreamingLinks from './components/StreamingLinks';
import FeaturedVideos from './components/FeaturedVideos';
import Cities from './components/Cities';
import Gallery from './components/Gallery';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-slate-200 font-sans selection:bg-gold-500/30">
      <Header />
      <main>
        <Hero />
        <About />
        <EventTypes />
        <StreamingLinks />
        <FeaturedVideos />
        <Cities />
        <Gallery />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

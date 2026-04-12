import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedVideos from './components/FeaturedVideos';
import StreamingLinks from './components/StreamingLinks';
import EventTypes from './components/EventTypes';
import Cities from './components/Cities';
import Gallery from './components/Gallery';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedVideos />
        <StreamingLinks />
        <div className="bg-charcoal-800 py-20 relative">
           <div className="max-w-6xl mx-auto px-6 space-y-24">
              <EventTypes />
              <Cities />
           </div>
        </div>
        <Gallery />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

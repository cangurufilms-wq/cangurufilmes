import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Home from '@/pages/Home';
import Portfolio from '@/pages/Portfolio';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Reviews from '@/pages/Reviews';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-black">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
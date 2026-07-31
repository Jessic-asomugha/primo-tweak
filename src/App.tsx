/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'services' | 'about' | 'contact'>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const handleRequestQuote = () => {
    setPreselectedService('');
    setIsQuoteOpen(true);
  };

  const handleRequestQuoteWithService = (serviceId: string) => {
    setPreselectedService(serviceId);
    setIsQuoteOpen(true);
  };

  const renderActiveView = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomeView
            onNavigateToServices={() => setActivePage('services')}
            onNavigateToAbout={() => setActivePage('about')}
            onNavigateToContact={() => setActivePage('contact')}
            onRequestQuote={handleRequestQuote}
          />
        );
      case 'services':
        return (
          <ServicesView
            onRequestQuoteWithService={handleRequestQuoteWithService}
          />
        );
      case 'about':
        return (
          <AboutView
            onRequestQuote={handleRequestQuote}
          />
        );
      case 'contact':
        return (
          <ContactView
            onBackToHome={() => setActivePage('home')}
          />
        );
      default:
        return (
          <HomeView
            onNavigateToServices={() => setActivePage('services')}
            onNavigateToAbout={() => setActivePage('about')}
            onNavigateToContact={() => setActivePage('contact')}
            onRequestQuote={handleRequestQuote}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-dark selection:bg-brand-accent selection:text-white">
      {/* Navigation Header */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onRequestQuote={handleRequestQuote}
      />

      {/* Main Corporate Workspace */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Shared Corporate Footer */}
      <Footer onNav={setActivePage} />

      {/* Global Request a Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        preselectedService={preselectedService}
      />
    </div>
  );
}


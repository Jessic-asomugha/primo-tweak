import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Target, Award, HardHat, Building2, Globe as Globe2 } from 'lucide-react';

interface AboutViewProps {
  onRequestQuote: () => void;
}

export default function AboutView({ onRequestQuote }: AboutViewProps) {
  const industries = [
    {
      name: 'Oil & Gas',
      role: 'Energy Sector',
      desc: 'Providing reliable fuel supply for upstream and downstream operations across the Nigerian energy industry.',
      avatarUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      name: 'Construction',
      role: 'Infrastructure Development',
      desc: 'Powering construction sites with dependable diesel and petroleum products for heavy machinery and equipment.',
      avatarUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      name: 'Manufacturing',
      role: 'Industrial Production',
      desc: 'Ensuring uninterrupted operations for manufacturing industries with consistent fuel supply and logistics.',
      avatarUrl: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      name: 'Healthcare',
      role: 'Medical Facilities',
      desc: 'Supporting hospitals and healthcare institutions with reliable energy solutions for critical medical services.',
      avatarUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&h=500&q=80'
    }
  ];

  const serviceAreas = [
    { year: 'FCT', title: 'Abuja', desc: 'Federal Capital Territory - Head Office and primary operations base.' },
    { year: 'KD', title: 'Kaduna', desc: 'Major commercial hub with comprehensive fuel distribution network.' },
    { year: 'NS', title: 'Nasarawa', desc: 'Expanding service coverage for industrial and residential clients.' },
    { year: 'NG', title: 'Niger State & Kogi', desc: 'Extended reach to support growing energy demands in the region.' }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 }
    })
  };

  return (
    <div className="bg-white text-brand-dark min-h-screen">
      
      {/* 1. Hero Block */}
      <section className="relative py-24 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />
        
        {/* Background Oil Rig Image overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80" 
            alt="Offshore Drilling Rig" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20"
          >
            <Globe2 className="h-3.5 w-3.5" />
            Established 2024 • CAC Reg: 7830522
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            About <span className="text-brand-accent">Primo Energy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Primo Energy Oil & Gas Co. Limited is a Nigerian energy company committed to delivering high-quality petroleum products and energy solutions to businesses, industries, institutions, and households.
          </motion.p>
        </div>
      </section>

      {/* 2. Core Values & Mission Grid with Light Animation */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div 
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInVariants}
              className="p-8 rounded-xl bg-brand-light border border-gray-100 space-y-4 hover:shadow-lg hover:-translate-y-1 hover:border-brand-accent/20 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">Our Mission</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                To provide dependable, high-quality energy solutions that power businesses and communities efficiently.
              </p>
            </motion.div>

            <motion.div 
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInVariants}
              className="p-8 rounded-xl bg-brand-light border border-gray-100 space-y-4 hover:shadow-lg hover:-translate-y-1 hover:border-brand-accent/20 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">Our Vision</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                To become one of Africa's leading integrated energy solution providers.
              </p>
            </motion.div>

            <motion.div 
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInVariants}
              className="p-8 rounded-xl bg-brand-light border border-gray-100 space-y-4 hover:shadow-lg hover:-translate-y-1 hover:border-brand-accent/20 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">Core Values</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Integrity, Excellence, Reliability, Customer Satisfaction, Innovation, Safety, Sustainability
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Timeline Milestones */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Service Coverage</span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-dark">Areas We Serve</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
            {serviceAreas.map((m, index) => (
              <motion.div 
                key={m.year} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-brand-light rounded-xl border border-gray-100 space-y-3 relative hover:border-brand-accent/30 transition-all"
              >
                <span className="block font-display text-2xl font-black text-brand-accent">{m.year}</span>
                <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">{m.title}</h4>
                <p className="text-[11px] text-brand-muted leading-relaxed">{m.desc}</p>
                {index < 3 && (
                  <div className="hidden sm:block absolute top-1/2 -right-3 h-0.5 w-6 bg-gray-200 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve */}
      <section className="py-20 bg-brand-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Industries We Serve</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
              Our Trusted Clients
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted">
              Serving diverse sectors across Nigeria with reliable energy solutions tailored to specific industry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, idx) => (
              <motion.div 
                key={industry.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 overflow-hidden bg-gray-100 relative">
                    <img 
                      src={industry.avatarUrl} 
                      alt={industry.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="font-display text-base font-bold text-brand-dark leading-snug">{industry.name}</h4>
                    <span className="block text-[11px] text-brand-accent font-semibold uppercase tracking-wider">{industry.role}</span>
                    <p className="text-[11px] text-brand-muted leading-relaxed pt-2 border-t border-gray-100">{industry.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onRequestQuote}
              className="bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-3.5 px-8 rounded-lg text-xs uppercase tracking-wider transition shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}


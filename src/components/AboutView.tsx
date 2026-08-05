import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Target, MapPin, Compass, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onRequestQuote: () => void;
}

export default function AboutView({ onRequestQuote }: AboutViewProps) {
  const industries = [
    {
      name: 'Oil & Gas',
      role: 'Energy Sector',
      desc: 'Providing reliable fuel supply for upstream and downstream operations across the Nigerian energy industry.',
      imageUrl: 'https://images.pexels.com/photos/3192662/pexels-photo-3192662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      name: 'Construction',
      role: 'Infrastructure Development',
      desc: 'Powering construction sites with dependable diesel and petroleum products for heavy machinery and equipment.',
      imageUrl: 'https://images.pexels.com/photos/35846752/pexels-photo-35846752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      name: 'Manufacturing',
      role: 'Industrial Production',
      desc: 'Ensuring uninterrupted operations for manufacturing industries with consistent fuel supply and logistics.',
      imageUrl: 'https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      name: 'Healthcare',
      role: 'Medical Facilities',
      desc: 'Supporting hospitals and healthcare institutions with reliable energy solutions for critical medical services.',
      imageUrl: 'https://images.pexels.com/photos/29948395/pexels-photo-29948395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
  ];

  const serviceAreas = [
    { code: 'FCT', title: 'Abuja', desc: 'Federal Capital Territory — Head Office and primary operations base.' },
    { code: 'KD', title: 'Kaduna', desc: 'Major commercial hub with comprehensive fuel distribution network.' },
    { code: 'NS', title: 'Nasarawa', desc: 'Expanding service coverage for industrial and residential clients.' },
    { code: 'NG', title: 'Niger & Kogi', desc: 'Extended reach to support growing energy demands in the region.' },
  ];

  const values = [
    { icon: Target, title: 'Our Mission', desc: 'To provide dependable, high-quality energy solutions that power businesses and communities efficiently.' },
    { icon: Eye, title: 'Our Vision', desc: 'To become one of Africa\'s leading integrated energy solution providers.' },
    { icon: Shield, title: 'Core Values', desc: 'Integrity, Excellence, Reliability, Customer Satisfaction, Innovation, Safety, Sustainability.' },
  ];

  const coreValues = [
    'Integrity', 'Excellence', 'Reliability',
    'Customer Satisfaction', 'Innovation', 'Safety', 'Sustainability',
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <div className="bg-white text-brand-dark min-h-screen">

      {/* Hero */}
      <section className="relative py-24 bg-brand-darker text-white overflow-hidden bg-grain">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/15973758/pexels-photo-15973758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Offshore oil rig at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/70 to-brand-darker/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent px-4 py-2 rounded-full bg-white/5 border border-brand-accent/20 backdrop-blur-sm"
          >
            <Compass className="h-3.5 w-3.5" />
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
            Primo Energy Oil &amp; Gas Co. Limited is a Nigerian energy company committed to delivering high-quality petroleum products and energy solutions to businesses, industries, institutions, and households.
          </motion.p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInVariants}
                className="p-8 rounded-2xl bg-brand-light border border-gray-100 space-y-4 hover:shadow-xl hover:-translate-y-1.5 hover:border-brand-accent/20 transition-all duration-300 group"
              >
                <div className="h-14 w-14 rounded-xl bg-brand-accent/10 group-hover:bg-brand-accent group-hover:text-white flex items-center justify-center text-brand-accent transition-all duration-300">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-bold">{v.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Core values chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {coreValues.map((val) => (
              <span key={val} className="px-5 py-2 bg-white border border-gray-200 rounded-full text-xs font-semibold text-brand-dark hover:border-brand-accent/40 hover:text-brand-accent transition-colors">
                {val}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-brand-light border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Service Coverage</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">Areas We Serve</h2>
            <p className="text-sm text-brand-muted">Across Northern Nigeria with reliable energy distribution.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((m, index) => (
              <motion.div
                key={m.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-7 bg-white rounded-2xl border border-gray-100 space-y-4 relative hover:shadow-xl hover:-translate-y-1.5 hover:border-brand-accent/20 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-dark group-hover:bg-brand-accent flex items-center justify-center text-white transition-colors duration-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="block font-display text-2xl font-black text-brand-accent">{m.code}</span>
                <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider">{m.title}</h4>
                <p className="text-xs text-brand-muted leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Industries We Serve</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
              Our Trusted Clients
            </h2>
            <p className="text-sm text-brand-muted">
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
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 overflow-hidden bg-gray-100 relative">
                    <img
                      src={industry.imageUrl}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="font-display text-lg font-bold text-white leading-snug">{industry.name}</h4>
                      <span className="block text-[11px] text-brand-accent font-semibold uppercase tracking-wider mt-0.5">{industry.role}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-brand-muted leading-relaxed">{industry.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-3.5 px-8 rounded-lg text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

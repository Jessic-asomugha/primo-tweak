import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Compass, Factory, Truck, Zap, CircleCheck as CheckCircle2, Star, Quote, Flame, ShieldCheck, Award, Building2 } from 'lucide-react';
import { SERVICES_DATA, ACCOMPLISHMENTS_DATA, TESTIMONIALS_DATA } from '../data';

interface HomeViewProps {
  onNavigateToServices: () => void;
  onNavigateToAbout: () => void;
  onNavigateToContact: () => void;
  onRequestQuote: () => void;
}

export default function HomeView({
  onNavigateToServices,
  onNavigateToAbout,
  onNavigateToContact,
  onRequestQuote
}: HomeViewProps) {
  // Highlighted Services (First 3)
  const highlightedServices = SERVICES_DATA.slice(0, 3);

  // How it Works Steps
  const steps = [
    {
      number: '01',
      title: 'Contact & Consultation',
      desc: 'Reach out to discuss your energy requirements. Our team provides expert consultation on the best fuel solutions for your needs.'
    },
    {
      number: '02',
      title: 'Quote & Agreement',
      desc: 'Receive a competitive quote tailored to your volume and delivery requirements. We ensure transparent pricing and flexible terms.'
    },
    {
      number: '03',
      title: 'Delivery & Support',
      desc: 'Enjoy reliable, timely delivery to your location with 24-hour customer support and same-day delivery options for urgent needs.'
    }
  ];

  const sectionFadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-white text-brand-dark overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center bg-brand-light">
        <div className="absolute inset-0 flex">
          <div className="w-full lg:w-1/2 bg-brand-light" />
          <div className="hidden lg:block lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-light via-transparent to-black/30 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80" 
              alt="Primo Offshore Deepwater Oil Rig" 
              className="absolute inset-0 h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-accent/10 rounded-full text-brand-accent text-xs font-semibold uppercase tracking-wider border border-brand-accent/20">
                <span className="h-2 w-2 rounded-full bg-brand-accent animate-ping" />
                Established 2024 • CAC Reg: 7830522
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark leading-[1.1]">
                Reliable Energy Solutions. <br />
                <span className="text-brand-accent">Delivered with Excellence.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
                Primo Energy Oil & Gas Co. Limited delivers high-quality petroleum products and energy solutions to businesses, industries, institutions, and households across Nigeria.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={onRequestQuote}
                  className="bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 text-center flex items-center justify-center gap-2 group text-sm"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onNavigateToAbout}
                  className="bg-brand-dark hover:bg-black text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 text-center text-sm"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Small Ribbon/Feature Bar at the very bottom right of the hero */}
        <div className="absolute bottom-0 right-0 left-0 lg:left-1/2 bg-brand-dark text-white py-4 z-20 overflow-hidden border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono font-medium tracking-wider text-gray-300">
            <span className="flex items-center gap-1 text-brand-accent">✦ Diesel Supply</span>
            <span className="flex items-center gap-1">✦ Petroleum Products</span>
            <span className="flex items-center gap-1">✦ Bulk Delivery</span>
            <span className="flex items-center gap-1 text-brand-accent">✦ Energy Consulting</span>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="bg-brand-dark text-white py-24 relative overflow-hidden">
        {/* Subtle geometric lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionFadeIn}
            className="grid grid-cols-1 lg:grid-cols-4 gap-12"
          >
            
            {/* Introductory Column */}
            <div className="space-y-4 lg:pr-4">
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">How It Works</span>
              <h2 className="font-display text-3xl font-bold tracking-tight">Simple Process</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Getting reliable energy solutions is easy. From consultation to delivery, we ensure a seamless experience for all our clients.
              </p>
              <button 
                onClick={onNavigateToAbout}
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:text-white transition group pt-2"
              >
                Learn More About Us
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </button>
            </div>

            {/* Dynamic Step Columns */}
            {steps.map((step, idx) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="relative group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Watermark number */}
                <div className="absolute -top-6 right-4 text-7xl font-display font-bold text-white/[0.03] select-none group-hover:text-brand-accent/[0.08] transition-colors duration-300">
                  {step.number}
                </div>
                
                <span className="block text-xs font-bold tracking-wider text-brand-accent uppercase mb-3">Phase {step.number}</span>
                <h3 className="font-display text-lg font-bold tracking-tight mb-2 text-white">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionFadeIn}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
            {/* Visual Image container with oil refinery/tanker image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-accent/10 -z-10 rounded-lg" />
              <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=80" 
                  alt="Primo Coastal Petroleum Refinery Terminal" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-accent text-white p-6 rounded-xl shadow-xl hidden sm:block max-w-xs">
                <span className="block font-mono text-xs uppercase tracking-widest text-white/80">Service Standard</span>
                <span className="block text-3xl font-display font-bold mt-1">24/7 Support</span>
                <span className="block text-xs text-white/80 mt-1">Same-day delivery available with professional customer support.</span>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Our Mission</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
                Powering Businesses & Communities
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-brand-accent pl-4">
                  <h3 className="font-display text-lg font-semibold text-brand-dark">Dependable Energy Solutions</h3>
                  <p className="text-sm text-brand-muted mt-1 leading-relaxed">
                    We provide high-quality petroleum products and energy solutions that power businesses and communities efficiently. Our commitment to quality ensures your operations never stop.
                  </p>
                </div>

                <div className="border-l-4 border-brand-accent pl-4">
                  <h3 className="font-display text-lg font-semibold text-brand-dark">Customer-Centric Approach</h3>
                  <p className="text-sm text-brand-muted mt-1 leading-relaxed">
                    Our commitment to professionalism, integrity, and customer satisfaction has positioned us as a reliable partner for businesses across Nigeria.
                  </p>
                </div>
              </div>

              {/* Bullet checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-brand-dark">
                <div className="flex items-center gap-2 bg-brand-light px-3 py-2 rounded-lg">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                  Integrity
                </div>
                <div className="flex items-center gap-2 bg-brand-light px-3 py-2 rounded-lg">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                  Excellence
                </div>
                <div className="flex items-center gap-2 bg-brand-light px-3 py-2 rounded-lg">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                  Reliability
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onRequestQuote}
                  className="bg-brand-accent hover:bg-brand-accent-hover text-white px-6 py-3 text-sm font-semibold rounded-lg transition shadow-sm hover:shadow-md"
                >
                  Request a Quote — Now
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 4. HIGHLIGHTED SERVICES */}
      <section className="py-24 bg-brand-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFadeIn}
            className="text-center max-w-xl mx-auto mb-16 space-y-3"
          >
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Our Services</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
              Energy Solutions for Your Business
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              From diesel supply to energy consulting, we provide comprehensive petroleum products and logistics services to keep your operations running smoothly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedServices.map((service, index) => {
              const IconComponent = index === 0 ? Compass : index === 1 ? Factory : Truck;
              
              return (
                <motion.div 
                  key={service.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-accent/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-lg bg-brand-light flex items-center justify-center text-brand-accent mb-6">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-brand-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <button 
                    onClick={onNavigateToServices}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-brand-dark transition-colors mt-auto group"
                  >
                    Discover Scope
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onNavigateToServices}
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-black text-white px-7 py-3 rounded-lg text-xs font-bold tracking-wider uppercase hover:shadow-lg active:scale-[0.98] transition-all"
            >
              View All Services
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Our Credibility</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">Why Choose Us</h2>
              <p className="text-sm text-brand-muted leading-relaxed">
                Primo Energy combines quality petroleum products with dependable logistics and outstanding customer service. We are committed to delivering fuel safely, promptly, and at competitive prices, helping businesses operate without interruption.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-brand-light p-4 rounded-lg border border-gray-100 shadow-2xs">
                  <ShieldCheck className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-brand-dark">Licensed Nigerian Company</h4>
                    <p className="text-[11px] text-brand-muted mt-0.5">Incorporated under the Corporate Affairs Commission (CAC) with registration number 7830522.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-brand-light p-4 rounded-lg border border-gray-100 shadow-2xs">
                  <Award className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-brand-dark">Fast & Reliable Delivery</h4>
                    <p className="text-[11px] text-brand-muted mt-0.5">Same-day delivery available with 24-hour customer support for urgent requirements.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-brand-light p-4 rounded-lg border border-gray-100 shadow-2xs">
                  <Building2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-brand-dark">Competitive Pricing</h4>
                    <p className="text-[11px] text-brand-muted mt-0.5">Market-competitive wholesale pricing with bulk supply capability.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80" 
                  alt="Industrial oil and gas engineers inspecting high-pressure pipeline" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-4 right-4 bg-brand-dark text-white px-4 py-2 rounded-lg text-xs font-mono border border-white/10 shadow-md">
                <span>ESTABLISHED: 14 AUGUST 2024</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. ACCOMPLISHMENTS */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-3">
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Our Achievements</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
                Building Trust & Excellence
              </h2>
            </div>
            <p className="text-sm text-brand-muted max-w-md">
              From CAC registration to multi-state service coverage, we continue to grow and serve businesses across Nigeria with reliable energy solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACCOMPLISHMENTS_DATA.map((item, idx) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 right-4 bg-brand-dark text-white font-mono text-xs font-bold px-2.5 py-1 rounded-md z-10 border border-white/10">
                    {item.year}
                  </span>
                </div>
                <div className="p-6 bg-white space-y-3">
                  <span className="block text-[10px] font-bold text-brand-accent tracking-wider uppercase">{item.location}</span>
                  <h3 className="font-display text-lg font-bold tracking-tight text-brand-dark">{item.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CLIENT SUCCESS STORIES */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.4))]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFadeIn}
            className="text-center max-w-xl mx-auto mb-16 space-y-3"
          >
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Client Testimonials</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Trusted by Nigerian Businesses
            </h2>
            <p className="text-sm text-gray-400">
              Primo Energy serves diverse industries across Nigeria with reliable petroleum products and energy solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 max-w-xl mx-auto gap-8">
            {TESTIMONIALS_DATA.map((t, index) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl p-8 transition-all duration-300 border relative bg-white/5 border-white/5 hover:border-white/20 hover:-translate-y-1"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-brand-accent/20" />
                
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={t.avatarUrl} 
                    alt={t.name} 
                    className="h-12 w-12 rounded-full object-cover border border-white/20 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">{t.name}</h4>
                    <span className="block text-xs text-brand-accent font-medium">{t.role}</span>
                    <span className="block text-[10px] text-gray-400 font-mono">{t.company}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-1 mt-4 text-brand-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. EXPERTISE & PROGRESS BARS */}
      <section className="py-24 bg-brand-light relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            
            {/* Core copy and metric bars */}
            <div className="space-y-6">
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Our Performance</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
                Delivering Excellence
              </h2>
              
              <div className="space-y-4 text-xs text-brand-muted leading-relaxed">
                <p>
                  <strong>Reliable Fuel Supply:</strong> We ensure consistent delivery of high-quality petroleum products to keep your operations running smoothly without interruption.
                </p>
                <p>
                  <strong>Competitive Pricing:</strong> Our market-competitive wholesale pricing and bulk supply capability help businesses optimize their energy costs.
                </p>
              </div>

              {/* Verified service highlights (from client brief, no invented figures) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-dark">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0" />
                  Same-day delivery available
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-dark">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0" />
                  24-hour customer support
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-dark">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0" />
                  Bulk supply capability
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-dark">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0" />
                  Competitive wholesale pricing
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onRequestQuote}
                  className="bg-brand-accent hover:bg-brand-accent-hover text-white px-6 py-3.5 text-xs font-bold tracking-wider uppercase rounded-lg transition shadow-xs hover:shadow-md"
                >
                  Request a Quote
                </button>
              </div>
            </div>

            {/* Refinery view matching oil & gas theme */}
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-accent/15 -z-10 rounded-lg" />
              <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80" 
                  alt="Oil refinery illuminated at twilight" 
                  className="w-full h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating technical label */}
              <div className="absolute top-4 left-4 bg-brand-dark/95 text-white py-3 px-4 rounded-lg backdrop-blur-xs text-[10px] font-mono tracking-wider border border-white/10 shadow-lg">
                <span>SERVICE STATUS: ACTIVE</span>
                <span className="block text-brand-accent font-bold mt-0.5">24/7 SUPPORT // SAME-DAY DELIVERY</span>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}


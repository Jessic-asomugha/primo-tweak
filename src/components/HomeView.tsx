import React from 'react';
import { motion } from 'motion/react';
import {
  ChevronRight, ArrowRight, Compass, Factory, Truck,
  CircleCheck as CheckCircle2, Star, Quote, ShieldCheck, Award, Building2, Fuel, Droplet, Lightbulb, Package,
} from 'lucide-react';
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
  onRequestQuote,
}: HomeViewProps) {
  const highlightedServices = SERVICES_DATA.slice(0, 3);

  const steps = [
    { number: '01', title: 'Contact & Consultation', desc: 'Reach out to discuss your energy requirements. Our team provides expert consultation on the best diesel solutions for your needs.' },
    { number: '02', title: 'Quote & Agreement', desc: 'Receive a competitive quote tailored to your volume and delivery requirements. We ensure transparent pricing and flexible terms.' },
    { number: '03', title: 'Delivery & Support', desc: 'Enjoy reliable, timely delivery to your location with 24-hour customer support and same-day delivery options for urgent needs.' },
  ];

  const heroStats = [
    { value: '24/7', label: 'Customer Support' },
    { value: '5+', label: 'States Covered' },
    { value: '100%', label: 'Quality Assured' },
  ];

  const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    Fuel, Droplet, Truck, Lightbulb, Package, Compass, Factory,
  };

  const sectionFadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white text-brand-dark overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-darker text-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/hero-imge.jpg"
            alt="Primo Energy industrial facility"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/90 to-brand-darker/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8 max-w-2xl"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
                Reliable Energy Solutions.
                <br />
                <span className="shimmer-text">Delivered with Excellence.</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                Primo Energy Oil &amp; Gas Co. Limited delivers high-quality petroleum products and energy solutions to businesses, industries, institutions, and households across Nigeria.
              </p>

              <div className="hero-actions flex flex-row flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onRequestQuote}
                  className="bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-4 px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group text-sm"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onNavigateToAbout}
                  className="bg-white/10 hover:bg-white/15 text-white font-semibold py-4 px-8 border border-white/20 hover:border-brand-accent/40 backdrop-blur-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 text-center text-sm"
                >
                  Learn More
                </button>
              </div>

              {/* Hero stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-brand-accent">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="bg-brand-dark text-white py-24 relative overflow-hidden bg-grain">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={sectionFadeIn}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          >
            {/* Intro Column */}
            <div className="space-y-5">
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

            {/* Step Cards */}
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="relative group p-7 bg-white/5 border border-white/5 hover:border-brand-accent/40 hover:bg-white/[0.07] hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="absolute -top-5 right-5 text-7xl font-display font-bold text-white/[0.04] select-none group-hover:text-brand-accent/10 transition-colors duration-300">
                  {step.number}
                </div>
                <div className="h-10 w-10 bg-brand-accent/15 flex items-center justify-center text-brand-accent mb-5">
                  <span className="font-display text-sm font-bold">{step.number}</span>
                </div>
                <span className="block text-xs font-bold tracking-wider text-brand-accent uppercase mb-2">Phase {step.number}</span>
                <h3 className="font-display text-lg font-bold tracking-tight mb-3 text-white">{step.title}</h3>
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
            viewport={{ once: true, margin: '-50px' }}
            variants={sectionFadeIn}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Visual */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-brand-accent/10 -z-10" />
              <div className="overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="/our-mission-on-the-home-page.jpg"
                  alt="Petroleum refinery towers at dusk"
                  className="w-full h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-dark text-white p-6 shadow-2xl hidden sm:block max-w-xs border border-white/10">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-brand-accent">Service Standard</span>
                <span className="block text-3xl font-display font-bold mt-1">24/7 Support</span>
                <span className="block text-xs text-gray-400 mt-1.5">Same-day delivery available with professional customer support.</span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Our Mission</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
                Powering Businesses &amp; Communities
              </h2>

              <div className="space-y-5">
                <div className="border-l-4 border-brand-accent pl-5 py-1">
                  <h3 className="font-display text-lg font-semibold text-brand-dark">Dependable Energy Solutions</h3>
                  <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
                    We provide high-quality petroleum products and energy solutions that power businesses and communities efficiently. Our commitment to quality ensures your operations never stop.
                  </p>
                </div>
                <div className="border-l-4 border-brand-accent pl-5 py-1">
                  <h3 className="font-display text-lg font-semibold text-brand-dark">Customer-Centric Approach</h3>
                  <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
                    Our commitment to professionalism, integrity, and customer satisfaction has positioned us as a reliable partner for businesses across Nigeria.
                  </p>
                </div>
              </div>

              {/* Values chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                {['Integrity', 'Excellence', 'Reliability'].map((v) => (
                  <div key={v} className="flex items-center gap-2 bg-brand-light px-4 py-2.5 border border-gray-100">
                    <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                    <span className="text-xs font-semibold text-brand-dark">{v}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={onRequestQuote}
                  className="bg-brand-accent hover:bg-brand-accent-hover text-white px-7 py-3.5 text-sm font-semibold transition shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
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
              const IconComponent = serviceIcons[service.iconName] || Compass;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-brand-accent/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="h-14 w-14 bg-brand-light group-hover:bg-brand-accent group-hover:text-white flex items-center justify-center text-brand-accent mb-6 transition-all duration-300">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-brand-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <button
                      onClick={onNavigateToServices}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-brand-dark transition-colors mt-auto group/btn"
                    >
                      Discover Scope
                      <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <button
              onClick={onNavigateToServices}
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-darker text-white px-8 py-3.5 text-xs font-bold tracking-wider uppercase hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all"
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
                Primo Energy combines quality petroleum products with dependable logistics and outstanding customer service. We are committed to delivering diesel safely, promptly, and at competitive prices, helping businesses operate without interruption.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { icon: ShieldCheck, title: 'Licensed Nigerian Company', desc: 'Incorporated under the Corporate Affairs Commission (CAC) with registration number 7830522.' },
                  { icon: Award, title: 'Fast & Reliable Delivery', desc: 'Same-day delivery available with 24-hour customer support for urgent requirements.' },
                  { icon: Building2, title: 'Competitive Pricing', desc: 'Market-competitive wholesale pricing with bulk supply capability.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-brand-light p-5 border border-gray-100 hover:shadow-md hover:border-brand-accent/20 transition-all duration-300">
                    <div className="h-10 w-10 bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark">{item.title}</h4>
                      <p className="text-xs text-brand-muted mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="/why-choose-us.jpg"
                  alt="Engineers inspecting industrial pipelines"
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-6 right-6 bg-brand-dark/95 text-white px-5 py-3 text-xs font-mono border border-white/10 shadow-xl backdrop-blur-sm">
                <span>ESTABLISHED COMPANY</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. ACCOMPLISHMENTS */}
      <section className="py-24 bg-brand-light border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-3">
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Our Achievements</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
                Building Trust &amp; Excellence
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
                className="group overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-green-600/90 text-white shadow-lg">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-7 bg-white space-y-3">
                  <span className="block text-[10px] font-bold text-brand-accent tracking-wider uppercase">{item.location}</span>
                  <h3 className="font-display text-lg font-bold tracking-tight text-brand-dark">{item.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT SUCCESS STORIES */}
      <section className="py-24 bg-brand-darker text-white relative overflow-hidden bg-grain">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFadeIn}
            className="text-center max-w-xl mx-auto mb-16 space-y-3"
          >
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">A word from the manager</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Manager's comment
            </h2>
            <p className="text-sm text-gray-400">
              Primo Energy serves diverse industries across Nigeria with reliable petroleum products and energy solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 max-w-2xl mx-auto gap-8">
            {TESTIMONIALS_DATA.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 transition-all duration-300 border relative bg-white/5 border-white/10 hover:border-brand-accent/30 hover:-translate-y-1 backdrop-blur-sm"
              >
                <Quote className="absolute top-7 right-7 h-10 w-10 text-brand-accent/15" />
                <div className="mb-6">
                  <h4 className="font-display text-sm font-bold text-white">{t.name}</h4>
                  <span className="block text-xs text-brand-accent font-medium">{t.role}</span>
                  <span className="block text-[10px] text-gray-400 font-mono">{t.company}</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-1 mt-5 text-brand-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EXPERTISE & PROGRESS */}
      <section className="py-24 bg-brand-light relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Our Performance</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
                Delivering Excellence
              </h2>

              <div className="space-y-4 text-sm text-brand-muted leading-relaxed">
                <p>
                  <strong className="text-brand-dark">Reliable Diesel Supply:</strong> We ensure consistent delivery of high-quality petroleum products to keep your operations running smoothly without interruption.
                </p>
                <p>
                  <strong className="text-brand-dark">Competitive Pricing:</strong> Our market-competitive wholesale pricing and bulk supply capability help businesses optimize their energy costs.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {['Same-day delivery available', '24-hour customer support', 'Bulk supply capability', 'Competitive wholesale pricing'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-brand-dark">
                    <div className="h-6 w-6 bg-brand-accent/15 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap gap-4">
                <button
                  onClick={onRequestQuote}
                  className="bg-brand-accent hover:bg-brand-accent-hover text-white px-7 py-3.5 text-xs font-bold tracking-wider uppercase transition shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Request a Quote
                </button>
                <button
                  onClick={onNavigateToContact}
                  className="bg-white hover:bg-gray-50 text-brand-dark border border-gray-200 px-7 py-3.5 text-xs font-bold tracking-wider uppercase transition hover:shadow-md hover:-translate-y-0.5"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-brand-accent/15 -z-10" />
              <div className="overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="/trusted-industry-partner.jpg"
                  alt="Industrial buildings by the sea"
                  className="w-full h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-6 left-6 bg-brand-dark/95 text-white py-3 px-5 backdrop-blur-sm text-[10px] font-mono tracking-wider border border-white/10 shadow-xl">
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

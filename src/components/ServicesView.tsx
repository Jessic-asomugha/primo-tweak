import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Factory, Truck, Zap, Wrench, ShieldCheck, ChevronRight, Settings, ArrowRight, Fuel, Droplet, Lightbulb, Package, X, CircleCheck as CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ServicesViewProps {
  onRequestQuoteWithService: (serviceId: string) => void;
}

export default function ServicesView({ onRequestQuoteWithService }: ServicesViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [mobileDetail, setMobileDetail] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Services', count: SERVICES_DATA.length },
    { id: 'supply', label: 'Fuel Supply', count: SERVICES_DATA.filter(s => s.category === 'supply').length },
    { id: 'logistics', label: 'Logistics & Delivery', count: SERVICES_DATA.filter(s => s.category === 'logistics').length },
    { id: 'consulting', label: 'Consulting', count: SERVICES_DATA.filter(s => s.category === 'consulting').length },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'Factory': return Factory;
      case 'Truck': return Truck;
      case 'Zap': return Zap;
      case 'Wrench': return Wrench;
      case 'ShieldCheck': return ShieldCheck;
      case 'Fuel': return Fuel;
      case 'Droplet': return Droplet;
      case 'Lightbulb': return Lightbulb;
      case 'Package': return Package;
      default: return Settings;
    }
  };

  const activeService = activeServiceId ? SERVICES_DATA.find(s => s.id === activeServiceId) : null;
  const mobileDetailService = mobileDetail ? SERVICES_DATA.find(s => s.id === mobileDetail) : null;

  const features: Record<string, string[]> = {
    'diesel-ago-supply': ['Premium AGO quality', 'Same-day delivery', 'Bulk supply capability', '24/7 customer support'],
    'petroleum-products': ['Diesel, petrol & kerosene', 'Certified depot sourcing', 'Strict quality control', 'Flexible volumes'],
    'bulk-fuel-delivery': ['Specialized tanker fleet', 'Large-volume capacity', 'Safe transportation', 'Direct-to-site delivery'],
    'energy-consulting': ['Fuel management advisory', 'Energy optimisation', 'Cost reduction strategies', 'Corporate & government'],
    'procurement-logistics': ['Sourcing & procurement', 'Transport coordination', 'Delivery management', 'Tailored supply chains'],
  };

  return (
    <div className="bg-brand-light text-brand-dark min-h-screen">

      {/* Page Header */}
      <section className="relative py-24 bg-brand-darker text-white overflow-hidden bg-grain">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/trusted-industry-partner.jpg"
            alt="Industrial storage tanks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/80 to-brand-darker/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl space-y-5"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-brand-accent text-xs font-semibold uppercase tracking-wider bg-white/5 border border-brand-accent/20 backdrop-blur-sm">
              Primo Energy Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Our <span className="text-brand-accent">Services</span>
            </h1>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
              Comprehensive petroleum products and energy solutions tailored to meet your business needs across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="border-b border-gray-200 bg-white sticky top-20 z-20 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 py-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg border transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-dark text-white border-brand-dark shadow-md'
                    : 'bg-white text-brand-dark/70 border-gray-200 hover:text-brand-accent hover:border-brand-accent/30 hover:shadow-sm'
                }`}
              >
                {cat.label}
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  selectedCategory === cat.id ? 'bg-white/15 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Service Cards */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => {
                const ServiceIcon = getIcon(service.iconName);
                const isActive = activeServiceId === service.id;
                const serviceFeatures = features[service.id] || [];

                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`group rounded-2xl border bg-white overflow-hidden transition-all duration-300 cursor-pointer ${
                      isActive ? 'border-brand-accent shadow-xl ring-1 ring-brand-accent/10' : 'border-gray-100 hover:border-brand-accent/30 shadow-sm hover:shadow-lg'
                    }`}
                    onClick={() => setActiveServiceId(service.id)}
                  >
                    {/* Image */}
                    <div className="relative h-44 sm:h-52 overflow-hidden bg-gray-100">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Icon badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className={`h-11 w-11 rounded-xl flex items-center justify-center shadow-lg transition-all ${
                          isActive ? 'bg-brand-accent text-white' : 'bg-white/90 text-brand-dark group-hover:bg-brand-accent group-hover:text-white'
                        }`}>
                          <ServiceIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="block text-[9px] font-bold text-brand-accent tracking-widest uppercase drop-shadow">{service.category}</span>
                          <h3 className="font-display text-base font-bold text-white leading-tight drop-shadow-lg">{service.title}</h3>
                        </div>
                      </div>

                      {/* Category tag */}
                      <span className="absolute top-4 right-4 bg-brand-darker/80 text-white text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/10">
                        {service.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <p className="text-sm text-brand-muted leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Feature pills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {serviceFeatures.slice(0, 3).map((feat) => (
                          <span key={feat} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-brand-dark bg-brand-light px-3 py-1.5 rounded-full border border-gray-100">
                            <CheckCircle2 className="h-3 w-3 text-brand-accent" />
                            {feat}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveServiceId(service.id);
                            setMobileDetail(service.id);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-brand-dark transition group/btn"
                        >
                          View Details
                          <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRequestQuoteWithService(service.id);
                          }}
                          className="inline-flex items-center gap-1.5 bg-brand-dark hover:bg-brand-darker text-white px-4 py-2 rounded-lg text-[11px] font-bold transition-all hover:shadow-md active:scale-[0.98]"
                        >
                          Request Quote
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right: Detail Panel — Desktop */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <AnimatePresence mode="wait">
              {activeService ? (
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
                >
                  {/* Image header */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={activeService.imageUrl}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-brand-darker/30 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-lg bg-brand-accent text-white flex items-center justify-center shadow-lg">
                          {(() => {
                            const Icon = getIcon(activeService.iconName);
                            return <Icon className="h-5 w-5" />;
                          })()}
                        </div>
                        <span className="text-[10px] font-bold text-brand-accent tracking-widest uppercase">{activeService.category}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white leading-tight drop-shadow-lg">{activeService.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 space-y-6">
                    <p className="text-sm text-brand-muted leading-relaxed">{activeService.longDescription}</p>

                    {/* Feature list */}
                    <div className="space-y-2.5">
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Key Features</h4>
                      {(features[activeService.id] || []).map((feat) => (
                        <div key={feat} className="flex items-center gap-3 text-sm text-brand-dark">
                          <div className="h-5 w-5 rounded-full bg-brand-accent/15 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="h-3.5 w-3.5 text-brand-accent" />
                          </div>
                          {feat}
                        </div>
                      ))}
                    </div>

                    {/* Info badges */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="p-3 bg-brand-light rounded-xl border border-gray-100 space-y-1">
                        <span className="block text-[9px] font-bold text-gray-400 uppercase font-mono">Company Status</span>
                        <span className="block text-xs font-semibold text-brand-dark">CAC Reg. 7830522</span>
                      </div>
                      <div className="p-3 bg-brand-light rounded-xl border border-gray-100 space-y-1">
                        <span className="block text-[9px] font-bold text-gray-400 uppercase font-mono">Support</span>
                        <span className="block text-xs font-semibold text-brand-accent">24-Hour Available</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRequestQuoteWithService(activeService.id)}
                      className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-3.5 rounded-lg text-sm font-bold transition-all hover:shadow-lg active:scale-[0.98]"
                    >
                      Request a Quote for this Service
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center space-y-5"
                >
                  <div className="h-16 w-16 rounded-full bg-brand-light flex items-center justify-center mx-auto">
                    <Settings className="h-8 w-8 text-brand-muted" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display text-base font-bold text-brand-dark">Select a Service</h3>
                    <p className="text-xs text-brand-muted max-w-xs mx-auto leading-relaxed">
                      Click on any service card to view detailed information, key features, and request a quote.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {SERVICES_DATA.slice(0, 3).map((s) => {
                      const Icon = getIcon(s.iconName);
                      return (
                        <button
                          key={s.id}
                          onClick={() => setActiveServiceId(s.id)}
                          className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-dark bg-brand-light px-3 py-2 rounded-lg border border-gray-100 hover:border-brand-accent/30 hover:text-brand-accent transition"
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {s.title.split(' ').slice(0, 2).join(' ')}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Detail Bottom Sheet */}
      <AnimatePresence>
        {mobileDetailService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileDetail(null)} />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[88vh] overflow-y-auto"
            >
              {/* Drag handle */}
              <div className="sticky top-0 bg-white pt-3 pb-2 z-10">
                <div className="h-1.5 w-12 bg-gray-200 rounded-full mx-auto" />
                <button
                  onClick={() => setMobileDetail(null)}
                  className="absolute top-3 right-4 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={mobileDetailService.imageUrl} alt={mobileDetailService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="h-9 w-9 rounded-lg bg-brand-accent text-white flex items-center justify-center shadow-lg">
                      {(() => {
                        const Icon = getIcon(mobileDetailService.iconName);
                        return <Icon className="h-4.5 w-4.5" />;
                      })()}
                    </div>
                    <span className="text-[9px] font-bold text-brand-accent tracking-widest uppercase">{mobileDetailService.category}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white drop-shadow-lg">{mobileDetailService.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5">
                <p className="text-sm text-brand-muted leading-relaxed">{mobileDetailService.longDescription}</p>

                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Key Features</h4>
                  {(features[mobileDetailService.id] || []).map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm text-brand-dark">
                      <div className="h-5 w-5 rounded-full bg-brand-accent/15 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-accent" />
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-brand-light rounded-xl border border-gray-100 space-y-1">
                    <span className="block text-[9px] font-bold text-gray-400 uppercase font-mono">Company Status</span>
                    <span className="block text-xs font-semibold text-brand-dark">CAC Reg. 7830522</span>
                  </div>
                  <div className="p-3 bg-brand-light rounded-xl border border-gray-100 space-y-1">
                    <span className="block text-[9px] font-bold text-gray-400 uppercase font-mono">Support</span>
                    <span className="block text-xs font-semibold text-brand-accent">24-Hour Available</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onRequestQuoteWithService(mobileDetailService.id);
                    setMobileDetail(null);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-3.5 rounded-lg text-sm font-bold transition-all hover:shadow-lg active:scale-[0.98]"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

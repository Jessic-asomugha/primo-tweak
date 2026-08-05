import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass, Factory, Truck, Zap, Wrench, ShieldCheck,
  ChevronRight, Settings, ArrowRight, Fuel, Droplet, Lightbulb, Package,
} from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ServicesViewProps {
  onRequestQuoteWithService: (serviceId: string) => void;
}

export default function ServicesView({ onRequestQuoteWithService }: ServicesViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [isMobileExpanded, setIsMobileExpanded] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'supply', label: 'Fuel Supply' },
    { id: 'logistics', label: 'Logistics & Delivery' },
    { id: 'consulting', label: 'Consulting' },
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

  return (
    <div className="bg-brand-light text-brand-dark min-h-screen">

      {/* Page Header */}
      <section className="relative py-20 bg-brand-darker text-white overflow-hidden bg-grain">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.pexels.com/photos/31403876/pexels-photo-31403876.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-brand-accent text-xs font-semibold uppercase tracking-wider bg-white/5 border border-brand-accent/20">
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

      {/* Categories + Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-semibold rounded-lg border transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand-dark text-white border-brand-dark shadow-md'
                  : 'bg-white text-brand-dark/70 border-gray-200 hover:text-brand-accent hover:border-brand-accent/30 hover:shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">

          {/* Left: Service List */}
          <div className="lg:col-span-7 space-y-4">
            {filteredServices.map((service) => {
              const ServiceIcon = getIcon(service.iconName);
              const isActive = activeServiceId === service.id;

              return (
                <div
                  key={service.id}
                  className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
                    isActive ? 'border-brand-accent shadow-xl ring-1 ring-brand-accent/10' : 'border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => {
                      setActiveServiceId(service.id);
                      if (activeServiceId === service.id) {
                        setIsMobileExpanded(!isMobileExpanded);
                      } else {
                        setIsMobileExpanded(true);
                      }
                    }}
                    className="w-full text-left p-6 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-all ${
                        isActive ? 'bg-brand-accent text-white shadow-md' : 'bg-brand-light text-brand-accent'
                      }`}>
                        <ServiceIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-brand-accent tracking-widest uppercase">{service.category}</span>
                        <h3 className="font-display text-lg font-bold text-brand-dark">{service.title}</h3>
                      </div>
                    </div>
                    <ChevronRight className={`h-5 w-5 text-brand-muted transition-transform ${isActive ? 'rotate-90' : ''}`} />
                  </button>

                  {/* Mobile expanded content */}
                  {isActive && isMobileExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="lg:hidden border-t border-gray-100 p-6 bg-brand-light/40 space-y-4"
                    >
                      <p className="text-xs text-brand-muted leading-relaxed">{service.longDescription}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                        <div className="p-4 bg-white rounded-lg border border-gray-100 space-y-1">
                          <span className="block text-[10px] font-bold text-gray-400 uppercase font-mono">Company Status</span>
                          <span className="block font-semibold text-brand-dark">CAC Reg. No. 7830522</span>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-gray-100 space-y-1">
                          <span className="block text-[10px] font-bold text-gray-400 uppercase font-mono">Support Availability</span>
                          <span className="block font-semibold text-brand-accent">24-Hour Customer Support</span>
                        </div>
                      </div>

                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() => onRequestQuoteWithService(service.id)}
                          className="flex items-center gap-1.5 bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all hover:shadow-lg"
                        >
                          Select Service & Request Quote
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Detail Sidebar — Desktop */}
          <div className="hidden lg:block lg:col-span-5 bg-white rounded-2xl p-7 border border-gray-100 sticky top-28 shadow-sm">
            {activeService ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
                  <div className="h-14 w-14 rounded-xl bg-brand-accent text-white flex items-center justify-center shadow-md">
                    {(() => {
                      const Icon = getIcon(activeService.iconName);
                      return <Icon className="h-7 w-7" />;
                    })()}
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-brand-accent tracking-widest uppercase">{activeService.category}</span>
                    <h3 className="font-display text-xl font-bold text-brand-dark">{activeService.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-brand-muted leading-relaxed">{activeService.longDescription}</p>

                <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                  <div className="p-4 bg-brand-light rounded-xl border border-gray-100 space-y-1">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase font-mono">Company Status</span>
                    <span className="block font-semibold text-brand-dark">CAC Reg. No. 7830522</span>
                  </div>
                  <div className="p-4 bg-brand-light rounded-xl border border-gray-100 space-y-1">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase font-mono">Support Availability</span>
                    <span className="block font-semibold text-brand-accent">24-Hour Support</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onRequestQuoteWithService(activeService.id)}
                    className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-3.5 rounded-lg text-sm font-bold transition-all hover:shadow-lg active:scale-[0.98]"
                  >
                    Select Service & Request Quote
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-brand-light flex items-center justify-center">
                  <Settings className="h-8 w-8 text-brand-muted" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-brand-dark">Select a Service</h3>
                  <p className="text-xs text-brand-muted mt-1">Click on any service to view detailed information</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

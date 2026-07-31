import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Compass, Factory, Truck, Zap, Wrench, ShieldCheck, 
  ChevronRight, Settings, ArrowRight, Fuel, Droplet, Lightbulb, Package
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

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

  // Simple copy map to assign matching icons
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
    <div className="bg-brand-light text-brand-dark min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Primo Energy Services</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">Our Services</h1>
          <p className="text-sm text-brand-muted leading-relaxed">
            Comprehensive petroleum products and energy solutions tailored to meet your business needs across Nigeria.
          </p>
        </motion.div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand-dark text-white border-brand-dark shadow-md'
                  : 'bg-white text-brand-dark/70 border-gray-200 hover:text-brand-accent hover:border-brand-accent/30 hover:shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left: Service List */}
          <div className="lg:col-span-7 space-y-4">
            {filteredServices.map((service) => {
              const ServiceIcon = getIcon(service.iconName);
              const isActive = activeServiceId === service.id;

              return (
                <div 
                  key={service.id} 
                  className={`rounded-xl border bg-white overflow-hidden transition-all duration-300 ${
                    isActive ? 'border-brand-accent shadow-lg ring-1 ring-brand-accent/10' : 'border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Summary Header */}
                  <button
                    onClick={() => {
                      setActiveServiceId(service.id);
                      // Only toggle mobile expansion if it's the same service
                      if (activeServiceId === service.id) {
                        setIsMobileExpanded(!isMobileExpanded);
                      } else {
                        setIsMobileExpanded(true);
                      }
                    }}
                    className="w-full text-left p-6 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? 'bg-brand-accent text-white' : 'bg-brand-light text-brand-accent'
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

                  {/* Expanded content - Mobile only */}
                  {isActive && isMobileExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="lg:hidden border-t border-gray-100 p-6 bg-brand-light/40 space-y-4"
                    >
                      <p className="text-xs text-brand-muted leading-relaxed">
                        {service.longDescription}
                      </p>

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
                          className="flex items-center gap-1.5 bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all"
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

          {/* Right: Service Detail Sidebar - Desktop only */}
          <div className="hidden lg:block lg:col-span-5 bg-white rounded-xl p-6 border border-gray-100 sticky top-24 shadow-sm">
            {activeService ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="h-14 w-14 rounded-lg bg-brand-accent text-white flex items-center justify-center">
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

                <p className="text-sm text-brand-muted leading-relaxed">
                  {activeService.longDescription}
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                  <div className="p-4 bg-brand-light rounded-lg border border-gray-100 space-y-1">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase font-mono">Company Status</span>
                    <span className="block font-semibold text-brand-dark">CAC Reg. No. 7830522</span>
                  </div>
                  <div className="p-4 bg-brand-light rounded-lg border border-gray-100 space-y-1">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase font-mono">Support Availability</span>
                    <span className="block font-semibold text-brand-accent">24-Hour Customer Support</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onRequestQuoteWithService(activeService.id)}
                    className="w-full flex items-center justify-center gap-1.5 bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-3 rounded-lg text-sm font-bold transition-all"
                  >
                    Select Service & Request Quote
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4">
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

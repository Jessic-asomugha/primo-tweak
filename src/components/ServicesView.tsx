import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Factory, Truck, Zap, Wrench, ShieldCheck,
  ArrowRight, Fuel, Droplet, Lightbulb, Package, Settings,
  X, CircleCheck as CheckCircle2,
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesViewProps {
  onRequestQuoteWithService: (serviceId: string) => void;
}

function getIcon(iconName: string) {
  switch (iconName) {
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
}

const FEATURES: Record<string, string[]> = {
  'diesel-ago-supply': ['Premium AGO quality', 'Same-day delivery', 'Bulk supply capability', '24/7 customer support'],
  'petroleum-products': ['Diesel, petrol & kerosene', 'Certified depot sourcing', 'Strict quality control', 'Flexible volumes'],
  'bulk-fuel-delivery': ['Specialised tanker fleet', 'Large-volume capacity', 'Safe transportation', 'Direct-to-site delivery'],
  'energy-consulting': ['Diesel management advisory', 'Energy optimisation', 'Cost reduction strategies', 'Corporate & government'],
  'procurement-logistics': ['Sourcing & procurement', 'Transport coordination', 'Delivery management', 'Tailored supply chains'],
};

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onRequestQuote: (id: string) => void;
}

function ServiceDetailModal({ service, onClose, onRequestQuote }: ServiceDetailModalProps) {
  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg max-h-[85vh] overflow-hidden bg-brand-dark text-white shadow-2xl border border-white/10 z-10 flex flex-col"
          >
            <div className="relative h-36 sm:h-40 overflow-hidden shrink-0">
              <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 h-7 w-7 flex items-center justify-center bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-3 left-5">
                <span className="block text-[9px] font-bold text-brand-accent tracking-widest uppercase mb-0.5">{service.category}</span>
                <h2 className="font-display text-lg font-bold text-white leading-tight">{service.title}</h2>
              </div>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto">
              <p className="text-sm text-gray-300 leading-relaxed">{service.longDescription}</p>

              <div className="space-y-2.5">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(FEATURES[service.id] || []).map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-sm text-gray-200">
                      <div className="h-4 w-4 shrink-0 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition"
                >
                  Close
                </button>
                <button
                  onClick={() => { onRequestQuote(service.id); onClose(); }}
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-2.5 text-sm font-bold transition-all hover:shadow-lg active:scale-[0.98]"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function ServicesView({ onRequestQuoteWithService }: ServicesViewProps) {
  const [detailService, setDetailService] = useState<Service | null>(null);

  return (
    <div className="bg-white text-brand-dark min-h-screen">

      {/* Page Header — editorial style */}
      <section className="relative min-h-[72vh] overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0">
          <img
            src="/pexels-thisisengineering-3862384.jpg"
            alt="Service hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-darker/70" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
          >
            <div className="md:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-accent" />
                <span className="text-xs font-bold text-brand-accent uppercase tracking-widest font-mono">What We Offer</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                Our <span className="text-brand-accent">Services</span>
              </h1>
              <p className="text-base text-white/75 leading-relaxed max-w-lg">
                Comprehensive petroleum products and energy solutions tailored to meet your business needs across Nigeria.
              </p>
            </div>
            <div className="md:col-span-4 hidden md:flex flex-col items-end gap-1">
              <span className="font-display text-7xl font-black text-brand-accent/15 leading-none">01</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">Services</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Stack */}
      <section className="w-full py-0 sm:py-20">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 px-4 sm:px-0 pt-12 sm:pt-0 space-y-3"
        >
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest font-mono">What We Offer</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark tracking-tight">
            Our Services Include
          </h2>
          <p className="text-sm text-brand-muted max-w-lg mx-auto leading-relaxed">
            From diesel supply to logistics and energy consulting — we cover every aspect of your petroleum needs.
          </p>
        </motion.div>

        <div className="space-y-0">
          {SERVICES_DATA.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const isGrey = index % 2 === 0;
            const isImageRight = index % 2 === 0;
            const bgClass = isGrey ? 'bg-gray-50' : 'bg-[#faf7f2]';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`${bgClass} py-10 sm:py-12`}
              >
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">

                    {/* Text — left on even rows, right on odd rows */}
                    <div className={isImageRight ? 'order-2 md:order-1 space-y-3' : 'space-y-3'}>
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 flex items-center justify-center bg-brand-accent">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-widest font-mono">{service.category}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-brand-dark leading-tight">{service.title}</h3>
                      <p className="text-sm text-brand-muted leading-relaxed">{service.description}</p>
                      <button
                        onClick={() => setDetailService(service)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-brand-dark transition-colors group/btn"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Image — right on even rows, left on odd rows */}
                    <div className={isImageRight ? 'overflow-hidden aspect-[4/3] order-1 md:order-2' : 'overflow-hidden aspect-[4/3]'}>
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <ServiceDetailModal
        service={detailService}
        onClose={() => setDetailService(null)}
        onRequestQuote={onRequestQuoteWithService}
      />
    </div>
  );
}

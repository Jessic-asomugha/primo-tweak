import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass, Factory, Truck, Zap, Wrench, ShieldCheck,
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
}

const FEATURES: Record<string, string[]> = {
  'diesel-ago-supply': ['Premium AGO quality', 'Same-day delivery', 'Bulk supply capability', '24/7 customer support'],
  'petroleum-products': ['Diesel, petrol & kerosene', 'Certified depot sourcing', 'Strict quality control', 'Flexible volumes'],
  'bulk-fuel-delivery': ['Specialised tanker fleet', 'Large-volume capacity', 'Safe transportation', 'Direct-to-site delivery'],
  'energy-consulting': ['Fuel management advisory', 'Energy optimisation', 'Cost reduction strategies', 'Corporate & government'],
  'procurement-logistics': ['Sourcing & procurement', 'Transport coordination', 'Delivery management', 'Tailored supply chains'],
};

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onRequestQuote: (id: string) => void;
}

function ServiceDetailModal({ service, onClose, onRequestQuote }: ServiceDetailModalProps) {
  if (!service) return null;
  const Icon = getIcon(service.iconName);
  const features = FEATURES[service.id] || [];

  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-brand-dark text-white shadow-2xl border border-white/10 z-10"
          >
            {/* Image */}
            <div className="relative h-52 sm:h-64 overflow-hidden">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/95 via-brand-darker/40 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 flex items-end gap-4">
                <div className="h-11 w-11 rounded-xl bg-brand-accent flex items-center justify-center shadow-lg shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="block text-[9px] font-bold text-brand-accent tracking-widest uppercase mb-0.5">{service.category}</span>
                  <h2 className="font-display text-xl font-bold text-white leading-tight">{service.title}</h2>
                </div>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-7 space-y-6 max-h-[55vh] overflow-y-auto">
              <p className="text-sm text-gray-300 leading-relaxed">{service.longDescription}</p>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm text-gray-200">
                      <div className="h-5 w-5 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-accent" />
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 space-y-1">
                  <span className="block text-[9px] font-bold text-gray-500 uppercase font-mono tracking-widest">Company Status</span>
                  <span className="block text-xs font-semibold text-white">CAC Reg. 7830522</span>
                </div>
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 space-y-1">
                  <span className="block text-[9px] font-bold text-gray-500 uppercase font-mono tracking-widest">Support</span>
                  <span className="block text-xs font-semibold text-brand-accent">24-Hour Available</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-1 border-t border-white/10">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition"
                >
                  Close
                </button>
                <button
                  onClick={() => { onRequestQuote(service.id); onClose(); }}
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-3 rounded-lg text-sm font-bold transition-all hover:shadow-lg active:scale-[0.98]"
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

      {/* Page Header */}
      <section className="relative py-24 bg-brand-darker text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/trusted-industry-partner.jpg"
            alt="Industrial facility"
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

      {/* Main Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3"
        >
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest font-mono">What We Offer</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark tracking-tight">
            Our Services Include
          </h2>
          <p className="text-sm text-brand-muted max-w-lg mx-auto leading-relaxed">
            From fuel supply to logistics and energy consulting — we cover every aspect of your petroleum needs.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Image Mosaic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            {/* Tall left image (spans 2 rows) */}
            <div className="row-span-2 rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src={SERVICES_DATA[0].imageUrl}
                alt={SERVICES_DATA[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Top right image */}
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src={SERVICES_DATA[1].imageUrl}
                alt={SERVICES_DATA[1].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Bottom right image */}
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src={SERVICES_DATA[2].imageUrl}
                alt={SERVICES_DATA[2].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Wide bottom spanning full width */}
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/7]">
              <img
                src={SERVICES_DATA[3].imageUrl}
                alt={SERVICES_DATA[3].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right: Service List */}
          <div className="space-y-0 divide-y divide-gray-100">
            {SERVICES_DATA.map((service, index) => {
              const Icon = getIcon(service.iconName);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group py-8 first:pt-0 last:pb-0"
                >
                  <div className="flex gap-5">
                    {/* Icon */}
                    <div className="shrink-0 h-11 w-11 rounded-xl bg-brand-light border border-gray-100 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300 mt-0.5">
                      <Icon className="h-5 w-5 text-brand-muted group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 space-y-2">
                      <h3 className="font-display text-lg font-bold text-brand-dark leading-snug">{service.title}</h3>
                      <p className="text-sm text-brand-muted leading-relaxed">{service.description}</p>
                      <button
                        onClick={() => setDetailService(service)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-brand-dark transition-colors group/btn mt-1"
                      >
                        Learn More
                        <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA */}
            <div className="pt-8">
              <button
                onClick={() => onRequestQuoteWithService('')}
                className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-darker text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all hover:shadow-lg active:scale-[0.98]"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={detailService}
        onClose={() => setDetailService(null)}
        onRequestQuote={onRequestQuoteWithService}
      />
    </div>
  );
}

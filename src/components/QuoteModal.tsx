import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CircleCheck as CheckCircle, FileText, ChevronRight } from 'lucide-react';
import { QuoteRequest } from '../types';
import { SERVICES_DATA } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedService = '' }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: preselectedService || SERVICES_DATA[0].id,
    projectScope: 'medium',
    timeline: '3-6-months',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        serviceType: preselectedService || SERVICES_DATA[0].id,
      }));
    }
  }, [isOpen, preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTicketId(`QT-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      serviceType: SERVICES_DATA[0].id,
      projectScope: 'medium',
      timeline: '3-6-months',
      message: ''
    });
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-2xl overflow-hidden bg-brand-dark text-white shadow-2xl border border-white/10 z-10 bg-grain"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-7 py-5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-brand-accent" />
                <h2 className="font-display text-xl font-bold tracking-tight">Request a Commercial Quote</h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:bg-white/10 hover:text-white transition"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="max-h-[80vh] overflow-y-auto p-7">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-sm text-gray-400">
                    Provide your diesel supply requirements below, and our team will get back to you with a competitive quote.
                  </p>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                        Full Name <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-black/30 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                        Company Name <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full bg-black/30 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                        Email Address <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="j.doe@company.com"
                        className="w-full bg-black/30 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                        Phone Number <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 801 234 5678"
                        className="w-full bg-black/30 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                        Service Needed <span className="text-brand-accent">*</span>
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition"
                      >
                        {SERVICES_DATA.map((service) => (
                          <option key={service.id} value={service.id}>{service.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                        Supply Volume
                      </label>
                      <select
                        name="projectScope"
                        value={formData.projectScope}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition"
                      >
                        <option value="small">Small (One-off / occasional order)</option>
                        <option value="medium">Medium (Regular monthly supply)</option>
                        <option value="large">Large (Bulk / ongoing contract)</option>
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                        When Do You Need It
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition"
                      >
                        <option value="immediate">Same-day / Urgent</option>
                        <option value="3-6-months">Within the next week</option>
                        <option value="6-12-months">Within the next month</option>
                        <option value="future">Ongoing / Recurring supply</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the quantity, delivery location, or any specific requirements..."
                      className="w-full bg-black/30 border border-white/15 px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-brand-accent transition resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-end border-t border-white/10 pt-4 gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2.5 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-3 text-sm font-semibold transition disabled:opacity-50 hover:shadow-lg active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Validating Parameters...
                        </>
                      ) : (
                        <>
                          Submit Proposal Request
                          <ChevronRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8 px-4"
                >
                  <CheckCircle className="h-16 w-16 text-emerald-500 mb-4" />
                  <h3 className="font-display text-2xl font-bold tracking-tight mb-2">Request Lodged Successfully</h3>
                  <p className="text-gray-400 max-w-md text-sm mb-6">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your inquiry has been forwarded to the <span className="text-brand-accent font-semibold">{formData.serviceType.replace('-', ' ')}</span> engineering taskforce.
                  </p>

                  <div className="bg-black/40 border border-white/10 p-4 w-full max-w-sm mb-6">
                    <span className="block text-[10px] font-semibold tracking-widest text-gray-500 uppercase">Proposal Ref Ticket</span>
                    <span className="block text-2xl font-mono font-bold text-brand-accent tracking-wider mt-1">{ticketId}</span>
                  </div>

                  <p className="text-xs text-gray-500 max-w-xs mb-6">
                    An automated copy of this record has been simulated to <span className="text-gray-300">{formData.email}</span>. One of our regional directors will follow up within 24 business hours.
                  </p>

                  <button
                    onClick={resetForm}
                    className="bg-white/10 hover:bg-white/15 text-white px-6 py-2.5 text-sm font-semibold transition"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, ArrowLeft, Send, CheckCircle } from 'lucide-react';

interface ContactViewProps {
  onBackToHome: () => void;
}

export default function ContactView({ onBackToHome }: ContactViewProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'b411e041-cfa8-434e-8ace-1a8834fc6c51',
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        console.error('Submission failed:', result.message);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-white text-brand-dark min-h-screen">
      
      {/* 1. Page Header Block */}
      <section className="bg-brand-light border-b border-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">Contact</h1>
            <p className="text-sm text-brand-muted leading-relaxed">
              Always ready to address your fuel supply needs, energy consulting requests, and logistics requirements. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Navigation Bar (Back to Home) */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
        </div>
      </div>

      {/* 3. Contact Details & Interactive Form */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Get In Touch */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h2 className="font-display text-2xl font-bold tracking-tight">Get in touch</h2>
                <p className="text-xs text-brand-muted leading-relaxed">
                  For fuel supply inquiries, energy consulting requests, and logistics requirements, please reach out to us using the contact information below.
                </p>
              </div>

              <div className="space-y-5 pt-4">
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Head Office</h4>
                    <p className="text-sm text-brand-dark font-medium mt-1">
                    Plot 471, Construction Ave. Central Area, FCT  Abuja, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">24-Hour Customer Support</h4>
                    <p className="text-sm text-brand-dark font-mono font-medium mt-1">
                      <a href="tel:+2347025513466" className="hover:text-brand-accent transition">
                        +2347025513466, +234808860893
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Email</h4>
                    <p className="text-sm text-brand-dark font-medium mt-1">
                      <a href="mailto:info@primoenergy.com.ng" className="hover:text-brand-accent transition">
                        info@primoenergy.com.ng
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-brand-light rounded-xl p-8 border border-gray-100 shadow-2xs">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-brand-dark/70 uppercase tracking-wider mb-1.5">
                          First Name <span className="text-brand-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className="w-full rounded-lg bg-white border border-gray-200 px-3.5 py-2.5 text-xs text-brand-dark focus:outline-hidden focus:border-brand-accent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-brand-dark/70 uppercase tracking-wider mb-1.5">
                          Last Name <span className="text-brand-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className="w-full rounded-lg bg-white border border-gray-200 px-3.5 py-2.5 text-xs text-brand-dark focus:outline-hidden focus:border-brand-accent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-brand-dark/70 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="j.doe@logistics.com"
                        className="w-full rounded-lg bg-white border border-gray-200 px-3.5 py-2.5 text-xs text-brand-dark focus:outline-hidden focus:border-brand-accent transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-brand-dark/70 uppercase tracking-wider mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Fuel supply inquiry..."
                        className="w-full rounded-lg bg-white border border-gray-200 px-3.5 py-2.5 text-xs text-brand-dark focus:outline-hidden focus:border-brand-accent transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-brand-dark/70 uppercase tracking-wider mb-1.5">
                        Comments / Questions <span className="text-brand-accent">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your energy needs..."
                        className="w-full rounded-lg bg-white border border-gray-200 px-3.5 py-2.5 text-xs text-brand-dark focus:outline-hidden focus:border-brand-accent transition resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-accent hover:bg-brand-accent-hover disabled:opacity-50 text-white font-bold py-3 px-6 rounded-lg text-xs uppercase tracking-widest transition flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Transmitting...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-4"
                  >
                    <CheckCircle className="h-14 w-14 text-emerald-500 mx-auto" />
                    <h3 className="font-display text-xl font-bold tracking-tight">Message Sent</h3>
                    <p className="text-xs text-brand-muted leading-relaxed max-w-sm mx-auto">
                      Thank you. Your inquiry has been received. Our team will respond shortly.
                    </p>
                    <button
                      onClick={resetForm}
                      className="bg-brand-dark hover:bg-black text-white px-5 py-2 rounded-lg text-xs font-semibold transition"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Styled Coordinates Map section exactly as image */}
      <section className="relative h-96 bg-brand-dark overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 z-10 bg-brand-dark/20" />
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" 
          alt="Monochromatic topographical grid map" 
          className="w-full h-full object-cover opacity-35 filter grayscale scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Floating geographic node markers */}
        <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
          <div className="bg-brand-dark/95 border border-white/10 rounded-xl p-5 shadow-2xl max-w-xs text-white">
            <span className="block text-[10px] font-mono tracking-widest text-brand-accent uppercase">Head Office Location</span>
            <h4 className="font-display text-sm font-bold mt-1">Abuja, FCT — Nigeria</h4>
            <p className="text-[11px] text-gray-400 mt-2">
              Federal Capital Territory
            </p>
            <span className="block text-[9px] text-brand-accent mt-1 font-mono">// Service Coverage: Active</span>
          </div>
        </div>
      </section>

    </div>
  );
}

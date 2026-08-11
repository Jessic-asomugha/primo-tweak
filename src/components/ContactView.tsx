import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, ArrowLeft, Send, CircleCheck as CheckCircle, Clock } from 'lucide-react';

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
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  const inputClass = "w-full bg-white border border-gray-200 px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition";
  const labelClass = "block text-[11px] font-bold text-brand-dark/70 uppercase tracking-wider mb-2";

  return (
    <div className="bg-white text-brand-dark min-h-screen">

      {/* Page Header — editorial style */}
      <section className="relative min-h-[72vh] overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0">
          <img
            src="/contact-us.jpg"
            alt="Contact hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-darker/75" />
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
                <span className="text-xs font-bold text-brand-accent uppercase tracking-widest font-mono">Get in Touch</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                Contact <span className="text-brand-accent">Us</span>
              </h1>
              <p className="text-base text-white/80 leading-relaxed max-w-lg">
                Always ready to address your diesel supply needs, energy consulting requests, and logistics requirements. Reach out to us anytime.
              </p>
            </div>
            <div className="md:col-span-4 hidden md:flex flex-col items-end gap-1">
              <span className="font-display text-7xl font-black text-brand-accent/15 leading-none">03</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">Contact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-20 bg-brand-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent">Contact Information</span>
                <h2 className="font-display text-2xl font-bold tracking-tight">Talk to Our Team</h2>
                <p className="text-sm text-brand-muted leading-relaxed">
                  For diesel supply inquiries, energy consulting requests, and logistics requirements, please reach out to us using the contact information below.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 hover:shadow-md hover:border-brand-accent/20 transition-all">
                  <div className="h-11 w-11 bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Head Office</h4>
                    <p className="text-sm text-brand-dark font-medium mt-1 leading-relaxed">
                      Plot 471, Construction Ave. Central Area, FCT Abuja, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 hover:shadow-md hover:border-brand-accent/20 transition-all">
                  <div className="h-11 w-11 bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">24-Hour Customer Support</h4>
                    <p className="text-sm text-brand-dark font-mono font-medium mt-1">
                      <a href="tel:+2347025513466" className="hover:text-brand-accent transition">
                        +234 702 551 3466
                      </a>
                      <span className="text-brand-muted">, </span>
                      <a href="tel:+234808860893" className="hover:text-brand-accent transition">
                        +234 808 860 893
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 hover:shadow-md hover:border-brand-accent/20 transition-all">
                  <div className="h-11 w-11 bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Email</h4>
                    <p className="text-sm text-brand-dark font-medium mt-1">
                      <a href="mailto:diesel@primo.com.ng" className="hover:text-brand-accent transition">
                        diesel@primo.com.ng
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-brand-dark text-white border border-white/10">
                  <div className="h-11 w-11 bg-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-brand-accent uppercase tracking-wider font-mono">Business Hours</h4>
                    <p className="text-sm text-white font-medium mt-1">24/7 Customer Support</p>
                    <p className="text-xs text-gray-400 mt-0.5">Same-day delivery available for urgent requests</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onBackToHome}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-dark transition group"
                >
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition" />
                  Back to Home
                </button>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7 bg-white p-8 border border-gray-100 shadow-sm">
              <div className="mb-6">
                <h2 className="font-display text-xl font-bold tracking-tight mb-1">Send Us a Message</h2>
                <p className="text-xs text-brand-muted">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>First Name <span className="text-brand-accent">*</span></label>
                        <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="John" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Last Name <span className="text-brand-accent">*</span></label>
                        <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Doe" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Email Address <span className="text-brand-accent">*</span></label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="j.doe@logistics.com" className={inputClass} />
                    </div>

                    <div>
                      <label className={labelClass}>Subject</label>
                      <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Diesel supply inquiry..." className={inputClass} />
                    </div>

                    <div>
                      <label className={labelClass}>Comments / Questions <span className="text-brand-accent">*</span></label>
                      <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us about your energy needs..." className={`${inputClass} resize-none`} />
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-accent hover:bg-brand-accent-hover disabled:opacity-50 text-white font-bold py-3.5 px-6 text-sm uppercase tracking-widest hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>Send Message <Send className="h-4 w-4" /></>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="h-16 w-16 bg-emerald-50 flex items-center justify-center mx-auto">
                      <CheckCircle className="h-10 w-10 text-emerald-500" />
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-tight">Message Sent</h3>
                    <p className="text-sm text-brand-muted leading-relaxed max-w-sm mx-auto">
                      Thank you. Your inquiry has been received. Our team will respond shortly.
                    </p>
                    <button
                      onClick={resetForm}
                      className="bg-brand-dark hover:bg-brand-darker text-white px-6 py-2.5 text-xs font-semibold transition hover:shadow-md"
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

      {/* Map removed as requested */}

    </div>
  );
}

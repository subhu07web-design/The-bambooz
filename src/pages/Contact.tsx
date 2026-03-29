import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-mint font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Contact Us</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Have a question or want to book a table? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-card-bg p-8 rounded-3xl border border-white/5">
                <MapPin className="text-mint w-8 h-8 mb-4" />
                <h4 className="text-white font-bold mb-2">Location</h4>
                <p className="text-white/40 text-sm">N Lakhimpur Bypass Rd, North Lakhimpur, Assam 787051</p>
              </div>
              <div className="bg-card-bg p-8 rounded-3xl border border-white/5">
                <Phone className="text-mint w-8 h-8 mb-4" />
                <h4 className="text-white font-bold mb-2">Phone</h4>
                <p className="text-white/40 text-sm">+91 98765 43210</p>
                <p className="text-white/40 text-sm">+91 91234 56789</p>
              </div>
              <div className="bg-card-bg p-8 rounded-3xl border border-white/5">
                <Mail className="text-mint w-8 h-8 mb-4" />
                <h4 className="text-white font-bold mb-2">Email</h4>
                <p className="text-white/40 text-sm">info@thebambooz.com</p>
                <p className="text-white/40 text-sm">support@thebambooz.com</p>
              </div>
              <div className="bg-card-bg p-8 rounded-3xl border border-white/5">
                <Clock className="text-mint w-8 h-8 mb-4" />
                <h4 className="text-white font-bold mb-2">Hours</h4>
                <p className="text-white/40 text-sm">Daily: 11:00 AM - 12:00 AM</p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden h-80 border border-white/10">
                <iframe
                  src="https://maps.google.com/maps?q=The%20Bambooz%20Family%20Restaurant%20North%20Lakhimpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=The+Bambooz+Family+Restaurant+North+Lakhimpur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-mint" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="glass-morphism p-10 rounded-[3rem]">
              <h3 className="text-3xl font-serif font-bold text-white mb-8">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Subject</label>
                  <input
                    required
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-mint transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full py-4 bg-mint text-black font-bold rounded-xl hover:bg-mint/80 transition-all flex items-center justify-center space-x-2 shadow-[0_0_30px_rgba(94,234,212,0.2)]"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

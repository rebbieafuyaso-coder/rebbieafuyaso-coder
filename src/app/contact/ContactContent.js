"use client"

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowRight,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaGlobe,
  FaFacebook,
} from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-3.5 h-3.5" />,
      label: 'Email',
      value: 'rebbieafuyaso.001@gmail.com',
      link: 'mailto:rebbieafuyaso.001.com',
    },
    {
      icon: <FaMapMarkerAlt className="w-3.5 h-3.5" />,
      label: 'Location',
      value: 'Wuhan, China',
      link: null,
    },
    {
      icon: <FaClock className="w-3.5 h-3.5" />,
      label: 'Available',
      value: 'Mon–Fri 9AM–6PM CST',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin className="w-4 h-4" />, name: 'LinkedIn', link: '#', color: 'text-blue-500' },
    { icon: <FaGithub className="w-4 h-4" />, name: 'GitHub', link: '#', color: 'text-gray-400' },
    { icon: <FaYoutube className="w-4 h-4" />, name: 'YouTube', link: '#', color: 'text-red-500' },
    { icon: <FaInstagram className="w-4 h-4" />, name: 'Instagram', link: '#', color: 'text-pink-400' },
    { icon: <FaFacebook className="w-4 h-4" />, name: 'Facebook', link: '#', color: 'text-blue-400' },
  ];

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-black mt-16">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 pt-12 sm:pt-16 pb-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h6 className="uppercase tracking-widest text-[10px] sm:text-xs text-gray-500 mb-2">
              Let's Connect
            </h6>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Get in <span className="text-blue-400">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-display">
              Have a question, collaboration idea, or just want to say hi?
              I'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-4 sm:px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1 space-y-4"
            >
              {/* Contact Info */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="text-sm font-bold text-white font-display mb-3">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className="flex items-start gap-3 p-2 rounded-md hover:bg-white/5 transition-colors group"
                    >
                      <div className="p-1.5 rounded-md bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors shrink-0">
                        {info.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-xs sm:text-sm text-white hover:text-blue-400 transition-colors break-words"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm text-white break-words">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="text-sm font-bold text-white font-display mb-3">
                  Connect Online
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.04 }}
                      className="group flex flex-col items-center gap-1 p-2 bg-white/5 rounded-md hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20"
                    >
                      <span className={`${social.color} group-hover:scale-110 transition-transform`}>
                        {social.icon}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-gray-400 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/5 rounded-lg p-4 sm:p-5 border border-white/10">
                <h3 className="text-sm font-bold text-white font-display mb-4">
                  Send a Message
                </h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-medium text-gray-400 mb-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-3 h-3" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 text-sm bg-black/50 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-gray-400 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-3 h-3" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 text-sm bg-black/50 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-gray-400 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm bg-black/50 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="How can I help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-gray-400 mb-1">
                      Message
                    </label>
                    <div className="relative">
                      <FaComment className="absolute left-3 top-3 text-gray-500 w-3 h-3" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full pl-9 pr-3 py-2 text-sm bg-black/50 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-display font-bold rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className={`p-3 rounded-md flex items-center gap-2 text-xs ${
                          submitStatus === 'success'
                            ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                            : 'bg-red-500/20 border border-red-500/30 text-red-400'
                        }`}
                      >
                        {submitStatus === 'success' ? (
                          <>
                            <FaCheckCircle className="w-4 h-4 shrink-0" />
                            <span>Message sent successfully! I'll get back to you soon.</span>
                          </>
                        ) : (
                          <>
                            <FaExclamationCircle className="w-4 h-4 shrink-0" />
                            <span>Something went wrong. Please try again.</span>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support — Buy Me a Coffee only */}
      <section className="px-4 sm:px-6 py-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Support My Work
            </h3>
            <p className="text-gray-400 font-display mt-1.5 max-w-xl mx-auto text-sm">
              Your support helps me create more content, build better projects, and continue learning.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group w-full max-w-sm bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg p-5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center mb-3 group-hover:bg-yellow-500/30 transition-colors">
                  <SiBuymeacoffee className="w-7 h-7 text-yellow-400" />
                </div>
                <h4 className="text-white font-bold font-display text-sm">
                  Buy Me a Coffee
                </h4>
                <p className="text-gray-400 text-xs mt-1">
                  Support with a one-time coffee
                </p>
                <span className="mt-2 text-yellow-400 text-xs font-medium flex items-center gap-1">
                  Buy Now <FaArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
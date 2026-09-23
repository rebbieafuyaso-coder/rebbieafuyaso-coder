"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Coffee,
  Heart,
  Award,
  Code2,
  BookOpen,
  FileText,
  Home,
  User,
  Briefcase,
  MessageSquare,
  Monitor,
  Server,
  Database,
  Zap,
} from 'lucide-react';
import {
  FaFacebook, FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaTwitch, FaTwitter,
  FaTiktok
 } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
  ];

  const professional = [
    { name: 'Resume', href: '/resume', icon: FileText },
    { name: 'Portfolio', href: '/portfolio', icon: Award },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Projects', href: '/projects', icon: Code2 },
  ];

  const social = [
    { name: 'Facebook', href: 'https://www.facebook.com/people/MrTechnology/61594693490939/', icon: FaFacebook },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rebbie-afuyaso/', icon: FaLinkedin },
    { name: 'YouTube', href: 'https://www.youtube.com/channel/UChpLXlUg-dkjMyEd-zdHgPg', icon: FaYoutube },
    { name: 'Instagram', href: 'https://www.instagram.com/rayb_fuyaso/', icon: FaInstagram },
  ];

  const developer = [
    { name: 'GitHub', href: 'https://github.com/rebbieafuyaso-coder/rebbieafuyaso-coder', icon: FaGithub },
    { name: 'CodeWars', href: 'https://www.codewars.com/users/rebbieafuyaso-coder', icon: Code2 },
    { name: 'LeetCode', href: 'https://leetcode.com/u/rebbieafuyaso-coder/', icon: Database },
    { name: 'Dev.to', href: 'https://dev.to/rebbieafuyasocoder', icon: Monitor },
  ];

  const support = [
    { name: 'Ko-fi', href: 'https://ko-fi.com/rebbieafuyaso', icon: Coffee },
  ];

  const contactInfo = {
    address: 'Wuhan University of Technology, Wuhan, China',
    email: 'rebbieafuyaso.001@gmail.com',
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Rebbie Afuyaso
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Software Developer & Technology Enthusiast building modern digital solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-gray-900 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                      <item.icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Professional */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Professional
              </h4>
              <ul className="space-y-2.5">
                {professional.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                      <item.icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social & Developer */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Social
              </h4>
              <ul className="space-y-2.5">
                {social.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                      <item.icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Developer & Support */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Developer
              </h4>
              <ul className="space-y-2.5">
                {developer.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                      <item.icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Rebbie Afuyaso. All rights reserved.
          </p>

          {/* Support Links */}
          <div className="flex items-center gap-4">
            {support.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors group"
              >
                <item.icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            Back to Top
            <Zap className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Footer Bottom Line */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
            <span>Built with ❤️</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Framer Motion</span>
            <span>•</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { motion } from 'framer-motion';
import { MessageSquare, Clock } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 border-t border-t-gray-100/10">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-linear-to-r from-emerald-400 to-yellow-400" />
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Testimonials</span>
          <span className="w-8 h-0.5 bg-linear-to-r from-yellow-400 to-emerald-400" />
        </div>

        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">
          What People <span className="bg-linear-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent">Say</span>
        </h2>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 shadow-xl"
        >
          <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Coming Soon
          </h3>
          <p className="text-gray-500">
            Testimonials and feedback will appear here.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Clock className="w-4 h-4 text-black animate-pulse" />
            <span className="text-sm text-gray-400">In Progress</span>
          </div>
        </motion.div>

        {/* Decorative Line */}
        <div className="mt-12 flex justify-center gap-2">
          <span className="w-12 h-1 rounded-full bg-linear-to-r from-white to-gray-400" />
          <span className="w-8 h-1 rounded-full bg-white" />
          <span className="w-8 h-1 rounded-full bg-white" />
          <span className="w-12 h-1 rounded-full bg-linear-to-r from-white to-gray-400" />
        </div>
      </div>
    </section>
  );
}
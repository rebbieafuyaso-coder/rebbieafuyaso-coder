"use client"

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeWork() {
  const categories = [
    {
      id: 1,
      title: "Software Development",
      description: "I develop efficient, scalable, and reliable software solutions that solve real-world problems. My focus is on writing clean code while creating applications that deliver performance, functionality, and long-term value.",
      image: "/software-development.png",
      link: "#",
      color: "from-emerald-500 to-emerald-400",
      borderColor: "border-emerald-500/30",
      hoverColor: "hover:border-emerald-500/50",
      iconColor: "text-emerald-400"
    },
    {
      id: 2,
      title: "Web Development",
      description: "I develop and build user-friendly websites and web applications using modern technologies. From intuitive interfaces to robust functionality, I create digital experiences that are fast, accessible, and engaging across all devices.",
      image: "/web-development.webp",
      link: "#",
      color: "from-yellow-500 to-amber-400",
      borderColor: "border-yellow-500/30",
      hoverColor: "hover:border-yellow-500/50",
      iconColor: "text-yellow-400"
    },
    {
      id: 3,
      title: "App Development",
      description: "I build modern applications that prioritize performance, usability, and seamless user experiences. Whether desktop or mobile-focused, I aim to develop intuitive solutions that meet user needs and adapt to evolving technologies.",
      image: "/mobile-app-development.png",
      link: "#",
      color: "from-emerald-500 to-yellow-500",
      borderColor: "border-emerald-500/30",
      hoverColor: "hover:border-yellow-500/50",
      iconColor: "text-emerald-400"
    },
  ];

  return (
    <section className="py-16 px-4 border-t border-t-gray-100/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-bold text-white"
          >
            What I Do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 mt-2"
          >
            What I can create with my skills, future projects and more...
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`group bg-gray-200/5 border ${category.borderColor} ${category.hoverColor} rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-${category.color.split(' ')[0].replace('from-', '')}/10`}
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-linear-to-t ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`} />
                <Image 
                  src={category.image} 
                  alt={category.title} 
                  width={800} 
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* linear overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-gray-900 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title with accent line */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-1 h-6 rounded-full bg-linear-to-b ${category.color}`} />
                  <h4 className={`font-display text-xl font-semibold text-white group-hover:bg-linear-to-r ${category.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {category.title}
                  </h4>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group/btn flex items-center gap-2 border ${category.borderColor} py-2.5 px-5 mx-auto rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300 hover:bg-linear-to-r ${category.color} hover:border-transparent`}
                >
                  <span>Explore Projects</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 ${category.iconColor}`} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-12 h-1 rounded-full bg-linear-to-r from-emerald-400 to-yellow-400" />
          <div className="w-6 h-1 rounded-full bg-emerald-400/30" />
          <div className="w-6 h-1 rounded-full bg-yellow-400/30" />
        </div>
      </div>
    </section>
  );
}
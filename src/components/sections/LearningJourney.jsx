"use client";

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FaCode, 
  FaMobile, 
  FaRobot, 
  FaBrain, 
  FaShieldAlt, 
  FaLink,
  FaArrowRight,
  FaCheckCircle,
  FaDatabase,
  FaPhone
} from 'react-icons/fa';
import { SiBlockchaindotcom } from 'react-icons/si';

export default function LearningJourney() {
  const containerRef = useRef(null);
  const controls = useAnimation();

  const timelineData = [
    {
      year: "2023",
      title: "Web Development",
      icon: <FaCode className="w-6 h-6" />,
      description: "Building modern, responsive web applications with React, Next.js, and Tailwind CSS.",
      tech: ["React", "Next.js", "Tailwind", "JavaScript", "CMS"],
      status: "completed",
      color: "from-blue-500 to-cyan-400"
    },
    {
      year: "2024",
      title: "Backend Development",
      icon: <FaDatabase className="w-6 h-6" />,
      description: "Expanding into database and building fullstack applications",
      tech: ["PostgreSQL", "Node.js", "Laravel", "PHP", "TypeScript"],
      status: "completed",
      color: "from-emerald-500 to-teal-400"
    },
    {
      year: "2026",
      title: "Software and Apps",
      icon: <FaMobile className="w-6 h-6" />,
      description: "Building apps and softwares for mobile phones and computers alike.",
      tech: ["Flutter", "Java", "C", "C++"],
      status: "in-progress",
      color: "from-orange-500 to-yellow-400"
    },
    {
      year: "2026",
      title: "Blockchain",
      icon: <SiBlockchaindotcom className="w-6 h-6" />,
      description: "Exploring decentralized technologies, smart contracts, and Web3 applications.",
      tech: ["Solidity", "Ethereum", "Web3.js", "Hardhat"],
      status: "in-progress",
      color: "from-red-500 to-pink-400"
    },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12 lg:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4"
        >
          My Learning Journey
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl"
        >
          A continuous path of growth, exploring new technologies and pushing boundaries.
        </motion.p>
      </div>

      {/* Horizontal Timeline - Scrollable */}
      <div 
        ref={containerRef}
        className="relative overflow-x-auto pb-6 sm:pb-8 scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30"
        style={{ 
          scrollbarWidth: 'thin',
          msOverflowStyle: 'none'
        }}
      >
        <div className="relative flex gap-4 sm:gap-6 lg:gap-8 min-w-max px-2 sm:px-4 pt-6 sm:pt-8">
          {/* Timeline Line */}
          <div className="absolute left-0 top-16 sm:top-18 w-full h-0.5 sm:h-1 bg-white/10" />
          <div className="absolute left-0 top-16 sm:top-18 w-[30%] h-0.5 sm:h-1 bg-linear-to-r from-emerald-500 via-yellow-500 to-transparent rounded-full" />

          {timelineData.map((item, index) => {
            const isCompleted = item.status === 'completed';
            const isInProgress = item.status === 'in-progress';
            const isUpcoming = item.status === 'upcoming';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col items-center min-w-[280px] sm:min-w-[300px] lg:min-w-[320px] max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] shrink-0"
              >
                {/* Timeline Node */}
                <div className="relative z-10 mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white text-base sm:text-xl border-2 transition-all duration-300 ${
                      isCompleted 
                        ? 'border-emerald-500 bg-emerald-500/20 shadow-lg shadow-emerald-500/20' 
                        : isInProgress 
                        ? 'border-yellow-500 bg-yellow-500/20 shadow-lg shadow-yellow-500/20 animate-pulse' 
                        : 'border-white/20 bg-white/5'
                    }`}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Status Dot */}
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-black ${
                    isCompleted 
                      ? 'bg-emerald-500' 
                      : isInProgress 
                      ? 'bg-yellow-500' 
                      : 'bg-white/30'
                  }`} />
                </div>

                {/* Year Badge */}
                <div className="mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                    {item.year}
                  </span>
                </div>

                {/* Card Content */}
                <motion.div 
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="w-full max-h-[280px] sm:max-h-[300px] lg:max-h-[320px] h-full bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-2 sm:mb-3">
                    {item.description}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {item.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Status Indicator */}
                  <div className="mt-2 sm:mt-3 flex items-center gap-2">
                    {isCompleted && (
                      <span className="text-emerald-400 text-[10px] sm:text-xs font-medium flex items-center gap-1">
                        <FaCheckCircle className="w-2 h-2 sm:w-3 sm:h-3" /> Completed
                      </span>
                    )}
                    {isInProgress && (
                      <span className="text-yellow-400 text-[10px] sm:text-xs font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400 animate-pulse" /> In Progress
                      </span>
                    )}
                    {isUpcoming && (
                      <span className="text-gray-500 text-[10px] sm:text-xs font-medium">Upcoming</span>
                    )}
                  </div>
                </motion.div>

                {/* Connection Arrow (except last) - Hidden on mobile */}
                {index < timelineData.length - 1 && (
                  <div className="absolute -right-2 sm:-right-3 lg:-right-4 top-16 sm:top-18 text-white/5 sm:text-white/10">
                    <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scroll Hint - Hidden on mobile, visible on tablet+ */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] sm:text-xs tracking-wider uppercase">Scroll</span>
        <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
      </motion.div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 9999px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        @media (max-width: 768px) {
          .scrollbar-thin::-webkit-scrollbar {
            height: 2px;
          }
        }
      `}</style>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-150 lg:min-h-screen overflow-hidden flex items-center justify-center bg-black text-white">
      {/* Background words - Desktop preserved */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[12rem] max-lg:text-[8rem] max-md:text-[6rem] max-sm:text-[4rem] font-bold uppercase tracking-widest"
        >
          Technology
        </motion.h2>
      </div>

      {/* Left Side Keywords - Desktop preserved, hidden on tablet and mobile */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-10 max-lg:hidden top-1/2 -translate-y-1/2 space-y-6 text-xl text-gray-400 font-display font-bold"
      >
        <p>Websites</p>
        <p>Games</p>
        <p>Apps</p>
        <p>Softwares</p>
      </motion.div>

      {/* Right Side Keywords - Desktop preserved, hidden on tablet and mobile */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-10 max-lg:hidden top-1/2 -translate-y-1/2 space-y-6 text-xl font-display font-bold text-right"
      >
        <p>AI</p>
        <p>Robotics</p>
        <p>Machine Learning</p>
        <p>Blockchain</p>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl w-full px-6 max-sm:px-4 max-md:px-5">
        {/* "I'm a" Label - Desktop preserved */}
        <h6 className="absolute -top-30 left-50 max-md:relative max-md:top-0 max-md:left-0 max-md:mb-1 font-display text-2xl max-md:text-xl max-sm:text-lg">
          I&apos;m a
        </h6>

        {/* Typing Animation - Desktop preserved */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-5 lg:text-6xl max-md:text-4xl max-sm:text-2xl text-white font-sans font-bold absolute -top-20 right-1/2 translate-x-1/2 -translate-y-1/2 w-full max-md:relative max-md:top-0 max-md:right-0 max-md:translate-x-0 max-md:-translate-y-0 max-md:mt-1 max-sm:mt-0"
        >
          <TypeAnimation
            sequence={[
              "Programmer",
              2000,
              "Web Developer",
              2000,
              "IT Guy",
              2000,
              "Software Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>

        {/* Name - Desktop preserved */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-9xl max-sm:text-4xl max-md:text-6xl font-bold font-display text-shadow-md text-shadow-amber-100 max-md:mt-4 max-sm:mt-3"
        >
          Rebbie Afuyaso
        </motion.h1>

        {/* Profile Image - Desktop preserved */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mx-auto mb-10 h-110 w-240 max-md:w-56 max-md:h-28 max-sm:w-68 max-sm:h-24 rounded-t-full"
        >
          <Image
            src="/Rebbie-Afuyaso.png"
            alt="Profile Picture"
            width={800}
            height={100}
            className="object-cover max-w-full! object-top -mt-50 max-md:-mt-30 max-sm:-mt-20"
          />
        </motion.div>

        {/* Description and Buttons - Desktop preserved */}
        <div className="bg-transparent absolute -bottom-40 z-1 padding-10 text-center right-1/4 max-lg:relative max-lg:bottom-0 max-lg:right-0 max-lg:mt-6 max-lg:w-full">
          <p className="mt-6 text-lg max-md:text-base max-sm:text-sm text-gray-400 font-display">
            I build software, websites, games, and apps.
            <br className="max-sm:hidden" />
            <span className="max-sm:text-xs max-md:text-sm">
              Currently exploring AI, Robotics, Machine Learning and Blockchain
            </span>
          </p>
          <div className="mt-8 flex justify-center gap-4 max-sm:flex-col max-sm:items-center max-sm:gap-3">
            <Link href="/professional-portfolio" className="max-sm:w-full">
              <button className="rounded-full bg-white px-6 py-3 max-sm:px-4 max-sm:py-2.5 max-sm:w-full max-sm:text-sm text-black font-medium hover:scale-105 transition font-display">
                View Portfolio
              </button>
            </Link>
            <Link href="/contact" className="max-sm:w-full">
              <button className="rounded-full border border-white/30 px-6 py-3 max-sm:px-4 max-sm:py-2.5 max-sm:w-full max-sm:text-sm hover:bg-white/10 transition font-display">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
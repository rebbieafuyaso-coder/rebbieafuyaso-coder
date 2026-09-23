"use client";

import { ArrowRight, CodeIcon, LaptopIcon, LightbulbIcon } from "lucide-react";
import Image from "next/image";
import Carousel from "../ui/Carousel";

export default function HomeAbout() {
  const cards = [
    {
      title: "Software Development",
      icon: <LaptopIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Modern Web Development",
      icon: <CodeIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Exploring AI and Robotics",
      icon: <LightbulbIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 bg-black border-t border-gray-100/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h6 className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 font-display mb-2">
              About Me
            </h6>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Who am I{" "}
              <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
                style={{
                  WebkitTextStroke: "0.5px white",
                  color: "transparent",
                }}
              >
                ?
              </span>
            </h2>

            <div className="space-y-3 sm:space-y-4">
              <p className="font-display text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                I am <span className="font-bold text-white">Rebbie Afuyaso</span>,
                a passionate developer and technology enthusiast who enjoys
                transforming ideas into modern digital solutions.
              </p>

              <p className="font-display text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                From web applications to software development, I can work across
                multiple sectors to deliver products that suit current trends.
              </p>

              <p className="font-display text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                I&apos;m currently exploring AI, Cybersecurity, Robotics, and
                emerging technologies. I am always learning and building.
              </p>
            </div>

            <button className="mt-6 sm:mt-8 md:mt-10 flex gap-2 items-center font-display py-2.5 sm:py-3 px-5 sm:px-6 border border-gray-100/10 hover:bg-white hover:text-black transition-all duration-300 rounded-lg group text-sm sm:text-base">
              Read My Story{" "}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/10">
              <Image
                src="/Rebbie-Afuyaso-Coding.jpg"
                alt="Rebbie Afuyaso Coding"
                width={800}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-10 sm:mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cards.map((card, index) => (
              <div
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-100/10 hover:bg-white/10 transition-all duration-300 group cursor-default"
                key={card.title}
              >
                <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <span className="font-display text-sm sm:text-base md:text-lg text-gray-300 group-hover:text-white transition-colors">
                  {card.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mt-10 sm:mt-12 md:mt-16">
          <Carousel />
        </div>
      </div>
    </section>
  );
}
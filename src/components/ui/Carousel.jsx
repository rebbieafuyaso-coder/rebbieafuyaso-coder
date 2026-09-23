"use client";

// components/MissionVisionCarousel.jsx
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiTarget, FiEye, FiHeart, FiCrosshair } from "react-icons/fi";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cards = [
  {
    id: 1,
    title: "My Mission",
    icon: (
      <FiCrosshair className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    ),
    description:
      "I want to design and build modern, secure, and impactful digital solutions that will solve real world problems. Through continuous learning and innovation, I strive to create software, web applications, and emerging technology solutions that will help people's lives both in Papua New Guinea and the world.",
    details: ["Create", "Solve", "Inspire"],
    light: {
      iconBg: "bg-rose-50",
      iconColor: "text-rose-600",
      tagBg: "bg-rose-50 text-rose-700 border-rose-200",
      topBar: "bg-rose-500",
      title: "text-rose-600",
    },
    dark: {
      iconBg: "dark:bg-rose-950/40",
      iconColor: "dark:text-rose-400",
      tagBg:
        "dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/60",
      topBar: "dark:bg-rose-400",
      title: "dark:text-rose-400",
    },
  },
  {
    id: 2,
    title: "My Vision",
    icon: (
      <FiEye className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    ),
    description:
      "To become a globally recognized technology professional, contributing to the advancement of software engineering, artificial intelligence, cyber security, robotics, and other emerging technologies.",
    details: ["Global Impact", "Leadership", "AI & Robotics"],
    light: {
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      tagBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      topBar: "bg-indigo-500",
      title: "text-indigo-600",
    },
    dark: {
      iconBg: "dark:bg-indigo-950/40",
      iconColor: "dark:text-indigo-400",
      tagBg:
        "dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-900/60",
      topBar: "dark:bg-indigo-400",
      title: "dark:text-indigo-400",
    },
  },
  {
    id: 3,
    title: "Core Values",
    icon: (
      <FiHeart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    ),
    description:
      "I believe that great technology is built on a foundation of innovation, continuous learning, excellence, integrity, collaboration, and purposeful problem-solving. I strive to approach every project with curiosity and creativity, embracing new technologies while maintaining high standards of quality and professionalism.",
    details: ["Integrity", "Respect", "Curiosity", "Responsibility"],
    light: {
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      tagBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      topBar: "bg-emerald-500",
      title: "text-emerald-600",
    },
    dark: {
      iconBg: "dark:bg-emerald-950/40",
      iconColor: "dark:text-emerald-400",
      tagBg:
        "dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/60",
      topBar: "dark:bg-emerald-400",
      title: "dark:text-emerald-400",
    },
  },
];

export default function Carousel() {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const swiperRef = useRef(null);

  const toggleAutoPlay = () => {
    if (swiperRef.current) {
      if (isAutoPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsAutoPlaying(!isAutoPlaying);
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 font-display">
          What Drives Me
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
          Technology is constantly evolving, and so am I. I am committed to
          learning, innovating, and creating digital solutions that are both
          practical and inspiring.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative pb-16 sm:pb-20 lg:pb-24">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          loopAdditionalSlides={3}
          speed={900}
          watchSlidesProgress={true}
          dir="rtl"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.2,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 1.2, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 40 },
            1280: { slidesPerView: 2.2, spaceBetween: 50 },
          }}
          className="w-full"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              {({ isActive }) => (
                <div className="flex items-center justify-center py-4 sm:py-6">
                  <div
                    className={`transition-all duration-500 w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto ${
                      isActive ? "scale-100" : "scale-90 sm:scale-95"
                    }`}
                  >
                    {/* Card */}
                    <div
                      className={`relative bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] border border-gray-200 dark:border-gray-800 overflow-hidden transition-shadow duration-500 ${
                        isActive
                          ? "shadow-xl dark:shadow-black/50"
                          : "shadow-md dark:shadow-black/30"
                      }`}
                    >
                      {/* Top accent bar */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 ${card.light.topBar} ${card.dark.topBar}`}
                      />

                      <div className="relative flex flex-col items-center text-center flex-1">
                        {/* Icon */}
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full ${card.light.iconBg} ${card.dark.iconBg} flex items-center justify-center ${card.light.iconColor} ${card.dark.iconColor} mb-3 sm:mb-4 lg:mb-5 border border-gray-200 dark:border-gray-800 transition-all duration-300 shrink-0 ${
                            isActive ? "scale-100" : "scale-90"
                          }`}
                        >
                          {card.icon}
                        </div>

                        {/* Title */}
                        <h3
                          className={`font-bold mb-2 sm:mb-3 transition-all duration-300 font-display shrink-0 ${card.light.title} ${card.dark.title} ${
                            isActive
                              ? "text-base sm:text-lg lg:text-xl"
                              : "text-sm sm:text-base"
                          }`}
                        >
                          {card.title}
                        </h3>

                        {/* Divider */}
                        <div
                          className={`h-1 rounded-full ${card.light.topBar} ${card.dark.topBar} mb-3 sm:mb-4 transition-all duration-300 ${
                            isActive ? "w-16" : "w-8"
                          }`}
                        />

                        {/* Description */}
                        <div className="flex-1 w-full px-2 sm:px-4">
                          <p
                            className={`text-gray-700 dark:text-gray-300 leading-relaxed ${
                              isActive
                                ? "text-[11px] sm:text-xs lg:text-sm"
                                : "text-[10px]"
                            }`}
                          >
                            {card.description}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mt-3 sm:mt-4 lg:mt-5 shrink-0">
                          {card.details.map((detail, idx) => (
                            <span
                              key={idx}
                              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] rounded-full border font-medium ${card.light.tagBg} ${card.dark.tagBg}`}
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <button className="swiper-button-prev absolute left-0 sm:-left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="swiper-button-next absolute right-0 sm:-right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Pagination */}
        <div className="swiper-pagination-custom flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 lg:mt-10" />

        {/* Autoplay toggle */}
        <button
          onClick={toggleAutoPlay}
          className="absolute bottom-0 right-0 sm:right-4 p-2 sm:p-3 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors z-30"
          aria-label={isAutoPlaying ? "Pause" : "Play"}
        >
          {isAutoPlaying ? (
            <FaPause className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
          ) : (
            <FaPlay className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
          )}
        </button>
      </div>

      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          background: rgba(107, 114, 128, 0.4);
          opacity: 1;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }

        :global(.dark .swiper-pagination-bullet) {
          background: rgba(255, 255, 255, 0.3);
        }

        :global(.swiper-pagination-bullet-active) {
          background: #111827;
          width: 24px;
        }

        :global(.dark .swiper-pagination-bullet-active) {
          background: #ffffff;
        }

        :global(.swiper-button-prev),
        :global(.swiper-button-next) {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          border-radius: 9999px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        :global(.swiper-button-prev):hover,
        :global(.swiper-button-next):hover {
          transform: translateY(-50%) scale(1.08);
        }

        :global(.swiper-button-prev)::after,
        :global(.swiper-button-next)::after {
          display: none;
        }

        @media (max-width: 640px) {
          :global(.swiper-button-prev),
          :global(.swiper-button-next) {
            display: none;
          }

          :global(.swiper-pagination-bullet) {
            width: 6px;
            height: 6px;
          }

          :global(.swiper-pagination-bullet-active) {
            width: 18px;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          :global(.swiper-button-prev) {
            left: -8px;
          }

          :global(.swiper-button-next) {
            right: -8px;
          }
        }
      `}</style>
    </div>
  );
}
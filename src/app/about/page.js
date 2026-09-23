"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGraduationCap,
  FaAward,
  FaCertificate,
  FaImages,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaSchool,
  FaUniversity,
  FaGlobe,
  FaArrowRight,
  FaBriefcase,
  FaTrophy,
  FaStar,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  const [achievementTab, setAchievementTab] = useState("certifications");
  const [galleryFilter, setGalleryFilter] = useState("all");

  // ----------------------------------------------------------------
  // DATA
  // ----------------------------------------------------------------
  const educationData = [
    {
      id: 1,
      school: "Gama Lutheran Primary School",
      location: "EHP, Papua New Guinea",
      period: "2019 – 2020",
      level: "Primary Education",
      icon: <FaSchool className="w-4 h-4" />,
      description:
        "Foundation years of education, character building.",
      status: "completed",
    },
    {
      id: 2,
      school: "Goroka Secondary School",
      location: "Eastern Highlands, PNG",
      period: "2021 – 2022",
      level: "Secondary Education",
      icon: <FaSchool className="w-4 h-4" />,
      description:
        "High school education focusing on science stream",
      status: "completed",
    },
    {
      id: 3,
      school: "Wawin National School of Excellence",
      location: "Morobe, PNG",
      period: "2023 – 2024",
      level: "Higher Secondary",
      icon: <FaSchool className="w-4 h-4" />,
      description:
        "Advanced education taking up STEM courses and developing critical thinking and problem solving skills",
      status: "completed",
    },
    {
      id: 4,
      school: "Wuhan University of Technology",
      location: "Wuhan, China",
      period: "2025 – Present",
      level: "Current Studies",
      icon: <FaGlobe className="w-4 h-4" />,
      description:
        "Currently pursuing advanced studies in Computer Science and AI at one of China's leading universities.",
      status: "current",
    },
  ];

  const certificationsData = [
    {
      id: 1,
      name: "Full Stack Web Development",
      issuer: "Meta",
      date: "2023",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
    },
    {
      id: 2,
      name: "Google IT Support Professional",
      issuer: "Google",
      date: "2023",
      skills: ["IT Support", "Networking", "Operating Systems"],
      link: "#",
    },
    {
      id: 3,
      name: "Machine Learning with Python",
      issuer: "IBM",
      date: "2024",
      skills: ["Python", "Machine Learning", "Data Science"],
      link: "#",
    },
    {
      id: 4,
      name: "Cybersecurity Fundamentals",
      issuer: "Cisco Networking Academy",
      date: "2024",
      skills: ["Security", "Network Security", "Risk Management"],
      link: "#",
    },
  ];

  const awardsData = [
    {
      id: 1,
      title: "Best Web Application Award",
      event: "National Innovation Competition 2023",
      year: "2023",
      description:
        "Recognized for developing an innovative e-learning platform for remote communities.",
    },
    {
      id: 2,
      title: "Dean's Honor List",
      event: "University of Technology",
      year: "2022",
      description:
        "Achieved academic excellence with a GPA of 3.8+ in the Faculty of Computer Science.",
    },
    {
      id: 3,
      title: "Best Tech Startup Pitch",
      event: "PNG Tech Hub 2024",
      year: "2024",
      description:
        "Won first place with a startup idea focused on AI-driven agricultural solutions.",
    },
  ];

  const galleryImages = [
    { id: 1, url: "/gallery/coding-1.jpg", title: "Coding Session at Wuhan", category: "academic" },
    { id: 2, url: "/gallery/team-project.jpg", title: "Team Project Presentation", category: "academic" },
    { id: 3, url: "/gallery/hackathon.jpg", title: "Hackathon 2023", category: "events" },
    { id: 4, url: "/gallery/graduation.jpg", title: "Graduation Day", category: "achievements" },
    { id: 5, url: "/gallery/tech-workshop.jpg", title: "Tech Workshop Facilitator", category: "events" },
    { id: 6, url: "/gallery/international-students.jpg", title: "International Students Meetup", category: "social" },
  ];

  const galleryCategories = ["all", ...new Set(galleryImages.map((g) => g.category))];

  const filteredGallery =
    galleryFilter === "all"
      ? galleryImages
      : galleryImages.filter((g) => g.category === galleryFilter);

  // ----------------------------------------------------------------
  // Section header component
  // ----------------------------------------------------------------
  const SectionHeader = ({ icon, eyebrow, title, description }) => (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-md bg-blue-500/20 text-blue-400">
          {icon}
        </div>
        <span className="uppercase tracking-widest text-[10px] sm:text-xs text-gray-500 font-medium">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl font-display">
          {description}
        </p>
      )}
    </div>
  );

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative px-4 sm:px-6 pt-12 sm:pt-16 pb-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block uppercase tracking-widest text-[10px] sm:text-xs text-gray-500 mb-3">
              About Me
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              My Story
            </h1>
            <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-display mb-6">
              A journey from the highlands of Papua New Guinea to the tech hubs
              of China — driven by a passion for technology, innovation, and
              building solutions that matter.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
                <FaGraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs text-gray-300">5 Schools</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
                <FaCertificate className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-xs text-gray-300">4 Certifications</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
                <FaTrophy className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-xs text-gray-300">3 Awards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 1. EDUCATION — full timeline                                 */}
      {/* ============================================================ */}
      <section className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={<FaGraduationCap className="w-4 h-4" />}
            eyebrow="Academic Journey"
            title="Education"
            description="A timeline of my formal education, from primary school to postgraduate studies."
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-purple-500/40 to-transparent" />

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative pl-12"
                >
                  {/* Node */}
                  <div
                    className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                      item.status === "current"
                        ? "bg-blue-500/20 border-blue-500/60 text-blue-400"
                        : "bg-white/5 border-white/20 text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div
                    className={`p-4 sm:p-5 rounded-lg border transition-all duration-300 ${
                      item.status === "current"
                        ? "bg-blue-500/5 border-blue-500/40 shadow-lg shadow-blue-500/10"
                        : "bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-white/20"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-white font-display">
                          {item.school}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mt-1">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="w-3 h-3" />
                            {item.location}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-gray-600" />
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="w-3 h-3" />
                            {item.period}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-gray-600" />
                          <span className="text-gray-500">{item.level}</span>
                        </div>
                      </div>

                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium shrink-0 ${
                          item.status === "current"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        }`}
                      >
                        {item.status === "current" ? "Current" : "Completed"}
                      </span>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm font-display">
                      {item.description}
                    </p>

                    {item.status === "current" && (
                      <div className="mt-3 flex items-center gap-2 text-blue-400 text-xs">
                        <MdVerified className="w-3.5 h-3.5" />
                        <span>Currently pursuing excellence</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. CERTIFICATIONS & AWARDS — combined                        */}
      {/* ============================================================ */}
      <section className="px-4 sm:px-6 py-10 sm:py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={<FaBriefcase className="w-4 h-4" />}
            eyebrow="Achievements"
            title="Certifications & Awards"
            description="Professional credentials and recognition earned throughout my journey."
          />

          {/* Segmented tab switcher */}
          <div className="inline-flex p-1 rounded-lg bg-white/5 border border-white/10 mb-6">
            <button
              onClick={() => setAchievementTab("certifications")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-md transition-all ${
                achievementTab === "certifications"
                  ? "bg-white text-black font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FaCertificate className="w-3.5 h-3.5" />
              Certifications
              <span
                className={`ml-1 text-[10px] px-1.5 py-0.5 rounded ${
                  achievementTab === "certifications"
                    ? "bg-black/10 text-black/70"
                    : "bg-white/10 text-gray-400"
                }`}
              >
                {certificationsData.length}
              </span>
            </button>
            <button
              onClick={() => setAchievementTab("awards")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-md transition-all ${
                achievementTab === "awards"
                  ? "bg-white text-black font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FaAward className="w-3.5 h-3.5" />
              Awards
              <span
                className={`ml-1 text-[10px] px-1.5 py-0.5 rounded ${
                  achievementTab === "awards"
                    ? "bg-black/10 text-black/70"
                    : "bg-white/10 text-gray-400"
                }`}
              >
                {awardsData.length}
              </span>
            </button>
          </div>

          {/* Certifications grid */}
          {achievementTab === "certifications" && (
            <motion.div
              key="certs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white/5 rounded-lg p-4 sm:p-5 border border-white/10 hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-md text-blue-400 shrink-0">
                      <FaCertificate className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-white font-display">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {cert.issuer} · {cert.date}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <a
                        href={cert.link}
                        className="inline-flex items-center gap-1 mt-3 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Certificate <FaArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Awards grid */}
          {achievementTab === "awards" && (
            <motion.div
              key="awards"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {awardsData.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-gradient-to-br from-white/5 to-transparent rounded-lg p-4 sm:p-5 border border-white/10 hover:border-yellow-500/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-yellow-500/20 rounded-md text-yellow-400 shrink-0">
                      <FaAward className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-white font-display">
                        {award.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {award.event} · {award.year}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-2">
                        {award.description}
                      </p>
                      <div className="mt-3 flex items-center gap-1.5 text-yellow-400 text-xs">
                        <FaStar className="w-3 h-3" />
                        <span>Achievement Unlocked</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. GALLERY — separate full-width section                     */}
      {/* ============================================================ */}
      <section className="px-4 sm:px-6 py-10 sm:py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={<FaImages className="w-4 h-4" />}
            eyebrow="Moments"
            title="Gallery"
            description="A visual glimpse into my academic, professional, and personal journey."
          />

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`px-3 py-1 text-xs rounded-full border transition-all capitalize ${
                  galleryFilter === cat
                    ? "bg-white text-black border-white font-semibold"
                    : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-ish grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGallery.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.04 }}
                className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="aspect-square relative">
                  {/* Placeholder — swap for <Image src={image.url} … /> */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
                        <FaImages className="w-6 h-6 text-blue-400" />
                      </div>
                      <p className="text-white font-display text-xs sm:text-sm">
                        {image.title}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5 capitalize">
                        {image.category}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h4 className="text-white font-display font-bold text-sm">
                        {image.title}
                      </h4>
                      <span className="text-[10px] text-gray-400 capitalize">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                          */}
      {/* ============================================================ */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-400 font-display mb-5 text-sm sm:text-base">
              Let's build something amazing together. Feel free to reach out!
            </p>
            <button className="px-6 py-2.5 bg-white text-black rounded-md font-display font-bold text-sm hover:bg-gray-200 transition-colors">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
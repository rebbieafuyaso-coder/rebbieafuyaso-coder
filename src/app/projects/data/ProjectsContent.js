// src/app/projects/ProjectsContent.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaSearch,
  FaFilter,
  FaCode,
  FaRocket,
  FaFolderOpen,
  FaStar,
  FaClock,
} from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects, projectCategories } from "./data/projects";

export default function ProjectsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const statuses = ["all", "live", "in-progress", "archived"];

  const filteredProjects = projects.filter((p) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.stack.some((s) => s.toLowerCase().includes(q));

    const matchesCategory =
      selectedCategory === "all" || p.category === selectedCategory;

    const matchesStatus =
      selectedStatus === "all" || p.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black mt-16">
        {/* ============================================================ */}
        {/* HERO                                                         */}
        {/* ============================================================ */}
        <section className="relative px-4 sm:px-6 pt-12 sm:pt-16 pb-8 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mb-3">
                <FaFolderOpen className="w-3.5 h-3.5" />
                <span>Portfolio</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                Things I&apos;ve <span className="text-blue-400">Built</span>
              </h1>
              <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-display">
                A collection of projects I&apos;ve designed, developed, and
                shipped — spanning web apps, backend systems, APIs, and
                AI-powered tools.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FEATURED (only if any project is featured)                   */}
        {/* ============================================================ */}
        {featured.length > 0 && (
          <section className="px-4 sm:px-6 py-10 border-b border-white/5">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <FaStar className="w-4 h-4 text-yellow-400" />
                <h2 className="text-lg sm:text-xl font-bold text-white font-display">
                  Featured Projects
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {featured.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* ALL PROJECTS / EMPTY STATE                                   */}
        {/* ============================================================ */}
        <section className="px-4 sm:px-6 py-10">
          <div className="max-w-6xl mx-auto">
            {/* Header + controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-white font-display flex items-center gap-2">
                <FaCode className="text-blue-400 w-4 h-4" />
                All Projects
              </h2>

              {projects.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Search */}
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-3.5 h-3.5" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors w-full sm:w-52"
                    />
                  </div>

                  {/* Status filter */}
                  <div className="relative">
                    <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-3.5 h-3.5" />
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="pl-9 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50 appearance-none capitalize w-full sm:w-40"
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s} className="bg-black capitalize">
                          {s.replace("-", " ")}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Category pills */}
            {projects.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {projectCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 text-xs rounded-full border transition-all capitalize ${
                      selectedCategory === cat
                        ? "bg-white text-black border-white font-semibold"
                        : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Empty state */}
            {projects.length === 0 ? (
              <EmptyState />
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 font-display">
                  No projects match your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ================================================================ */
/* PROJECT CARD                                                     */
/* ================================================================ */
function ProjectCard({ project, index }) {
  const statusStyles = {
    live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    "in-progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    archived: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Image / placeholder */}
      <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
        {project.image ? (
          // Swap for <Image /> later
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-center px-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
              <FaRocket className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-white font-display text-sm">{project.title}</p>
          </div>
        )}

        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full border backdrop-blur-sm ${
            statusStyles[project.status] ?? statusStyles.archived
          }`}
        >
          {project.status.replace("-", " ")}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-1.5">
          <span>{project.category}</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>{project.year}</span>
        </div>

        <h3 className="text-base font-bold text-white font-display mb-1 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-gray-400 font-display mb-3">
          {project.tagline}
        </p>

        <p className="text-xs sm:text-sm text-gray-400 font-display line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-500">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1"
              >
                <FaGithub className="w-3.5 h-3.5" /> Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors text-xs flex items-center gap-1"
              >
                <FaExternalLinkAlt className="w-3 h-3" /> Live
              </a>
            )}
          </div>

          <span className="text-[10px] text-gray-500">
            {project.highlights?.length || 0} highlights
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* ================================================================ */
/* EMPTY STATE                                                      */
/* ================================================================ */
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-16 px-4"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-blue-400 mb-5">
        <FaClock className="w-6 h-6" />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
        Projects coming soon
      </h3>
      <p className="text-gray-400 font-display max-w-md mx-auto text-sm sm:text-base mb-6">
        I&apos;m currently building and documenting new projects. Check back
        soon — or explore my portfolio and blog in the meantime.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="/professional-portfolio"
          className="px-5 py-2 bg-white text-black rounded-md font-display font-bold text-sm hover:bg-gray-200 transition-colors"
        >
          View Portfolio
        </a>
        <a
          href="/contact"
          className="px-5 py-2 bg-white/5 border border-white/10 text-white rounded-md font-display font-semibold text-sm hover:bg-white/10 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </motion.div>
  );
}
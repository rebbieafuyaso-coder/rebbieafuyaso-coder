// src/app/projects/ProjectsContent.jsx
"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProjectsContent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black mt-16 px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            My <span className="text-blue-400">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl font-display">
            Projects coming soon — check back shortly.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
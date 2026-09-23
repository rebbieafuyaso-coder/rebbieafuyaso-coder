// src/app/projects/data/projects.js

export const projects = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    tagline: "Personal brand site built with Next.js & Tailwind",
    description:
      "A fast, SEO-optimized portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion. Fully responsive, dark-mode first, and deployed on Cloudflare.",
    category: "Web",
    status: "live", // "live" | "in-progress" | "archived"
    featured: true,
    year: "2025",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Cloudflare"],
    image: "/projects/portfolio.jpg",
    liveUrl: "https://rebbieafuyaso.com",
    repoUrl: "https://github.com/rebbie-dev/portfolio",
    highlights: [
      "100/100 Lighthouse performance",
      "Structured data & sitelinks ready",
      "Deployed to Cloudflare Workers",
    ],
  },

  // 🧩 Add more projects below — the UI will automatically pick them up
  // {
  //   id: 2,
  //   slug: "ai-crop-detector",
  //   title: "AI Crop Disease Detector",
  //   tagline: "ML-powered tool for PNG farmers",
  //   description: "...",
  //   category: "AI & ML",
  //   status: "in-progress",
  //   featured: true,
  //   year: "2025",
  //   stack: ["Python", "TensorFlow", "FastAPI", "React"],
  //   image: "/projects/ai-crop.jpg",
  //   liveUrl: null,
  //   repoUrl: "https://github.com/...",
  //   highlights: ["...", "..."],
  // },
];

// Auto-derived category list for filter pills
export const projectCategories = [
  "all",
  ...new Set(projects.map((p) => p.category)),
];
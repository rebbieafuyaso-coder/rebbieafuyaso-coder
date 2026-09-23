"use client"
export const metadata = {
  title: "Professional Portfolio", // → "Professional Portfolio | Rebbie Afuyaso"
  description:
    "Explore the professional portfolio of Rebbie Afuyaso (Mr Technology) — featuring websites, web apps, backend systems and APIs built for businesses and organizations.",
  alternates: {
    canonical: "https://rebbieafuyaso.com/professional-portfolio",
  },
  openGraph: {
    title: "Professional Portfolio | Rebbie Afuyaso",
    description:
      "Explore the professional portfolio of Rebbie Afuyaso (Mr Technology) — websites, web apps, backend systems and APIs.",
    url: "https://rebbieafuyaso.com/professional-portfolio",
    images: ["/Rebbie-Afuyaso.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Portfolio | Rebbie Afuyaso",
    description:
      "Explore the professional portfolio of Rebbie Afuyaso (Mr Technology).",
    images: ["/Rebbie-Afuyaso.png"],
  },
};

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaArrowRight, 
  FaArrowLeft,
  FaCode, 
  FaLaptop, 
  FaRobot, 
  FaBrain,
  FaCloud,
  FaShieldAlt,
  FaMobile,
  FaServer,
  FaDatabase,
  FaTools,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaChevronDown,
  FaStar,
  FaUsers,
  FaProjectDiagram,
  FaAward,
  FaBriefcase,
  FaGraduationCap,
  FaGlobe,
  FaRocket,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaPlay,
  FaHeart,
  FaCalendarAlt,
  FaClock,
  FaQuoteLeft,
  FaQuoteRight,
  FaCrown
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiReact, SiTypescript, SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiDocker, SiKubernetes, SiAws, SiTensorflow } from 'react-icons/si';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ProfessionalPortfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef(null);
  const autoplayRef = useRef(null);

  // Featured Projects Data
  const featuredProjects = [
    {
      id: 1,
      title: "AI-Powered Agricultural Assistant",
      subtitle: "Revolutionizing Farming with AI",
      description: "An intelligent platform that uses machine learning to help farmers in Papua New Guinea optimize crop yields, detect diseases, and make data-driven decisions.",
      image: "/projects/agricultural-ai.jpg",
      tags: ["AI", "TensorFlow", "React", "Python"],
      category: "AI & Machine Learning",
      link: "#",
      github: "#",
      live: "#",
      stats: {
        users: "500+",
        accuracy: "94%",
        regions: "5"
      },
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 2,
      title: "EdTech Learning Platform",
      subtitle: "Future of Education",
      description: "A comprehensive learning management system designed for remote education in developing regions, featuring interactive courses, real-time collaboration, and AI-powered tutoring.",
      image: "/projects/edtech-platform.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "WebRTC"],
      category: "Education Technology",
      link: "#",
      github: "#",
      live: "#",
      stats: {
        students: "2,000+",
        courses: "45+",
        completion: "78%"
      },
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 3,
      title: "Smart City IoT Dashboard",
      subtitle: "Urban Innovation",
      description: "An IoT monitoring and management platform for smart city infrastructure, tracking everything from traffic patterns to environmental data in real-time.",
      image: "/projects/smart-city.jpg",
      tags: ["IoT", "React", "WebSocket", "Python"],
      category: "IoT & Smart Systems",
      link: "#",
      github: "#",
      live: "#",
      stats: {
        devices: "1,000+",
        cities: "3",
        uptime: "99.9%"
      },
      color: "from-purple-500 to-pink-400"
    }
  ];

  // Skills Data
  const skills = [
    {
      category: "Frontend Development",
      icon: <FaCode className="w-6 h-6" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      level: 90
    },
    {
      category: "Backend Development",
      icon: <FaServer className="w-6 h-6" />,
      skills: ["Node.js", "Python", "Java", "PHP", "Laravel"],
      level: 85
    },
    {
      category: "Database & Cloud",
      icon: <FaDatabase className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "AWS", "Docker"],
      level: 80
    },
    {
      category: "AI & Machine Learning",
      icon: <FaBrain className="w-6 h-6" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning"],
      level: 75
    }
  ];

  // Stats Data
  const stats = [
    {
      icon: <FaProjectDiagram className="w-6 h-6" />,
      value: "20+",
      label: "Projects Completed",
      suffix: "across 4 countries"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      value: "50+",
      label: "Happy Clients",
      suffix: "from startups to enterprises"
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      value: "15+",
      label: "Awards & Recognition",
      suffix: "in tech and innovation"
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      value: "4",
      label: "Countries",
      suffix: "PNG, China, Australia, USA"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "CTO, TechVentures",
      image: "/testimonials/john.jpg",
      text: "Rebbie's technical expertise and innovative approach transformed our product. His ability to deliver complex solutions with clean code is exceptional.",
      rating: 5
    },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      role: "Professor, Wuhan University",
      image: "/testimonials/sarah.jpg",
      text: "One of the most talented students I've taught. Rebbie's passion for technology and his problem-solving skills are remarkable.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "CEO, AgriTech Solutions",
      image: "/testimonials/michael.jpg",
      text: "Working with Rebbie on our AI agricultural project was a game-changer. His AI expertise and cultural understanding were invaluable.",
      rating: 5
    }
  ];

  // Auto-play slider
  useEffect(() => {
    if (isAutoPlaying && !isHovering) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
      }, 5000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [isAutoPlaying, isHovering, featuredProjects.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  // Hire Me Packages
  const hirePackages = [
    {
      name: "Project Consultation",
      price: "$50/hr",
      icon: <FaBriefcase className="w-6 h-6" />,
      description: "Expert guidance for your tech projects",
      features: [
        "Technical architecture review",
        "Technology stack recommendations",
        "Code quality assessment",
        "Performance optimization tips",
        "1-hour discovery call"
      ]
    },
    {
      name: "Full Stack Development",
      price: "$3,000",
      icon: <FaRocket className="w-6 h-6" />,
      description: "Complete web application development",
      features: [
        "End-to-end development",
        "Database design & integration",
        "API development",
        "UI/UX implementation",
        "Deployment & hosting setup",
        "2 months of support"
      ],
      popular: true
    },
    {
      name: "AI/ML Solutions",
      price: "$4,500",
      icon: <FaBrain className="w-6 h-6" />,
      description: "Custom AI and machine learning solutions",
      features: [
        "Data analysis & preprocessing",
        "Model development & training",
        "API integration",
        "Performance monitoring",
        "Documentation & training",
        "3 months of support"
      ]
    }
  ];

  return (
    <>
      <Navbar />
    <main className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* Hero Slider Section */}
      <section ref={sliderRef} className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center px-6 md:px-12 lg:px-20">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs uppercase tracking-wider bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full">
                      {featuredProjects[currentSlide].category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <FaStar className="w-3 h-3 text-yellow-400" />
                      Featured Project
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-3">
                    {featuredProjects[currentSlide].title}
                  </h2>
                  <p className="text-xl md:text-2xl text-blue-400 font-display mb-4">
                    {featuredProjects[currentSlide].subtitle}
                  </p>
                  <p className="text-gray-300 text-lg max-w-2xl mb-6 font-display leading-relaxed">
                    {featuredProjects[currentSlide].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProjects[currentSlide].tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-white/10 rounded-full border border-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 mb-8">
                    {Object.entries(featuredProjects[currentSlide].stats).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                        <span className="text-white font-bold">{value}</span>
                        <span className="text-gray-400 text-sm capitalize">{key}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={featuredProjects[currentSlide].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-display font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2"
                    >
                      View Live <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                    <a
                      href={featuredProjects[currentSlide].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-display font-bold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                    >
                      <FaGithub className="w-4 h-4" /> Source Code
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white w-12' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
        >
          <FaArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
        >
          <FaArrowRight className="w-5 h-5" />
        </button>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs z-10"
        >
          <span>Scroll to explore</span>
          <FaChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h6 className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                About Me
              </h6>
              <h2 className="text-4xl font-bold font-display mb-4">
                Innovating at the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Intersection</span> of Technology and Impact
              </h2>
              <p className="text-gray-300 font-display leading-relaxed mb-4">
                I'm <span className="text-white font-bold">Rebbie Afuyaso</span>, a passionate developer and innovator from Papua New Guinea, 
                currently studying at Wuhan University of Technology in China. 
              </p>
              <p className="text-gray-400 font-display leading-relaxed mb-6">
                With a mission to leverage technology for social impact, I bridge the gap between 
                cutting-edge solutions and real-world problems. From AI-powered agricultural tools 
                to educational platforms for developing regions, every project I build is driven by 
                purpose.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-2xl font-bold text-white">3+</p>
                  <p className="text-sm text-gray-400">Years of Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">20+</p>
                  <p className="text-sm text-gray-400">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">10+</p>
                  <p className="text-sm text-gray-400">Technologies</p>
                </div>
              </div>
              <Link href="/about">
                <button className="px-8 py-3 bg-white text-black rounded-lg font-display font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                  Learn More <FaArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 p-1">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                      <span className="text-6xl">👨‍💻</span>
                    </div>
                    <p className="text-white font-display text-xl">Rebbie Afuyaso</p>
                    <p className="text-gray-400 text-sm">Full Stack Developer & AI Enthusiast</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 border-t border-white/5 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 text-center border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3 text-blue-400">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-white font-display">{stat.value}</p>
                <p className="text-sm text-gray-300 font-display">{stat.label}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.suffix}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h6 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Skills & Expertise</h6>
            <h2 className="text-4xl font-bold font-display mb-4">My Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-display">
              Technologies I work with to build innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/10 rounded-lg text-sm text-gray-300 border border-white/5 hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skillGroup.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-right">{skillGroup.level}%</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="px-6 py-20 border-t border-white/5 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h6 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Portfolio</h6>
            <h2 className="text-4xl font-bold font-display mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-display">
              Each project is a blend of innovation, technical expertise, and real-world impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">
                      {project.id === 1 && "🌾"}
                      {project.id === 2 && "📚"}
                      {project.id === 3 && "🏙️"}
                    </div>
                    <p className="text-gray-400 text-sm">{project.category}</p>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                       className="p-2 bg-black/80 rounded-full hover:bg-white/20 transition-colors">
                      <FaGithub className="w-4 h-4" />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="p-2 bg-black/80 rounded-full hover:bg-white/20 transition-colors">
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white font-display mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-400">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 text-gray-500">+{project.tags.length - 3}</span>
                    )}
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <button className="w-full py-2 bg-white/10 text-white rounded-lg font-display text-sm hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                      View Project <FaArrowRight className="w-3 h-3" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/projects">
              <button className="px-8 py-3 bg-white text-black rounded-lg font-display font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 mx-auto">
                View All Projects <FaArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h6 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Testimonials</h6>
            <h2 className="text-4xl font-bold font-display mb-4">What People Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <FaQuoteLeft className="w-6 h-6 text-blue-400 opacity-50 mb-3" />
                <p className="text-gray-300 font-display text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-display font-bold text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me Section */}
      <section className="px-6 py-20 border-t border-white/5 bg-gradient-to-b from-transparent to-blue-500/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h6 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Hire Me</h6>
            <h2 className="text-4xl font-bold font-display mb-4">Let's Work Together</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-display">
              Choose a package that fits your needs, or let's discuss a custom solution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hirePackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white/5 rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  pkg.popular
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/10 bg-blue-500/5'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4 text-blue-400">
                    {pkg.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-white font-display mt-2">{pkg.price}</p>
                  <p className="text-gray-400 text-sm mt-2">{pkg.description}</p>
                  <div className="mt-4 space-y-2 text-left">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <FaCheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <button className={`w-full mt-6 py-2.5 rounded-lg font-display font-bold transition-colors ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}>
                      Get Started
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 border-t border-white/5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Amazing</span>?
            </h2>
            <p className="text-gray-400 text-lg font-display mb-8 max-w-2xl mx-auto">
              Let's turn your ideas into reality. Whether it's a web application, AI solution, 
              or any tech project, I'm here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-display font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                  Start a Project <FaArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-display font-bold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <FaGithub className="w-4 h-4" /> View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaYoutube, 
  FaInstagram,
  FaMedium,
  FaDev,
  FaHashnode,
  FaLink,
  FaHeart,
  FaComment,
  FaRetweet,
  FaShare,
  FaBookmark,
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaArrowRight,
  FaExternalLinkAlt,
  FaUser,
  FaNewspaper,
  FaRss,
  FaSearch,
  FaFilter
} from 'react-icons/fa';
import { SiDevdotto, SiHashnode } from 'react-icons/si';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function BlogsContent() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with Next.js 14",
      excerpt: "Exploring the latest features of Next.js 14 and how to build production-ready applications with server components and advanced routing.",
      category: "Web Development",
      date: "2024-12-15",
      readTime: "8 min read",
      author: "Rebbie Afuyaso",
      authorImage: "/authors/rebbie.jpg",
      image: "/blog/nextjs-14.jpg",
      tags: ["Next.js", "React", "TypeScript", "Web Development"],
      platform: "Medium",
      platformIcon: <FaMedium className="w-4 h-4" />,
      link: "https://medium.com/...",
      likes: 245,
      comments: 32,
      shares: 89
    },
    {
      id: 2,
      title: "AI in Agriculture: Transforming Farming in PNG",
      excerpt: "How artificial intelligence and machine learning are revolutionizing agriculture in Papua New Guinea, from crop monitoring to yield prediction.",
      category: "AI & ML",
      date: "2024-11-28",
      readTime: "6 min read",
      author: "Rebbie Afuyaso",
      authorImage: "/authors/rebbie.jpg",
      image: "/blog/ai-agriculture.jpg",
      tags: ["AI", "Machine Learning", "Agriculture", "PNG"],
      platform: "Dev.to",
      platformIcon: <FaDev className="w-4 h-4" />,
      link: "https://dev.to/...",
      likes: 189,
      comments: 45,
      shares: 67
    },
    {
      id: 3,
      title: "Getting Started with Cybersecurity: A Beginner's Guide",
      excerpt: "Essential cybersecurity concepts and practices for beginners, including threat modeling, encryption, and security best practices.",
      category: "Cybersecurity",
      date: "2024-11-10",
      readTime: "10 min read",
      author: "Rebbie Afuyaso",
      authorImage: "/authors/rebbie.jpg",
      image: "/blog/cybersecurity.jpg",
      tags: ["Cybersecurity", "Security", "Ethical Hacking"],
      platform: "Hashnode",
      platformIcon: <SiHashnode className="w-4 h-4" />,
      link: "https://hashnode.com/...",
      likes: 312,
      comments: 28,
      shares: 134
    },
    {
      id: 4,
      title: "The Future of Robotics in Developing Nations",
      excerpt: "Exploring how robotics and automation can address key challenges in developing countries, from healthcare to infrastructure.",
      category: "Robotics",
      date: "2024-10-20",
      readTime: "7 min read",
      author: "Rebbie Afuyaso",
      authorImage: "/authors/rebbie.jpg",
      image: "/blog/robotics.jpg",
      tags: ["Robotics", "Automation", "Innovation"],
      platform: "LinkedIn",
      platformIcon: <FaLinkedin className="w-4 h-4" />,
      link: "https://linkedin.com/...",
      likes: 278,
      comments: 56,
      shares: 92
    }
  ];

  // Social Media Posts Data
  const socialPosts = [
    {
      id: 1,
      platform: "Twitter",
      platformIcon: <FaTwitter className="w-5 h-5" />,
      author: "@rebbie_dev",
      content: "Just published a new article on building scalable web applications with Next.js 14! 🚀 Check it out and let me know your thoughts! #NextJS #WebDev #Coding",
      image: "/social/tweet-1.jpg",
      date: "2024-12-15",
      time: "2 hours ago",
      likes: 89,
      retweets: 34,
      replies: 12,
      link: "https://twitter.com/...",
      isPinned: true
    },
    {
      id: 2,
      platform: "LinkedIn",
      platformIcon: <FaLinkedin className="w-5 h-5" />,
      author: "Rebbie Afuyaso",
      content: "Excited to share my journey as an international student at Wuhan University of Technology! 🇨🇳🎓 From PNG to China, every step has been a learning adventure. Grateful for the opportunities and looking forward to what's next!",
      image: "/social/linkedin-1.jpg",
      date: "2024-12-10",
      time: "5 days ago",
      likes: 234,
      retweets: 0,
      replies: 45,
      link: "https://linkedin.com/...",
      isPinned: false
    },
    {
      id: 3,
      platform: "GitHub",
      platformIcon: <FaGithub className="w-5 h-5" />,
      author: "rebbie-dev",
      content: "🚀 Open sourced my latest project: 'AI-Powered Crop Disease Detection System'! Built with TensorFlow, React, and FastAPI. Check it out and contribute! #OpenSource #AI #React",
      image: "/social/github-1.jpg",
      date: "2024-12-05",
      time: "1 week ago",
      likes: 67,
      retweets: 0,
      replies: 23,
      link: "https://github.com/...",
      isPinned: false
    },
    {
      id: 4,
      platform: "YouTube",
      platformIcon: <FaYoutube className="w-5 h-5" />,
      author: "Rebbie Afuyaso",
      content: "📺 New video: 'Building a Full Stack App with Next.js and Tailwind CSS' - Step by step tutorial for beginners! Watch now and start building!",
      image: "/social/youtube-1.jpg",
      date: "2024-11-28",
      time: "2 weeks ago",
      likes: 456,
      retweets: 0,
      replies: 89,
      link: "https://youtube.com/...",
      isPinned: false
    }
  ];

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const TabButton = ({ label, icon, tab }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-display transition-all duration-300 text-sm ${
        activeTab === tab
          ? "bg-white text-black shadow-lg shadow-white/20"
          : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
      }`}
    >
      {icon}
      {label}
    </button>
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <FaNewspaper className="w-4 h-4" />
              <span className="uppercase tracking-widest">Blog & Updates</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
              Latest from My <span className="text-blue-400">Digital Space</span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg font-display">
              Exploring technology, sharing insights, and connecting with the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="px-6 py-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white font-display flex items-center gap-2">
              <FaRss className="text-blue-400" />
              Social Feed
            </h3>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm">
                <FaTwitter className="w-4 h-4 text-blue-400" />
                Follow
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm">
                <FaRss className="w-4 h-4 text-orange-400" />
                RSS Feed
              </button>
            </div>
          </div>

          {/* Social Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white/5 rounded-xl border transition-all duration-300 hover:bg-white/10 ${
                  post.isPinned 
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        post.platform === 'Twitter' ? 'bg-blue-500/20 text-blue-400' :
                        post.platform === 'LinkedIn' ? 'bg-blue-600/20 text-blue-400' :
                        post.platform === 'GitHub' ? 'bg-gray-600/20 text-gray-400' :
                        'bg-red-600/20 text-red-400'
                      }`}>
                        {post.platformIcon}
                      </div>
                      <div>
                        <p className="text-white font-display font-medium text-sm">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-500">{post.platform}</p>
                      </div>
                    </div>
                    {post.isPinned && (
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                        📌 Pinned
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 text-sm font-display leading-relaxed mb-3">
                    {post.content}
                  </p>

                  {/* Image Placeholder */}
                  <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 h-32 flex items-center justify-center mb-3 border border-white/5">
                    <p className="text-gray-500 text-sm">📸 Media Preview</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <FaHeart className="w-3 h-3 text-red-400" />
                        {post.likes}
                      </span>
                      {post.retweets > 0 && (
                        <span className="flex items-center gap-1">
                          <FaRetweet className="w-3 h-3 text-green-400" />
                          {post.retweets}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <FaComment className="w-3 h-3 text-blue-400" />
                        {post.replies}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      {post.time}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <button className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1">
                        <FaHeart className="w-3 h-3" /> Like
                      </button>
                      <button className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1">
                        <FaComment className="w-3 h-3" /> Reply
                      </button>
                      <button className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1">
                        <FaShare className="w-3 h-3" /> Share
                      </button>
                    </div>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" 
                       className="text-blue-400 hover:text-blue-300 transition-colors text-xs flex items-center gap-1">
                      View <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Blog Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl font-bold text-white font-display flex items-center gap-2">
              <FaNewspaper className="text-blue-400" />
              Blog Posts
            </h3>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors w-full sm:w-48"
                />
              </div>
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none w-full sm:w-40"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat} className="bg-black">
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10"
              >
                {/* Blog Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-gray-400 text-sm">{post.category}</p>
                  </div>
                  {/* Platform Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/80 rounded-full text-xs text-white backdrop-blur-sm">
                    {post.platformIcon}
                    {post.platform}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <FaClock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white font-display mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm font-display leading-relaxed mb-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        RA
                      </div>
                      <div>
                        <p className="text-white text-sm font-display">{post.author}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <FaHeart className="w-3 h-3 text-red-400" />
                            {post.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaComment className="w-3 h-3 text-blue-400" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                    <a href={post.link} target="_blank" rel="noopener noreferrer"
                       className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1">
                      Read <FaArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 font-display">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Social Links */}
      <section className="px-6 py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white font-display text-center mb-8">
            Connect With Me
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <FaTwitter className="w-6 h-6" />, label: "Twitter", color: "text-blue-400", link: "#" },
              { icon: <FaLinkedin className="w-6 h-6" />, label: "LinkedIn", color: "text-blue-500", link: "#" },
              { icon: <FaGithub className="w-6 h-6" />, label: "GitHub", color: "text-gray-400", link: "#" },
              { icon: <FaYoutube className="w-6 h-6" />, label: "YouTube", color: "text-red-500", link: "#" },
              { icon: <FaMedium className="w-6 h-6" />, label: "Medium", color: "text-green-400", link: "#" },
              { icon: <FaDev className="w-6 h-6" />, label: "Dev.to", color: "text-gray-400", link: "#" },
              { icon: <SiHashnode className="w-6 h-6" />, label: "Hashnode", color: "text-blue-400", link: "#" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group relative px-6 py-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-3"
              >
                <span className={social.color}>{social.icon}</span>
                <span className="text-white font-display text-sm">{social.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
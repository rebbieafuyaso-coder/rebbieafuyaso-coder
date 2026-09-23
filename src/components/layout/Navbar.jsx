"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to tablet/desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex justify-between items-center ${
          scroll ? "bg-black/95 backdrop-blur-lg shadow-lg" : "bg-black"
        }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl sm:text-2xl font-display font-bold">
            <Link href="/" className="text-white">
              Rebbie<span className="text-emerald-400">Afuyaso</span>
            </Link>
          </h1>
        </div>

        {/* Desktop Navigation - Hidden on mobile & tablet */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-display">
          <Link
            href="/"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
          >
            About
          </Link>

          <Link
            href="/professional-portfolio"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
          >
            Portfolio
          </Link>

          <Link
            href="/blog"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
          >
            Blog
          </Link>

          <Link href="/contact">
            <button className="border border-white/20 text-white px-5 xl:px-6 py-2 text-sm font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              Contact Me
            </button>
          </Link>
        </div>

        {/* Tablet Navigation - Visible on md to lg */}
        <div className="hidden md:flex lg:hidden items-center gap-4 sm:gap-6 font-display">
          <Link
            href="/"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
          >
            Blog
          </Link>
          <Link href="/contact">
            <button className="border border-white/20 text-white px-4 py-1.5 text-xs sm:text-sm font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile & Tablet Hamburger - Visible on md and below */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Only visible on small screens */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu Panel */}
          <div className="fixed top-[60px] sm:top-[68px] left-0 right-0 bg-white shadow-2xl z-50 md:hidden max-h-[calc(100vh-60px)] sm:max-h-[calc(100vh-68px)] overflow-y-auto animate-slideDown">
            <div className="py-4 px-5 sm:px-6">
              <Link
                href="/"
                className="block py-3.5 text-base font-medium text-gray-700 hover:text-emerald-600 border-b border-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block py-3.5 text-base font-medium text-gray-700 hover:text-emerald-600 border-b border-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </Link>

              <Link
                href="/professional-portfolio"
                className="block py-3.5 text-base font-medium text-gray-700 hover:text-emerald-600 border-b border-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Professional Portfolio
              </Link>

              <Link
                href="/blog"
                className="block py-3.5 text-base font-medium text-gray-700 hover:text-emerald-600 border-b border-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="block py-3.5 text-base font-medium text-gray-700 hover:text-emerald-600 border-b border-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>

              {/* Mobile Contact Button */}
              <div className="pt-4 pb-2">
                <Link href="/contact" onClick={closeMobileMenu}>
                  <button className="w-full py-3.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/25">
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Add animation keyframes via style tag */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>
    </>
  );
}
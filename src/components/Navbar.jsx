import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import logo from "../images/logo1.png";
import { useIsMobile } from '../hooks/useIsMobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isMobile = useIsMobile();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on desktop
  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/jobSeeker', label: 'Job Seeker' },
    { path: '/ourClient', label: 'Our Clients' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? 'rgba(255,255,255,0.9)'
            : 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">

            {/* ===== Logo ===== */}
            <Link to="/" className="flex items-center">
              <motion.img
                src={logo}
                alt="Logo"
                whileHover={{ scale: 1.05 }}
                className="h-10 sm:h-12 lg:h-16"
              />
            </Link>

            {/* ===== Desktop Menu ===== */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-3 lg:px-5 py-2 text-sm md:text-base lg:text-lg font-semibold group"
                >
                  <span
                    className={`${
                      location.pathname === link.path
                        ? "text-black"
                        : "text-slate-800 group-hover:text-indigo-600"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Active underline */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-indigo-600"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* ===== Desktop Button ===== */}
            <div className="hidden md:block">
              <Link to="/about">
                <button className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm font-bold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                  Get Started
                </button>
              </Link>
            </div>

            {/* ===== Mobile Menu Button ===== */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(true)}
                className="text-slate-800"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-[75%] max-w-sm h-full bg-white z-50 shadow-xl md:hidden p-6"
            >
              {/* Close Button */}
              <div className="flex justify-end">
                <button onClick={() => setMenuOpen(false)}>
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col space-y-6 mt-8">
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-lg font-semibold text-gray-800 border-b pb-2"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* CTA */}
                <Link to="/about">
                  <button className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg font-semibold">
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
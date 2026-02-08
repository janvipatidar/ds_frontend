import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const navbarOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.8)' : 'none',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center space-x-2 group relative">
            <motion.div
              whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`text-2xl font-extrabold transition-all duration-500
                ${isHome && !scrolled
                  ? "text-white drop-shadow-lg"
                  : "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
                }
              `}
            >
              DreamSakar
            </motion.div>


            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link
                  to={link.path}
                  className="group relative px-5 py-2.5 text-xl font-semibold transition-all duration-300 rounded-xl overflow-hidden"
                >
                  <span className={`relative z-10 ${location.pathname === link.path
                    ? 'text-gray-900'
                    : scrolled
                      ? 'text-slate-700 group-hover:text-indigo-600'
                      : 'text-purple-950 group-hover:text-slate-500'
                    }`}>
                    {link.label}
                  </span>

                  {/* Hover background */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl ${scrolled
                      ? 'bg-indigo-50'
                      : 'bg-white/10 backdrop-blur-sm'
                      }`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Active indicator */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block"
          >
            <Link to="/about">
              <motion.button
                className={`relative px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 overflow-hidden ${scrolled
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-premium-lg'
                  : 'bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 hover:bg-white/20'
                  }`}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Get Started</span>
                {scrolled && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            </Link>
          </motion.div>

          {/* <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`${scrolled ? 'text-slate-700' : 'text-white'}`}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div> */}
          
            {/* Hamburger Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className={`${scrolled ? 'text-slate-700' : 'text-white'}`}
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
        </div>
      </div>
    </motion.nav>
     <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-0 right-0 z-40 bg-white shadow-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold text-slate-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
     </>
  );
};

export default Navbar;

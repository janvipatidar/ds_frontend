import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Gradient Background with Animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600"
        style={{ opacity }}
      />
      
      {/* Animated Background Elements with Enhanced Motion */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-40"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 150, 0],
            y: [0, -80, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-[600px] h-[600px] bg-purple-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-40"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-[550px] h-[550px] bg-indigo-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 80, 0],
            y: [0, -50, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Enhanced Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Radial Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20"></div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content with Parallax */}
      <motion.div 
        className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center pt-16"
        style={{ y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block mb-8"
          >
            <motion.span
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-semibold shadow-lg hover:bg-white/15 transition-all duration-300"
            >
              🚀 Trusted by 50+ Professionals
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-8xl font-extrabold text-white mb-10 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Your Career Journey
            <br />
            <motion.span
              className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent animate-gradient"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Starts Here
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-14 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Connecting talented professionals with top companies. 
            <br className="hidden md:block" />
            We bridge the gap between ambition and opportunity.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/jobSeeker">
              <motion.button
                className="group relative px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-premium-xl overflow-hidden"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Get Placed</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="group relative px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/40 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.08, y: -4, borderColor: "rgba(255,255,255,0.6)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Contact Us</span>
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-7 h-12 rounded-full border-2 border-white/60 flex items-start justify-center p-2.5 backdrop-blur-sm bg-white/5">
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

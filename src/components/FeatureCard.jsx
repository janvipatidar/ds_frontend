import { motion } from 'framer-motion';
import { useRef } from 'react';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-premium-lg p-10 hover:shadow-premium-xl transition-all duration-500 border border-slate-100/50 overflow-hidden"
    >
      {/* Animated gradient border on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: "200% 200%"
        }}
      />
      
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />

      {/* Icon with enhanced animation */}
      <motion.div
        className="relative w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 shadow-premium-lg group-hover:shadow-premium-xl"
        whileHover={{ 
          rotate: [0, -5, 5, -5, 0],
          scale: 1.15,
          transition: { duration: 0.6 }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
        <motion.div
          className="text-white relative z-10"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay * 0.5
          }}
        >
          {icon}
        </motion.div>
      </motion.div>
      
      <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default FeatureCard;

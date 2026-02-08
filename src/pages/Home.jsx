import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import maxlife from "../images/Axis.png";
import Kotak from "../images/Kotak_Life.png";
import IndusInd from "../images/indusInd.png";
import AdityaBirla from "../images/aditya_birla_sun_life_insurance.webp";
import Canara from "../images/canara-hsbc-life-insurance-logo-1.png";
import Edelweiss from "../images/edelweiss.avif";
import ImageCarousel from './components/ImageCarousal';
import { configDotenv } from 'dotenv';

const Home = () => {
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  const logos = [
    maxlife,
    Kotak,
    IndusInd,
    AdityaBirla,
    Canara,
    Edelweiss,
  ];


  const { scrollYProgress: featuresProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });

  // Reduced parallax intensity (mobile-friendly)
  const featuresY = useTransform(featuresProgress, [0, 1], [60, -60]);
  const ctaY = useTransform(ctaProgress, [0, 1], [40, -40]);

  const features = [
    {
      title: 'Talent Acquisition',
      description:
        'We identify, source, and connect qualified candidates with the right organizations for long-term success.',
    },
    {
      title: 'Corporate Recruitment',
      description:
        'End-to-end recruitment solutions for permanent, contract, and temporary hiring across industries.',
    },
    {
      title: 'Employer–Candidate Matching',
      description:
        'We ensure the right fit by aligning candidate skills, experience, and career goals with employer needs.',
    },
  ];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Placed Candidate – Software Developer',
    content:
      'The recruitment team guided me throughout the hiring process and helped me land a role at a great company. Their interview preparation and follow-ups were extremely helpful.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'HR Manager',
    content:
      'We hired multiple candidates through this recruitment firm. They understand requirements quickly and deliver quality profiles on time. Very reliable hiring partner.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Placed Candidate – Data Analyst',
    content:
      'From resume improvement to interview scheduling, everything was handled smoothly. I got placed within a month. Highly recommended for job seekers.',
    rating: 5,
  },
];



  return (
    <div className="overflow-x-hidden">
      <Hero />

      <ImageCarousel />

      <section
        ref={featuresRef}
        className="relative bg-gradient-to-b from-white via-slate-50 to-white
                   py-20 md:py-28 lg:py-32"
      >
        {/* Background blur */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-indigo-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-100/40 rounded-full blur-3xl" />
        </div>

        <motion.div
          style={{ y: featuresY }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-5">
              Our Expertise
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                           font-extrabold text-slate-900 mb-5">
              Why Choose Us
            </h2>

            <p className="text-base sm:text-lg md:text-xl
                          text-slate-600 max-w-3xl mx-auto">
              We combine industry expertise, modern hiring practices, and
              personalized guidance to deliver real placement results.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((item, i) => (
              <FeatureCard
                key={i}
                title={item.title}
                description={item.description}
                delay={i * 0.15}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-32 bg-gray-100 rounded-[80px]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-slate-900">
            Companies That <span className="text-indigo-600">Trust Us</span>
          </h2>

          {/* Logo Marquee */}
          <div className="relative overflow-hidden">

            {/* Fade edges */}
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex gap-14 animate-logo-scroll hover:[animation-play-state:paused]">

              {/* Duplicate logos for infinite scroll */}
              {[...logos, ...logos].map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="min-w-[200px] h-24 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="max-h-14 max-w-[500px] object-contain hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>

        <section className="py-32 bg-neutral-50">
        <div className="px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-neutral-600">
              Trusted by thousands of satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-premium-lg p-10 hover:shadow-premium-xl transition-all duration-500 border border-slate-100/50 overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-neutral-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600
                   py-20 md:py-28 lg:py-32"
      >
        <motion.div
          style={{ y: ctaY }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                       font-extrabold text-white mb-6"
          >
            Ready to Build Your
            <span className="block bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
              Dream Career?
            </span>
          </motion.h2>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of candidates and companies who trust us for
            placements that actually work.
          </p>

          <Link to="/jobSeeker">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-4 sm:py-5
                         bg-white text-indigo-600
                         rounded-xl font-semibold text-lg
                         shadow-xl transition"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;




{/* PLACEMENT PROCESS */}
      {/* <section className="py-20 md:py-28 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
        Our Placement Process
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto text-lg">
        A structured and transparent approach to ensure successful placements.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { step: "01", title: "Registration", desc: "Students and companies register with us." },
        { step: "02", title: "Skill Assessment", desc: "Evaluate skills and career goals." },
        { step: "03", title: "Training & Guidance", desc: "Resume building & interview prep." },
        { step: "04", title: "Placement Support", desc: "Interview scheduling & final hiring." },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
        >
          <span className="text-indigo-600 font-bold text-2xl">{item.step}</span>
          <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-slate-600 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section> */}


      {/* SUCCESS METRICS */}
      {/* <section className="py-20 md:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {[
        { value: "10K+", label: "Students Placed" },
        { value: "500+", label: "Hiring Partners" },
        { value: "95%", label: "Placement Rate" },
        { value: "8+ Years", label: "Industry Experience" },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-slate-50 rounded-2xl p-6 shadow-sm"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-600">
            {stat.value}
          </h3>
          <p className="mt-2 text-slate-600 font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section> */}

      {/* HIRING PARTNERS */}
      {/* <section className="py-20 md:py-28 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10"
    >
      Trusted by Leading Companies
    </motion.h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 items-center">
        <div
          className="h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 font-semibold"
        >
          Logo
        </div>
        <div
          className="h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 font-semibold"
        >
          Logo
        </div>
        <div
          className="h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 font-semibold"
        >
          Logo
        </div>
        <div
          className="h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 font-semibold"
        >
          Logo
        </div>
        <div
          className="h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 font-semibold"
        >
          Logo
        </div>
        <div
          className="h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 font-semibold"
        >
          Logo
        </div>
    </div>
    

  </div>
</section> */}
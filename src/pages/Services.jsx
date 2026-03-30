import { motion } from 'framer-motion';
import Emp from "../images/emp.jpeg"
import Cus from "../images/cus.jpg"

import cand_reg from "../images/candidate_reg.jpg"
import pro_scr from "../images/profile_screening.jpeg"
import int_cord from "../images/int_cord.jpg"
import pla_onbo from "../images/onboarding.jpg"

const Services = () => {
const services = [
  {
    title: 'Campus Recruitment',
    description:
      'End-to-end campus recruitment solutions connecting fresh graduates with leading companies through structured placement drives.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z" />
      </svg>
    ),
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'IT Recruitment',
    description:
      'Specialized hiring services for IT roles including developers, testers, data analysts, and engineers across multiple technologies.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L8 21h8l-1.75-4M3 13h18M5 3h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Non-IT Recruitment',
    description:
      'Hiring solutions for non-IT roles such as sales, marketing, HR, operations, finance, and administrative positions.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Candidate Sourcing',
    description:
      'Active sourcing of qualified candidates through job portals, databases, referrals, and internal talent pools.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      </svg>
    ),
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Screening & Shortlisting',
    description:
      'Initial screening, profile evaluation, and shortlisting of candidates based on job requirements and employer expectations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
    ),
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Permanent & Contract Staffing',
    description:
      'Flexible staffing solutions including permanent placements and contract-based hiring to meet business needs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
      </svg>
    ),
    gradient: 'from-indigo-500 to-cyan-500',
  },
];


  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Comprehensive placement and career development services tailored to your needs and aspirations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-24"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-bold mb-6 shadow-soft"
            >
              ✨ What We Offer
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight"
            >
              Comprehensive Career
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
            >
              From placement to professional development, we provide end-to-end career services
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-premium-lg p-10 hover:shadow-premium-xl transition-all duration-500 border border-slate-100/50 cursor-pointer overflow-hidden"
              >
                {/* Animated gradient border on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl`}
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
                
                <motion.div
                  className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-8 shadow-premium-lg group-hover:shadow-premium-xl`}
                  whileHover={{ 
                    rotate: [0, -5, 5, -5, 0],
                    scale: 1.15,
                    transition: { duration: 0.6 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                  <motion.div
                    className="relative z-10"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">{service.description}</p>
                
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Employers & Job Seekers Section */}
<section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-24"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
        Who We <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Serve</span>
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        We bridge the gap between top talent and leading organizations through tailored recruitment solutions.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

      {/* FOR EMPLOYERS */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={Emp}
            alt="For Employers"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="relative -mt-20 mx-6 bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-premium-lg border border-slate-100">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            For Employers
          </h3>
          <p className="text-slate-600 mb-6">
            Smart hiring solutions designed to reduce recruitment time and improve retention.
          </p>

          <ul className="space-y-3 text-slate-700">
            <li>✔ Talent sourcing & screening</li>
            <li>✔ Shortlisting qualified candidates</li>
            <li>✔ Permanent, contract & temporary staffing</li>
            <li>✔ Industry-specific recruitment</li>
            <li>✔ Background checks & interview coordination</li>
          </ul>
        </div>
      </motion.div>

      {/* FOR JOB SEEKERS */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="group relative"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={Cus}
            alt="For Job Seekers"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="relative -mt-20 mx-6 bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-premium-lg border border-slate-100">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            For Job Seekers
          </h3>
          <p className="text-slate-600 mb-6">
            Personalized career support to help you land the right opportunity faster.
          </p>

          <ul className="space-y-3 text-slate-700">
            <li>✔ Job matching based on skills</li>
            <li>✔ Resume review & interview prep</li>
            <li>✔ Career guidance & counseling</li>
            <li>✔ Access to exclusive opportunities</li>
            <li>✔ Support until final placement</li>
          </ul>
        </div>
      </motion.div>

    </div>
  </div>
</section>


      {/* How We Work Section */}
<section className="py-32 bg-slate-900 text-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        How We <span className="text-cyan-400">Work</span>
      </h2>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto">
        Our streamlined recruitment process connects the right talent with the right opportunities
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        { title: 'Candidate Registration', img: cand_reg },
        { title: 'Profile Screening', img: pro_scr },
        { title: 'Interview Coordination', img: int_cord },
        { title: 'Placement & Onboarding', img: pla_onbo },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="group relative rounded-3xl overflow-hidden"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-center px-4">
              {item.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default Services;

import { motion } from 'framer-motion';
import Com1 from "../images/Com.png"
const About = () => {
  const stats = [
    { value: '10+', label: 'Years of Experience', icon: '📅' },
    { value: '50+', label: 'Job Openings', icon: '👥' },
    { value: '10+', label: 'Partner Companies', icon: '🏢' },
    { value: '95%', label: 'Success Rate', icon: '✨' },
  ];

  const values = [
    {
      title: 'Mission',
      description: 'To bridge the gap between talented individuals and leading organizations, creating meaningful career opportunities that drive personal and professional growth.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Vision',
      description: 'To become the most trusted placement partner, recognized for excellence in connecting talent with opportunity across all industries.',
      gradient: 'from-purple-500 to-cyan-500',
    },
    {
      title: 'Values',
      description: 'We are committed to integrity, transparency, and excellence. Our core values include respect for individuals, dedication to quality, and a passion for helping others succeed.',
      gradient: 'from-cyan-500 to-indigo-500',
    },
  ];

  const timeline = [
    { year: '2019', title: 'Founded', description: 'Started with a vision to transform career placement' },
    { year: '2021', title: 'Expansion', description: 'Expanded to 50+ cities across the country' },
    { year: '2023', title: 'Digital Transformation', description: 'Launched online platform and virtual placements' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as top placement partner with 10+ placements' },
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Empowering careers, transforming lives. We are dedicated to helping you achieve your professional dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl blur-2xl opacity-40"></div>

              <img
                src={Com1} // replace with your image path
                alt="Company Overview"
                className="relative rounded-3xl shadow-premium-xl object-cover w-full h-[420px]"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-5 py-2 mb-6 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm">
                Who We Are
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                A Trusted Placement & Recruitment Partner
              </h2>

              <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                <p>
                  We specialize in delivering reliable, efficient, and customized HR consulting solutions that connect the right talent with the right opportunities. With a deep understanding of industry demands and workforce dynamics, we support organizations in building strong, capable teams while helping professionals find meaningful career paths.
                </p>
                <p>
                  We based at <strong>Indore (M.P.)</strong> with a branch office in <strong> Hyderabad (Telangana)</strong>, the company has moved up the value chain as one of the preferred recruiters for top companies across <strong> PAN India</strong>.
                  Our services cover end-to-end recruitment support — from talent sourcing, screening, and evaluation to placement coordination — ensuring quality hires that align with business goals. We work closely with clients to understand their culture, role requirements, and growth plans, enabling us to provide precise and timely hiring solutions.
                </p>
                <p>
                  Driven by integrity, transparency, and commitment, we aim to be more than a service provider — we strive to become a long-term strategic partner contributing to organizational success through people excellence.
                </p>
                <p>
                  We cater to major sectors such as:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-medium text-slate-700">
                  <li>• Finance & Insurance</li>
                  <li>• Banking & Securities</li>
                  <li>• Information Technology (IT)</li>
                </ul>

                <p className="pt-4 font-semibold text-slate-800">
                  A right combination of <span className="text-indigo-600">KSAs</span> (Knowledge & Skills coupled with suitable Attitude) contributes to organizational success.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 text-center border border-slate-100 shadow-soft hover:shadow-premium transition-all"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built on principles that drive our commitment to excellence
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft p-8 hover:shadow-premium transition-all border border-slate-100"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Milestones that shaped our growth and success
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-200 via-purple-200 to-cyan-200 hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft p-8 border border-slate-100 hover:shadow-premium transition-all">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">{item.year}</div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                    <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded with a vision to revolutionize the placement industry, we have been at the forefront
                of connecting talented professionals with leading organizations. Over the years, we have built
                strong relationships with top companies across various sectors.
              </p>
              <p>
                Our team of experienced professionals is dedicated to providing personalized service,
                ensuring that each candidate finds the right opportunity and each company finds the perfect fit.
                We believe in long-term partnerships and continuous support throughout the career journey.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

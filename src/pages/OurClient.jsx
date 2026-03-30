import { motion } from "framer-motion";
import Kotak from "../images/Kotak.png";
import IndusInd from "../images/indusInd.png";
import AdityaBirla from "../images/adityabirla.png";
import Canara from "../images/canara.png";
import Edelweiss from "../images/Edleiess.png";
import CareHealth from "../images/Care_health.png";
import GeneralCentral from "../images/Generali_Central.png";

import { Link } from "react-router-dom";

const OurClients = () => {
  return (
    <div className="pt-24">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Clients</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Trusted by startups, enterprises, and institutions across industries.
        </p>
      </section>

      {/* LOGOS */}
      <section className="py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            Companies That <span className="text-indigo-600">Trust Us</span>
          </h2>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 items-center">

            {[AdityaBirla, Kotak, IndusInd, Edelweiss, Canara,CareHealth,GeneralCentral].map((logo, index) => (
              <motion.div
                whileHover={{ rotateX: 6, rotateY: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="
                  group
                  h-40
                  rounded-3xl
                  bg-slate-50
                  hover:bg-indigo-50
                  shadow-md
                  hover:shadow-2xl
                  flex
                 items-center
                 justify-center
                 transition-colors
                 duration-400
                 perspective-1000
                 "
              >
                <img
                  src={logo}
                  alt="Company Logo"
                  className="
      max-h-20
      max-w-[200px]
      object-contain
      group-hover:scale-110
      transition-transform
      duration-400
    "
                />
              </motion.div>

            ))}

          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Want to Hire Top Talent?
        </h2>
        <p className="text-xl mb-10">
          Partner with us to build strong teams faster.
        </p>
    
          <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 sm:px-10 py-4 sm:py-5
                                 bg-white text-indigo-600
                                 rounded-xl font-semibold text-lg
                                 shadow-xl transition"
                    >
                     Become a Partner
                    </motion.button>
                  </Link>
      </section>
    </div>
  );
};

export default OurClients;

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgSmall from "../../images/resized-for-web.jpeg";

import maxlife from "../../images/happy-smiling-business-team.webp";
import Kotak from "../../images/stock-photo.jpg";
import IndusInd from "../../images/12.webp";
import AdityaBirla from "../../images/depositphotos.jpg";
import Canara from "../../images/job-consultancy.webp";
import Edelweiss from "../../images/emp.jpeg";

const logos = [
    maxlife,
    Kotak,
    IndusInd,
    AdityaBirla,
    Canara,
    Edelweiss,
];

const ImageCarousel = () => {
    const [index, setIndex] = useState(0);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % logos.length);
        }, 4000); // change speed here

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-28 bg-gray-100 rounded-[80px] mt-12">
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP BAR */}
                <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
                            ● ABOUT US
                        </span>

                        <h2 className="max-w-75 text-3xl md:text-4xl font-extrabold text-slate-900 text-center flex-1">
                            Connecting Ambition with Opportunity
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                    <div>
                        <img
                            src={imgSmall}
                            alt="Interview"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>
                        <p className="text-lg text-slate-600 leading-relaxed mb-4">
                            We specialize in matching talented professionals with roles where they can
                            truly grow and succeed. Our focus is on understanding individual career goals
                            and aligning them with the right opportunities across industries.
                        </p>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Whether you’re a fast-growing startup or an established enterprise, we help
                            organizations find skilled candidates who fit their culture, values, and
                            long-term vision. Our recruitment approach ensures meaningful placements that
                            drive business growth and career success.
                        </p>


                        {/* IMAGE CAROUSEL */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">

                            <div className="h-[390px] relative">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={index}
                                        src={logos[index]}
                                        alt="Recruitment"
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -40 }}
                                        transition={{ duration: 0.6 }}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </AnimatePresence>
                            </div>

                            {/* DOTS */}
                            <div className="flex justify-center gap-2 py-4 bg-white">
                                {logos.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === i
                                            ? "w-8 bg-indigo-600"
                                            : "w-2 bg-slate-300"
                                            }`}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ImageCarousel;

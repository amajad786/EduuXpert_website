import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ReviewCarousel from "./Reviews";

export default function TestimonialSection() {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      ref={ref}
      className="relative bg-white text-black overflow-hidden py-16"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10 ">
        {/* Title */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          What Our <span className="text-[#e15601]">Clients</span> Say
          <motion.span
            className="block w-24 h-1 bg-[#e15601] mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="max-w-2xl mx-auto text-base md:text-lg text-gray-700 text-center mt-4 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Schools and colleges trust Eduuxpert to streamline operations and
          deliver a smarter learning experience every day.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Video Section */}
          <motion.div
            className="relative flex-shrink-0 w-full h-80 rounded-3xl overflow-hidden border border-gray-300 bg-gray-100"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {!isPlaying ? (
              <>
                <img
                  src="src\assets\images\Unlock 2.png"
                  alt="EduuXpert Testimonials"
                  className="w-full h-full object-fit"
                />
                <div className="absolute inset-0 bg-black/30" />
                <motion.button
                  className="cursor-pointer absolute inset-0 m-auto bg-[#e15601] text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg ring-4 ring-white/20"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-10 h-10"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-white/50"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                </motion.button>
              </>
            ) : (
              <>
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/EugHBYgnWQ0?autoplay=1&rel=0`}
                  title="Client Testimonials"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  className="cursor-pointer absolute top-3 right-3 bg-white text-black rounded-full py-1 px-3 hover:bg-gray-200 font-bold"
                  onClick={() => setIsPlaying(false)}
                >
                  ✕
                </button>
              </>
            )}
          </motion.div>

          {/* Carousel Section */}
          <motion.div
            className="space-y-6 rounded-3xl p-2 md:p-6 border border-gray-300 "
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ReviewCarousel />
            {/* <motion.button
              className="cursor-pointer relative inline-block bg-[#e15601] text-white font-semibold py-3 px-8 rounded-full shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Read All Stories</span>
            </motion.button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

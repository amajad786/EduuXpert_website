import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    para: "Smarter School Management",
    title: (
      <>
        📘 Empowering <span className="text-[#e15601]/90">Schools</span>{" "}
        with <span className="text-[#e15601]/90">EduuXpert</span>
      </>
    ),
    subtitle:
      "Seamlessly manage admissions, fees, attendance, and communication — all in one smart platform.",
    image: "src/assets/images/1.png",
    cta: [
      {
        icon: "👉",
        value: "Get Started Today",
      },
    ],
  },
  {
    para: "Connect Teachers, Students & Parents",
    title: (
      <>
        Stronger Connections,{" "}
        <span className="text-[#e15601]/90">Better Learning</span>
      </>
    ),
    subtitle:
      "EduuXpert integrates classrooms, communication, and feedback — bringing teachers, parents, and students closer than ever.",
    image: "src/assets/images/2.png",
    cta: [
      {
        icon: "👉",
        value: "Explore Features",
      },
    ],
  },
  {
    para: "All-in-One Digital Solution",
    title: (
      <>
        ⚡ From <span className="text-[#e15601]/90">Admissions</span> to
        Reports — Simplified
      </>
    ),
    subtitle:
      "Save time and boost productivity with powerful modules like Online Exams, Transport, Vendor Management, and Digital Stores.",
    image: "src/assets/images/3.png",
    cta: [
      {
        icon: "👉",
        value: "Request a Demo",
      },
    ],
  },
];

export default function HeroSection1({ onOpenModal }) {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-gray-900 text-white overflow-hidden py-16 lg:py-24">
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${slides[current].image}')`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
        </motion.div>
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-2 md:px-12 h-full flex flex-col justify-center">
        
        {/* Animated paragraph */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`para-${current}`}
            className="text-sm font-semibold tracking-wide text-[#e15601] mb-3"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
          >
            {slides[current].para}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.h1
            key={current}
            className="text-3xl md:text-5xl font-bold leading-tight md:max-w-2xl w-full md:min-h-[120px] h-[80px] pr-0 md:pr-10 line-clamp-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            {slides[current].title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`subtitle-${current}`}
            className="text-base md:text-lg text-gray-200 max-w-2xl mt-4 line-clamp-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {slides[current].subtitle}
          </motion.p>
        </AnimatePresence>

        {/* CTA Button */}
        <AnimatePresence mode="wait">
          {slides[current].cta.map((btn, i) => (
            <motion.a
              key={`${current}-cta-${i}`}
              onClick={ onOpenModal }
              className="mt-8 flex items-center space-x-4 bg-[#e15601] px-6 py-4 rounded-xl w-fit cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-lg">{btn.icon}</span>
              <span>{btn.value}</span>
            </motion.a>
          ))}
        </AnimatePresence>

        {/* Carousel indicators */}
        <div className="mt-10 flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 w-3 rounded-full transition cursor-pointer ${
                current === idx ? "bg-[#e15601]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

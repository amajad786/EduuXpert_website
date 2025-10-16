import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    q: "What is Eduuxpert?",
    a: "Eduuxpert is a complete school management solution designed to streamline academic and administrative tasks—saving time for teachers, students, and administrators.",
  },
  {
    q: "How does Eduuxpert simplify daily school operations?",
    a: "It automates attendance, homework assignments, report card generation, and progress tracking, reducing manual work and improving accuracy.",
  },
  {
    q: "Can Eduuxpert support multiple branches of a school?",
    a: "Yes. Eduuxpert provides centralized management, allowing institutions to handle multiple campuses from a single dashboard.",
  },
  {
    q: "Does Eduuxpert offer real-time data access?",
    a: "Absolutely. Teachers, parents, and administrators can access updated attendance records, grades, and performance insights instantly.",
  },
  {
    q: "Is training provided for staff?",
    a: "Yes. Eduuxpert offers onboarding sessions and continuous support to ensure teachers and administrators can use the platform efficiently.",
  },
  {
    q: "How secure is the platform?",
    a: "Eduuxpert uses role-based access, data encryption, and secure cloud hosting to protect sensitive student and school information.",
  },
];

const FAQSection = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <div className="max-w-7xl mx-auto py-16 px-2">
      <motion.div
        className="relative bg-white/70 backdrop-blur-xl max-w-5xl mx-auto  rounded-3xl p-4 md:p-8 border border-gray-200 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Gradient background accent */}
        <div className="absolute inset-0  opacity-40 blur-3xl -z-10"></div>

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900  text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Frequently Ask<span className="text-[#e15601]">ed Questions</span>
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r  from-[#e15601]/40 to-[#24214b]/20 mx-auto my-4 rounded-full"></div>
        <p className="mb-12 text-gray-700 text-base md:text-lg max-w-3xl mx-auto text-center">
          Transform teaching with EduuXpert — automate homework, attendance, and
          report cards, track performance in real time, and simplify classroom
          management to focus on shaping your students’ future.
        </p>

        {/* FAQs */}
        <motion.div
          className="space-y-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className={`relative border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                faqOpen === idx
                  ? "border-[#e15601]  bg-gradient-to-r from-[#e15601]/10 to-[#e15601]/20"
                  : "border-gray-200  bg-white/60"
              }`}
              whileHover={{ scale: 1.02 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
            >
              {/* Glow animated border when active */}
              {faqOpen === idx && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-[#e15601]"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}

              {/* Question */}
              <div className="flex justify-between items-center relative z-10">
                <p
                  className={`font-semibold text-lg transition-colors ${
                    faqOpen === idx ? "text-[#e15601]" : "text-gray-800"
                  }`}
                >
                  {faq.q}
                </p>
                <motion.div
                  animate={{
                    rotate: faqOpen === idx ? 90 : 0,
                    scale: faqOpen === idx ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <ChevronRight
                    className={`w-6 h-6 transition-colors ${
                      faqOpen === idx
                        ? "text-[#e15601]"
                        : "text-gray-400 group-hover:text-[#e15601]"
                    }`}
                  />
                </motion.div>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {faqOpen === idx && (
                  <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: -15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="mt-3 text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FAQSection;

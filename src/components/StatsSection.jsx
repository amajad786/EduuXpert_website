import React from "react";
import { Medal, School, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { id: 1, icon: Medal, value: "4+", label: "Years Legacy" },
  { id: 2, icon: School, value: "250+", label: "Schools" },
  { id: 3, icon: Users, value: "90%", label: "Client Retention" },
  { id: 4, icon: BookOpen, value: "40+", label: "Modules" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

// Utility: check if card should show right border based on index and columns
const shouldShowBorder = (index, cols) => {
  return (index + 1) % cols !== 0; // no border if it's last in row
};

export default function CreativeStats() {
  return (
    <div className="max-w-7xl mx-auto px-0 pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative bg-white/10 backdrop-blur-xl py-8 flex flex-col items-center transition-all duration-500 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
          >
            {/* Right border that adapts to breakpoints */}
            {/* For mobile (1 col): no border */}
            {/* For sm (2 col): border except every 2nd item */}
            {/* For lg (4 col): border except every 4th item */}
            <div
              className={`
                absolute top-[50%] right-3 w-[2px] h-[70%] bg-gray-300/50
                ${shouldShowBorder(index, 0) ? "hidden" : "block"} 
                md:${shouldShowBorder(index, 4) ? "block" : "hidden"}
                transform -translate-y-1/2
              `}
            ></div>

            {/* Gradient Border Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition duration-700"></div>

            {/* Animated Icon inside Gradient Circle */}
            <motion.div
              className="w-20 h-20 rounded-full flex items-center justify-center bg-[#24214b]"
              animate={{ rotate: [0, 0, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <item.icon className="w-10 h-10 text-[#e15601]" />
            </motion.div>

            {/* Number with Gradient Text */}
            <motion.h3
              className="text-5xl font-extrabold mt-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
              whileInView={{ scale: [0.8, 1.15, 1] }}
              transition={{ duration: 0.8 }}
            >
              {item.value}
            </motion.h3>

            {/* Label */}
            <p className="mt-2 text-gray-400 text-lg font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

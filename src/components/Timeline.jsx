import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Wallet,
  LayoutGrid,
  MessageSquare,
  CalendarClock,
  Bus,
  CalendarRange,
  IdCard,
  ClipboardCheck,
  UserCog,
  Play,
  X,
} from "lucide-react";

const timelineData = [
  {
    title: "Student Management",
    icon: <GraduationCap size={16} />,
    videoUrl: "https://www.youtube.com/embed/EugHBYgnWQ0",
  },
  {
    title: "Fee Management",
    icon: <Wallet size={16} />,
    videoUrl: "https://www.youtube.com/embed/EugHBYgnWQ0",
  },
  {
    title: "Class & Section Management",
    icon: <LayoutGrid size={16} />,
    videoUrl: "https://www.youtube.com/embed/rMF1xV6peNc",
  },
  {
    title: "Message: SMS & App",
    icon: <MessageSquare size={16} />,
    videoUrl: "https://www.youtube.com/embed/EugHBYgnWQ0",
  },
  {
    title: "Time Table Management",
    icon: <CalendarClock size={16} />,
    videoUrl: "https://www.youtube.com/embed/EugHBYgnWQ0",
  },
  {
    title: "Transport Management",
    icon: <Bus size={16} />,
    videoUrl: "https://www.youtube.com/embed/EugHBYgnWQ0",
  },
  {
    title: "Session Management",
    icon: <CalendarRange size={16} />,
    videoUrl: "https://www.youtube.com/embed/EugHBYgnWQ0",
  },
  {
    title: "Admission Management",
    icon: <IdCard size={16} />,
    videoUrl: "https://www.youtube.com/embed/EugHBYgnWQ0",
  },
  {
    title: "Attendance Management",
    icon: <ClipboardCheck size={16} />,
    videoUrl: "https://www.youtube.com/embed/AFJFWXFSdrI",
  },
  {
    title: "Staff Management",
    icon: <UserCog size={16} />,
    videoUrl: "https://www.youtube.com/embed/i1EB1W5h1gc",
  },
];

export default function Timeline() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="w-full flex justify-center py-10 bg-white">
      <div className="w-full max-w-5xl px-4">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 relative inline-block">
            Features Of{" "}
            <span className="bg-gradient-to-r from-[#e15601] to-[#ff7e33] text-transparent bg-clip-text">
              EduuXpert
            </span>
            <motion.span
              className="absolute -top-3 -right-6 text-[#e15601] text-2xl hidden md:block"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              ✨
            </motion.span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#e15601]/40 to-[#24214b]/20 mx-auto my-4 rounded-full"></div>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Revolutionize teaching with EduuXpert — the all-in-one platform to
            automate homework, attendance, and report cards. Stay updated on
            every student in real time and focus on inspiring the next
            generation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical main line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2"></div>

          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={`mb-12 md:mb-8 flex flex-col md:flex-row items-center relative ${
                idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Play Button with vertical connectors */}
              <div className="absolute top-1/2 -translate-y-1/2  left-0 md:left-1/2 transform md:-translate-x-1/2 z-20 flex flex-col items-center">
                {/* top connector */}
                {idx !== 0 && <div className="w-0.5 flex-1 bg-gray-300" />}
                <motion.button
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => setVideoUrl(item.videoUrl)}
                  className="relative w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#e15601]/90 shadow-lg cursor-pointer"
                  animate={{ scale: [1, 1, 1] }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <Play size={16} />
                  {/* Hover Video Preview */}
                  {hoveredIdx === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 bg-black rounded-xl shadow-lg overflow-hidden z-50"
                    >
                      <iframe
                        src={`${item.videoUrl}?autoplay=1&mute=1`}
                        title="Preview"
                        allow="autoplay; encrypted-media"
                        className="w-full h-36 z-60"
                      />
                    </motion.div>
                  )}
                </motion.button>
                {/* bottom connector */}
                {idx !== timelineData.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-300" />
                )}
              </div>

              {/* Horizontal connector (mobile+desktop) */}
              <div
                className={`absolute top-1/2 md:w-10 w-5 h-0.5 bg-gray-300 z-10 
                  ${
                    idx % 2 === 0
                      ? "md:left-1/2 md:-translate-x-full left-8"
                      : "md:left-1/2 left-8"
                  }
                `}
              ></div>

              {/* Content card */}
              <div
                className={`relative bg-[#24214b] rounded-xl p-6 w-[85%] z-30 md:w-[47%] ml-12 md:ml-0
                  ${idx % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"}
                `}
              >
                {/* Desktop icon */}
                <motion.div
                  className={`absolute -top-3 w-8 h-8 bg-[#e15601] text-white rounded-full flex items-center justify-center shadow-md hidden md:flex
                    ${idx % 2 === 0 ? "-left-2" : "-right-2"}
                  `}
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>

                {/* Mobile icon */}
                <motion.div
                  className="absolute -top-3 -right-2 w-8 h-8 bg-[#e15601] text-white rounded-full flex items-center justify-center shadow-md md:hidden"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>

                <div className="text-md font-bold text-white">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {videoUrl && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-70 flex items-center justify-center z-50 md:px-5 px-1">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl w-full md:max-w-5xl relative py-4 px-4">
            <button
              onClick={() => setVideoUrl(null)}
              className="absolute top-3 right-3 text-white bg-[#e15601] rounded-full p-1 z-10 cursor-pointer"
            >
              <X size={18} className="text-white" />
            </button>
            <iframe
              src={`${videoUrl}?autoplay=1`}
              title="Feature Video"
              allowFullScreen
              className="w-full h-64 md:h-120 rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

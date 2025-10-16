import { motion } from "framer-motion";

export default function LessPaperWork() {
  return (
    <section className="bg-white pt-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading animation */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          EduuXpert Overview
        </motion.h2>

        {/* Divider animation */}
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-[#e15601]/40 to-[#24214b]/20 mx-auto my-4 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ originX: 0.5 }}
        ></motion.div>

        {/* Paragraph animation */}
        <motion.p
          className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Eduuxpert is an all-in-one school management platform that automates
          academic and administrative tasks, streamlines operations, and
          provides real-time insights for teachers, students, and
          administrators.
        </motion.p>
      </div>

      {/* Video container */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex justify-center p-4 md:p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white shadow-lg rounded-3xl w-3xl relative overflow-hidden">
            <div className=" aspect-video">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/EugHBYgnWQ0"
                title="Okie Dokie Dashboard"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

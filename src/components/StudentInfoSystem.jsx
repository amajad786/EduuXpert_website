import { motion } from "framer-motion";

export default function StudentInfoSystem() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 overflow-hidden">
        {/* Top heading */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-blue-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Unlock a 360-degree View of Student
        </motion.h2>

        <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Illustration */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl shadow-md overflow-hidden bg-pink-50 p-6">
              <img
                src="src\assets\images\unlock.png"
                alt="Student using computer"
                className="max-h-72 object-contain rounded-xl"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="max-w-xl lg:ml-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-extrabold text-[#0c2a52]">
              Eduuxpert Student Information System
            </h2>

            {/* tiny dual-color bar */}
            <motion.div
              className="mt-3 flex items-center gap-2"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "auto", opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="h-2 w-16 rounded-full bg-gradient-to-r from-[#e15601]/40 to-[#24214b]/20" />
            </motion.div>

            <ul className="mt-6 space-y-5 text-[15.5px] leading-7 text-[#2f3a45]">
              {[
                `<strong>Effortless tracking –</strong> Monitor attendance, grades, and behavior in real-time with Eduuxpert’s intelligent dashboard.`,
                `<strong>Personalized learning –</strong> Tailor academic paths for each student to ensure maximum success and growth.`,
                `<strong>Complete academic records –</strong> From admission to graduation, Eduuxpert keeps every student record organized and easily accessible.`,
                `<strong>Seamless communication –</strong> Connect parents, teachers, and students on one unified platform for better collaboration.`,
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="relative pl-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute left-0 top-2 inline-block h-2.5 w-2.5 rounded-full bg-[#e15601]" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom text */}
        {/* <motion.div
          className="mt-2 pt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-center text-lg md:text-4xl font-semibold text-blue-900 px-4">
            From collecting inquiries to tuition payments, our ERP software
            supports your goals every step of the way
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}

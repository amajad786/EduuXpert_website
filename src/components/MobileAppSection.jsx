import { motion } from "framer-motion";

export default function MobileAppSection() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-900 text-white">
      {/* Background Glow Layers */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600 opacity-30 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-pink-600 opacity-30 blur-[180px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Left: Animated Phones */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start mb-14 md:mb-0 relative"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Floating main phone */}
          <motion.img
            src="src/assets/app-screen.png"
            alt="Mobile app screen"
            className="max-w-[280px] md:max-w-md drop-shadow-2xl relative z-20"
            whileHover={{ y: -10, rotate: -2 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
          
          {/* Background phone with parallax */}
          <motion.img
            src="src/assets/app-screen.png"
            alt="Mobile app blur"
            className="absolute top-10 left-10 max-w-[220px] md:max-w-sm opacity-40 blur-md"
            whileHover={{ y: 15, rotate: 3 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>

        {/* Right: Text + Buttons */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug"
            variants={fadeUp}
          >
            Control Your World <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              From Your Wrist
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0"
            variants={fadeUp}
          >
            Seamlessly connect your smartwatch to your devices. Get real-time
            notifications, apps, and custom watch faces to stay ahead in style.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
            variants={staggerContainer}
          >
            {[
              { src: "src/assets/app-store.png", alt: "Download on App Store" },
              { src: "src/assets/google-play.png", alt: "Get it on Google Play" },
            ].map((btn, idx) => (
              <motion.a
                key={idx}
                href="#"
                className="inline-flex items-center bg-black px-5 py-3 rounded-xl shadow-lg hover:shadow-purple-500/30 transition"
                variants={fadeUp}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={btn.src} alt={btn.alt} className="h-12" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

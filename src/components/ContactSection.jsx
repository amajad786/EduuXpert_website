import { Phone, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ContactSection() {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay },
    },
  });

  return (
    <section className="relative bg-white  py-16 overflow-hidden">
      {/* Infinite animated diagonal bars */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#ffffff10_25%,transparent_25%,transparent_50%,#ffffff10_50%,#ffffff10_75%,transparent_75%,transparent)] bg-[length:50px_50px] animate-stripes"></div>

      {/* Custom keyframes for infinite loop */}
      <style>{`
        @keyframes stripes {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        .animate-stripes {
          animation: stripes 6s linear infinite;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.button
            className="bg-[#e15601]/10 text-[#e15601] px-4 py-2 rounded-full font-medium mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Connect
          </motion.button>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Ready to Transform Your{" "}
            <span className="text-[#e15601]">Education Experience?</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Get in touch with our team to discover how Eduuxpert’s smart school
            management solutions can save time, improve efficiency, and help
            your institution focus on what truly matters—student success.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <Phone className="text-[#e15601]" size={24} />,
                label: "Call us directly",
                value: "+91 9315652636 , +91 9557587998",
              },
              {
                icon: <Mail className="text-[#e15601]" size={24} />,
                label: "Email us at",
                value: "info@acstechconsulting.com",
              },
              {
                icon: <MessageSquare className="text-[#e15601]" size={24} />,
                label: "Start a conversation",
                value: "Schedule a consultation →",
                link: "#",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center space-x-4"
                variants={fadeUp((idx + 1) * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-[#e15601] font-semibold hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-gray-900">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mt-5">
            {[
              { src: "src/assets/images/app-store.png", alt: "Download on App Store" },
              {
                src: "src/assets/images/google-play.png",
                alt: "Get it on Google Play",
              },
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

        {/* Right Section - Contact Form */}
        <motion.div
          className="bg-white shadow-lg rounded-md p-6 md:p-8 relative"
          variants={fadeUp(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#e15601]/20 rounded-bl-full"></div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Quick Contact
          </h3>
          <p className="text-gray-600 mb-6">
            Leave your email and we’ll get back to you within 24 hours
          </p>

          <form className="space-y-4">
            {["Your Name", "Email Address", "Phone Number", "School Name"].map(
              (label, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                  </label>
                  <input
                    type={
                      label === "Email Address"
                        ? "email"
                        : label === "Phone Number"
                        ? "tel"
                        : "text"
                    }
                    placeholder={
                      label === "Your Name"
                        ? "John Doe"
                        : label === "Email Address"
                        ? "your@email.com"
                        : label === "School Name"
                        ? "Little Wonders School"
                        : "+91 98765 43210"
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e15601]"
                  />
                </div>
              )
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="How can we help you?"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e15601]"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="cursor-pointer w-full bg-[#e15601]/90 text-white font-semibold py-2 rounded-md hover:bg-[#e15601] transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By contacting us, you agree to our{" "}
            <Link to={"/privacy policy"}  className="text-[#e15601] hover:underline">
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Phone, Mail, Clock, MapPin, Shield, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer2() {
  // Generate particles only once
  const [particles] = useState(() =>
    Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 4,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5
    }))
  );

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll event for showing button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Define your social links
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/ASV-Consulting-Services-Pvt-Ltd/61563162418689/" },
    { icon: Linkedin, href: "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fsearch%2Fresults%2Fall%2F%3FfetchDeterministicClustersOnly%3Dtrue%26heroEntityKey%3Durn%253Ali%253Aorganization%253A102592028%26keywords%3Dasv%2520consulting%2520services%2520pvt.%2520ltd.%26origin%3DRICH_QUERY_SUGGESTION%26position%3D0%26searchId%3D51610383-c0a2-431d-bd11-7725d65f9a78%26sid%3D3%253B5%26spellCorrectionEnabled%3Dfalse" },
    { icon: Instagram, href: "https://www.instagram.com/asvconsultingservices/" },
    { icon: Youtube, href: "https://www.youtube.com/@eduuxpert" },

  ];

  return (
    <footer className="relative bg-[#24214b] text-white overflow-hidden z-40">
      
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute bg-[#e15601]/70 rounded-full"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo and About */}
        <div>
          <Link to={"/"}><div className="flex items-center space-x-2 mb-4">
            <img src="src\assets\images\eduuxpert-white.png" alt="EduuXpert" className="w-30" />
          </div></Link>
          <p className="text-gray-300 text-sm mb-6">
            A leading provider of IT Infrastructure Services and Solutions in India.
          </p>
          
          {/* Social icons */}
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#e15601] transition"
              >
                <Icon size={18} className="text-white" />
              </a>
            ))}
          </div>

          {/* Secure Payments */}
          <div className="flex items-center mt-8 space-x-3">
            <Shield className="text-[#e15601]" size={28} />
            <div>
              <p className="font-semibold">Secure Payments</p>
              <p className="text-gray-400 text-sm">All transactions are encrypted and secure</p>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="font-bold mb-4">Quick Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            {["Home", "About", "Features","Contact", "Document","Term & Conditions", "Privacy Policy"].map((link) => (
              <li key={link}>
                <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="hover:text-[#e15601] transition">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-bold mb-4">Customer Support</h3>
          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex items-center space-x-2">
              <Phone className="text-[#e15601]" size={18} /> 
              <span>+91 9315652636 , +91 9557587998</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="text-[#e15601]" size={18} />
              <span>info@acstechconsulting.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Clock className="text-[#e15601]" size={18} />
              <span>24/7 Support</span>
            </li>
          </ul>
        </div>

        {/* Blog + Newsletter */}
        {/* <div>
          <h3 className="font-bold mb-4">Blog Highlights</h3>
          <ul className="space-y-2 mb-8">
            <li>
              <a href="#" className="text-teal-400 hover:underline">Issues and How AforServe Fixes</a>
            </li>
          </ul>
          <h3 className="font-bold mb-3">Join Our Newsletter</h3>
          <div className="flex rounded-full overflow-hidden bg-gray-800">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 w-full bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 font-semibold">
              Subscribe
            </button>
          </div>
        </div> */}

        {/* Address  */}
        <div>
          <h3 className="font-bold mb-3">Address</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start space-x-2">
              <MapPin className="text-[#e15601] flex-shrink-0" size={18} />
              <span>B-06, H-169, Sector 63 Noida, U.P. 201301, India</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin className="text-[#e15601] flex-shrink-0" size={18} />
              <span>243-C, Kapilpuri, Behind Union Bank of India, Bashratpur, Medical College Road, Gorakhpur, U.P. 273004, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 py-4 text-center text-gray-400 text-sm relative z-10">
       <a href="https://acstechconsulting.com/" target="_blank"> © 2025 Asv Consulting Service Pvt Ltd. All rights reserved.</a> 
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button 
          onClick={handleScrollTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer fixed bottom-6 right-6 bg-[#e15601]/90 hover:bg-[#e15601] p-3 rounded-full shadow-lg transition z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor" 
            className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/>
          </svg>
        </motion.button>
      )}
    </footer>
  );
}

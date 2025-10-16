import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, when: "beforeChildren" }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <header className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-[#24214b] shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-1 px-2 lg:px-4 ">
        
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/" className="flex items-center">
            <img src="src\assets\images\eduuxpert-logo.png" alt="eduuxpert logo" className="w-36 " />
          </Link>
        </motion.div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          {["Home", "About", "Features", "Contact",  "Document"].map((item) => (
            <Link 
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#e15601] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden" 
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav 
            className="md:hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 mt-1 shadow-lg text-[#24214b] overflow-hidden border-t border-white/20"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {["Home", "About","Document","Contact","Features"].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Link 
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 block hover:bg-white/10 transition-colors duration-300 font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}



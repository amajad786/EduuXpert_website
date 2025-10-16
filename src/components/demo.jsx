import { useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Flag,
  Download,
  UserPlus,
  Link as LinkIcon,
  HelpCircle,
  Users,
  Copy,
  Shield,
  Lock,
  MessageSquare,
  Search
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// JSON content
const content = {
  header: {
    title: "Help Center",
    searchPlaceholder: "Search help articles..."
  },
  sidebar: {
    items: [
      {
        icon: "Flag",
        title: "Get Started",
        children: null
      },
      {
        icon: "Download",
        title: "Download & Installation",
        children: [
          "How to download WhatsApp",
          "Supported operating systems",
          "Supported devices",
          "Rooted phones and custom ROMs",
          "KaiOS support ending"
        ]
      },
      {
        icon: "UserPlus",
        title: "Registration",
        children: null
      },
      {
        icon: "LinkIcon",
        title: "Linked Devices",
        children: null
      },
      {
        icon: "HelpCircle",
        title: "Troubleshooting",
        children: null
      },
      {
        icon: "Users",
        title: "Contacts",
        children: null
      }
    ]
  },
  mainContent: {
    pageTitle: {
      icon: "Shield",
      title: "End-to-End Encryption",
      copyButton: {
        label: "Copy link",
        icon: "Copy"
      }
    },
    intro:
      "Privacy and security is in our DNA, which is why we built end-to-end encryption into our app. When encrypted, your messages, photos, videos, live location, and calls are secured from falling into the wrong hands."
  },
  features: [
    {
      icon: "Lock",
      title: "How does WhatsApp work?",
      description:
        "Chats and calls are locked with encryption keys. Only sender and recipient can unlock them — not even WhatsApp can access."
    },
    {
      icon: "MessageSquare",
      title: "Business Messaging",
      description:
        "Messages with business accounts are also encrypted and protected by the same Signal protocol."
    }
  ],
  faq: [
    {
      question: "Is my data visible to WhatsApp?",
      answer:
        "No. With end-to-end encryption, even WhatsApp cannot read or listen to your messages and calls."
    },
    {
      question: "Do I need to enable encryption?",
      answer:
        "No. End-to-end encryption is enabled by default on all WhatsApp chats and calls."
    },
    {
      question: "Are business messages encrypted?",
      answer:
        "Yes. Messages to businesses are also secured by the same encryption protocol."
    }
  ]
};

// Helper to map icon names to actual components
const iconMap = {
  Menu,
  X,
  ChevronRight,
  Flag,
  Download,
  UserPlus,
  LinkIcon,
  HelpCircle,
  Users,
  Copy,
  Shield,
  Lock,
  MessageSquare,
  Search
};

function SidebarItem({ icon, title, children }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[icon];

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full px-4 py-2 text-gray-700 font-medium rounded-xl hover:bg-green-50 hover:text-[#e15601] transition-all duration-300"
      >
        <span className="flex items-center space-x-2">
          {Icon && <Icon size={18} className="text-gray-500" />}
          <span>{title}</span>
        </span>
        {children && (
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight size={16} />
          </motion.span>
        )}
      </button>

      <AnimatePresence>
        {open && children && (
          <motion.div
            className="pl-8 mt-2 space-y-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="text-sm text-gray-600 space-y-2">
              {children.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#e15601] cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HelpCenter() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const SidebarContent = () => (
    <div className="py-6 space-y-2 text-sm">
      {content.sidebar.items.map((item, idx) => (
        <SidebarItem
          key={idx}
          icon={item.icon}
          title={item.title}
          children={item.children}
        />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <motion.header
        className="flex items-center justify-between border-b border-gray-200 px-0 md:px-6 py-4 sticky top-0 bg-white/70 backdrop-blur-md z-50 shadow-md"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-3">
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
          <NavLink to="/">
            <span className="font-extrabold text-2xl text-[#e15601] tracking-wide">
              {content.header.title}
            </span>
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <motion.div
            className="hidden md:flex items-center border border-gray-300 bg-white rounded-full px-4 py-1.5 shadow-md w-72"
            whileHover={{ scale: 1.03 }}
          >
            <Search size={16} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder={content.header.searchPlaceholder}
              className="w-full text-sm focus:outline-none"
            />
          </motion.div>
        </div>
        <div></div>
      </motion.header>

      <div className="flex flex-1">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 bg-white shadow-lg rounded-r-xl z-30 overflow-y-auto">
          <SidebarContent />
        </aside>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="w-72 bg-white shadow-xl overflow-y-auto">
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                  <h2 className="text-lg font-semibold">
                    {content.header.title}
                  </h2>
                  <button onClick={() => setMobileOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                <motion.div className="md:hidden flex items-center border mt-5 -mb-3 border-gray-300 bg-white rounded-full px-4 py-1.5 w-[90%] mx-auto">
                  <Search size={16} className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder={content.header.searchPlaceholder}
                    className="w-full text-sm focus:outline-none"
                  />
                </motion.div>
                <SidebarContent />
              </div>
              <div
                className="flex-1 backdrop-blur-sm"
                onClick={() => setMobileOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content */}
        <main className="flex-1 lg:p-8 p-2 lg:max-w-6xl w-full mx-auto overflow-hidden lg:ml-64">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="lg:col-span-2">
              {/* Title */}
              <motion.div
                className="flex justify-between items-center mb-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="lg:text-4xl text-2xl font-extrabold text-gray-900 flex items-center gap-3">
                  <Shield className="text-[#e15601]" size={36} />{" "}
                  {content.mainContent.pageTitle.title}
                </h1>
                <motion.button
                  className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#e15601]/90 to-[#e15601] text-white rounded-xl text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Copy size={16} />{" "}
                  {content.mainContent.pageTitle.copyButton.label}
                </motion.button>
              </motion.div>

              {/* Info card */}
              <motion.div
                className="bg-white/90 backdrop-blur-md rounded-3xl p-8 mb-10 border border-gray-100 transition-all"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-700 leading-relaxed text-lg">
                  {content.mainContent.intro}
                </p>
              </motion.div>

              {/* Features */}
              <div className="grid grid-cols-1 gap-8 mb-12">
                {content.features.map((feature, idx) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <motion.div
                      key={idx}
                      className="bg-white rounded-2xl p-8 border border-gray-100 transition-transform"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2, duration: 0.6 }}
                      whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        {Icon && <Icon className="text-[#e15601]" size={32} />}
                        <h2 className="text-xl font-semibold text-gray-900">
                          {feature.title}
                        </h2>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* FAQ */}
              <motion.div
                className="bg-white rounded-3xl p-8 border border-gray-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {content.faq.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border-b border-gray-200 pb-3 cursor-pointer"
                      onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-gray-800">{faq.question}</p>
                        <ChevronRight
                          className={`transform transition-transform ${
                            faqOpen === idx
                              ? "rotate-90 text-[#e15601]"
                              : "text-gray-400"
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {faqOpen === idx && (
                          <motion.p
                            className="mt-2 text-gray-600"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            {faq.answer}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-1">
              <div className="lg:fixed lg:top-16 lg:right-8 lg:w-[calc(33%-8rem)] lg:h-[calc(100vh-4rem)] ">
                <div className="grid grid-cols-1 gap-8 mb-12">
                  {content.features.map((feature, idx) => {
                    const Icon = iconMap[feature.icon];
                    return (
                      <motion.div
                        key={idx}
                        className="bg-white rounded-2xl p-8 border border-gray-100 transition-transform"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          {Icon && <Icon className="text-[#e15601]" size={32} />}
                          <h2 className="text-xl font-semibold text-gray-900">
                            {feature.title}
                          </h2>
                        </div>
                        <p className="text-gray-600">{feature.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
                <motion.div
                  className="bg-white rounded-3xl p-8 border border-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {content.faq.map((faq, idx) => (
                      <div
                        key={idx}
                        className="border-b border-gray-200 pb-3 cursor-pointer"
                        onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                      >
                        <div className="flex justify-between items-center">
                          <p className="font-medium text-gray-800">
                            {faq.question}
                          </p>
                          <ChevronRight
                            className={`transform transition-transform ${
                              faqOpen === idx
                                ? "rotate-90 text-[#e15601]"
                                : "text-gray-400"
                            }`}
                          />
                        </div>
                        <AnimatePresence>
                          {faqOpen === idx && (
                            <motion.p
                              className="mt-2 text-gray-600"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4 }}
                            >
                              {faq.answer}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

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
  Search,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ✅ JSON content
const content = {
  header: {
    title: "Help Center",
    img: {
      src: "src/assets/images/eduuxpert-logo.png",
      alt: "Eduuxpert Logo",
    },
    searchPlaceholder: "Search...",
  },
  sidebar: {
    items: [
      {
        icon: "Flag",
        title: "Get Started",
        children: null,
        content: {
          left: {
            title: "Welcome to WhatsApp",
            description:
              "Learn the basics of using WhatsApp in just a few minutes.",
            features: [
              {
                icon: "Lock",
                title: "Safe by default",
                description: "All chats are encrypted out of the box.",
              },
              {
                icon: "MessageSquare",
                title: "Instant messaging",
                description: "Send messages to anyone instantly.",
              },
              {
                icon: "Users",
                title: "Group Chats",
                description: "Create groups and stay connected with friends.",
              },
              {
                icon: "HelpCircle",
                title: "Easy Support",
                description: "Find help quickly when you need it.",
              },
              {
                icon: "Download",
                title: "Cross-Platform",
                description: "Use WhatsApp on mobile, desktop, and web.",
              },
            ],
          },
          right: {
            faq: [
              {
                question: "Is WhatsApp free?",
                answer: "Yes, WhatsApp is completely free to use.",
              },
              {
                question: "Can I use WhatsApp without a phone number?",
                answer: "No, you need a valid phone number to register.",
              },
              {
                question: "Can I use WhatsApp on multiple devices?",
                answer:
                  "Yes, with multi-device support you can link up to 4 devices.",
              },
              {
                question: "Does WhatsApp work without internet?",
                answer:
                  "No, you need an internet connection (Wi-Fi or mobile data).",
              },
            ],
          },
        },
      },
      {
        icon: "Download",
        title: "Download & Installation",
        children: [
          {
            title: "How to download WhatsApp",
            content: {
              left: {
                title: "Download Guide",
                description:
                  "Step-by-step instructions to download WhatsApp on different devices.",
                features: [
                  {
                    icon: "Download",
                    title: "Play Store / App Store",
                    description: "Easily install from the official app stores.",
                  },
                  {
                    icon: "LinkIcon",
                    title: "Official Website",
                    description:
                      "Download WhatsApp Desktop directly from whatsapp.com.",
                  },
                  {
                    icon: "Flag",
                    title: "QR Code Install",
                    description:
                      "Scan the QR code to download quickly on your phone.",
                  },
                  {
                    icon: "LinkIcon",
                    title: "Official Website",
                    description:
                      "Download WhatsApp Desktop directly from whatsapp.com.",
                  },
                  {
                    icon: "Flag",
                    title: "QR Code Install",
                    description:
                      "Scan the QR code to download quickly on your phone.",
                  },
                  {
                    icon: "LinkIcon",
                    title: "Official Website",
                    description:
                      "Download WhatsApp Desktop directly from whatsapp.com.",
                  },
                  {
                    icon: "Flag",
                    title: "QR Code Install",
                    description:
                      "Scan the QR code to download quickly on your phone.",
                  },
                  {
                    icon: "LinkIcon",
                    title: "Official Website",
                    description:
                      "Download WhatsApp Desktop directly from whatsapp.com.",
                  },
                  {
                    icon: "Flag",
                    title: "QR Code Install",
                    description:
                      "Scan the QR code to download quickly on your phone.",
                  },
                  {
                    icon: "LinkIcon",
                    title: "Official Website",
                    description:
                      "Download WhatsApp Desktop directly from whatsapp.com.",
                  },
                  {
                    icon: "Flag",
                    title: "QR Code Install",
                    description:
                      "Scan the QR code to download quickly on your phone.",
                  },
                ],
              },
              right: {
                faq: [
                  {
                    question: "Can I download WhatsApp on a tablet?",
                    answer:
                      "WhatsApp is designed for phones but WhatsApp Web can work on tablets.",
                  },
                  {
                    question: "Is there a WhatsApp Desktop app?",
                    answer:
                      "Yes, you can download it for Windows and Mac from the official website.",
                  },
                  {
                    question: "Does WhatsApp work on smartwatches?",
                    answer:
                      "WhatsApp notifications can appear, but there is no full app support yet.",
                  },
                   {
                    question: "Can I download WhatsApp on a tablet?",
                    answer:
                      "WhatsApp is designed for phones but WhatsApp Web can work on tablets.",
                  },
                  {
                    question: "Is there a WhatsApp Desktop app?",
                    answer:
                      "Yes, you can download it for Windows and Mac from the official website.",
                  },
                  {
                    question: "Does WhatsApp work on smartwatches?",
                    answer:
                      "WhatsApp notifications can appear, but there is no full app support yet.",
                  },
                   {
                    question: "Can I download WhatsApp on a tablet?",
                    answer:
                      "WhatsApp is designed for phones but WhatsApp Web can work on tablets.",
                  },
                  {
                    question: "Is there a WhatsApp Desktop app?",
                    answer:
                      "Yes, you can download it for Windows and Mac from the official website.",
                  },
                  {
                    question: "Does WhatsApp work on smartwatches?",
                    answer:
                      "WhatsApp notifications can appear, but there is no full app support yet.",
                  },
                   {
                    question: "Can I download WhatsApp on a tablet?",
                    answer:
                      "WhatsApp is designed for phones but WhatsApp Web can work on tablets.",
                  },
                  {
                    question: "Is there a WhatsApp Desktop app?",
                    answer:
                      "Yes, you can download it for Windows and Mac from the official website.",
                  },
                  {
                    question: "Does WhatsApp work on smartwatches?",
                    answer:
                      "WhatsApp notifications can appear, but there is no full app support yet.",
                  },
                   {
                    question: "Can I download WhatsApp on a tablet?",
                    answer:
                      "WhatsApp is designed for phones but WhatsApp Web can work on tablets.",
                  },
                  {
                    question: "Is there a WhatsApp Desktop app?",
                    answer:
                      "Yes, you can download it for Windows and Mac from the official website.",
                  },
                  {
                    question: "Does WhatsApp work on smartwatches?",
                    answer:
                      "WhatsApp notifications can appear, but there is no full app support yet.",
                  },
                ],
                
              },
            },
          },
          {
            title: "Supported operating systems",
            content: {
              left: {
                title: "OS Compatibility",
                description:
                  "Find out which operating systems WhatsApp supports.",
                features: [
                  {
                    icon: "Shield",
                    title: "Android",
                    description: "Version 5.0 and above",
                  },
                  {
                    icon: "Shield",
                    title: "iOS",
                    description: "Version 12 and above",
                  },
                  {
                    icon: "Shield",
                    title: "Desktop",
                    description: "Windows 10 or newer, macOS 10.13 or newer",
                  },
                  {
                    icon: "Shield",
                    title: "Web Browsers",
                    description: "Latest versions of Chrome, Edge, or Firefox",
                  },
                ],
              },
              right: {
                faq: [
                  {
                    question: "Does WhatsApp work on Windows phones?",
                    answer: "No, Windows Phone support has ended.",
                  },
                  {
                    question: "Can I use WhatsApp on Linux?",
                    answer:
                      "No native app, but you can use WhatsApp Web in a browser.",
                  },
                  {
                    question: "What happens if my OS is outdated?",
                    answer:
                      "WhatsApp may stop working unless you update your device.",
                  },
                ],
              },
            },
          },
        ],
      },
      {
        icon: "UserPlus",
        title: "Registration",
        children: null,
        content: {
          left: {
            title: "Create an Account",
            description:
              "Learn how to register and set up your WhatsApp account quickly.",
            features: [
              {
                icon: "UserPlus",
                title: "Phone Verification",
                description: "Enter your number and verify with an SMS code.",
              },
              {
                icon: "Flag",
                title: "Profile Setup",
                description:
                  "Add your name and profile picture to get started.",
              },
              {
                icon: "Lock",
                title: "Account Security",
                description:
                  "Enable two-step verification during registration.",
              },
            ],
          },
          right: {
            faq: [
              {
                question: "Can I register with a landline?",
                answer: "Yes, with call verification option.",
              },
              {
                question: "What if I don't receive the SMS code?",
                answer:
                  "Check your number and request a call verification instead.",
              },
              {
                question: "Can I transfer WhatsApp to a new phone?",
                answer: "Yes, use chat backup or phone number change feature.",
              },
            ],
          },
        },
      },
      {
        icon: "Shield",
        title: "Privacy & Security",
        children: null,
        content: {
          left: {
            title: "Keep Your Chats Safe",
            description:
              "Manage privacy settings and learn how to stay secure on WhatsApp.",
            features: [
              {
                icon: "Lock",
                title: "End-to-end Encryption",
                description:
                  "Your messages stay between you and the recipient.",
              },
              {
                icon: "Shield",
                title: "Two-Step Verification",
                description: "Add an extra layer of security to your account.",
              },
              {
                icon: "Users",
                title: "Block & Report",
                description:
                  "Block unwanted contacts and report suspicious behavior.",
              },
              {
                icon: "Lock",
                title: "Device Security",
                description: "Review and remove unrecognized linked devices.",
              },
            ],
          },
          right: {
            faq: [
              {
                question: "How do I hide my last seen?",
                answer:
                  "Go to Settings > Privacy > Last Seen and choose your visibility.",
              },
              {
                question: "What if I lose my phone?",
                answer:
                  "You can deactivate WhatsApp from another device by contacting support.",
              },
              {
                question: "How do I lock WhatsApp with biometrics?",
                answer:
                  "Enable fingerprint or Face ID lock in Settings > Privacy > Screen Lock.",
              },
              {
                question: "Can WhatsApp messages be hacked?",
                answer:
                  "With encryption, only you and the recipient can read messages.",
              },
            ],
          },
        },
      },
      {
        icon: "MessageSquare",
        title: "Using WhatsApp Features",
        children: [
          {
            title: "Voice and Video Calls",
            content: {
              left: {
                title: "Stay Connected",
                description:
                  "Make high-quality voice and video calls anywhere in the world.",
                features: [
                  {
                    icon: "MessageSquare",
                    title: "Group Calls",
                    description: "Connect with up to 32 people in one call.",
                  },
                  {
                    icon: "Users",
                    title: "Call Links",
                    description:
                      "Create a link to invite others to join your call instantly.",
                  },
                  {
                    icon: "Lock",
                    title: "Encrypted Calls",
                    description:
                      "All calls are secured with end-to-end encryption.",
                  },
                ],
              },
              right: {
                faq: [
                  {
                    question: "Do calls use my phone minutes?",
                    answer: "No, WhatsApp calls use your internet connection.",
                  },
                  {
                    question:
                      "Can I switch between voice and video during a call?",
                    answer: "Yes, tap the video icon to upgrade to video.",
                  },
                  {
                    question: "How do I improve call quality?",
                    answer:
                      "Use a strong Wi-Fi or 4G/5G network for the best experience.",
                  },
                ],
              },
            },
          },
          {
            title: "Status & Stories",
            content: {
              left: {
                title: "Share Moments",
                description:
                  "Post updates, photos, and videos visible for 24 hours.",
                features: [
                  {
                    icon: "Flag",
                    title: "Privacy Control",
                    description: "Choose who can view your status updates.",
                  },
                  {
                    icon: "Copy",
                    title: "Status Reactions",
                    description:
                      "React to friends' updates with emojis instantly.",
                  },
                  {
                    icon: "Download",
                    title: "Status Save",
                    description:
                      "Save your own status updates before they disappear.",
                  },
                ],
              },
              right: {
                faq: [
                  {
                    question: "Can I mute someone's status?",
                    answer:
                      "Yes, open the status, hold on the contact and mute.",
                  },
                  {
                    question: "How do I delete my status?",
                    answer:
                      "Tap your status > three dots > delete to remove instantly.",
                  },
                  {
                    question: "Can I see who viewed my status?",
                    answer:
                      "Yes, open your status and swipe up to see viewer list.",
                  },
                ],
              },
            },
          },
        ],
      },
      {
        icon: "Briefcase",
        title: "WhatsApp Business",
        children: [
          {
            title: "Business Profile Setup",
            content: {
              left: {
                title: "Get Started with WhatsApp Business",
                description:
                  "Create a business profile and reach your customers instantly.",
                features: [
                  {
                    icon: "UserPlus",
                    title: "Business Info",
                    description: "Add your address, description, and website.",
                  },
                  {
                    icon: "MessageSquare",
                    title: "Quick Replies",
                    description:
                      "Respond to customers faster with saved messages.",
                  },
                ],
              },
              right: {
                faq: [
                  {
                    question: "Is WhatsApp Business free?",
                    answer: "Yes, it’s free to download and use.",
                  },
                  {
                    question:
                      "Can I use the same number for WhatsApp and Business?",
                    answer:
                      "No, you need separate numbers or a dual-SIM phone.",
                  },
                ],
              },
            },
          },
          {
            title: "Payments & Catalogs",
            content: {
              left: {
                title: "Sell Smarter",
                description:
                  "Accept payments and showcase products directly on WhatsApp.",
                features: [
                  {
                    icon: "Flag",
                    title: "In-App Payments",
                    description:
                      "Send and receive payments securely in supported regions.",
                  },
                  {
                    icon: "Download",
                    title: "Product Catalog",
                    description:
                      "Display your products with descriptions and prices.",
                  },
                ],
              },
              right: {
                faq: [
                  {
                    question: "Are WhatsApp payments safe?",
                    answer:
                      "Yes, payments are protected with bank-level encryption.",
                  },
                  {
                    question: "Can I sell internationally?",
                    answer:
                      "Currently, payments may be limited to certain regions.",
                  },
                ],
              },
            },
          },
        ],
      },
      {
        icon: "HelpCircle",
        title: "Troubleshooting",
        children: null,
        content: {
          left: {
            title: "Fix Common Issues",
            description:
              "Solve frequent problems like app crashes or message delays.",
            features: [
              {
                icon: "Search",
                title: "Connection Issues",
                description:
                  "Check your internet connection and try restarting the app.",
              },
              {
                icon: "Copy",
                title: "Storage Management",
                description:
                  "Clear unnecessary files to keep WhatsApp running smoothly.",
              },
              {
                icon: "Lock",
                title: "App Crashes",
                description:
                  "Update to the latest version to fix stability issues.",
              },
              {
                icon: "Download",
                title: "Reinstallation",
                description:
                  "Reinstall the app if major issues persist after updates.",
              },
            ],
          },
          right: {
            faq: [
              {
                question: "Why am I not receiving notifications?",
                answer:
                  "Ensure notifications are enabled in both WhatsApp and your phone settings.",
              },
              {
                question: "How do I back up my chats?",
                answer:
                  "Go to Settings > Chats > Chat Backup to enable automatic backups.",
              },
              {
                question: "WhatsApp won't open — what should I do?",
                answer:
                  "Try reinstalling the app or restarting your phone to fix app conflicts.",
              },
              {
                question: "What if WhatsApp is banned in my country?",
                answer:
                  "You may need to use a VPN, but check your local regulations.",
              },
            ],
          },
        },
      },
    ],
  },
};

// ✅ Icon mapping
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
  Search,
};

// ✅ Sidebar Item Component
function SidebarItem({ icon, title, children, onSelect }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[icon];

  return (
    <div>
      <button
        onClick={() => {
          if (!children) onSelect(title);
          setOpen(!open);
        }}
        className="cursor-pointer flex justify-between items-center w-full px-4 py-2 text-gray-700 font-medium rounded-xl hover:bg-[#24214b] hover:text-[#e15601] transition-all duration-300"
      >
        <span className="flex items-center space-x-2">
          {Icon && <Icon size={18} className="text-[#e15601]" />}
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
              {children.map((child, idx) => (
                <li
                  key={idx}
                  onClick={() => onSelect(child.title)}
                  className="hover:text-[#e15601] cursor-pointer transition-colors duration-200 "
                >
                  {child.title}
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
  const [searchTerm, setSearchTerm] = useState("");
  const [faqOpen, setFaqOpen] = useState(null);
  const [selected, setSelected] = useState(content.sidebar.items[0].title);

  // ✅ Find selected content
  function getSelectedContent() {
    for (const item of content.sidebar.items) {
      if (item.title === selected && !item.children) return item.content;
      if (item.children) {
        for (const child of item.children) {
          if (child.title === selected) return child.content;
        }
      }
    }
    return null;
  }

  const selectedContent = getSelectedContent();

  // ✅ Filter sidebar by search term
  const filteredSidebarItems = content.sidebar.items.filter((item) => {
    const matchesItem = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesChild =
      item.children &&
      item.children.some((child) =>
        child.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesItem || matchesChild;
  });

  const SidebarContent = () => (
    <div className="py-6 space-y-2 text-sm ">
      {filteredSidebarItems.map((item, idx) => (
        <SidebarItem
          key={idx}
          icon={item.icon}
          title={item.title}
          children={item.children}
          onSelect={setSelected}
        />
      ))}
      {filteredSidebarItems.length === 0 && (
        <p className="text-center text-gray-400 text-sm py-4">No results</p>
      )}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <motion.header
        className="flex items-center justify-between border-b border-gray-200 px-0 md:px-6 py-1 sticky top-0 bg-white/70 backdrop-blur-md z-50 shadow-md"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-3">
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
          <NavLink to="/">
            <img
              src={content.header.img.src}
              alt={content.header.img.alt}
              className="w-32 cursor-pointer"
            />
            {/* <span className="font-extrabold text-2xl text-[#e15601] tracking-wide">
              {content.header.title}
            </span> */}
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
                  <button onClick={() => setMobileOpen(false)} className="cursor-pointer">
                    <X size={24} />
                  </button>
                </div>
                <motion.div className="md:hidden flex items-center border mt-5 -mb-3 border-gray-300 bg-white rounded-full px-4 py-1.5 w-[90%] mx-auto">
                  <Search size={16} className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={content.header.searchPlaceholder}
                    className="w-full text-sm focus:outline-none"
                  />
                </motion.div>
                <SidebarContent />
              </div>
              <div
                className="cursor-pointer flex-1 backdrop-blur-sm"
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
              {selectedContent ? (
                <>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedContent.left.title}
                  </h1>
                  <p className="text-gray-700 mb-6">
                    {selectedContent.left.description}
                  </p>
                  {selectedContent.left.features?.map((feature, idx) => {
                    const Icon = iconMap[feature.icon];
                    return (
                      <div
                        key={idx}
                        className="p-6 bg-white rounded-xl border border-gray-100 mb-4"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          {Icon && (
                            <Icon className="text-[#e15601]" size={28} />
                          )}
                          <h2 className="font-semibold">{feature.title}</h2>
                        </div>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    );
                  })}
                </>
              ) : (
                <p>No content available</p>
              )}
            </div>

            {/* Right column */}
            <div className="lg:col-span-1">
              {selectedContent?.right && (
                <motion.div
                className="bg-white rounded-3xl p-4 border border-gray-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {selectedContent.right.faq?.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border-b border-gray-200 pb-3 cursor-pointer"
                      onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-gray-800 text-md">
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
                            className="mt-2 text-gray-600 text-sm"
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
              )} 
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

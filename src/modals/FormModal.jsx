import React from "react";
import { X, User, School, Mail, Phone } from "lucide-react";

export default function FormModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex md:items-center items-start justify-center bg-black/70 z-50 lg:px-2 overflow-y-auto">
      <div className="relative rounded-2xl shadow-2xl w-[97%] my-5 md:my-0 md:max-w-md overflow-hidden bg-white animate-fadeIn">
        
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 rounded-full transition cursor-pointer z-10"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Content */}
        <div className="lg:px-4 py-4 px-4">
          <h2 className="text-xl font-bold text-[#24214b] mb-2 text-center">
            Interested in Eduuxpert School Management System?
          </h2>
          <p className="text-gray-600 mb-3 text-center">
            Fill in the details below and our team will get in touch with you
            regarding Eduuxpert’s{" "}School Management solution.
          </p>

          {/* Form */}
          <form className="space-y-2">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-[#24214b] mb-1"
              >
                Your Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e15601] focus:border-[#e15601] transition"
                />
              </div>
            </div>

            {/* School Name */}
            <div>
              <label
                htmlFor="school"
                className="block text-sm font-semibold text-[#24214b] mb-1"
              >
                School Name *
              </label>
              <div className="relative">
                <School className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  id="school"
                  placeholder="Enter your school name"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e15601] focus:border-[#e15601] transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#24214b] mb-1"
              >
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e15601] focus:border-[#e15601] transition"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-[#24214b] mb-1"
              >
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e15601] focus:border-[#e15601] transition"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[#24214b] mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                placeholder="Type your message here..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e15601] focus:border-[#e15601] transition"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 cursor-pointer bg-[#e15601]/90 text-white py-3 rounded-lg hover:bg-[#e15601] transition font-medium shadow-md"
              >
                Submit Enquiry
              </button>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer flex-1 border border-[#24214b] text-[#24214b] py-3 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

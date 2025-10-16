import React, { useState } from "react";
import {
  CheckCircle,
  Building2,
  Users,
  Smartphone,
  BarChart3,
} from "lucide-react";

export default function PricingSection() {
  const features = [
    "SMS Communication",
    "Email Communication",
    "WhatsApp Communication",
    "Interactive Dashboard",
    "Instructor / Teacher Management",
    "Earning & Expense Management",
    "Subject Management",
    "Leaves Management",
    "Guardian & Parent Management",
    "Event Management",
    "Notice Management",
    "Visitor Management",
    "Dedicated Support team",
    "Communication via ACS Classroom",
    "Digital-Attendance",
    "Biometric Attendance",
    "SEC-ID Attendance",
    "Online Classes",
    "Digital Content Center",
    "Meeting and Recordings",
    "Alerts and Notifications",
    "Digital Learning Platform - EduuSmart",
    "MIS Reports",
    "Admission test / Entrance Exam",
    "Feedback and Performance Review",
    "Mobile Friendly Web-App",
    "Mobile Apps",
    "Paperless Admission",
    "Enquiry CRM",
    "Digital Payments",
    "Shared Calendar",
    "Exam Scheduler",
    "Smart Fee Manager",
    "Centralized Finance Management",
    "Syllabus Planner",
    "Payroll Management",
    "Smart ACS HRMS Tool",
    "Timetable Management",
    "Hostel Management",
    "Device-less GPS Tracking",
    "ACS Transport Management System",
    "Digital Onboarding",
    "Bulk Import Export Options",
    "Custom I-Card Design",
    "Virtual Id Cards",
    "Result and Assessment Certificate",
    "Support Multiple Themes (Customizable By User)",
    "Academic & Events Planner",
    "On-Demand Tally Integration",
    "Canteen Management",
    "Data Analysis and Report",
    "Student Timeline",
    "Multi Language Support",
    "Gate Pass",
    "Billing & Payments",
    "Student Feedback Management",
    "Free Storage (Lifetime)",
    "Free Digital Marketing (SMM)",
    "Free Hosting (Lifetime)",
    "Free Landing Page (Lifetime)",
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleFeatures = showAll ? features : features.slice(0, 10);
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#24214b]">
            Why you should upgrade to EduuXpert Pro
          </h2>
          <p className="text-gray-700 mb-8">
            At EduuXpert, we empower schools, colleges, and educational
            institutions with tools that drive smarter learning, seamless
            administration, and long-term academic success.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Building2 className="w-6 h-6 text-[#e15601] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-[#24214b]">
                  Institution analysis
                </h3>
                <p className="text-gray-700">
                  Evaluate your institution’s performance against top education
                  benchmarks to guide strategic decisions and uncover areas for
                  growth.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <BarChart3 className="w-6 h-6 text-[#e15601] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-[#24214b]">
                  Curriculum analysis
                </h3>
                <p className="text-gray-700">
                  Explore how leading institutions structure their programs and
                  improve your own curriculum with data-backed insights.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Smartphone className="w-6 h-6 text-[#e15601] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-[#24214b]">
                  App & platform analysis
                </h3>
                <p className="text-gray-700">
                  Track adoption of educational apps and platforms, understand
                  student engagement, and discover which digital tools are
                  shaping modern classrooms.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-[#e15601] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-[#24214b]">
                  Student & parent engagement analysis
                </h3>
                <p className="text-gray-700">
                  Measure engagement levels, identify trends, and enhance
                  communication strategies to foster stronger relationships
                  across your academic community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Pricing Card */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-2 text-[#24214b]">Pro Plan</h3>
          <p className="text-gray-700 mb-6">
            Best for large scale uses and extended redistribution rights.
          </p>

          <div className="text-4xl font-bold mb-6 text-[#e15601]">
            ₹30 <span className="text-lg font-medium text-gray-700">/unit</span>
          </div>

          <button className="cursor-pointer w-full bg-[#e15601]/90 hover:bg-[#e15601] text-white py-3 rounded-lg font-medium mb-8">
            Upgrade now
          </button>

          <ul className="space-y-3 text-gray-700">
            {visibleFeatures.map((item) => (
              <li key={item} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#e15601] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 text-[#e15601] font-medium hover:underline cursor-pointer"
          >
            {showAll ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </section>
  );
}

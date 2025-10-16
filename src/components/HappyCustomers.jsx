"use client";

import Slider from "react-slick";
import React from "react";

export default function HappyCustomers() {
  const logos = [
    {
      src: "src/assets/images/mother-mount.png",
      alt: "Mother Mount Public School",
    },
    {
      src: "src/assets/images/little-angel.jpg",
      alt: "Little Angel's Public School",
    },
    {
      src: "src/assets/images/silver-line-academy.jpg",
      alt: "Silver Line Academy",
    },
    { src: "src/assets/images/dd-public.jpg", alt: "D.D.Public School" },
    {
      src: "src/assets/images/little-wonders.png",
      alt: "Little Wonders School",
    },
    { src: "src/assets/images/naval's-academy.jpg", alt: "Naval's Academy" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 6 } },
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3, dots: false } },
      { breakpoint: 560, settings: { slidesToShow: 2, dots: false } },
    ],
  };

  return (
    <div className="relative flex justify-center px-3 sm:px-4 lg:px-6 py-10 sm:py-14">
      {/* Outer Border Box */}
      <div className="relative border-2 border-[#e15601] rounded-lg p-4 sm:p-6 lg:p-8 w-full max-w-7xl bg-white shadow-md">
        {/* Floating Label */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-2">
          <span className="bg-orange-100 text-[#e15601] border border-orange-300 rounded-full px-3 py-1 text-xs sm:text-sm font-medium shadow whitespace-nowrap">
            Our Happy Customers
          </span>
        </div>

        {/* Description */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 text-xs sm:text-sm md:text-base leading-relaxed px-2">
          Eduuxpert is trusted by schools and institutions worldwide to
          streamline operations and enhance learning experiences.
        </p>

        {/* Logos Carousel */}
        <div className="bg-white rounded-2xl mx-auto px-4 py-6 w-11/12 md:w-4/5">
          <Slider {...settings}>
            {logos.map((logo, i) => (
              <div key={i} className="flex justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-30 w-auto object-contain "
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

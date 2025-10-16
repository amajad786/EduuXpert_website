import { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { title } from "framer-motion/client";

export default function ReviewCarousel() {
  const sliderRef = useRef(null);

  const reviews = [
    {
      name: "D.D.Public School",
      title:"by Principal",
      text: "EduuXpert has completely transformed the way we manage our school operations. From attendance to fee collection, everything is streamlined and effortless. It has saved us so much time and improved efficiency across departments.",
      image: "src/assets/images/dd-public.jpg",
      rating: 5,
    },
    {
      name: "D.D.Public School",
      title: "by Teachers",
      text: "As a teacher, I love how EduuXpert simplifies classroom management. Uploading assignments, tracking student progress, and sharing updates with parents is now super easy. It allows me to focus more on teaching than paperwork.",
      image: "src/assets/images/dd-public.jpg",
      rating: 5,
    },
     {
      name: "D.D.Public School",
      title: "by Administrator",
      text: "Managing student records and communication with parents used to be a big challenge. With EduuXpert, everything is centralized and accessible in just a few clicks. It has made our work stress-free and highly organized.",
      image: "src/assets/images/dd-public.jpg",
      rating: 5,
    },
     {
      name: "Little Angel's Public School",
      title: "by Principal",
      text: "EduuXpert has streamlined everything—from attendance and exams to parent communication. Our team is saving hours every week and decision-making is faster with clear dashboards.",
      image: "src/assets/images/little-angel.jpg",
      rating: 5,
    },
    {
      name: "Little Angel's Public School",
      title: "by Administrator",
      text: "Student records, admissions, and timetable management are finally in one place. Bulk updates and smart searches make daily admin work effortless.",
      image: "src/assets/images/little-angel.jpg",
      rating: 5,
    },
    {
      name: "Little Angel's Public School",
      title: "by Accounts & Finance",
      text: "Fee collection and reconciliation used to be messy. EduuXpert’s automated fee structures, reminders, and reports have made audits smooth and accurate.",
      image: "src/assets/images/little-angel.jpg",
      rating: 5,
    },
    {
    name: "Silver Line Academy",
    title: "by Principal",
    text: "EduuXpert isn’t just software; it’s a partner in our growth. It has given us a complete digital ecosystem that ensures smooth coordination between teachers, students, and parents.",
    image: "src/assets/images/silver-line-academy.jpg",
    rating: 5
  },
   {
    name: "Mother Mount Public School",
    title: "by Principal",
    text:
      "Running a school is like conducting an orchestra—every section must play in harmony. EduuXpert has become our conductor. From teachers to parents to students, it keeps everyone in sync, and the music of our school has never sounded better.",
    image: "src/assets/images/mother-mount.png",
    rating: 5
  },
   {
    name: "Mother Mount Public School",
    title: "by Accounts Department",
    text:
      "Fee collection days used to feel like a storm—queues, confusion, missing slips. With EduuXpert, payments flow smoothly, receipts are instant, and audits are headache-free. It’s calm after the storm.",
    image: "src/assets/images/mother-mount.png",
    rating: 5
  },
  {
    name: "Little Wonders School",
    title: "by Principal",
    text:
      "EduuXpert is like the invisible backbone of our school. It keeps everything standing tall—whether it’s academics, communication, or safety—while letting our teachers and students shine.",
    image: "src/assets/images/little-wonders.png",
    rating: 5
  },
   {
    name: "Naval's Academy",
    title: "by Principal",
    text:
      "EduuXpert has given us the discipline of the Navy and the efficiency of modern technology. Every operation, from attendance to communication, runs with precision.",
    image: "src/assets/images/naval's-academy.jpg",
    rating: 5
  },
   {
    name: "Naval's Academy",
    title: "by Vice Principal",
    text:
      "With EduuXpert, we no longer chase data—data comes to us. Academic progress, attendance, and performance analytics are available instantly, which helps us act faster and smarter.",
    image: "src/assets/images/naval's-academy.jpg",
    rating: 5
  },
   {
    name: "Naval's Academy",
    title: "by Finance Officer",
    text:
      "Fee collection used to be a monthly stress point. EduuXpert has automated the entire process—reminders, receipts, and reports are just a click away. No more late nights balancing accounts.",
    image: "src/assets/images/naval's-academy.jpg",
    rating: 5
  }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative">
      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-3">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 bg-white  rounded-2xl py-10 lg:px-10 px-1 mt-10 flex flex-col justify-between"
            >
              {/* Profile image floating */}
              <img
                src={review.image}
                alt={review.name}
                className={`absolute z-50 -top-6 w-16 h-16 object-cover rounded-full border-4 border-white shadow-md
                  ${index % 2 === 0 ? "-left-3" : "-left-3"}`}
              />

              {/* Name + Rating */}
              <div>
                <div className="flex items-center justify-between">
                 <div>
                   <h3 className="text-[#24214b] font-bold text-lg">
                    {review.name}
                  </h3>
                  <p className="text-gray-600 font-semibold text-xs">
                    {review.title}
                  </p>
                 </div>
                  <div className="flex text-orange-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-4 h-4"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.441a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.946a1 1 0 00-.364-1.118L2.075 9.373c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.946z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed line-clamp-4">
                  {review.text}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 right-4 flex gap-3 z-10">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="cursor-pointer p-2 bg-[#e15601]/90 hover:bg-[#e15601] rounded-full shadow-lg transition"
        >
          <ChevronLeft className="text-white w-5 h-5" />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="cursor-pointer p-2 bg-[#e15601]/90 hover:bg-[#e15601] rounded-full shadow-lg transition"
        >
          <ChevronRight className="text-white w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

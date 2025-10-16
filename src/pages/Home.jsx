import { useEffect, useState } from "react";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import HappyCustomers from "../components/HappyCustomers";
import HeroSection1 from "../components/HeroSecttion1";
import LessPaperWork from "../components/LessPaperWork";
import PricingSection from "../components/PricingSection";
import StatsSection from "../components/StatsSection";
import StudentInfoSystem from "../components/StudentInfoSystem";
import TestimonialSection from "../components/TestimonialSection";
import Timeline from "../components/Timeline";
import FormModal from "../modals/FormModal";

export default function Home() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      <HeroSection1 onOpenModal={() => setShowModal(true)}/>
      <StatsSection/>
      <StudentInfoSystem/>
      <Timeline/>
      <PricingSection/>
      <LessPaperWork/>
      <TestimonialSection/>
      <HappyCustomers/>
      <FAQSection/>
      <ContactSection/>

      {showModal && <FormModal onClose={() => setShowModal(false)} />}
    </>
  );
}

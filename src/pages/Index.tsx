import { useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { CareerPath } from "@/components/CareerPath";
import { CourseDetails } from "@/components/CourseDetails";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { AdmissionModal } from "@/components/AdmissionModal";
import { HireModal } from "@/components/HireModal";

const Index = () => {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header onCtaClick={() => setIsAdmissionModalOpen(true)} />
        <main>
          <Hero onCtaClick={() => setIsAdmissionModalOpen(true)} />
          <ValueProposition />
          <CareerPath />
          <CourseDetails onCtaClick={() => setIsAdmissionModalOpen(true)} />
          <Testimonials />
        </main>
        <Footer onHireClick={() => setIsHireModalOpen(true)} />

        <AdmissionModal
          isOpen={isAdmissionModalOpen}
          onClose={() => setIsAdmissionModalOpen(false)}
        />
        <HireModal
          isOpen={isHireModalOpen}
          onClose={() => setIsHireModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
};

export default Index;

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <PageTransition>
          <div className="min-h-screen bg-background">
            {/* Cinematic grain overlay */}
            <div className="grain" />
            
            <ScrollProgress />
            <Header />
            <main>
              {/* 1. Hero Section with Image */}
              <HeroSection />
              <SectionDivider variant="wave" />
              
              {/* 2. About Me */}
              <AboutSection />
              <SectionDivider variant="dots" />
              
              {/* 3. View or Download Resume */}
              <ResumeSection />
              <SectionDivider variant="line" />
              
              {/* 4. Tech Stack & Skills Matrix */}
              <SkillsSection />
              <SectionDivider variant="wave" />
              
              {/* 5. Technical Projects & Featured Work */}
              <ProjectsSection />
              <SectionDivider variant="dots" />
              
              {/* 6. Work Experience */}
              <ExperienceSection />
              <SectionDivider variant="line" />
              
              {/* 7. Education */}
              <EducationSection />
              <SectionDivider variant="wave" />
              
              {/* 8. Certifications */}
              <CertificationsSection />
              <SectionDivider variant="dots" />
              
              {/* 9. Achievements */}
              <AchievementsSection />
              <SectionDivider variant="line" />
              
              {/* 10. Get in Touch */}
              <ContactSection />
            </main>
            <Footer />
          </div>
        </PageTransition>
      )}
    </>
  );
};

export default Index;

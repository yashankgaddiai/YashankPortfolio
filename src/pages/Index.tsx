import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <CursorEffect />
        <ScrollProgress />
        <Header />
        <main>
          <HeroSection />
          <SectionDivider variant="wave" />
          <AboutSection />
          <SectionDivider variant="dots" />
          <SkillsSection />
          <SectionDivider variant="line" />
          <ExperienceSection />
          <SectionDivider variant="wave" />
          <ProjectsSection />
          <SectionDivider variant="dots" />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;


import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import HackathonsSection from "@/components/HackathonsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import Footer from "@/components/Footer";
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection";
import LeadershipSection from "@/components/LeadershipSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center w-full">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-stretch">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <WorkExperienceSection />
        <EducationSection />
        <HackathonsSection />
        <TechnicalSkillsSection />
        <LeadershipSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

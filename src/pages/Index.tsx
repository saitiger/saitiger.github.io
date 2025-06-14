import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import HackathonsSection from "@/components/HackathonsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import Footer from "@/components/Footer";
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection";
import LeadershipSection from "@/components/LeadershipSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center w-full">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-stretch">
        <HeroSection />
        <ProjectsSection />
        <HackathonsSection />
        <TechnicalSkillsSection />
        <WorkExperienceSection />
        <LeadershipSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

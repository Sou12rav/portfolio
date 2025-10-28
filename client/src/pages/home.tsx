import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import CertificationsSection from "@/components/certifications-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Navigation />
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

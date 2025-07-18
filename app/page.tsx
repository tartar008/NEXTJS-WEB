import AboutHeader from "@/components/sections/AboutSection";
import BannerSection from "@/components/sections/BannerSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import DownloadCVSection from "@/components/sections/DownloadCVSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <AboutHeader />
      <BannerSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TimelineSection />
      <CertificatesSection />
      <DownloadCVSection />
      <ContactSection />
    </>
  );
}
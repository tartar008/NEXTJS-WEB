import AboutSection from '@/Components/sections/AboutSection'
import BannerSection from "@/Components/sections/BannerSection";
import SkillsSection from "@/Components/sections/SkillsSection";
import ProjectsSection from "@/Components/sections/ProjectSection";
import ExperienceSection from "@/Components/sections/ExperienceSection";
import TimelineSection from "@/Components/sections/TimelineSection";
import CertificatesSection from "@/Components/sections/CertificatesSection";
import DownloadCVSection from "@/Components/sections/DownloadCVSection";
import ContactSection from "@/Components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <AboutSection />
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
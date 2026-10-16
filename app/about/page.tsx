import type { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ClosingSection from "@/components/home/ClosingSection";
import AboutHero from "@/components/about/AboutHero";
import AboutStorySection from "@/components/about/AboutStorySection";
import VisionSection from "@/components/about/VisionSection";
import MissionSection from "@/components/about/MissionSection";
import CommitmentSection from "@/components/about/CommitmentSection";
import AboutGalleryGlimpse from "@/components/about/AboutGalleryGlimpse";

export const metadata: Metadata = {
  title: "About Our Parish | St. Gregorios Jacobite Syrian Orthodox Church",
  description:
    "Discover the spiritual home, apostolic traditions, vision, mission, and commitments of St. Gregorios Jacobite Syrian Orthodox Church under the Holy See of Antioch.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#f7f4ed] text-[#171715]">
      <Header />
      <AboutHero />
      <AboutStorySection />
      <VisionSection />
      <MissionSection />
      <CommitmentSection />
      <AboutGalleryGlimpse />
      <ClosingSection />
      <Footer />
    </main>
  );
}

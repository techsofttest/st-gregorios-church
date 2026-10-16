import type { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ClosingSection from "@/components/home/ClosingSection";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGridSection from "@/components/gallery/GalleryGridSection";
import { galleryItemsData } from "@/data/galleryData";

export const metadata: Metadata = {
  title: "Parish Photo & Video Gallery | St. Gregorios Church Mulund",
  description:
    "Explore photo, video, feast, and historical chronicles of St. Gregorios Jacobite Syrian Orthodox Church, Mulund, Mumbai.",
};

export default function GalleryPage() {
  return (
    <main className="bg-[#f7f4ed] text-[#171715]">
      <Header />
      <GalleryHero />
      <GalleryGridSection items={galleryItemsData} />
      <ClosingSection />
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ClosingSection from "@/components/home/ClosingSection";
import NewsHero from "@/components/news/NewsHero";
import NewsGridSection from "@/components/news/NewsGridSection";
import { newsItemsData } from "@/data/newsData";

export const metadata: Metadata = {
  title: "Latest News & Updates | St. Gregorios Jacobite Syrian Orthodox Church",
  description:
    "Explore latest parish chronicles, apostolic visit updates, spiritual milestones, and community events at St. Gregorios Jacobite Syrian Orthodox Church.",
};

export default function NewsListingPage() {
  return (
    <main className="bg-[#f7f4ed] text-[#171715]">
      <Header />
      <NewsHero />
      <NewsGridSection items={newsItemsData} />
      <ClosingSection />
      <Footer />
    </main>
  );
}


import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import HeroSection from "@/components/home/HeroSection";
import WorshipBar from "@/components/home/WorshipBar";
import WelcomeSection from "@/components/home/WelcomeSection";
import FeastSection from "@/components/home/FeastSection";
import HeritageSection from "@/components/home/HeritageSection";
import PatriarchSection from "@/components/home/PatriarchSection";
import BishopsSection from "@/components/home/BishopsSection";
import NewsSection from "@/components/home/NewsSection";
import CommitteeSection from "@/components/home/CommitteeSection";
import ClosingSection from "@/components/home/ClosingSection";

export default function Home() {
  return (
    <main className="bg-[#f7f4ed] text-[#171715]">
      <Header />
      <HeroSection />
      <WorshipBar />
      <WelcomeSection />
      <FeastSection />
      <HeritageSection />
      <PatriarchSection />
      <BishopsSection />
      <NewsSection />
      <CommitteeSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}
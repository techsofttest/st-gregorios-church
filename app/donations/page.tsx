import { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ClosingSection from "@/components/home/ClosingSection";
import DonationsHero from "@/components/donations/DonationsHero";
import DonationsTabSection from "@/components/donations/DonationsTabSection";

export const metadata: Metadata = {
  title: "Support & Donations | St. Gregorios Church",
  description:
    "Support our parish charity missions, student educational aid, Bhavana Nirmanam housing for the poor, elder care, and medical relief at St. Gregorios Jacobite Syrian Orthodox Church.",
};

export default function DonationsPage() {
  return (
    <main className="bg-[#f7f4ed] text-[#171715]">
      <Header />
      <DonationsHero />
      <DonationsTabSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}

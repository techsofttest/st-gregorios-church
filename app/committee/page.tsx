import type { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ClosingSection from "@/components/home/ClosingSection";
import CommitteeHero from "@/components/committee/CommitteeHero";
import CommitteeGridSection from "@/components/committee/CommitteeGridSection";
import { committeeMembersData } from "@/data/committeeData";

export const metadata: Metadata = {
  title: "Managing Committee & Office Bearers | St. Gregorios Church Mulund",
  description:
    "Meet the Vicar, Office Bearers, MC Members, Internal Auditors, and Diocesan Council representatives serving St. Gregorios Jacobite Syrian Orthodox Church, Mulund, Mumbai.",
};

export default function CommitteeListingPage() {
  return (
    <main className="bg-[#f7f4ed] text-[#171715]">
      <Header />
      <CommitteeHero />
      <CommitteeGridSection members={committeeMembersData} />
      <ClosingSection />
      <Footer />
    </main>
  );
}

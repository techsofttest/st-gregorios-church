import type { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ClosingSection from "@/components/home/ClosingSection";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactMapSection from "@/components/contact/ContactMapSection";

export const metadata: Metadata = {
  title: "Contact Us & Location Map | St. Gregorios Church Mulund",
  description:
    "Contact information, church address, worship schedule, and interactive Google Map directions for St. Gregorios Jacobite Syrian Orthodox Church, Mulund (W), Mumbai.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f7f4ed] text-[#171715]">
      <Header />
      <ContactHero />
      <ContactInfoSection />
      <ContactMapSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}

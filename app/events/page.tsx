import type { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ClosingSection from "@/components/home/ClosingSection";
import EventsHero from "@/components/events/EventsHero";
import EventsGridSection from "@/components/events/EventsGridSection";
import { eventsData } from "@/data/eventsData";

export const metadata: Metadata = {
  title: "Parish Events & Liturgical Calendar | St. Gregorios Church Mulund",
  description:
    "Explore upcoming feasts, Holy Passion Week, Easter, Christmas, Sunday School camps, and community gatherings at St. Gregorios Jacobite Syrian Orthodox Church, Mulund, Mumbai.",
};

export default function EventsListingPage() {
  return (
    <main className="bg-[#f7f4ed] text-[#171715]">
      <Header />
      <EventsHero />
      <EventsGridSection items={eventsData} />
      <ClosingSection />
      <Footer />
    </main>
  );
}

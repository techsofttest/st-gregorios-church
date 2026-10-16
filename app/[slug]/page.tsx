import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ClosingSection from "@/components/home/ClosingSection";
import DetailHero from "@/components/detailed/DetailHero";
import DetailStorySection from "@/components/detailed/DetailStorySection";
import DetailGallerySection from "@/components/detailed/DetailGallerySection";
import { getDetailedPage, getAllSlugs } from "@/data/detailedPages";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getDetailedPage(slug);

  if (!page) {
    return {
      title: "Page Not Found | St. Gregorios Church",
    };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function DetailedPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getDetailedPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="bg-[#f7f4ed] text-[#171715]">
      <Header />

      {/* 1. Hero Section with Split Layout and Right-aligned Carousel */}
      <DetailHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        verseQuote={page.verseQuote}
        verseCitation={page.verseCitation}
        imageSrc={page.heroImage}
        images={page.heroImages && page.heroImages.length > 0 ? page.heroImages : [page.heroImage]}
      />

      {/* 2. Content Story Section matching About Story Section Style */}
      <DetailStorySection
        eyebrow={page.storyEyebrow}
        title={page.storyTitle}
        titleHighlight={page.storyTitleHighlight}
        paragraphs={page.paragraphs}
        concludingCallouts={page.concludingCallouts}
        scriptureBadge={page.scriptureBadge}
        blessing={page.blessing}
      />

      {/* 3. Gallery Section */}
      <DetailGallerySection
        eyebrow="Moments &amp; Memories"
        title="Visual"
        titleHighlight="Glimpses"
        items={page.gallery}
      />

      {/* 4. CTA Section */}
      <ClosingSection />

      {/* 5. Global Footer */}
      <Footer />
    </main>
  );
}

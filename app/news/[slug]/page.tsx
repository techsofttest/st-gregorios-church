import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ClosingSection from "@/components/home/ClosingSection";
import DetailHero from "@/components/detailed/DetailHero";
import DetailStorySection from "@/components/detailed/DetailStorySection";
import DetailGallerySection from "@/components/detailed/DetailGallerySection";
import NewsCard from "@/components/news/NewsCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  getNewsDetail,
  getAllNewsSlugs,
  newsItemsData,
} from "@/data/newsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsDetail(slug);

  if (!article) {
    return {
      title: "News Article Not Found | St. Gregorios Church",
    };
  }

  return {
    title: `${article.title} | St. Gregorios Church News`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsDetail(slug);

  if (!article) {
    notFound();
  }

  // Related / other news items (excluding current)
  const otherNews = newsItemsData
    .filter((item) => item.slug !== article.slug)
    .slice(0, 5);

  return (
    <main className="bg-[#f7f4ed] text-[#171715]">
      <Header />

      {/* 1. Detail Hero Section with Split Layout & Auto Carousel */}
      <DetailHero
        backLink={{ href: "/news", label: "Back to News" }}
        eyebrow={article.category}
        title={article.title}
        subtitle={article.date}
        imageSrc={article.image}
        images={article.heroImages && article.heroImages.length > 0 ? article.heroImages : [article.image]}
      />

      {/* 2. Detail Story Section with Orthodox Rosette, Staggered Paragraphs & Inline Media */}
      <DetailStorySection
        eyebrow={article.storyEyebrow || article.category}
        title={article.storyTitle || article.title}
        titleHighlight={article.storyTitleHighlight}
        paragraphs={article.paragraphs}
        concludingCallouts={article.concludingCallouts}
        scriptureBadge={article.scriptureBadge}
        blessing={article.blessing}
      />

      {/* 3. Optional Photo Gallery (if provided) */}
      {article.gallery && article.gallery.length > 0 && (
        <DetailGallerySection
          eyebrow="Chronicle Archives"
          title="Event"
          titleHighlight="Photographs"
          items={article.gallery}
        />
      )}

      {/* 4. More News & Chronicles Section */}
      <section className="relative py-20 bg-[#efe9dd]">
        <div className="mx-auto max-w-[1400px] px-8 sm:px-12 lg:px-16">
          <ScrollReveal direction="up" duration={700}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <p className="eyebrow text-[#a43a32]">Parish Chronicles</p>
                <h2 className="section-title mt-2">
                  More News &amp; <span className="text-[#a43a32]">Happenings</span>
                </h2>
              </div>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a43a32] hover:text-[#171715] transition-colors"
              >
                <span>View All News</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {otherNews.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                direction="up"
                delay={idx * 100}
                duration={700}
              >
                <NewsCard item={item} showExcerpt={true} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <ClosingSection />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}

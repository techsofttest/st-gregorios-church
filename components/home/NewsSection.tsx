import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NewsCard from "@/components/news/NewsCard";
import { newsItemsData } from "@/data/newsData";

export default function NewsSection() {
  // Show top 5 latest news items on homepage
  const homeNews = newsItemsData.slice(0, 5);

  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" duration={750}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Parish News"
              title={
                <>
                  Latest News &amp; <span className="text-[#a43a32]">Updates</span>
                </>
              }
            />
            <Link
              href="/news"
              className="text-xs font-bold tracking-widest text-[#a43a32] uppercase hover:underline transition-all pb-1 self-start md:self-end"
            >
              View All News →
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {homeNews.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 100} duration={650}>
              <NewsCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


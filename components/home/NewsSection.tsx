import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Patriarchal Visit & Holy Divine Liturgy Celebrated",
    date: "04.10.2026",
    image: "/news/1000009129.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Holy Synod Convenes to Discuss Pastoral Guidance",
    date: "28.09.2026",
    image: "/news/55552670957_be8ce85b.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Father Radomir Nikčević Awarded the Cross of Saint John",
    date: "15.09.2026",
    image: "/news/55553695266_566a6e52.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Diocesan Youth Conference & Spiritual Fellowship",
    date: "02.09.2026",
    image: "/news/55553797928_2bff2e3d.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Commemoration of Holy Saints & Feast Blessings",
    date: "20.08.2026",
    image: "/news/55554081470_a9028e92.jpg",
    link: "#",
  },
];

export default function NewsSection() {
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
              href="#"
              className="text-xs font-bold tracking-widest text-[#a43a32] uppercase hover:underline transition-all pb-1 self-start md:self-end"
            >
              View All News →
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {newsItems.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 100} duration={650}>
              <Link href={item.link} className="group block rounded-none shadow-none">
                {/* Image Container - Strictly Sharp Edges / No Radius / No Shadow */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e9e3d7] rounded-none shadow-none">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-none shadow-none transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-sm font-semibold leading-snug text-[#080b0d] group-hover:text-[#a43a32] transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[11px] font-medium tracking-wider text-[#777064] uppercase">
                    {item.date}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Bishop {
  name: string;
  title: string;
  image: string;
  offsetClass?: string;
}

export default function BishopsSection() {
  const bishops: Bishop[] = [
    {
      name: "His Holiness Moran Mor Ignatius Aphrem II",
      title: "Patriarch of Antioch and All the East",
      image: "/bishops/His-Holiness-Moran-Mor-Ignatius-Aphrem-II.png",
      offsetClass: "lg:-translate-y-12 sm:-translate-y-6",
    },
    {
      name: "Baselious Joseph I",
      title: "Catholicos of the East",
      image: "/bishops/Baselious Joseph1.jpeg",
      offsetClass: "lg:translate-y-6",
    },
    {
      name: "Mor Eusebius Kuriakose",
      title: "Metropolitan",
      image: "/bishops/Mor Eusebius-Kuriakose.jpg",
      offsetClass: "lg:translate-y-24",
    },
  ];


  return (
    <section className="bg-[#f7f4ed] py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-8 sm:px-12 lg:px-16">
        <ScrollReveal direction="up" duration={800}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-[#a43a32]">Spiritual Leadership</p>
            <h2 className="section-title mt-4 mb-24">
              Our Hierarchs & <span className="text-[#a43a32]">Bishops</span>
            </h2>
            {/* <p className="mt-4 text-base leading-relaxed text-[#1c1a17]/80">
              Guiding our church with prayer, wisdom, and steadfast devotion to the Syriac Orthodox Tradition.
            </p> */}
          </div>
        </ScrollReveal>

        {/* Disoriented / Staggered Tree-like Card Layout */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 items-start">
          {bishops.map((bishop, idx) => (
            <ScrollReveal
              key={bishop.name}
              direction="up"
              delay={200 + idx * 150}
              duration={800}
            >
              <div
                className={`transition-transform duration-300 hover:-translate-y-1 ${bishop.offsetClass || ""
                  }`}
              >
                {/* Image Container - Square / Sharp Edges */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#e8e2d5]">
                  <Image
                    src={bishop.image}
                    alt={bishop.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top filter contrast-105 hover:scale-105 transition-all duration-500"
                  />
                </div>


                {/* Card Details - Flat design, no rounded corners, no shadow */}
                <div className="mt-4 pt-3">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1c1a17]">
                    {bishop.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#a43a32]">
                    {bishop.title}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


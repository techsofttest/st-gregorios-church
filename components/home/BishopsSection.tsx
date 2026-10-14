import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Bishop {
  name: string;
  title: string;
  image: string;
}

export default function BishopsSection() {
  const bishops: Bishop[] = [
    {
      name: "Baselious Joseph I",
      title: "Catholicos of the East",
      image: "/bishops/Baselious Joseph1.jpeg",
    },
    {
      name: "Mor Eusebius Kuriakose",
      title: "Metropolitan",
      image: "/bishops/Mor Eusebius-Kuriakose.jpg",
    },
  ];

  return (
    <section className="relative bg-[#f7f4ed] py-20 lg:py-28 overflow-hidden">
      {/* Background Design Element: Filled Syriac/Orthodox Cross SVG on Left Side */}
      <div className="absolute top-1/2 -left-16 sm:-left-12 lg:-left-6 -translate-y-1/2 pointer-events-none opacity-[0.05] text-[#a43a32]">
        <svg
          width="400"
          height="540"
          viewBox="0 0 200 280"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central Glory Ring / Nimbus */}
          <circle cx="100" cy="90" r="34" opacity="0.25" />
          <circle cx="100" cy="90" r="28" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />

          {/* Vertical Beam */}
          <rect x="91" y="20" width="18" height="235" rx="2" />
          <rect x="94" y="15" width="12" height="245" rx="1" />

          {/* Main Horizontal Crossbar */}
          <rect x="30" y="81" width="140" height="18" rx="2" />
          <rect x="25" y="84" width="150" height="12" rx="1" />

          {/* Top Inscription Bar / Titulus */}
          <rect x="72" y="42" width="56" height="12" rx="2" />
          <rect x="70" y="44" width="60" height="8" rx="1" opacity="0.7" />

          {/* Slanted Footrest Bar (Suppedaneum) */}
          <polygon points="50,212 150,190 150,206 50,228" />

          {/* Terminals */}
          <circle cx="100" cy="8" r="9" />
          <circle cx="89" cy="14" r="7.5" />
          <circle cx="111" cy="14" r="7.5" />

          <circle cx="16" cy="90" r="9" />
          <circle cx="23" cy="79" r="7.5" />
          <circle cx="23" cy="101" r="7.5" />

          <circle cx="184" cy="90" r="9" />
          <circle cx="177" cy="79" r="7.5" />
          <circle cx="177" cy="101" r="7.5" />

          <circle cx="100" cy="270" r="9" />
          <circle cx="89" cy="264" r="7.5" />
          <circle cx="111" cy="264" r="7.5" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-8 sm:px-12 lg:px-16">
        <ScrollReveal direction="up" duration={800}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-[#a43a32]">Spiritual Leadership</p>
            <h2 className="section-title mt-4 mb-16">
              Our Hierarchs &amp; <span className="text-[#a43a32]">Bishops</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 2 Horizontal Cards Placed Side-by-Side (Second card offset slightly lower on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {bishops.map((bishop, idx) => (
            <ScrollReveal
              key={bishop.name}
              direction="up"
              delay={200 + idx * 150}
              duration={850}
              className={`h-full ${idx === 1 ? "lg:translate-y-10" : ""}`}
            >
              <div className="group grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr] bg-[#e9e3d7] hover:bg-[#ede8de] overflow-hidden h-full transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1.5 cursor-pointer">
                {/* Content Container */}
                <div className="flex items-center px-6 py-10 sm:px-8 sm:py-12 transition-transform duration-500 ease-out group-hover:translate-x-1">
                  <div className="max-w-[340px]">
                    <p className="eyebrow text-[#a43a32]">
                      {bishop.title}
                    </p>

                    <h2 className="font-display text-2xl sm:text-4xl font-semibold leading-tight mt-3 text-[#1c1a17] transition-colors duration-300 group-hover:text-[#8a2f28]">
                      {bishop.name}
                    </h2>
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative min-h-[300px] sm:min-h-[360px] w-full overflow-hidden bg-[#ded7c9]">
                  <Image
                    src={bishop.image}
                    alt={bishop.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top filter contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


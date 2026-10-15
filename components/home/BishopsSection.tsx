import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Bishop {
  name: string;
  title: string;
  image: string;
  description: string;
  link?: string;
}

export default function BishopsSection() {
  const bishops: Bishop[] = [
    {
      name: "Baselious Joseph I",
      title: "Catholicos of the East",
      image: "/bishops/Baselious Joseph2.png",
      description:
        "Providing spiritual shepherdship and archpastoral guidance to the Jacobite Syrian Christian community.",
      link: "/about/catholicos",
    },
    {
      name: "Mor Eusebius Kuriakose",
      title: "Metropolitan",
      image: "/bishops/Mor Eusebius-Kuriakose.jpg",
      description:
        "Guiding our diocese with apostolic vision, pastoral care, and dedication to Gospel service.",
      link: "/about/metropolitan",
    },
  ];

  const vicar = {
    name: "Rev. Fr. Eldo",
    title: "Vicar",
    image: "/vicar/FrEldo-Vicar.png",
    description:
      "Administering the parish sacramental life, spiritual counseling, and ministering to all families of St. Gregorios Church.",
    link: "/about/vicar",
  };

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
              Our Hierarchs
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento Grid: Catholicos on the Left (Full Height / Prominent), Metropolitan & Vicar Stacked on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column (Catholicos of the East - Large Prominent Card) */}
          <ScrollReveal
            direction="left"
            delay={200}
            duration={850}
            className="lg:col-span-6 h-full"
          >
            <div className="group relative overflow-hidden h-full min-h-[420px] sm:min-h-[480px] lg:min-h-full transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-end bg-[#1c1a17]">
              {/* Full Bleed Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={bishops[0].image}
                  alt={bishops[0].name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top filter contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Bottom Gradient Overlay for optimal legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 via-45% to-transparent pointer-events-none" />

              {/* Content Container placed at the bottom over gradient */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-9 transition-transform duration-500 ease-out group-hover:translate-x-1">
                <div className="max-w-[360px]">
                  <p className="eyebrow text-white">
                    {bishops[0].title}
                  </p>

                  <h2 className="font-display text-2xl sm:text-4xl font-semibold leading-tight mt-2 text-white transition-colors duration-300 group-hover:text-[#f3d882]">
                    {bishops[0].name}
                  </h2>

                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-white/85">
                    {bishops[0].description}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={bishops[0].link || "/about"}
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#e1c66c] hover:text-[#fff] transition-colors group/btn"
                    >
                      <span>Read More</span>
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Stacked Bento Cards (Metropolitan on Top, Vicar Below) */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:gap-8">
            {/* Top Right: Metropolitan */}
            <ScrollReveal direction="right" delay={300} duration={850} className="flex-1">
              <div className="group grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr] bg-[#e9e3d7] hover:bg-[#ede8de] overflow-hidden h-full transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1.5">
                {/* Content Container */}
                <div className="flex flex-col justify-center px-6 py-7 sm:px-8 sm:py-8 transition-transform duration-500 ease-out group-hover:translate-x-1">
                  <div className="max-w-[340px]">
                    <p className="eyebrow text-[#a43a32]">
                      {bishops[1].title}
                    </p>

                    <h2 className="font-display text-xl sm:text-2xl font-semibold leading-tight mt-1.5 text-[#1c1a17] transition-colors duration-300 group-hover:text-[#8a2f28]">
                      {bishops[1].name}
                    </h2>

                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[#524c43]">
                      {bishops[1].description}
                    </p>

                    <div className="mt-4">
                      <Link
                        href={bishops[1].link || "/about"}
                        className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#a43a32] hover:text-[#78241d] transition-colors group/btn"
                      >
                        <span>Read More</span>
                        <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative min-h-[220px] sm:min-h-[240px] w-full overflow-hidden bg-[#ded7c9]">
                  <Image
                    src={bishops[1].image}
                    alt={bishops[1].name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top filter contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom Right: Vicar */}
            <ScrollReveal direction="right" delay={450} duration={850} className="flex-1">
              <div className="group grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr] bg-[#e9e3d7] hover:bg-[#ede8de] overflow-hidden h-full transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1.5">
                {/* Content Container */}
                <div className="flex flex-col justify-center px-6 py-7 sm:px-8 sm:py-8 transition-transform duration-500 ease-out group-hover:translate-x-1">
                  <div className="max-w-[340px]">
                    <p className="eyebrow text-[#a43a32]">
                      {vicar.title}
                    </p>

                    <h2 className="font-display text-xl sm:text-2xl font-semibold leading-tight mt-1.5 text-[#1c1a17] transition-colors duration-300 group-hover:text-[#8a2f28]">
                      {vicar.name}
                    </h2>

                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[#524c43]">
                      {vicar.description}
                    </p>

                    <div className="mt-4">
                      <Link
                        href={vicar.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#a43a32] hover:text-[#78241d] transition-colors group/btn"
                      >
                        <span>Read More</span>
                        <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative min-h-[220px] sm:min-h-[240px] w-full overflow-hidden bg-[#ded7c9]">
                  <Image
                    src={vicar.image}
                    alt={`${vicar.name} - ${vicar.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top filter contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}


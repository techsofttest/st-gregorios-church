import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WorshipBar() {
  const groupedSchedule = [
    {
      day: "Sunday",
      services: [
        { service: "Morning Prayer", time: "7:30 AM" },
        { service: "Holy Qurbana", time: "8:30 AM" },
      ],
    },
    {
      day: "Friday",
      services: [
        { service: "Evening Prayer", time: "6:30 PM" },
        { service: "Holy Qurbana", time: "7:00 PM" },
      ],
    },
  ];

  return (
    <section className="relative z-20 bg-transparent text-white -mt-12 sm:-mt-12 lg:-mt-18">
      <div className="mx-auto max-w-[1500px] px-8 sm:px-12 lg:px-16">
        <ScrollReveal duration={800} distance="30px">
          <div className="relative bg-[#071b27] p-8 sm:p-12 lg:p-14 overflow-hidden">
            {/* Background Design Element: Highly Detailed Filled Syriac/Orthodox Cross SVG at Left Edge */}
            <div className="absolute top-1/2 -left-12 lg:-left-6 -translate-y-1/2 pointer-events-none opacity-[0.09] text-[#e1c66c]">
              <svg
                width="340"
                height="460"
                viewBox="0 0 200 280"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Central Glory Rays / Sunburst Backing (Filled Shapes) */}
                {/* <path d="M100 90 L85 45 L95 45 Z" opacity="0.4" />
                <path d="M100 90 L115 45 L105 45 Z" opacity="0.4" />
                <path d="M100 90 L145 75 L145 85 Z" opacity="0.4" />
                <path d="M100 90 L145 95 L145 105 Z" opacity="0.4" />
                <path d="M100 90 L115 135 L105 135 Z" opacity="0.4" />
                <path d="M100 90 L85 135 L95 135 Z" opacity="0.4" />
                <path d="M100 90 L55 105 L55 95 Z" opacity="0.4" />
                <path d="M100 90 L55 85 L55 75 Z" opacity="0.4" /> */}

                {/* Central Glory Ring / Nimbus */}
                <circle cx="100" cy="90" r="34" opacity="0.25" />
                <circle cx="100" cy="90" r="28" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />

                {/* Main Shaft & Crossbar (Solid Filled Beams with Stepped Edges) */}
                {/* Vertical Beam */}
                <rect x="91" y="20" width="18" height="235" rx="2" />
                <rect x="94" y="15" width="12" height="245" rx="1" />

                {/* Main Horizontal Crossbar */}
                <rect x="30" y="81" width="140" height="18" rx="2" />
                <rect x="25" y="84" width="150" height="12" rx="1" />

                {/* Top Inscription Bar / Titulus */}
                <rect x="72" y="42" width="56" height="12" rx="2" />
                <rect x="70" y="44" width="60" height="8" rx="1" opacity="0.7" />

                {/* Slanted Footrest Bar (Suppedaneum - Solid Filled Polygon) */}
                <polygon points="50,212 150,190 150,206 50,228" />

                {/* Budded Trefoil / Trinity Terminals (Filled Triple Circles) */}
                {/* Top Trefoil */}
                <circle cx="100" cy="8" r="9" />
                <circle cx="89" cy="14" r="7.5" />
                <circle cx="111" cy="14" r="7.5" />

                {/* Left Trefoil */}
                <circle cx="16" cy="90" r="9" />
                <circle cx="23" cy="79" r="7.5" />
                <circle cx="23" cy="101" r="7.5" />

                {/* Right Trefoil */}
                <circle cx="184" cy="90" r="9" />
                <circle cx="177" cy="79" r="7.5" />
                <circle cx="177" cy="101" r="7.5" />

                {/* Bottom Trefoil / Pedestal Base */}
                <circle cx="100" cy="270" r="9" />
                <circle cx="89" cy="264" r="7.5" />
                <circle cx="111" cy="264" r="7.5" />

                {/* Center Intersection Ornament - Solid St. Andrew's Diamond & Cross Emblem */}
                {/* <polygon points="100,72 118,90 100,108 82,90" fill="#071b27" />
                <polygon points="100,76 114,90 100,104 86,90" />
                <circle cx="100" cy="90" r="4" fill="#071b27" /> */}
              </svg>
            </div>


            {/* Background Design Element: Church Shadow at bottom (Pure Black aligned to right edge) */}
            <div className="absolute bottom-0 right-0 pointer-events-none opacity-100 flex justify-end max-w-[60vw] lg:max-w-[1200px]">

              <Image
                src="/design-elm/chirch-shadow-red.png"
                alt="Church Silhouette"
                width={700}
                height={220}
                style={{ width: "auto", height: "auto" }}
                className="w-full h-auto object-bottom object-right object-contain brightness-0"
              />

            </div>

            <div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr] items-center">
              <ScrollReveal direction="left" delay={150}>
                <div className="py-4 lg:py-6 lg:pr-12 border-b border-white/10 lg:border-b-0 lg:border-r">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Worship Schedule
                    </p>
                    <h2 className="section-title mt-3 leading-tight">
                      Come, worship <br />with us.
                    </h2>

                  </div>
                </div>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 lg:pt-0 lg:pl-12">
                {groupedSchedule.map((group, idx) => (
                  <ScrollReveal key={group.day} direction="up" delay={250 + idx * 100}>
                    <div>
                      <p className="text-lg font-bold text-white">
                        {group.day}
                      </p>

                      <div className="mt-4 flex flex-col gap-4">
                        {group.services.map((item) => (
                          <div
                            key={item.service}
                            className="flex items-center justify-between"
                          >
                            <span className="text-base font-medium text-white/90">
                              {item.service}
                            </span>
                            <span className="font-display text-2xl sm:text-3xl text-[#e1c66c]">
                              {item.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


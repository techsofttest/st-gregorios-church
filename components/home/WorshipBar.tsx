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
          <div className="relative bg-[#071b27]">
            {/* Contained background decorations wrapper so shadow doesn't create layout overflow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Background Design Element: Filled Syriac/Orthodox Cross SVG at Left Edge */}
              <div className="absolute top-1/2 -left-12 lg:-left-6 -translate-y-1/2 opacity-[0.09] text-[#e1c66c] z-10">
                <svg
                  width="260"
                  height="340"
                  viewBox="0 0 200 280"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Glory Ring / Nimbus */}
                  <circle cx="100" cy="90" r="34" opacity="0.25" />
                  <circle cx="100" cy="90" r="28" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />

                  {/* Main Shaft & Crossbar */}
                  <rect x="91" y="20" width="18" height="235" rx="2" />
                  <rect x="94" y="15" width="12" height="245" rx="1" />
                  <rect x="30" y="81" width="140" height="18" rx="2" />
                  <rect x="25" y="84" width="150" height="12" rx="1" />

                  <rect x="72" y="42" width="56" height="12" rx="2" />
                  <rect x="70" y="44" width="60" height="8" rx="1" opacity="0.7" />

                  <polygon points="50,212 150,190 150,206 50,228" />

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

              {/* Background Design Element: Church Shadow at bottom */}
              <div className="absolute -bottom-2 -right-4 sm:-bottom-4 sm:-right-6 opacity-90 flex justify-end w-[65vw] sm:w-[50vw] max-w-[850px] lg:max-w-[1100px] z-10">
                <Image
                  src="/design-elm/chirch-shadow-red.png"
                  alt="Church Silhouette"
                  width={700}
                  height={220}
                  style={{ width: "auto", height: "auto" }}
                  className="max-w-full h-auto object-bottom object-right object-contain brightness-0 pointer-events-none"
                />
              </div>
            </div>

            {/* Main 2-Column Split: Image on Left (aspect-ratio locked, top overflowing), Content on Right */}
            <div className="relative z-10 grid lg:grid-cols-[0.85fr_1.15fr] items-stretch">
              {/* Left Side: Ornate Illuminated Church Shrine (Locked Aspect Ratio, Overflowing Top) */}
              <ScrollReveal direction="left" delay={150} className="relative z-20 flex items-end justify-center lg:justify-start">
                <div className="relative w-full max-w-[540px] aspect-[492/359] -mt-18 sm:-mt-26 lg:-mt-36 mb-0 flex items-end">
                  <Image
                    src="/interior/Ornate Illuminated Church ShrineB.png"
                    alt="Ornate Illuminated Church Shrine"
                    fill
                    sizes="(max-width: 1024px) 95vw, 45vw"
                    className="object-contain object-bottom filter contrast-105 pointer-events-none"
                    priority
                  />
                </div>
              </ScrollReveal>

              {/* Right Side: Title on top, then Worship Schedule cards */}
              <div className="flex flex-col justify-center px-6 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-6">
                {/* Title directly above schedules */}
                <div className="pb-3 mb-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[#e1c66c] text-xs select-none">✠</span>
                    <h2 className="font-display text-base sm:text-lg font-semibold tracking-wide text-white">
                      Worship Schedule · Come, Worship with Us
                    </h2>
                  </div>
                </div>

                {/* Worship Schedule Timings Grid */}
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {groupedSchedule.map((group, idx) => (
                    <ScrollReveal key={group.day} direction="up" delay={200 + idx * 100}>
                      <div className="bg-black/20 p-2.5 sm:p-3 border-l-2 border-[#e1c66c]/60">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#e1c66c]">
                          {group.day}
                        </p>

                        <div className="mt-1.5 flex flex-col gap-1.5">
                          {group.services.map((item) => (
                            <div
                              key={item.service}
                              className="flex items-center justify-between gap-2"
                            >
                              <span className="text-xs sm:text-sm font-medium text-white/90">
                                {item.service}
                              </span>
                              <span className="font-display text-base sm:text-lg font-semibold text-[#e1c66c]">
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


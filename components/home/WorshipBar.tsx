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


              {/* Background Design Element: Church Shadow at bottom */}
              <div className="absolute -bottom-2 -right-4 sm:-bottom-4 sm:-right-6 opacity-90 flex justify-end w-[65vw] sm:w-[50vw] max-w-[850px] lg:max-w-[1100px] z-10">
                <div className="relative w-full aspect-[2366/463]">
                  <Image
                    src="/design-elm/chirch-shadow-red.png"
                    alt="Church Silhouette"
                    fill
                    sizes="(max-width: 1024px) 65vw, 1100px"
                    className="object-bottom object-right object-contain brightness-0 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Main 2-Column Split: Image on Left (aspect-ratio locked, top overflowing), Content on Right */}
            <div className="relative z-10 grid lg:grid-cols-[0.85fr_1.15fr] items-stretch">
              {/* Left Side: Layered Shrine Images (Background inside bar, Foreground overflowing top) */}
              <ScrollReveal direction="left" delay={150} className="relative z-20 flex items-end justify-center lg:justify-start">
                <div className="relative w-full max-w-[500px] lg:max-w-[520px] aspect-[523/238] flex items-end">
                  {/* Layer 1: Base Background Shrine Image (Fills the base container) */}
                  <Image
                    src="/worship-bar/bg.png"
                    alt="Church Sanctuary Background"
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-contain object-bottom filter contrast-105 pointer-events-none"
                    priority
                  />

                  {/* Layer 2: Foreground Image that dramatically overflows out of the top of the bar */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[80%] sm:w-[75%] lg:w-[82%] aspect-[406/382] -mb-1 pointer-events-none z-10 flex items-end">
                    <Image
                      src="/worship-bar/foreground.png"
                      alt="Church Shrine Altar Foreground"
                      fill
                      sizes="(max-width: 1024px) 80vw, 40vw"
                      className="object-contain object-bottom filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
                      priority
                    />
                  </div>
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


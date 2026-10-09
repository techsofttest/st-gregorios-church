"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Member {
  name: string;
  image: string;
}

export default function CommitteeSection() {
  const members: Member[] = [
    { name: "A M Sunny", image: "/committee-members/A M_Sunny.jpg" },
    { name: "Alex Mathew", image: "/committee-members/Alex_Mathew.jpg" },
    { name: "Aleyamma Sunny", image: "/committee-members/Aleyamma_Sunny.jpg" },
    { name: "Biju Varghese", image: "/committee-members/BIJU_VARGHESE2.jpg" },
    { name: "Feby Koshy", image: "/committee-members/FEBY_KOSHY.jpg" },
    { name: "George Poulose", image: "/committee-members/George_Poulose.jpg" },
    { name: "Hima Pramod", image: "/committee-members/HIMA_PRAMOD.jpg" },
    { name: "Jacob Pulinthanath", image: "/committee-members/Jacob_Pulinthanath.jpg" },
    { name: "Jacob Thomas", image: "/committee-members/Jacob_Thomas.jpg" },
    { name: "Jebin Philippose", image: "/committee-members/Jebin_Philippose.jpg" },
    { name: "Jobin Sam Jacob", image: "/committee-members/Jobin_Sam_Jacob.jpg" },
    { name: "Joy Joseph", image: "/committee-members/Joy_Joseph.jpg" },
    { name: "K T Philipose", image: "/committee-members/K T_Philipose.jpg" },
    { name: "M C Abraham", image: "/committee-members/M C_Abraham.jpg" },
    { name: "Manu M C", image: "/committee-members/MANU_M C.jpg" },
    { name: "Nisha Shibi Paul", image: "/committee-members/NISHA_SHIBI_PAUL.jpg" },
    { name: "Oommen Mathew", image: "/committee-members/Oommen_Mathew.jpg" },
    { name: "Poppy Elizebeth Babu", image: "/committee-members/POPPY_ELIZEBETH_BABU.jpg" },
    { name: "Pramod Pudiyedath", image: "/committee-members/PRAMOD_PUDIYEDATH.jpg" },
    { name: "Shibi K Paulose", image: "/committee-members/SHIBI_K_PAULOSE.jpg" },
    { name: "Sujamol Biju", image: "/committee-members/SUJAMOL_BIJU.jpg" },
    { name: "Saji Thomas", image: "/committee-members/Saji_Thomas2.jpg" },
    { name: "Steve Stephen Vaithara", image: "/committee-members/Steve_Stephen_Vaithara.jpg" },
    { name: "Stevin Abraham", image: "/committee-members/Stevin_Abraham.jpg" },
    { name: "T A Georgekutty", image: "/committee-members/T A_Georgekutty.jpg" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-8 sm:px-12 lg:px-16">
        {/* Header with Title & Top-Right Carousel Controls + Indicators */}
        <ScrollReveal direction="up" duration={800}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-[#a43a32]">Leadership & Service</p>
              <h2 className="section-title mt-4">
                Managing <span className="text-[#a43a32]">Committee</span>
              </h2>
              {/* <p className="mt-4 text-base leading-relaxed text-[#1c1a17]/80 max-w-xl">
                Dedicated members serving our parish community with faith and unity.
              </p> */}
            </div>

            {/* Top-Right Controls & Indicators */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Navigation Buttons (SVG Chevron arrows) */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous committee slide"
                  className="flex h-10 w-10 items-center justify-center bg-[#1c1a17]/10 text-[#1c1a17] transition-all hover:bg-[#a43a32] hover:text-white cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  aria-label="Next committee slide"
                  className="flex h-10 w-10 items-center justify-center bg-[#1c1a17]/10 text-[#1c1a17] transition-all hover:bg-[#a43a32] hover:text-white cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Embla Carousel Viewport */}
        <ScrollReveal direction="up" delay={200} duration={800}>
          <div className="mt-16 overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-6"
                >
                  <div className="group relative aspect-[3/4] w-full overflow-hidden cursor-pointer">
                    {/* Image - Full Bleed */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Dark Overlay Gradient for Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />

                    {/* Name Overlayed at Top Left */}
                    <div className="absolute top-6 left-6 right-6 z-10">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-sm">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


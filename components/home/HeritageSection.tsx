"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";


interface HeritageSectionProps {
  imageSrc?: string;
}

export default function HeritageSection({ imageSrc }: HeritageSectionProps) {
  const historyImages = [
    {
      src: "/history/1.jpg",
      alt: "Historical Church Parish Gathering",
    },
    {
      src: "/history/IMG_20240807_000341.jpg",
      alt: "Parish Historical Archive",
    },
    {
      src: "/history/SKM_C30803062115450_0015.jpg.jpeg",
      alt: "Historical Documents and Dedication",
    },
    {
      src: "/history/SKM_C30803062115450_0018.jpg.jpeg",
      alt: "Archival Parish Memories",
    },
    {
      src: "/history/School.jpeg",
      alt: "Early Sunday School Community",
    },
    {
      src: "/history/ba74b38a-0786-4107-a28a-8a835cf894f2.jpg",
      alt: "Early Church Fellowship",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % historyImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [historyImages.length]);

  const milestones = [
    { year: "1994", label: "Parish" },
    { year: "2002", label: "Consecration" },
  ];

  return (
    <section className="bg-white text-[#171715] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Centered Section Heading above the banner */}
        <ScrollReveal direction="up" duration={750}>
          <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
            <p className="eyebrow text-[#a43a32] text-[10px] sm:text-xs">Our Heritage</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mt-3 text-[#111c20]">
              From <span className="text-[#a43a32]">1994</span> onwards.
            </h2>
          </div>
        </ScrollReveal>

        {/* Boxed Banner with Carousel and Content Card */}
        <div className="relative overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex flex-col justify-end border border-white/10">
          {/* Background Image Carousel (Smooth cross-fade, isolated pointer-events-none) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {historyImages.map((img, idx) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>

          {/* Content Container aligned to bottom right inside the boxed banner */}
          <div className="relative z-30 ml-auto flex justify-end p-5 sm:p-8 lg:p-10">
            <ScrollReveal direction="right" duration={850}>
              <div className="w-full max-w-[440px] sm:max-w-[480px] bg-[#111c20]/80 backdrop-blur-md border border-white/10 p-5 sm:p-7 shadow-2xl">

                <div className="grid grid-cols-2 pb-2.5 border-b border-white/10 mb-3.5">
                  {milestones.map((milestone) => (
                    <div key={`${milestone.year}-${milestone.label}`}>
                      <p className="font-display text-3xl sm:text-4xl font-semibold text-[#d6b75b]">
                        {milestone.year}
                      </p>
                      <p className="mt-1 text-xs tracking-[0.14em] text-white/80">
                        {milestone.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-[13px] leading-relaxed text-white/90">
                  The Jacobite Syrian Church in Mumbai began its journey in 1994.
                  Through decades of prayer, sacrifice and perseverance, the St.
                  Gregorios parish grew into the spiritual home it is today.
                </p>

                <div className="mt-5">
                  <Link
                    href="/history"
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#d6b75b] hover:text-white transition-colors group/btn"
                  >
                    <span>Read More</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}


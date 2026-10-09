"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";


interface HeritageSectionProps {
  imageSrc?: string;
}

export default function HeritageSection({ imageSrc }: HeritageSectionProps) {
  const historyImages = [
    {
      src: "/history/Vintage Sepia Church Among Palms.png",
      alt: "Vintage Sepia Church Among Palms",
    },
    {
      src: "/history/Vintage Sepia Church Sanctuary Panorama.png",
      alt: "Vintage Sepia Church Sanctuary Panorama",
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
    { year: "1952", label: "Beginning" },
    { year: "1994", label: "Parish" },
    { year: "2002", label: "Consecration" },
  ];

  return (
    <section className="relative bg-[#111c20] text-white overflow-hidden">
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
              sizes="100vw"
              priority={idx === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111c20]/100 via-transparent to-transparent" />
      </div>

      {/* Content Container attached to right edge */}
      <div className="relative z-30 ml-auto flex justify-end pl-6 py-12 sm:py-16 px-12">
        <ScrollReveal direction="right" duration={850}>
          <div className="w-full max-w-[500px] sm:max-w-[540px] bg-[#111c20] p-6 sm:p-9">
            <p className="eyebrow text-white">Our Heritage</p>

            <h2 className="section-title mt-4">
              From{" "}
              <span className="text-[#d6b75b]">1952</span>
              <br />
              onwards.
            </h2>


            <p className="mt-6 text-sm leading-7 text-white/85">
              The Jacobite Syrian Church in Mumbai began its journey in 1952.
              Through decades of prayer, sacrifice and perseverance, the St.
              Gregorios parish grew into the spiritual home it is today.
            </p>

            <div className="mt-4 grid grid-cols-3 py-3">
              {milestones.map((milestone) => (
                <div key={milestone.year}>
                  <p className="font-display text-5xl text-[#d6b75b]">
                    {milestone.year}
                  </p>
                  <p className="mt-1.5 text-sm tracking-[0.14em] text-white/70">
                    {milestone.label}
                  </p>
                </div>
              ))}
            </div>

            <Button
              href="/history"
              variant="secondary"
              className="mt-7"
            >
              Explore our history
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


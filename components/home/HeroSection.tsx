"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  imageSrc?: string;
}

export default function HeroSection({
  imageSrc = "/exterior/Sunlit White Colonial Church in Bloom.png",
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animations on site load
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-screen relative w-full overflow-hidden bg-[#080b0d] pt-6 sm:pt-8 lg:pt-18 pb-12 text-white flex flex-col justify-start">
      {/* Background Image with Slow Subtle Zoom-in Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/exterior/Sunlit White Colonial Church in Bloom.png"
          alt="St. Gregorios Church"
          fill
          priority
          className={`object-cover object-center transition-transform duration-[2000ms] ease-out ${mounted ? "scale-100" : "scale-110"
            }`}
          sizes="100vw"
        />
        {/* Soft gradient overlay on left for clean text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
      </div>

      {/* Main Content Container with Staggered Entrance Animations */}
      <div className="relative z-10 w-full max-w-[1600px] px-6 sm:px-10 lg:px-12">

        <div className="flex flex-col max-w-[480px]">
          {/* Header Logo & Subtitle - Fade & Slide Down */}
          <div
            className={`mb-3 flex items-center gap-3 transition-all duration-1000 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
              }`}
          >
            <Image
              src="/logo/logo.png"
              alt="St. Gregorios Logo"
              width={44}
              height={44}
              className="h-9 w-9 sm:h-11 sm:w-11 object-contain"
            />
            <span className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide">
              Syriac Orthodox Church of Antioch
            </span>
          </div>

          {/* Typography Header - Staggered Fade & Slide Up */}
          <h1
            className={`font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-semibold leading-[1.08] tracking-[0.02em] text-white transition-all duration-1000 delay-300 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            ST. GREGORIOS
            <br />
            JACOBITE SYRIAN
            <br />
            ORTHODOX CHURCH
          </h1>

          {/* Subtitle - Staggered Fade & Slide Up */}
          <p
            className={`mt-3 text-[11px] sm:text-xs font-bold tracking-[0.18em] text-white/80 uppercase transition-all duration-1000 delay-500 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            MUMBAI PARISH • EST. 1952
          </p>
        </div>
      </div>

      {/* St. Gregorios PNG aligned to right edge with entrance slide-up */}
      <div
        className={`absolute bottom-0 right-0 z-10 hidden md:block max-w-[28vw] lg:max-w-[360px] xl:max-w-[400px] pointer-events-none transition-all duration-1200 delay-400 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
      >
        <Image
          src="/st-gregorios/st-gregorios.png"
          alt="St. Gregorios"
          width={400}
          height={500}
          style={{ width: "auto", height: "auto" }}
          className="h-auto w-full object-contain object-bottom drop-shadow-2xl"
          priority
        />

      </div>
    </section>
  );
}

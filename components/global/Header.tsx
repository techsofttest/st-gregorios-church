"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MegaMenu from "@/components/global/MegaMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isSolidHeader = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isSolidHeader
        ? "bg-[#071b27] shadow-xl"
        : "bg-transparent border-b border-transparent shadow-none"
        }`}
    >
      {/* Top Header Bar */}
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-5 sm:px-8 py-3.5">
        {/* Church Logo & Branding (Hidden when over Hero, shown when scrolled or menu open) */}
        <Link
          href="/"
          className={`group flex items-center gap-3.5 transition-opacity duration-300 ${isSolidHeader ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <Image
            src="/logo/logo.png"
            alt="St. Gregorios Logo"
            width={48}
            height={48}
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <div className="font-display text-lg sm:text-2xl font-bold tracking-wide text-white group-hover:text-[#d6b75b] transition-colors leading-tight">
              St. Gregorios
            </div>
            <div className="text-[11px] sm:text-xs font-medium text-white/80 tracking-wide">
              Jacobite Syrian Orthodox Church
            </div>
          </div>
        </Link>

        {/* Centered Christian Orthodox Cross SVG */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 52"
            className="h-7 w-7 sm:h-9 sm:w-9 text-[#d6b75b]"
            fill="currentColor"
            aria-label="Christian Orthodox Cross"
          >
            {/* Main Vertical Beam */}
            <rect x="18" y="2" width="4" height="48" rx="0.5" />

            {/* Top Inscription Bar */}
            <rect x="13" y="8" width="14" height="3" rx="0.5" />

            {/* Main Horizontal Arm Bar */}
            <rect x="4" y="18" width="32" height="4" rx="0.5" />

            {/* Slanted Lower Footrest Bar (Orthodox Suppedaneum) */}
            <polygon points="10,39.5 30,33.5 30,36.5 10,42.5" />

            {/* Ornate Budded Endings */}
            <circle cx="20" cy="2" r="2" />
            <circle cx="20" cy="50" r="2" />
            <circle cx="4" cy="20" r="2" />
            <circle cx="36" cy="20" r="2" />
          </svg>
        </div>



        {/* Quick Top Bar Navigation / Menu Trigger */}
        <div className="flex items-center gap-3 sm:gap-6 ml-auto">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle Navigation Menu"
            className="group inline-flex items-center gap-2.5 rounded-none bg-[#a53c33] px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white hover:bg-[#d6a738] transition-colors cursor-pointer border border-white/10 shadow-lg"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-[2px] w-full bg-white transition-all duration-300 ${menuOpen ? "top-[7px] rotate-45" : ""
                  }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-[2px] w-4/5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-[2px] w-full bg-white transition-all duration-300 ${menuOpen ? "top-[7px] -rotate-45" : ""
                  }`}
              />
            </span>
            <span>{menuOpen ? "Close Menu" : "Menu & Directory"}</span>
          </button>
        </div>
      </div>

      {/* Full Width Mega Menu Overlay Dropdown */}
      <MegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
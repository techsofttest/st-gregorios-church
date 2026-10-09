"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Check if user is scrolled down near the footer
      const footerElement = document.querySelector("footer");
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        // Hide header if top of footer comes within 100px of viewport bottom
        setNearFooter(footerRect.top <= window.innerHeight + 50);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Right Menu Button when at Top of page (not scrolled) */}
      <div
        className={`fixed top-6 right-6 z-50 transition-all duration-500 ${mounted && !scrolled
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
      >
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="group flex h-14 w-14 sm:h-[60px] sm:w-[60px] shrink-0 items-center justify-center rounded-full bg-[#a53c33] text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#d6a738] cursor-pointer"
        >
          <span className="relative block h-[20px] w-[24px]">
            <span
              className={`absolute left-0 top-0 block h-[2.5px] w-full bg-white transition-all duration-300 ${menuOpen ? "top-[9px] rotate-45" : ""
                }`}
            />
            <span
              className={`absolute left-0 top-[9px] block h-[2.5px] w-[17px] bg-white transition-all duration-300 group-hover:w-full ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`absolute left-0 top-[18px] block h-[2.5px] w-full bg-white transition-all duration-300 ${menuOpen ? "top-[9px] -rotate-45" : ""
                }`}
            />
          </span>
        </button>
      </div>

      {/* Floating Bottom Header Bar when scrolled (hidden when at footer) */}
      <header
        className={`fixed inset-x-0 bottom-4 sm:bottom-4 z-50 transition-all duration-500 ${mounted && scrolled && !nearFooter
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "pointer-events-none translate-y-6 opacity-0"
          }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-center gap-3 sm:gap-4 px-6">
          {/* Logo Pill with Church Name */}
          <Link
            href="/"
            aria-label="St. Gregorios Church Home"
            className="group flex items-center gap-3.5 rounded-full bg-[#a53c33] pl-2 pr-6 py-2 text-[#080b0d] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#d6a738]"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo/logo.png"
              alt="St. Gregorios Logo"
              width={44}
              height={44}
              className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div className="block pr-1 text-left">
              <div className="text-white font-display text-md sm:text-xl font-semibold leading-none tracking-[0.02em]">
                St. Gregorios
              </div>

              <div className="mt-1 text-xs sm:text-sm font-semibold text-white">
                Jacobite Syrian Orthodox Church
              </div>
            </div>
          </Link>

          {/* Burger Circle in Scrolled Bottom Bar */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="group flex h-14 w-14 sm:h-[60px] sm:w-[60px] shrink-0 items-center justify-center rounded-full bg-[#a53c33] text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#d6a738] cursor-pointer"
          >
            <span className="relative block h-[20px] w-[24px]">
              <span
                className={`absolute left-0 top-0 block h-[2.5px] w-full bg-white transition-all duration-300 ${menuOpen ? "top-[9px] rotate-45" : ""
                  }`}
              />

              <span
                className={`absolute left-0 top-[9px] block h-[2.5px] w-[17px] bg-white transition-all duration-300 group-hover:w-full ${menuOpen ? "opacity-0" : ""
                  }`}
              />

              <span
                className={`absolute left-0 top-[18px] block h-[2.5px] w-full bg-white transition-all duration-300 ${menuOpen ? "top-[9px] -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </div>
      </header>


      {/* Boxed navigation menu container */}
      <div
        className={`fixed inset-0 z-40 flex items-end sm:items-center justify-center p-4 sm:p-6 transition-all duration-300 ${menuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      >
        {/* Dark Backdrop overlay to close when clicking outside */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Boxed Content Card */}
        <div
          className={`relative z-10 w-full max-w-[680px] mb-24 sm:mb-0 bg-[#f7f4ed] p-8 sm:p-12 shadow-2xl transition-all duration-300 border border-[#171715]/10 ${menuOpen ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
            }`}
        >
          <nav className="flex flex-col items-center gap-5 text-center">
            {[
              { href: "/about", label: "About" },
              { href: "/worship", label: "Worship" },
              { href: "/feast", label: "Feast" },
              { href: "/ministries", label: "Ministries" },
              { href: "/history", label: "Our History" },
              { href: "/patriarch", label: "Patriarch" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group relative inline-block font-display text-3xl tracking-wide text-black transition-colors duration-300 hover:text-[#a43a32] sm:text-4xl py-1 overflow-hidden"
              >
                <span>{link.label}</span>
                {/* Normal state base underline track */}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#171715]/15" />
                {/* Animated hover underline overlay moving left-to-right */}
                <span className="absolute bottom-0 left-0 h-[2.5px] w-full bg-[#a43a32] -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
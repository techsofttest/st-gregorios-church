"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const megaMenuCategories: MenuCategory[] = [
  {
    title: "ABOUT US",
    items: [
      { label: "Church History", href: "/about#history" },
      { label: "Patron Saint (St. Gregorios)", href: "/about#patron-saint" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Our Faith", href: "/about#faith" },
      { label: "Diocese", href: "/about#diocese" },
    ],
  },
  {
    title: "HIERARCHY",
    items: [
      { label: "Patriarch", href: "/patriarch" },
      { label: "Catholicos", href: "/catholicos" },
      { label: "Metropolitan", href: "/metropolitan" },
      { label: "Assistant Metropolitan", href: "/assistant-metropolitan" },
      { label: "Vicar", href: "/vicar" },
      { label: "Clergy", href: "/clergy" },
    ],
  },
  {
    title: "MANAGING COMMITTEE",
    items: [
      { label: "Office Bearers", href: "/committee#office-bearers" },
      { label: "MC Members", href: "/committee#members" },
      { label: "Internal Auditor", href: "/committee#auditor" },
      { label: "Diocese Council Members", href: "/committee#council" },
    ],
  },
  {
    title: "SPIRITUAL ORGANIZATIONS",
    items: [
      { label: "Sunday School", href: "/ministries#sunday-school" },
      { label: "Vanitha Samajam", href: "/ministries#vanitha-samajam" },
      { label: "Youth Association", href: "/ministries#youth-association" },
      { label: "Elders Forum", href: "/ministries#elders-forum" },
      {
        label: "Antiochian Faith Protection Movement",
        href: "/ministries#faith-protection",
      },
      { label: "Prayer Fellowships", href: "/ministries#prayer-fellowships" },
    ],
  },
  {
    title: "EVENTS",
    items: [
      { label: "Liturgical Calendar", href: "/events#calendar" },
      { label: "Annual Perunnal", href: "/feast" },
      { label: "Passion Week", href: "/events#passion-week" },
      { label: "Christmas", href: "/events#christmas" },
      { label: "Easter", href: "/events#easter" },
    ],
  },
  {
    title: "NEWS & ANNOUNCEMENTS",
    items: [
      { label: "Latest News", href: "#news" },
      { label: "Parish Notices", href: "#notices" },
      { label: "Event Reports", href: "#reports" },
      { label: "Newsletter", href: "#newsletter" },
    ],
  },
  {
    title: "GALLERY",
    items: [
      { label: "Photo Gallery", href: "/gallery#photos" },
      { label: "Video Gallery", href: "/gallery#videos" },
      { label: "Feast Gallery", href: "/gallery#feast" },
      { label: "Historical Photos", href: "/gallery#historical" },
    ],
  },
  {
    title: "ST. GREGORIOS SCHOOL",
    items: [
      { label: "History", href: "/school#history" },
      { label: "School Website", href: "https://stgregoriosschool.com", external: true },
    ],
  },
  {
    title: "DIRECTORY",
    items: [
      { label: "Members Login — Restricted Access", href: "/login" },
    ],
  },
  {
    title: "CONTACT US",
    items: [
      { label: "Contact Information", href: "/contact#info" },
      { label: "Church Address", href: "/contact#address" },
      { label: "Google Map", href: "/contact#map" },
    ],
  },
];

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

      {/* Full Width Mega Menu Overlay Dropdown with Custom Scrollbar when overflow */}
      {menuOpen && (
        <div className="relative w-full max-h-[82vh] overflow-y-auto bg-[#f7f4ed] text-[#080b0d] shadow-2xl transition-all [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#e9e3d7] [&::-webkit-scrollbar-thumb]:bg-[#a53c33]/60 hover:[&::-webkit-scrollbar-thumb]:bg-[#a53c33]">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-8">

            {/* Mega Menu Grid: 5 Columns in 2 Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
              {megaMenuCategories.map((category) => (
                <div key={category.title} className="flex flex-col">
                  {/* Category Banner Header Box */}
                  <div className="bg-[#a53c33] text-white text-xs sm:text-sm font-bold tracking-wider uppercase text-center py-2.5 px-3 rounded-none shadow-sm mb-3">
                    {category.title}
                  </div>

                  {/* Sub-items List with animated sliding underline */}
                  <ul className="space-y-2.5">
                    {category.items.map((item) => (
                      <li key={item.label} className="flex items-start">
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className="group relative inline-block text-sm sm:text-base font-medium text-[#272522] hover:text-[#a53c33] transition-colors py-0.5 overflow-hidden leading-snug"
                          >
                            <span>{item.label}</span>
                            {/* Base static underline */}
                            <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#272522]/20" />
                            {/* Animated sliding underline */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#a53c33] -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="group relative inline-block text-sm sm:text-base font-medium text-[#272522] hover:text-[#a53c33] transition-colors py-0.5 overflow-hidden leading-snug"
                          >
                            <span>{item.label}</span>
                            {/* Base static underline */}
                            <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#272522]/20" />
                            {/* Animated sliding underline */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#a53c33] -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
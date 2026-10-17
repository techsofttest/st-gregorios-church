"use client";

import Link from "next/link";

export interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const megaMenuCategories: MenuCategory[] = [
  {
    title: "ABOUT US",
    items: [
      { label: "Our Parish", href: "/about" },
      { label: "Church History", href: "/history" },
      { label: "Feast of St. Gregorios", href: "/feast" },
      { label: "Vision & Mission", href: "/about#vision" },
    ],
  },
  {
    title: "HIERARCHY",
    items: [
      { label: "Patriarch", href: "/patriarch" },
      { label: "Catholicos & Metropolitan", href: "/metropolitan" },
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
      { label: "Latest News", href: "/news" },
      { label: "Parish announcements", href: "/news" },
      { label: "Newsletter", href: "/news" },
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
  // {
  //   title: "DIRECTORY",
  //   items: [
  //     { label: "Members Login — Restricted Access", href: "/login" },
  //   ],
  // },
  {
    title: "SUPPORT & DONATIONS",
    items: [
      { label: "Educational Aid", href: "/donations" },
      { label: "Bhavana Nirmanam (Housing)", href: "/donations" },
      { label: "Elder Care", href: "/donations" },
      { label: "Charity & Medical Relief", href: "/donations" },
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

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  categories?: MenuCategory[];
}

export default function MegaMenu({
  isOpen,
  onClose,
  categories = megaMenuCategories,
}: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay for mobile & tablet focus */}
      <div
        onClick={onClose}
        className="fixed inset-0 top-[52px] sm:top-[64px] lg:top-[72px] bg-black/50 backdrop-blur-xs z-40 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Full Width Mega Menu Overlay Dropdown */}
      <nav
        aria-label="Main Navigation Menu"
        className="relative z-50 w-full max-h-[calc(100dvh-56px)] sm:max-h-[calc(100dvh-68px)] lg:max-h-[82vh] overflow-y-auto overscroll-contain bg-[#f7f4ed] text-[#080b0d] shadow-2xl transition-all border-b-4 border-[#a53c33] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#e9e3d7] [&::-webkit-scrollbar-thumb]:bg-[#a53c33]/60 hover:[&::-webkit-scrollbar-thumb]:bg-[#a53c33]"
      >
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-7 lg:py-8">
          {/* Mega Menu Grid: 2 cols on mobile, 3 on tablet, 5 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-6 sm:gap-6 lg:gap-8">
            {categories.map((category) => (
              <div
                key={category.title}
                className="flex flex-col"
              >
                {/* Category Banner Header Box */}
                <div className="bg-[#a53c33] text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase text-center py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-none shadow-sm mb-2 sm:mb-2.5 select-none">
                  {category.title}
                </div>

                {/* Sub-items List with animated sliding underline */}
                <ul className="space-y-1 sm:space-y-1.5">
                  {category.items.map((item) => (
                    <li key={item.label} className="flex items-start">
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onClose}
                          className="group relative inline-flex items-center gap-1.5 text-xs sm:text-[13px] lg:text-sm font-medium text-[#272522] hover:text-[#a53c33] transition-colors py-1 sm:py-0.5 overflow-hidden leading-snug w-full"
                        >
                          <span className="truncate">{item.label}</span>
                          <svg
                            className="w-3 h-3 text-[#a53c33]/70 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          {/* Base static underline */}
                          <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#272522]/15" />
                          {/* Animated sliding underline */}
                          <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#a53c33] -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="group relative inline-block text-xs sm:text-[13px] lg:text-sm font-medium text-[#272522] hover:text-[#a53c33] transition-colors py-1 sm:py-0.5 overflow-hidden leading-snug w-full"
                        >
                          <span>{item.label}</span>
                          {/* Base static underline */}
                          <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#272522]/15" />
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
      </nav>
    </>
  );
}

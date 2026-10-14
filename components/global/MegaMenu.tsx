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
      { label: "Church History", href: "/about#history" },
      { label: "Patron Saint (St. Gregorios)", href: "/about#patron-saint" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Our Faith", href: "/about#faith" },
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
      { label: "Latest News", href: "#news" },
      { label: "Parish announcements", href: "#notices" },
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
  // {
  //   title: "DIRECTORY",
  //   items: [
  //     { label: "Members Login — Restricted Access", href: "/login" },
  //   ],
  // },
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
    <div className="relative w-full max-h-[82vh] overflow-y-auto bg-[#f7f4ed] text-[#080b0d] shadow-2xl transition-all [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#e9e3d7] [&::-webkit-scrollbar-thumb]:bg-[#a53c33]/60 hover:[&::-webkit-scrollbar-thumb]:bg-[#a53c33]">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-8">
        {/* Mega Menu Grid: 5 Columns in 2 Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {categories.map((category) => (
            <div key={category.title} className="flex flex-col">
              {/* Category Banner Header Box */}
              <div className="bg-[#a53c33] text-white text-xs font-bold tracking-wider uppercase text-center py-2 px-2.5 rounded-none shadow-sm mb-2.5">
                {category.title}
              </div>

              {/* Sub-items List with animated sliding underline */}
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.label} className="flex items-start">
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="group relative inline-block text-xs sm:text-sm font-medium text-[#272522] hover:text-[#a53c33] transition-colors py-0.5 overflow-hidden leading-snug"
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
                        onClick={onClose}
                        className="group relative inline-block text-xs sm:text-sm font-medium text-[#272522] hover:text-[#a53c33] transition-colors py-0.5 overflow-hidden leading-snug"
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
  );
}

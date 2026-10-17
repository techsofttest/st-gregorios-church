"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { donationCauses, DonationCause } from "@/data/donationsData";
import DonationModal from "./DonationModal";

export default function DonationsTabSection() {
  const [activeTabId, setActiveTabId] = useState<string>(donationCauses[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // Close QR modal on ESC key & prevent body scrolling
  useEffect(() => {
    if (!isQrModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsQrModalOpen(false);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isQrModalOpen]);

  const activeCause: DonationCause =
    donationCauses.find((c) => c.id === activeTabId) || donationCauses[0];

  return (
    <section className="pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-16">
        {/* 4 Category Tabs */}
        <ScrollReveal direction="up" duration={700}>
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-8 pb-px mb-12 sm:mb-16 border-b border-[#171715]/15">
            {donationCauses.map((cause) => {
              const isActive = cause.id === activeCause.id;
              return (
                <button
                  key={cause.id}
                  onClick={() => setActiveTabId(cause.id)}
                  type="button"
                  className={`group relative pb-4 px-3 sm:px-4 text-base sm:text-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2.5 ${isActive
                    ? "text-[#071b27] font-semibold"
                    : "text-[#171715]/80 hover:text-[#071b27]"
                    }`}
                >
                  <span className={`text-xs transition-colors ${isActive ? "text-[#a43a32]" : "text-[#171715]/30 group-hover:text-[#a43a32]"}`}>
                    ✠
                  </span>
                  <span>{cause.tabLabel}</span>

                  {/* Active bottom underline indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#a43a32]" />
                  )}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Tab Content: Left Title & Description (Mission Section style) + Right Payment QR */}
        <div key={activeCause.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column (7 cols): Title & Description matching MissionSection */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" duration={800}>
              <div className="flex items-center gap-2 text-[#a43a32] text-xs font-bold uppercase tracking-widest">
                <span>✠</span>
                <span>{activeCause.badge}</span>
              </div>

              <h2 className="section-title mt-3 text-[#1c1a17]">
                {activeCause.title} <span className="text-[#a43a32]">{activeCause.titleHighlight}</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#2c2a26] font-display font-light">
                {activeCause.fullDescription}
              </p>

              {/* Bullet points section */}
              <div className="mt-8 pt-6 border-t border-[#171715]/10">
                <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-[#a43a32]">
                  {activeCause.bulletHeading}
                </p>

                <div className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {activeCause.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2.5">
                      <span className="text-[#a43a32] text-sm font-bold select-none mt-0.5">✠</span>
                      <span className="text-sm sm:text-[15px] leading-relaxed text-[#3d3932]">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout box */}
              <div className="mt-8 py-1 text-sm sm:text-base leading-relaxed text-[#454038] italic">
                <p>{activeCause.callout}</p>
              </div>

              {/* Scripture quote */}
              <div className="mt-8 pt-6 border-t border-[#171715]/10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <p className="font-display italic text-sm sm:text-base text-[#1c1a17]">
                  “{activeCause.scriptureQuote}”
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#a43a32] whitespace-nowrap">
                  — {activeCause.scriptureCitation}
                </p>
              </div>

              {/* Ministry & Charity Trust Gallery Grid */}
              {activeCause.causeImages && activeCause.causeImages.length > 0 && (
                <div className="mt-10 pt-6 border-t border-[#171715]/10">
                  {/* <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a43a32]">
                      Field Impact &amp; Parish Outreach
                    </span>
                    <span className="text-xs text-[#171715]/50">
                      {activeCause.causeImages.length} Photographs
                    </span>
                  </div> */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeCause.causeImages.map((img, idx) => (
                      <div
                        key={`${img.src}-${idx}`}
                        className="group overflow-hidden flex flex-col"
                      >
                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#071b27]">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                        </div>
                        {img.caption && (
                          <div className="pt-2">
                            <p className="text-sm text-[#171715] leading-snug">
                              {img.caption}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Trigger Button */}
              {/* <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="secondary"
                  className="px-8 py-3.5"
                >
                  Submit Donation Details
                </Button>
                <span className="text-xs text-[#171715]/60 font-medium">
                  Scan QR code first or transfer directly, then notify the parish office.
                </span>
              </div> */}
            </ScrollReveal>
          </div>

          {/* Right Column (5 cols): Minimalist Professional Payment QR Card (Sticky on desktop) */}
          <div className="lg:col-span-5 h-full">
            <div className="lg:sticky lg:top-24 self-start">
              <div className="bg-[#f7f4ed] p-8 sm:p-10 flex flex-col items-center text-center">

                <h3 className="font-display text-2xl font-bold text-[#071b27] mt-1.5">
                  Scan to Contribute
                </h3>

                <p className="mt-1 text-xs text-[#171715]/75 max-w-xs">
                  Paytm · Google Pay · PhonePe · BHIM UPI
                </p>

                {/* QR Code Graphic (Click to open full screen) */}
                <div
                  onClick={() => setIsQrModalOpen(true)}
                  title="Click to view QR in full screen"
                  className="group relative mt-7 w-64 h-80 sm:w-72 sm:h-80 bg-white p-3 flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={activeCause.qrImage}
                      alt={`Payment QR Code for ${activeCause.tabLabel}`}
                      fill
                      sizes="320px"
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-white">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span className="text-xs font-bold">
                      Click to Enlarge
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-[11px] text-[#171715]/55">
                  Click the QR code to open in full screen
                </p>

                {/* Direct UPI ID Row */}
                <div className="mt-5 w-full bg-white px-5 py-3 flex items-center justify-between text-xs">
                  <span className="text-[#171715]/60 font-medium">UPI ID</span>
                  <span className="font-mono font-bold text-[#071b27] tracking-tight select-all">
                    {activeCause.upiId}
                  </span>
                </div>

                {/* Direct Bank Transfer Details */}
                {activeCause.accountDetails && (
                  <div className="mt-3.5 w-full text-left bg-white px-5 py-4 text-xs space-y-1.5 text-[#171715]/80">
                    <div className="font-bold text-[#071b27] pb-1 uppercase tracking-wider text-[11px]">
                      Direct Bank Wire (NEFT / RTGS)
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#171715]/60">A/C Name</span>
                      <span className="font-medium text-[#071b27] text-right truncate ml-2">
                        {activeCause.accountDetails.accountName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#171715]/60">A/C No</span>
                      <span className="font-mono font-bold text-[#071b27]">
                        {activeCause.accountDetails.accountNumber}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#171715]/60">Bank &amp; Branch</span>
                      <span className="font-medium text-[#071b27] text-right">
                        {activeCause.accountDetails.bankName}, {activeCause.accountDetails.branch}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#171715]/60">IFSC Code</span>
                      <span className="font-mono font-bold text-[#071b27]">
                        {activeCause.accountDetails.ifscCode}
                      </span>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="black"
                  className="mt-6 w-full py-3.5"
                >
                  Submit Payment Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {isQrModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full screen payment QR code"
          onClick={() => setIsQrModalOpen(false)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
        >
          {/* Close Button Top Right */}
          <button
            type="button"
            onClick={() => setIsQrModalOpen(false)}
            aria-label="Close full screen view"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-[#a43a32] text-white transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Centered Modal Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white p-6 sm:p-8 max-w-md w-full flex flex-col items-center text-center shadow-2xl"
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#071b27] mt-1 mb-1">
              {activeCause.tabLabel} QR Code
            </h3>

            {/* High-Res QR Image View */}
            <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] bg-white flex items-center justify-center">
              <Image
                src={activeCause.qrImage}
                alt={`Full screen QR for ${activeCause.tabLabel}`}
                fill
                priority
                sizes="(max-width: 640px) 288px, 320px"
                className="object-contain"
              />
            </div>

            {/* UPI ID Copy Pill */}
            <div className="mt-5 w-full bg-[#f7f4ed] px-4 py-2.5 flex items-center justify-between text-xs">
              <span className="text-[#171715]/60 font-medium">UPI ID</span>
              <span className="font-mono font-bold text-[#071b27] select-all">
                {activeCause.upiId}
              </span>
            </div>

            <Button
              onClick={() => setIsQrModalOpen(false)}
              variant="black"
              showArrow={false}
              className="mt-6 w-full py-3 text-xs"
            >
              Close Window
            </Button>
          </div>
        </div>
      )}

      {/* Donation Confirmation Modal */}
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cause={activeCause}
      />
    </section>
  );
}


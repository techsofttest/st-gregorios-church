"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CommitteeMemberCard from "@/components/committee/CommitteeMemberCard";
import { CommitteeMember } from "@/data/committeeData";

interface CommitteeGridSectionProps {
  members: CommitteeMember[];
}

export default function CommitteeGridSection({ members }: CommitteeGridSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { label: "All Members", value: "All" },
    { label: "Office Bearers", value: "office-bearer" },
    { label: "Managing Committee", value: "managing-committee" },
    { label: "Internal Auditor", value: "auditor" },
    { label: "Diocese Council", value: "council" },
  ];

  const filteredMembers =
    selectedCategory === "All"
      ? members
      : members.filter((member) => member.category === selectedCategory);

  const officeBearers = members.filter((m) => m.category === "office-bearer");
  const mcMembers = members.filter((m) => m.category === "managing-committee");
  const auditorsAndCouncil = members.filter(
    (m) => m.category === "auditor" || m.category === "council"
  );

  return (
    <section className="relative bg-[#f7f4ed] py-16 lg:py-24 overflow-hidden">
      {/* -------------------------------------------------------------
          ANCIENT ORTHODOX ARCHITECTURAL BACKGROUND (STICKY/FIXED SKETCH)
      -------------------------------------------------------------- */}
      <div className="fixed inset-0 h-screen w-full z-0 pointer-events-none opacity-[0.1] mix-blend-multiply overflow-hidden">
        <Image
          src="/sketch/sk1.png"
          alt=""
          fill
          priority={false}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f4ed] via-transparent to-[#f7f4ed]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-8 sm:px-12 lg:px-16">
        {/* Category Filter Bar */}
        <ScrollReveal direction="up" duration={700}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-none cursor-pointer ${selectedCategory === cat.value
                    ? "bg-[#a43a32] text-white shadow-sm"
                    : "bg-white text-[#3d3a34] border border-[#171715]/10 hover:border-[#a43a32] hover:text-[#a43a32]"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* If Filter is active (not 'All'), display flat grid */}
        {selectedCategory !== "All" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 items-end">
            {filteredMembers.map((member, idx) => (
              <ScrollReveal
                key={member.name}
                direction="up"
                delay={(idx % 5) * 80}
                duration={700}
                className={member.isVicar ? "col-span-2 sm:col-span-1 lg:col-span-1" : ""}
              >
                <CommitteeMemberCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          /* When 'All' is selected, display curated sections with bookmarks */
          <div className="space-y-20">
            {/* 1. Office Bearers */}
            <div id="office-bearers">
              <ScrollReveal direction="up" duration={700}>
                <div className="border-b border-[#171715]/10 pb-4 mb-8">
                  <p className="eyebrow text-[#a43a32]">Executive Stewardship</p>
                  <h2 className="section-title mt-1">
                    Vicar &amp; Office <span className="text-[#a43a32]">Bearers</span>
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 items-end">
                {officeBearers.map((member, idx) => (
                  <ScrollReveal
                    key={member.name}
                    direction="up"
                    delay={idx * 100}
                    duration={700}
                    className={member.isVicar ? "col-span-2 sm:col-span-1 lg:col-span-1" : ""}
                  >
                    <CommitteeMemberCard member={member} />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* 2. MC Members */}
            <div id="members">
              <ScrollReveal direction="up" duration={700}>
                <div className="border-b border-[#171715]/10 pb-4 mb-8">
                  <p className="eyebrow text-[#a43a32]">Parish Administration</p>
                  <h2 className="section-title mt-1">
                    Managing Committee <span className="text-[#a43a32]">Members</span>
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
                {mcMembers.map((member, idx) => (
                  <ScrollReveal
                    key={member.name}
                    direction="up"
                    delay={(idx % 5) * 80}
                    duration={700}
                  >
                    <CommitteeMemberCard member={member} />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* 3. Internal Auditor & Council Representatives */}
            <div id="auditor">
              <ScrollReveal direction="up" duration={700}>
                <div className="border-b border-[#171715]/10 pb-4 mb-8">
                  <p className="eyebrow text-[#a43a32]">Audit &amp; Diocesan Oversight</p>
                  <h2 className="section-title mt-1">
                    Internal Auditor &amp; <span className="text-[#a43a32]">Council Members</span>
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
                {auditorsAndCouncil.map((member, idx) => (
                  <ScrollReveal
                    key={member.name}
                    direction="up"
                    delay={idx * 100}
                    duration={700}
                  >
                    <CommitteeMemberCard member={member} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

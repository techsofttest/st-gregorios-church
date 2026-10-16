import Image from "next/image";
import { CommitteeMember } from "@/data/committeeData";

interface CommitteeMemberCardProps {
  member: CommitteeMember;
  isVicar?: boolean;
}

export default function CommitteeMemberCard({
  member,
  isVicar = false,
}: CommitteeMemberCardProps) {
  const vicarActive = member.isVicar || isVicar;

  return (
    <div
      className={`group block h-full flex flex-col transition-transform duration-300 ${
        vicarActive ? "lg:-translate-y-2" : ""
      }`}
    >
      {/* Image Container - Strictly Sharp Edges, Same Aspect Ratio & Hover Scale as CommitteeSection */}
      <div
        className={`relative w-full overflow-hidden bg-[#e9e3d7] transition-all duration-300 ${
          vicarActive ? "aspect-[4/5]" : "aspect-square"
        }`}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Member Info Below Image with Position & Name */}
      <div className="mt-3 flex flex-col flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-[#a43a32]">
          {member.position}
        </p>
        <h3
          className={`font-semibold text-[#1c1a17] group-hover:text-[#a43a32] transition-colors leading-snug mt-0.5 ${
            vicarActive ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          }`}
        >
          {member.name}
        </h3>
      </div>
    </div>
  );
}

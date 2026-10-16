import Image from "next/image";
import Link from "next/link";
import { EventItem } from "@/data/eventsData";

interface EventCardProps {
  item: EventItem;
  aspectRatioClass?: string;
}

export default function EventCard({
  item,
  aspectRatioClass = "aspect-[3/4]",
}: EventCardProps) {
  return (
    <Link href={item.link} className="group block rounded-none shadow-none h-full flex flex-col">
      {/* Image Container - Taller aspect ratio with sharp edges & contrast tuning */}
      <div className={`relative ${aspectRatioClass} w-full overflow-hidden bg-[#e6dfd1] rounded-none shadow-none`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center rounded-none shadow-none filter contrast-[1.05] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
        />
        {item.category && (
          <div className="absolute top-3 left-3 bg-[#9b3129] text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 shadow-sm">
            {item.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mt-3.5 flex flex-col flex-1">
        <h3 className="font-display text-base sm:text-[17px] font-bold leading-snug text-[#121416] group-hover:text-[#9b3129] transition-colors line-clamp-2">
          {item.title}
        </h3>

        {/* Date, Time & Location Footer with High Contrast */}
        <div className="mt-auto pt-2 mt-3.5 flex flex-col gap-1.5">
          <p className="text-[12px] font-bold tracking-wider text-[#9b3129] uppercase">
            {item.date}
          </p>
          {item.time && (
            <p className="text-[12px] font-medium text-[#403c36] leading-tight">
              {item.time} {item.location ? `· ${item.location}` : ""}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

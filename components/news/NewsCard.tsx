import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/data/newsData";

interface NewsCardProps {
  item: NewsItem;
  aspectRatioClass?: string;
  showExcerpt?: boolean;
}

export default function NewsCard({
  item,
  aspectRatioClass = "aspect-[4/3]",
  showExcerpt = false,
}: NewsCardProps) {
  return (
    <Link href={item.link} className="group block rounded-none shadow-none h-full flex flex-col">
      {/* Image Container - Strictly Sharp Edges / No Radius / No Shadow */}
      <div className={`relative ${aspectRatioClass} w-full overflow-hidden bg-[#e9e3d7] rounded-none shadow-none`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded-none shadow-none transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
        />
        {item.category && (
          <div className="absolute top-3 left-3 bg-[#a43a32] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
            {item.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col flex-1">
        <h3 className="text-sm font-semibold leading-snug text-[#080b0d] group-hover:text-[#a43a32] transition-colors line-clamp-3">
          {item.title}
        </h3>

        {showExcerpt && item.excerpt && (
          <p className="mt-2 text-xs leading-relaxed text-[#595349] line-clamp-2">
            {item.excerpt}
          </p>
        )}

        <p className="mt-auto pt-3 text-[11px] font-medium tracking-wider text-[#777064] uppercase">
          {item.date}
        </p>
      </div>
    </Link>
  );
}

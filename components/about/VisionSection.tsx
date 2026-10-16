import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function VisionSection() {
  return (
    <section className="relative bg-[#071b27] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[520px]">
        {/* Left: Text Information with container padding */}
        <div className="lg:col-span-7 flex flex-col justify-center py-20 lg:py-28 px-8 sm:px-12 lg:pl-16 lg:pr-12 xl:pl-24">
          <ScrollReveal direction="left" duration={800}>
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#d6b75b] text-xs font-bold uppercase tracking-widest">
                <span>✠</span>
                <span>Our Guiding Light</span>
              </div>

              <h2 className="section-title mt-3 text-white">
                Our <span className="text-[#d6b75b]">Vision</span>
              </h2>

              <p className="mt-8 text-lg sm:text-2xl leading-relaxed text-white/95 font-display font-light">
                “To be a Christ-centered, faith-filled and spiritually vibrant community, rooted in the
                Apostolic faith and Syriac Orthodox tradition, united with the Holy Apostolic See of
                Antioch and All the East, and witnessing Christ's love through worship, fellowship and
                service.”
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 text-xs tracking-wider uppercase text-[#d6b75b]">
                <span>Holy Apostolic See of Antioch</span>
                <span>·</span>
                <span>Mumbai Diocese</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Full Bleed Flush Image with no padding */}
        <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full w-full overflow-hidden bg-[#0c2433]">
          <Image
            src="/interior/Ornate Candlelit Chapel Altar.png"
            alt="Parish Gathering in Prayer"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

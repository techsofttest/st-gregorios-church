import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface DonationsHeroProps {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
}

export default function DonationsHero({
  eyebrow = "Charity & Christian Stewardship",
  title = "Support &",
  titleHighlight = "Sacred Offerings",
  description = "Join our parish in the divine ministry of mercy. Your generous tithes and charitable donations directly uplift underprivileged students, build homes for the poor, comfort our elderly, and sustain community healthcare relief.",
}: DonationsHeroProps) {
  return (
    <section className="relative w-full bg-[#071b27] text-white pt-32 pb-8 sm:pt-28 sm:pb-10 px-6 sm:px-12 lg:px-16 overflow-hidden">
      {/* Background Sanctuary Image with Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/interior/Ornate Symmetrical Church Sanctuary.png"
          alt="Church Sanctuary"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071b27]/90 via-[#071b27]/80 to-[#071b27]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#071b27]/50 to-[#071b27]" />
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <ScrollReveal direction="up" duration={800}>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[#d6b75b] text-sm">✠</span>
            <p className="eyebrow text-[#d6b75b]">{eyebrow}</p>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white mt-1">
            {title} <span className="text-[#d6b75b]">{titleHighlight}</span>
          </h1>
          <p className="mt-5 text-sm sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface DetailStorySectionProps {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  paragraphs: {
    id: string;
    text: string;
    isLead?: boolean;
    sectionHeading?: string;
    inlineImage?: {
      src: string;
      alt?: string;
      caption?: string;
      aspect?: "wide" | "standard" | "portrait";
      pairSrc?: string;
      pairCaption?: string;
    };
  }[];
  concludingCallouts?: string[];
  scriptureBadge?: {
    quote: string;
    citation: string;
  };
  blessing?: string;
}

export default function DetailStorySection({
  eyebrow,
  title,
  titleHighlight,
  paragraphs,
  concludingCallouts,
  scriptureBadge,
  blessing,
}: DetailStorySectionProps) {
  return (
    <section id="detail-story-section" className="relative py-24 lg:py-32 bg-[#f7f4ed] overflow-hidden">
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

      {/* Rotating Syriac Rosette in Background Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.045] text-[#d6b75b]">
        <svg
          width="750"
          height="750"
          viewBox="0 0 500 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="animate-[spin_90s_linear_infinite]"
        >
          <circle cx="250" cy="250" r="230" />
          <circle cx="250" cy="250" r="215" strokeDasharray="4 6" />
          <circle cx="250" cy="250" r="175" />
          <circle cx="250" cy="250" r="120" />
          <circle cx="250" cy="250" r="60" />
          <g strokeWidth="2">
            <line x1="250" y1="20" x2="250" y2="480" />
            <line x1="20" y1="250" x2="480" y2="250" />
            <line x1="87" y1="87" x2="413" y2="413" />
            <line x1="87" y1="413" x2="413" y2="87" />
          </g>
          <circle cx="250" cy="130" r="55" />
          <circle cx="250" cy="370" r="55" />
          <circle cx="130" cy="250" r="55" />
          <circle cx="370" cy="250" r="55" />
        </svg>
      </div>

      {/* Ambient Sanctuary Glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#d6b75b]/10 blur-3xl pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-[#a43a32]/10 blur-3xl pointer-events-none animate-[pulse_10s_ease-in-out_infinite]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-8 sm:px-12 lg:px-16 flex justify-center">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <ScrollReveal direction="up" duration={800}>
            <div className="text-center">
              <p className="eyebrow text-[#a43a32]">{eyebrow}</p>
              <h2 className="section-title mt-3">
                {title}
                {titleHighlight && (
                  <>
                    <br />
                    <span className="text-[#a43a32]">{titleHighlight}</span>
                  </>
                )}
              </h2>
            </div>
          </ScrollReveal>

          {/* Dynamic Staggered Paragraph Flow */}
          <div className="mt-10 space-y-7 text-base sm:text-lg leading-relaxed sm:leading-loose text-[#3d3a34]">
            {paragraphs.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                direction="up"
                delay={idx === 0 ? 80 : 120}
                duration={750}
              >
                <div>
                  {item.sectionHeading && (
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1a1916] mb-4 mt-8 pt-4 border-t border-[#171715]/10">
                      {item.sectionHeading}
                    </h3>
                  )}
                  <p
                    className={
                      item.isLead
                        ? "font-display text-xl sm:text-2xl text-[#1a1916] leading-snug"
                        : undefined
                    }
                  >
                    {item.text}
                  </p>

                  {/* Related Inline Image Between Paragraphs (Full width of text container) */}
                  {item.inlineImage && (
                    <div className="my-8 sm:my-10 w-full overflow-hidden bg-[#e9e3d7]">
                      <div className="relative w-full h-[280px] sm:h-[380px] md:h-[460px]">
                        <Image
                          src={item.inlineImage.src}
                          alt={item.inlineImage.alt || item.sectionHeading || "Church related photograph"}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px, 800px"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}

            {/* Concluding Callouts (if provided) */}
            {concludingCallouts && concludingCallouts.length > 0 && (
              <ScrollReveal direction="up" delay={150} duration={800}>
                <div className="pt-4 space-y-2.5">
                  {concludingCallouts.map((callout) => (
                    <p
                      key={callout}
                      className="font-display text-lg sm:text-xl font-semibold text-[#a43a32] transition-transform duration-300 hover:translate-x-1"
                    >
                      {callout}
                    </p>
                  ))}
                </div>
              </ScrollReveal>
            )}

            {/* Scripture Quote (if provided) */}
            {scriptureBadge && (
              <ScrollReveal direction="up" delay={180} duration={800}>
                <div className="pt-2">
                  <p className="font-display italic text-lg sm:text-xl text-[#1a1916]">
                    “{scriptureBadge.quote}”
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#a43a32]">
                    — {scriptureBadge.citation}
                  </p>
                </div>
              </ScrollReveal>
            )}

            {/* Closing Benediction */}
            {blessing && (
              <ScrollReveal direction="up" delay={200} duration={800}>
                <p className="font-display italic text-base sm:text-lg text-[#1a1916] font-medium pt-1">
                  {blessing}
                </p>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

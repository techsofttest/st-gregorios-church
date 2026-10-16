import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const storyParagraphs = [
  {
    id: "welcome-lead",
    text: "With great joy and gratitude to Almighty God, we welcome you to the official website of St. Gregorios Jacobite Syrian Orthodox Church.",
    isLead: true,
  },
  {
    id: "spiritual-home",
    text: "Our church is a spiritual home where we gather as one family in Christ, rooted in the apostolic faith and rich spiritual traditions of the Syriac Orthodox Church of Antioch. Inspired by the life and witness of St. Gregorios of Parumala, our patron saint, we strive to grow together in faith, prayer, love and service.",
  },
  {
    id: "universal-church",
    text: "Our Church is an integral part of the Universal Syriac Orthodox Church under the Apostolic See of Antioch and All the East and part of Mumbai Diocese.",
  },
  {
    id: "digital-window",
    text: "This website is intended to be a window into the life of our parish—a place where you can discover our faith, worship, ministries, spiritual activities and various fellowship initiatives. It also serves as a means of staying connected with our parish family, especially in an increasingly digital world.",
  },
  {
    id: "ministries-generation",
    text: "Our church seeks to nurture every generation through Holy Qurbana, prayer, Sunday School, Youth Association, Vanitha Samajam, Elders Forum, prayer fellowships, choir and other spiritual and charitable activities. We believe that the Church is not merely a place of worship, but a community where faith is lived, shared and expressed through love and service.",
  },
  {
    id: "journeying-together",
    text: "As we journey together in Christ, may our parish continue to be a place where faith is strengthened, families are nurtured, young people are inspired, the elderly are respected, and those in need find comfort and support.",
  },
  {
    id: "warm-welcome",
    text: "We warmly welcome you to explore our website and learn more about our parish, our ministries and our spiritual heritage. Whether you are a member of our parish, a member of the Jacobite Syrian Orthodox Church, or simply seeking a place of prayer and fellowship, you are always welcome among us.",
  },
  {
    id: "intercession",
    text: "May the intercession of St. Gregorios of Parumala, the prayers of Blessed Virgin Mother Mary, our Holy Fathers, and the abundant grace and mercy of our Lord Jesus Christ guide and bless each one of us.",
  },
];

export default function AboutStorySection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#f7f4ed] overflow-hidden">
      {/* -------------------------------------------------------------
          ANCIENT ORTHODOX ARCHITECTURAL BACKGROUND (ANIMATED & LAYERED)
      -------------------------------------------------------------- */}

      {/* Ancient Orthodox Architectural Sketch Background — Fixed 100vh Background */}
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

      {/* 4. Giant Slow-Rotating Syriac Rosette in Background Center */}
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
          {/* Sacred geometry concentric circles */}
          <circle cx="250" cy="250" r="230" />
          <circle cx="250" cy="250" r="215" strokeDasharray="4 6" />
          <circle cx="250" cy="250" r="175" />
          <circle cx="250" cy="250" r="120" />
          <circle cx="250" cy="250" r="60" />
          {/* 8-Pointed Syriac Cross Ray lines */}
          <g strokeWidth="2">
            <line x1="250" y1="20" x2="250" y2="480" />
            <line x1="20" y1="250" x2="480" y2="250" />
            <line x1="87" y1="87" x2="413" y2="413" />
            <line x1="87" y1="413" x2="413" y2="87" />
          </g>
          {/* Petals / Arch Rosette details */}
          <circle cx="250" cy="130" r="55" />
          <circle cx="250" cy="370" r="55" />
          <circle cx="130" cy="250" r="55" />
          <circle cx="370" cy="250" r="55" />
        </svg>
      </div>

      {/* 5. Ambient Golden Sanctuary Light Floats */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#d6b75b]/10 blur-3xl pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-[#a43a32]/10 blur-3xl pointer-events-none animate-[pulse_10s_ease-in-out_infinite]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-8 sm:px-12 lg:px-16 flex justify-center">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <ScrollReveal direction="up" duration={800}>
            <div className="text-center">
              <p className="eyebrow text-[#a43a32]">Our Parish Community</p>
              <h2 className="section-title mt-3">
                Our Church is <br />
                <span className="text-[#a43a32]">Our Spiritual Home.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Dynamic Staggered Paragraph Flow */}
          <div className="mt-10 space-y-7 text-base sm:text-lg leading-relaxed sm:leading-loose text-[#3d3a34]">
            {/* Dynamic Paragraph Mapping with Single <p> Tag Template */}
            {storyParagraphs.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                direction="up"
                delay={idx === 0 ? 80 : 120}
                duration={750}
              >
                <p
                  className={
                    item.isLead
                      ? "font-display text-xl sm:text-2xl text-[#1a1916] leading-snug"
                      : undefined
                  }
                >
                  {item.text}
                </p>
              </ScrollReveal>
            ))}

            {/* Welcome Proclamations */}
            <ScrollReveal direction="up" delay={150} duration={800}>
              <div className="pt-4 space-y-2.5">
                <p className="font-display text-lg sm:text-xl font-semibold text-[#a43a32] transition-transform duration-300 hover:translate-x-1">
                  Welcome to our parish family.
                </p>
                <p className="font-display text-lg sm:text-xl font-semibold text-[#a43a32] transition-transform duration-300 hover:translate-x-1">
                  Welcome to our spiritual home.
                </p>
                <p className="font-display text-lg sm:text-xl font-semibold text-[#a43a32] transition-transform duration-300 hover:translate-x-1">
                  Welcome to St. Gregorios Jacobite Syrian Orthodox Church.
                </p>
              </div>
            </ScrollReveal>

            {/* Ephesians 4:5 Scripture Quote */}
            <ScrollReveal direction="up" delay={180} duration={800}>
              <div className="pt-2">
                <p className="font-display italic text-lg sm:text-xl text-[#1a1916]">
                  “One Lord, one faith, one baptism.”
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#a43a32]">
                  — Ephesians 4:5
                </p>
              </div>
            </ScrollReveal>

            {/* Closing Benediction */}
            <ScrollReveal direction="up" delay={200} duration={800}>
              <p className="font-display italic text-base sm:text-lg text-[#1a1916] font-medium pt-1">
                May God bless you and your family abundantly.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

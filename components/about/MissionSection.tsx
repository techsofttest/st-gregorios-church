import ScrollReveal from "@/components/ui/ScrollReveal";

const missionPoints = [
  "Preserve and strengthen our faith and spiritual heritage",
  "Nurture children and youth through Christian education and spiritual formation",
  "Strengthen families through fellowship, prayer and pastoral care",
  "Promote love, unity and fellowship among our parish members",
  "Serve the wider community with compassion, humility and Christ-like love",
  "Extend charitable support to the poor, needy, elderly, sick and vulnerable",
  "Respond to social needs through acts of mercy, charity and community service",
  "Encourage every member to become a witness for Christ through a life of faith, service and love",
];

export default function MissionSection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-8 sm:px-12 lg:px-16">
        <ScrollReveal direction="up" duration={800}>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[#a43a32] text-xs font-bold uppercase tracking-widest">
              <span>✠</span>
              <span>Our Purpose in Action</span>
            </div>

            <h2 className="section-title mt-3 text-[#1c1a17]">
              Our <span className="text-[#a43a32]">Mission</span>
            </h2>

            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[#2c2a26] font-display font-light">
              Our mission is to nurture a vibrant Christian community rooted in the apostolic faith and
              traditions of the Jacobite Syrian Orthodox Church, and to guide every member towards a
              deeper relationship with God through worship, prayer, Scripture and the Holy Sacraments.
            </p>

            <div className="mt-12 pt-8 border-t border-[#171715]/10">
              <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-[#a43a32]">
                We Strive To:
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-5">
                {missionPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="text-[#a43a32] text-sm font-bold select-none mt-0.5">✠</span>
                    <span className="text-base sm:text-[17px] leading-relaxed text-[#3d3932]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 space-y-3 border-l-2 border-[#a43a32] pl-6 py-2 text-base sm:text-lg leading-relaxed text-[#454038] italic">
              <p>
                Inspired by the example of St. Gregorios of Parumala, we believe that our faith must
                be expressed not only through worship, but also through service, compassion and
                charity.
              </p>
              <p>
                Our desire is to be a parish where faith leads to service, prayer leads to compassion,
                and fellowship leads to a stronger and more caring community.
              </p>
            </div>

            {/* Scripture quote */}
            <div className="mt-12 pt-8 border-t border-[#171715]/10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
              <p className="font-display italic text-lg sm:text-xl text-[#1c1a17]">
                “Let us not love with words or speech but with actions and in truth.”
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#a43a32] whitespace-nowrap">
                — 1 John 3:18
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

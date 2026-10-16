import ScrollReveal from "@/components/ui/ScrollReveal";

const commitments = [
  {
    num: "01",
    title: "Rooted in Faith",
    desc: "Anchored in apostolic Syrian Orthodox theology, liturgical devotion, and sacred sacraments.",
  },
  {
    num: "02",
    title: "United with Antioch",
    desc: "In communion with the Supreme Holy Apostolic See of Antioch and All the East.",
  },
  {
    num: "03",
    title: "Inspired by Christ",
    desc: "Following the footsteps of our Lord Jesus Christ through humility, prayer, and grace.",
  },
  {
    num: "04",
    title: "Serving with Love",
    desc: "Translating faith into selfless action, caring compassion, and active Christian fellowship.",
  },
];

export default function CommitmentSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#071b27] text-white overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-8 sm:px-12 lg:px-16">
        <ScrollReveal direction="up" duration={800}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-[#d6b75b]">Apostolic Foundations</p>
            <h2 className="section-title mt-3 text-white">
              Our <span className="text-[#d6b75b]">Commitment</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {commitments.map((item, idx) => (
            <ScrollReveal
              key={item.title}
              direction="up"
              delay={idx * 100}
              duration={750}
            >
              <div className="group bg-[#0c2433] hover:bg-[#112d3e] p-7 sm:p-9 h-full flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-1.5">
                <div>
                  <span className="font-display text-sm font-bold text-[#d6b75b] tracking-widest">
                    {item.num}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-semibold mt-3 text-white transition-colors group-hover:text-[#e1c66c]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-white/75">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

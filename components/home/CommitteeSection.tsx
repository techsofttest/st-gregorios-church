import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Member {
  name: string;
  image: string;
}

export default function CommitteeSection() {
  const members: Member[] = [
    { name: "A M Sunny", image: "/committee-members/A M_Sunny.jpg" },
    { name: "Jacob Thomas", image: "/committee-members/Jacob_Thomas.jpg" },
    { name: "Poppy Elizebeth Babu", image: "/committee-members/POPPY_ELIZEBETH_BABU.jpg" },
    { name: "Biju Varghese", image: "/committee-members/BIJU_VARGHESE2.jpg" },
    { name: "George Poulose", image: "/committee-members/George_Poulose.jpg" },
  ];

  return (
    <section className="bg-white py-20 lg:py-24 overflow-hidden border-t border-[#071b27]/10">
      <div className="mx-auto max-w-[1500px] px-8 sm:px-12 lg:px-16">
        {/* Header with Title & View All Link */}
        <ScrollReveal direction="up" duration={800}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-[#a43a32]">Leadership &amp; Service</p>
              <h2 className="section-title mt-3">
                Managing <span className="text-[#a43a32]">Committee</span>
              </h2>
            </div>

            <Link
              href="/committee"
              className="text-xs font-bold tracking-widest text-[#a43a32] uppercase hover:underline transition-all pb-1 self-start sm:self-end"
            >
              View Full Committee →
            </Link>
          </div>
        </ScrollReveal>

        {/* 5 Members Static Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {members.map((member, idx) => (
            <ScrollReveal
              key={member.name}
              direction="up"
              delay={idx * 100}
              duration={700}
            >
              <div className="group block">
                {/* Image Container - Square 1:1 aspect ratio, sharp corners, no shadow */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#e9e3d7]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                </div>

                {/* Member Info Below Image */}
                <div className="mt-3">
                  <h3 className="font-display text-base font-semibold text-[#1c1a17] group-hover:text-[#a43a32] transition-colors leading-snug">
                    {member.name}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


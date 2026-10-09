import Image from "next/image";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PatriarchSectionProps {
  imageSrc?: string;
}

export default function PatriarchSection({ imageSrc }: PatriarchSectionProps) {
  return (
    <section className="bg-[#e9e3d7] overflow-hidden">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        {/* Content Container (Left Side) */}
        <div className="flex items-center px-7 py-20 sm:px-12 lg:px-16 xl:px-24">
          <ScrollReveal direction="left" duration={850}>
            <div className="max-w-[650px]">
              <p className="eyebrow text-[#a43a32]">
                The Universal Syriac Orthodox Church
              </p>

              <h2 className="section-title mt-5">
                His Holiness
                <br />
                Moran Mor
                <br />
                <span className="text-[#a43a32]">Ignatius Aphrem II</span>
              </h2>


              <p className="mt-7 text-xs font-semibold tracking-[0.15em] text-[#4d4840]">
                Patriarch of Antioch and All the East
              </p>

              <p className="mt-8 text-[15px] leading-8 text-[#3d3932]">
                Spiritual father of the Syriac Orthodox faithful throughout the
                world, His Holiness continues the ancient Apostolic ministry of
                the See of Antioch, guiding the Church in faith, worship, unity
                and service.
              </p>

              <Button href="/patriarch" variant="black" className="mt-9">
                Read his story
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Image Container (Right Side) */}
        <ScrollReveal direction="right" delay={200} duration={850} className="h-full">
          <div className="relative min-h-[600px] h-full w-full">
            <Image
              src="/moran-mor-ignatius-Aphrem/His-Holiness-Moran-Mor-Ignatius-Aphrem-II.png"
              alt="Syriac Orthodox ecclesiastical portrait"
              fill
              className="object-cover grayscale-[15%]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#e9e3d7] via-[#e9e3d7]/40 to-transparent pointer-events-none" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  const ministries = [
    "Holy Qurbana",
    "Sunday School",
    "Youth Association",
    "Morth Mariam Vanitha Samajam",
    "Elders Forum",
    "Prayer Fellowships",
    "Choir",
    "Antiochian Faith Protection Movement",
    "Charitable Activities",
  ];

  return (
    <footer className="relative bg-[#e9e3d7] px-8 sm:px-12 lg:px-16 pt-16 pb-12 text-[#0c0e10]">
      {/* Overlapping St. Gregorios Image on Left Side */}
      <div className="absolute top-0 left-4 hidden lg:block w-[32vw] max-w-[420px] pointer-events-none z-30 -translate-y-28 xl:-translate-y-36">
        <Image
          src="/st-gregorios/st-gregorios-b.png"
          alt="St. Gregorios of Parumala"
          width={420}
          height={600}
          style={{ width: "auto", height: "auto" }}
          className="h-auto w-full object-contain object-top"
          priority
        />
      </div>


      {/* Background Graphic: Church Shadow Red at Bottom Right */}
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-40 flex justify-end max-w-[50vw] lg:max-w-[650px] z-0">
        <Image
          src="/design-elm/chirch-shadow-red.png"
          alt="Church Silhouette"
          width={650}
          height={200}
          style={{ width: "auto", height: "auto" }}
          className="w-full h-auto object-bottom object-right object-contain"
        />
      </div>


      <div className="relative z-10 mx-auto max-w-[1500px]">
        <ScrollReveal direction="up" duration={800}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start lg:pl-[34%]">
            <div>
              <div className="flex items-center gap-3.5">
                <Image
                  src="/logo/logo.png"
                  alt="St. Gregorios Logo"
                  width={52}
                  height={52}
                  className="h-14 w-14 object-contain"
                />
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-[#0c0e10] leading-none">
                    St. Gregorios
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#8b2d26]">
                    Jacobite Syrian Orthodox Church
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-[420px] text-sm leading-6 text-[#0c0e10]/90 font-normal">
                Rooted in the apostolic faith and spiritual heritage of the
                Syriac Orthodox Church of Antioch.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b2d26]">
                Worship Schedule
              </p>
              <div className="mt-4 space-y-2.5 text-sm text-[#0c0e10] font-medium">
                <p>Sunday · 7:30 AM — Morning Prayer</p>
                <p>Sunday · 8:30 AM — Holy Qurbana</p>
                <p>Friday · 6:30 PM — Evening Prayer</p>
                <p>Friday · 7:00 PM — Holy Qurbana</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Ministries Grid Section (Pushed right on desktop) */}
        <ScrollReveal direction="up" delay={200} duration={800}>
          <div className="mt-12 mb-8 lg:pl-[34%]">
            <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {ministries.map((item, index) => (
                <Link
                  href="/ministries"
                  key={item}
                  className="group flex items-center justify-between py-2 pr-3 transition-colors hover:text-[#8b2d26]"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xs font-bold text-[#8b2d26]">
                      0{index + 1}
                    </span>
                    <span className="font-display text-sm sm:text-base font-semibold text-[#0c0e10] transition-colors group-hover:text-[#8b2d26]">
                      {item}
                    </span>
                  </div>
                  <span className="text-[#8b2d26] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 flex flex-col justify-between items-center gap-4 pt-6 border-t border-[#0c0e10]/15 text-xs font-medium tracking-[0.12em] text-[#0c0e10] sm:flex-row">
          <p>© 2026 St. Gregorios Jacobite Syrian Orthodox Church</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.techsoftweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8b2d26] font-semibold hover:underline underline-offset-4 transition-colors text-[#0c0e10]"
            >
              Web Design Company in Kochi Techsoft
            </a>
          </div>
          <p>Faith · Heritage · Fellowship · Service</p>
        </div>
      </div>
    </footer>
  );
}


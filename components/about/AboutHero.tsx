import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#080b0d] lg:min-h-[100vh] flex flex-col justify-center pt-24 pb-16 text-white">
      {/* Background Sanctuary Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/interior/Symmetrical Syrian Orthodox Sanctuary.png"
          alt="St. Gregorios Sanctuary"
          fill
          priority
          className="object-cover object-center brightness-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b0d] via-transparent to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto max-w-[1400px] px-8 sm:px-12 lg:px-16">
        <div className="max-w-3xl">
          {/* Header Badge */}
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/logo/logo.png"
              alt="St. Gregorios Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="eyebrow text-[#d6b75b]">
              Apostolic See of Antioch <br />Mumbai Diocese
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl font-semibold leading-tight text-white">
            Welcome to St. Gregorios <br />
            <span className="text-[#d6b75b]">Jacobite Syrian Orthodox Church</span>
          </h1>

          {/* Scripture Verse Quote */}
          <div className="mt-8 py-1 max-w-2xl bg-black/30 backdrop-blur-sm">
            <p className="font-display italic text-base sm:text-lg text-white/95">
              “Come, let us worship and bow down; let us kneel before the Lord our Maker.”
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#d6b75b]">
              — Psalm 95:6
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

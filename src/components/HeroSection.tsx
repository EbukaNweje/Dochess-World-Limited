import Image from "next/image";

const stats = [
  { label: "Luxury formulas", value: "150+" },
  { label: "5-star reviews", value: "4.8" },
  { label: "Worldwide shipping", value: "35+ countries" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050409] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="relative z-10">
          <div className="mb-6 inline-flex rounded-full bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/80 ring-1 ring-white/10">
            Signature collection
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-6xl">
            Fall in love with our signature perfumes.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            Discover luxury fragrances crafted for modern elegance. From refined
            sprays to home diffusers, Dochess World brings lasting scent and
            unforgettable style.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-[#e5c185] px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-[#e5c185]/20 transition hover:bg-[#f2d29e]"
            >
              Shop the collection
            </a>
            {/* <a
              href="#story"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/20"
            >
              Explore our story
            </a> */}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -top-10 -z-10 rounded-full bg-gradient-to-r from-[#d6a961]/20 via-transparent to-[#e5d8c4]/15 blur-3xl" />
          <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_80px_120px_rgba(0,0,0,0.25)] sm:p-8">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-slate-950/80">
              <Image
                src="/DochessWorldLogo.jpeg"
                alt="Dochess World perfume brand"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

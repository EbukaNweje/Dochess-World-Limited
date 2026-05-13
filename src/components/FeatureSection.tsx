const features = [
  {
    title: "Elegance in every bottle",
    description:
      "Crafted from premium ingredients, our perfumes blend sophistication with long-lasting aroma for day and night.",
  },
  {
    title: "Scented spaces",
    description:
      "Luxury diffusers and candles created to elevate your home, office, and car with a refined fragrance experience.",
  },
  {
    title: "Custom and wholesale",
    description:
      "Personalized scents, retail-ready packaging, and industry-grade oils for discerning customers worldwide.",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#9e7c54]">
            Why Dochess World
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Perfume craftsmanship designed for modern luxury.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Explore the signature collection and discover how every fragrance is
            made to impress, inspire, and last.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-200/50"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

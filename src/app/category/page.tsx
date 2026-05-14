import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  {
    name: "Perfumes",
    description: "Premium fragrances for men, women, and unisex",
    items: [
      "Male Fragrances",
      "Female Fragrances",
      "Unisex Fragrances",
      "Kids Fragrances",
    ],
  },
  {
    name: "Diffusers",
    description: "Luxury home and office fragrance solutions",
    items: [
      "Room Diffusers",
      "Car Diffusers",
      "Office Diffusers",
      "Ambient Scents",
    ],
  },
  {
    name: "Scented Candles",
    description: "Hand-poured scented Scented Candles for ambiance",
    items: [
      "Home Scented Candles",
      "Luxury Scented Candles",
      "Travel Scented Candles",
      "Gift Sets",
    ],
  },
  {
    name: "Raw Perfume Oils",
    description: "Pure concentrated fragrance oils",
    items: ["3ml Vials", "5ml Bottles", "50ml Bottles", "Bulk Oils (500ml+)"],
  },
];

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-[#050409]">
      <Header />

      <div className="pt-24">
        <section className="bg-[#0f172a] py-16 text-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Product Categories
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Explore our diverse range of fragrances and scented products, each
              category carefully curated for quality and luxury.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-[#d6ab6b]/50"
                >
                  <h2 className="text-2xl font-bold text-white">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-slate-300">{category.description}</p>

                  <ul className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <span className="text-[#d6ab6b]">→</span> {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/shop"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#e5c185] px-6 py-2 text-sm font-semibold text-black transition hover:bg-[#f2d29e]"
                  >
                    Browse {category.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] py-16 text-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 text-center">
            <h2 className="text-2xl font-bold">
              Can't find what you're looking for?
            </h2>
            <p className="mt-3 text-slate-300">
              Our team can help you find the perfect fragrance or create a
              custom blend.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#e5c185] px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#f2d29e]"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

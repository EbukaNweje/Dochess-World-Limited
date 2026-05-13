import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050409]">
      <Header />

      <div className="pt-24">
        <section className="bg-[#0f172a] py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Dochess World Limited
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Where Luxury Meets Timeless Fragrance
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Dochess World Limited was founded with a single vision: to bring
                luxury fragrances and scented experiences to people worldwide.
                We believe that every individual deserves to feel sophisticated,
                confident, and celebrated through the power of exceptional
                fragrances.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-white">
                Our Mission
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                We specialize in crafting premium perfumes, luxury diffusers,
                scented candles, and 100% raw oil fragrances. From intimate 3ml
                personal vials to industrial 5kg bottles, we cater to individual
                enthusiasts, retailers, and wholesale partners alike. Every
                product is created with carefully selected, premium-quality
                ingredients to deliver long-lasting freshness, rich aroma
                projection, and an unforgettable luxury experience.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-white">
                What We Offer
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-semibold text-[#d6ab6b]">
                    Premium Fragrances
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Male, female, unisex, and kids fragrances designed to
                    reflect elegance, confidence, and sophistication.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-semibold text-[#d6ab6b]">
                    Luxury Diffusers
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Home, office, and car diffusers crafted to elevate any space
                    with refined fragrance experiences.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-semibold text-[#d6ab6b]">
                    Scented Candles
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Hand-poured candles with premium wax and natural fragrance
                    oils for ambient luxury.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-semibold text-[#d6ab6b]">
                    Raw Oil Fragrances
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    100% raw, concentrated fragrance oils in sizes from 3ml to
                    5kg for personal and bulk use.
                  </p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-white">
                Why Choose Dochess World?
              </h2>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#d6ab6b]">✓</span>
                  <span>
                    <strong>Premium Quality:</strong> Crafted with carefully
                    selected, high-quality ingredients.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#d6ab6b]">✓</span>
                  <span>
                    <strong>Long-Lasting:</strong> Rich aroma projection that
                    lasts throughout the day or night.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#d6ab6b]">✓</span>
                  <span>
                    <strong>Diverse Range:</strong> From personal fragrances to
                    wholesale bulk orders.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#d6ab6b]">✓</span>
                  <span>
                    <strong>Luxury Packaging:</strong> Every fragrance is
                    presented in elegant, premium packaging.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#d6ab6b]">✓</span>
                  <span>
                    <strong>Worldwide Shipping:</strong> We ship to 35+
                    countries.
                  </span>
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold text-white">
                Our Commitment
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                At Dochess World Limited, we're committed to defining luxury
                through fragrance. Every product we create is a testament to our
                dedication to excellence, elegance, and your unforgettable
                experience. Whether you're a fragrance enthusiast, a retailer,
                or someone discovering luxury scents for the first time, we're
                here to celebrate you.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] py-16 text-white">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
            <h2 className="text-2xl font-bold">
              Join the Dochess World Experience
            </h2>
            <p className="mt-3 text-slate-300">
              Discover luxury fragrances that celebrate your unique story.
            </p>
            <a
              href="/shop"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#e5c185] px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#f2d29e]"
            >
              Shop Now
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

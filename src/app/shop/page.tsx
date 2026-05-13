import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductListing from "@/components/ProductListing";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#050409]">
      <Header />

      <div className="pt-24">
        <section className="bg-[#0f172a] py-16 text-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Shop Our Collection
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Browse our complete range of premium fragrances, diffusers,
              candles, and oils. Every product is crafted for luxury and
              elegance.
            </p>
          </div>
        </section>

        <div className="bg-[#050409]">
          <ProductListing />
        </div>

        <section className="bg-[#0f172a] py-16 text-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12">
              <h2 className="text-2xl font-semibold">
                Need Bulk Orders or Wholesale?
              </h2>
              <p className="mt-3 text-slate-300">
                We offer special pricing for retailers, resellers, and bulk
                customers. Contact our team for custom packages.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#e5c185] px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#f2d29e]"
              >
                Get Wholesale Pricing
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

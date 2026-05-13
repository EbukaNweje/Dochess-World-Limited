import React from "react";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductListing from "@/components/ProductListing";

const page = () => {
  return (
    <main className="min-h-screen bg-[#050409] text-white">
      <Header />
      <HeroSection />
      <FeatureSection />
      <ProductListing />
      <section className="bg-[#0f172a] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#d6ab6b]">
                Crafted for distinction
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                The art of fragrance meets luxury design.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                From statement scents to ambient home rituals, Dochess World
                creates fragrant moments that feel bold, elegant, and entirely
                premium.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-full bg-[#e5c185] px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-[#e5c185]/20 transition hover:bg-[#f2d29e]"
                >
                  Shop now
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/20"
                >
                  Contact us
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 sm:p-12">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6ab6b]">
                    Collection highlight
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    Signature Noir
                  </h3>
                  <p className="mt-3 text-base leading-8 text-slate-300">
                    A rich, memorable fragrance with warm amber, black currant,
                    and leather notes — designed for evenings and unforgettable
                    first impressions.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-700 bg-slate-950/70 p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                      Fragrance notes
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      <li>Top: Bergamot, Pear</li>
                      <li>Heart: Jasmine, Patchouli</li>
                      <li>Base: Amber, Musk</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-slate-700 bg-slate-950/70 p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                      Why it stands out
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      Premium formulation, long-lasting scent, and luxury
                      packaging that elevates every gifting and self-care
                      moment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;

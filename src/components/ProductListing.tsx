"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type Product = {
  _id?: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  category?: string;
};

const whatsappNumber = "2347025988268";

export default function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Unable to load products.");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const handleBuyNow = (product: Product) => {
    const priceValue = Number(product.price ?? 0);
    const priceText =
      Number.isFinite(priceValue) && priceValue >= 0
        ? `₦${priceValue}`
        : "price available";
    const message = `Hi! I'm interested in buying *${product.name}* (${priceText}). Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="shop" className="bg-[#050409] py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#d6ab6b]">
            Shop our collection
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Explore our premium fragrances.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Handpicked perfumes, diffusers, and scented products crafted for
            luxury and elegance.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-white">Loading products…</div>
        ) : error ? (
          <div className="text-center text-red-400">{error}</div>
        ) : products.length === 0 ? (
          <div className="text-center text-white">
            No products available yet.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product._id ?? product.name}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-[#d6ab6b]/50"
              >
                <div className="relative aspect-3/4 overflow-hidden bg-slate-900">
                  <Image
                    src={product.imageUrl || "/DochessWorldLogo.jpeg"}
                    alt={product.name}
                    width={500}
                    height={700}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                    unoptimized={Boolean(
                      product.imageUrl && product.imageUrl.startsWith("data:"),
                    )}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6ab6b]">
                    {product.category || "Fragrance"}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {product.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xl font-bold text-[#e5c185]">
                      {Number.isFinite(Number(product.price))
                        ? `₦${Number(product.price)}`
                        : "Contact us"}
                    </span>
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="rounded-full bg-[#e5c185] px-6 py-2 text-sm font-semibold text-black transition hover:bg-[#f2d29e]"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

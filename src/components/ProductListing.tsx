"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Signature Noir",
    price: "₦15,500",
    description: "Rich amber, black currant, and leather",
    image: "/DochessWorldLogo.jpeg",
    category: "Perfume",
  },
  {
    id: 2,
    name: "Golden Elegance",
    price: "₦12,900",
    description: "Floral jasmine and vanilla notes",
    image: "/DochessWorldLogo.jpeg",
    category: "Perfume",
  },
  {
    id: 3,
    name: "Luxury Diffuser",
    price: "₦8,500",
    description: "Home fragrance with lasting aroma",
    image: "/DochessWorldLogo.jpeg",
    category: "Diffuser",
  },
  {
    id: 4,
    name: "Premium Candle",
    price: "₦6,200",
    description: "Scented candle for ambient luxury",
    image: "/DochessWorldLogo.jpeg",
    category: "Candle",
  },
  {
    id: 5,
    name: "Unisex Essence",
    price: "₦14,000",
    description: "Versatile fragrance for everyone",
    image: "/DochessWorldLogo.jpeg",
    category: "Perfume",
  },
  {
    id: 6,
    name: "Raw Oil 5ml",
    price: "₦3,500",
    description: "Pure concentrated fragrance oil",
    image: "/DochessWorldLogo.jpeg",
    category: "Oil",
  },
];

const whatsappNumber = "2348125569262";

export default function ProductListing() {
  const handleBuyNow = (product: (typeof products)[0]) => {
    const message = `Hi! I'm interested in buying *${product.name}* (${product.price}). Can you provide more details?`;
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
            Handpicked perfumes, diffusers, and Scented Candles crafted for
            luxury and elegance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-[#d6ab6b]/50"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6ab6b]">
                  {product.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {product.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xl font-bold text-[#e5c185]">
                    {product.price}
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
      </div>
    </section>
  );
}

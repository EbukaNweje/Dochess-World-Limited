export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Dochess World Limited
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Where luxury meets timeless fragrance. Crafted for elegance,
              confidence, and sophistication.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <a href="/" className="transition hover:text-[#d6ab6b]">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="transition hover:text-[#d6ab6b]">
                  Shop
                </a>
              </li>
              <li>
                <a href="/category" className="transition hover:text-[#d6ab6b]">
                  Category
                </a>
              </li>
              <li>
                <a href="/about" className="transition hover:text-[#d6ab6b]">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Collections</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <a href="#" className="transition hover:text-[#d6ab6b]">
                  Perfumes
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#d6ab6b]">
                  Diffusers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#d6ab6b]">
                  Candles
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#d6ab6b]">
                  Raw Oils
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="https://wa.me/2348125569262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#d6ab6b]"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@dochessworld.com"
                  className="transition hover:text-[#d6ab6b]"
                >
                  Email
                </a>
              </li>
              <li>
                <a href="/contact" className="transition hover:text-[#d6ab6b]">
                  Contact Form
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          <p>
            &copy; {currentYear} Dochess World Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

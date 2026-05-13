import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Category", href: "/category" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#050409]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src="/DochessWorldLogo.jpeg"
              alt="Dochess World logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-lg font-semibold tracking-[0.08em]">
            Dochess World
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

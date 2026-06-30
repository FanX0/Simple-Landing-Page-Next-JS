import { siteConfig } from "@/config/site"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-lg font-bold tracking-tight">
          {siteConfig.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition hover:text-gray-950"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#start"
          className="rounded-full bg-gray-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Get Started
        </a>
      </nav>
    </header>
  )
}

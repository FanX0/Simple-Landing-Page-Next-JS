import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">
        <p>
          © 2026 {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a href="#" className="hover:text-gray-950">
            Privacy
          </a>

          <a href="#" className="hover:text-gray-950">
            Terms
          </a>

          <a href="#" className="hover:text-gray-950">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

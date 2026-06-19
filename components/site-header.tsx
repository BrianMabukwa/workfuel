"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"

const links = [
  { href: "/", label: "Home" },
  { href: "/snack-boxes", label: "Snack Boxes" },
  { href: "/add-ons", label: "Add-ons" },
  { href: "/about", label: "About Us" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { count } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-[#0f2d24]">
          Work<span className="text-[#e8a317]">Fuel</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors hover:text-[#0f2d24]",
                  active ? "text-[#0f2d24]" : "text-gray-500",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-[#e8a317] transition-all duration-300",
                    active ? "w-full" : "w-0",
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="hidden size-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-[#0f2d24] sm:flex"
          >
            <Search className="size-5" />
          </button>

          <Link
            href="/checkout"
            aria-label="View cart"
            className="relative flex size-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-[#0f2d24]"
          >
            <ShoppingCart className="size-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-[#e8a317] text-[11px] font-bold text-[#0f2d24]">
                {count}
              </span>
            )}
          </Link>

          <Link
            href="/checkout"
            className="ml-1 rounded-lg bg-[#e8a317] px-4 py-2 text-sm font-semibold text-[#0f2d24] shadow-sm transition-all hover:brightness-95 active:translate-y-px"
          >
            Order Now
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-full text-[#0f2d24] md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-gray-200 bg-white transition-all duration-300 md:hidden",
          open ? "max-h-80" : "max-h-0 border-t-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active ? "bg-gray-100 text-[#0f2d24]" : "text-gray-500 hover:bg-gray-50",
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/checkout"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-lg bg-[#e8a317] px-3 py-2 text-center text-sm font-semibold text-[#0f2d24]"
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  )
}

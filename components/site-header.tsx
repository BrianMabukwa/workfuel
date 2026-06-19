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
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          Work<span className="text-accent">Fuel</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors hover:text-primary",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300",
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
            className="hidden size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary sm:flex"
          >
            <Search className="size-5" />
          </button>

          <Link
            href="/checkout"
            aria-label="View cart"
            className="relative flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
          >
            <ShoppingCart className="size-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                {count}
              </span>
            )}
          </Link>

          <Link
            href="/checkout"
            className="ml-1 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95 active:translate-y-px"
          >
            Order Now
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-full text-primary md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-card transition-all duration-300 md:hidden",
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
                  active ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted",
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/checkout"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-lg bg-accent px-3 py-2 text-center text-sm font-semibold text-accent-foreground"
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  )
}

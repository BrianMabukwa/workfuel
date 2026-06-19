"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { SlidersHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { allProducts } from "@/lib/products"
import { SnackBoxCard } from "@/components/snack-box-card"

const categories = [
  { id: "all", label: "All Refreshments" },
  { id: "boxes", label: "Snack Boxes" },
  { id: "meeting", label: "Meeting Packs" },
  { id: "pantry", label: "Office Pantry" },
  { id: "addons", label: "Add-on Options" },
]

const priceRanges = [
  { id: "under60", label: "Under R60", test: (p: number) => p > 0 && p < 60 },
  { id: "60to100", label: "R60 - R100", test: (p: number) => p >= 60 && p <= 100 },
  { id: "over100", label: "Over R100", test: (p: number) => p > 100 },
]

function matchesCategory(category: string, product: (typeof allProducts)[number]) {
  switch (category) {
    case "all":
      return true
    case "boxes":
      return product.category === "box"
    case "meeting":
      return product.id === "meeting-pack"
    case "pantry":
      return product.id === "office-pantry"
    case "addons":
      return product.category === "addon"
    default:
      return true
  }
}

export function SnackBarClient() {
  const [category, setCategory] = useState("all")
  const [prices, setPrices] = useState<string[]>([])

  function togglePrice(id: string) {
    setPrices((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]))
  }

  const filtered = useMemo(() => {
    return allProducts.filter((product) => {
      if (!matchesCategory(category, product)) return false
      if (prices.length === 0) return true
      return priceRanges.filter((r) => prices.includes(r.id)).some((r) => r.test(product.price))
    })
  }, [category, prices])

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="lg:sticky lg:top-24 lg:h-fit">
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 text-primary">
            <SlidersHorizontal className="size-4" />
            <span className="font-semibold">Filters</span>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Categories</p>
            <ul className="mt-3 space-y-1">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => setCategory(cat.id)}
                    className={cn(
                      "w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors",
                      category === cat.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted",
                    )}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t border-border pt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Price Range</p>
            <ul className="mt-3 space-y-2.5">
              {priceRanges.map((range) => (
                <li key={range.id}>
                  <label className="flex cursor-pointer items-center gap-2.5 text-sm text-foreground">
                    <input
                      type="checkbox"
                      checked={prices.includes(range.id)}
                      onChange={() => togglePrice(range.id)}
                      className="size-4 rounded border-border accent-primary"
                    />
                    {range.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-border bg-secondary p-5">
          <p className="text-sm font-semibold text-primary">Need a custom quote?</p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            We create tailor-made solutions for teams of all sizes.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-muted"
          >
            Contact Sales
          </Link>
        </div>
      </aside>

      <div>
        <h2 className="text-2xl font-bold tracking-tight text-primary">Our Curated Snack Boxes</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Selected favorites and balanced nutrition for high-performing teams.
        </p>

        {filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <SnackBoxCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
            No products match your filters. Try adjusting your selection.
          </div>
        )}
      </div>
    </div>
  )
}

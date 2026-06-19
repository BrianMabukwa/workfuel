"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { SlidersHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { allProducts, snackBoxes } from "@/lib/products"
import { SnackBoxCard } from "@/components/snack-box-card"

const categories = [
  { id: "all", label: "All Refreshments" },
  { id: "boxes", label: "Snack Boxes" },
]

const priceRanges = [
  { id: "under60", label: "Under R60", test: (p: number) => p > 0 && p < 60 },
  { id: "60to100", label: "R60 - R100", test: (p: number) => p >= 60 && p <= 100 },
  { id: "over100", label: "Over R100", test: (p: number) => p > 100 },
]

function matchesCategory(category: string, product: { category: string; id: string }) {
  if (category === "all") return true
  if (category === "boxes") return product.category === "box"
  return true
}

export function SnackBarClient({ boxesOnly = false }: { boxesOnly?: boolean }) {
  const [category, setCategory] = useState("all")
  const [prices, setPrices] = useState<string[]>([])

  function togglePrice(id: string) {
    setPrices((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]))
  }

  const sourceProducts = boxesOnly ? snackBoxes : allProducts

  const filtered = useMemo(() => {
    return sourceProducts.filter((product) => {
      if (!matchesCategory(category, product)) return false
      if (prices.length === 0) return true
      return priceRanges.filter((r) => prices.includes(r.id)).some((r) => r.test(product.price))
    })
  }, [category, prices, sourceProducts])

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="lg:sticky lg:top-24 lg:h-fit">
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-2 text-[#0f2d24]">
            <SlidersHorizontal className="size-4" />
            <span className="font-semibold">Filters</span>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Categories</p>
            <ul className="mt-3 space-y-1">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => setCategory(cat.id)}
                    className={cn(
                      "w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors",
                      category === cat.id
                        ? "bg-[#0f2d24] text-white"
                        : "text-gray-500 hover:bg-gray-100",
                    )}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Price Range</p>
            <ul className="mt-3 space-y-2.5">
              {priceRanges.map((range) => (
                <li key={range.id}>
                  <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-900">
                    <input
                      type="checkbox"
                      checked={prices.includes(range.id)}
                      onChange={() => togglePrice(range.id)}
                      className="size-4 rounded border-gray-300 accent-[#0f2d24]"
                    />
                    {range.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-semibold text-[#0f2d24]">Need a custom quote?</p>
          <p className="mt-1.5 text-sm text-gray-500">
            We create tailor-made solutions for teams of all sizes.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#0f2d24] transition-colors hover:bg-gray-50"
          >
            Contact Sales
          </Link>
        </div>
      </aside>

      <div>
        <h2 className="text-2xl font-bold tracking-tight text-[#0f2d24]">Our Curated Snack Boxes</h2>
        <p className="mt-2 text-sm text-gray-500">
          Selected favorites and balanced nutrition for high-performing teams.
        </p>

        {filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <SnackBoxCard key={product.id} product={product} variant="details" />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center text-gray-500">
            No products match your filters. Try adjusting your selection.
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import Image from "next/image"
import { useState } from "react"
import { CheckCircle2, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products"

export function SnackBoxCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const featured = product.popular
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        featured
          ? "border-[#0f2d24] bg-[#0f2d24] text-white lg:-mt-4 lg:mb-0"
          : "border-gray-200 bg-white text-gray-900",
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {featured && (
          <span className="absolute left-3 top-3 rounded-md bg-[#0f2d24] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#e8a317] ring-1 ring-[#e8a317]/40">
            Most Popular
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-[#e8a317] px-3 py-1 text-xs font-bold text-[#0f2d24] shadow">
          R{product.price} {product.unit}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <ul className="mt-4 space-y-3">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2
                className={cn("mt-0.5 size-4 shrink-0", featured ? "text-[#e8a317]" : "text-[#0f2d24]/70")}
              />
              <span className={featured ? "text-white/85" : "text-gray-500"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleAdd}
          className={cn(
            "mt-6 flex w-full items-center justify-center gap-2 rounded-lg border py-3 text-sm font-semibold transition-all active:translate-y-px",
            featured
              ? "border-[#e8a317] bg-[#e8a317] text-[#0f2d24] hover:brightness-95"
              : "border-gray-200 bg-white text-[#0f2d24] hover:bg-gray-50",
          )}
        >
          {added ? (
            <>
              <CheckCircle2 className="size-4" />
              Added!
            </>
          ) : featured ? (
            "Select Box"
          ) : (
            <>
              <ShoppingCart className="size-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  )
}

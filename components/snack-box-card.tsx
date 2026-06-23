"use client"

import Image from "next/image"
import { useState } from "react"
import { Check, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products"

export function SnackBoxCard({
  product,
  variant = "default",
}: {
  product: Product
  variant?: "default" | "details"
}) {
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
          <span className="absolute left-3 top-3 rounded-md bg-[#c5e8d8] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0f2d24]">
            POPULAR
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
              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#0f2d24]">
                <Check className="size-3 text-white" strokeWidth={3} />
              </span>
              <span className={featured ? "text-white/85" : "text-gray-500"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {variant === "details" ? (
          <button
            onClick={handleAdd}
            className={cn(
              "mt-6 flex w-full items-center justify-center gap-2 rounded-lg border py-3 text-sm font-semibold transition-all active:translate-y-px",
              featured
                ? "border-[#e8a317] bg-[#e8a317] text-[#0f2d24] hover:brightness-95"
                : "border-[#0f2d24] bg-[#0f2d24] text-white hover:bg-[#0a231c]",
            )}
          >
            {added ? (
              <>
                <Check className="size-4" strokeWidth={3} />
                Added!
              </>
            ) : (
                "Add to Cart"
            )}
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className={cn(
              "mt-6 flex w-full items-center justify-center gap-2 rounded-lg border py-3 text-sm font-semibold transition-all active:translate-y-px",
              featured
                ? "border-[#e8a317] bg-[#e8a317] text-[#0f2d24] hover:brightness-95"
                : "border-gray-300 bg-white text-[#0f2d24] hover:bg-gray-50",
            )}
          >
            {added ? (
              <>
                <Check className="size-4" strokeWidth={3} />
                Added!
              </>
            ) : featured ? (
              "Select Box"
            ) : (
              "Add to Cart"
            )}
          </button>
        )}
      </div>
    </div>
  )
}

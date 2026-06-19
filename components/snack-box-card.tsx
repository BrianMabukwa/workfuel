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
          ? "border-primary bg-primary text-primary-foreground lg:-mt-4 lg:mb-0"
          : "border-border bg-card text-card-foreground",
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
          <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-accent ring-1 ring-accent/40">
            Most Popular
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow">
          R{product.price} {product.unit}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <ul className="mt-4 space-y-3">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2
                className={cn("mt-0.5 size-4 shrink-0", featured ? "text-accent" : "text-primary/70")}
              />
              <span className={featured ? "text-primary-foreground/85" : "text-muted-foreground"}>
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
              ? "border-accent bg-accent text-accent-foreground hover:brightness-95"
              : "border-border bg-card text-primary hover:bg-muted",
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

"use client"

import { useState } from "react"
import { Coffee, Apple, Gift, ArrowRight, CheckCircle2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { getProduct } from "@/lib/products"

const items = [
  {
    id: "coffee-station",
    icon: Coffee,
    title: "Coffee Station",
    text: "Coffee, sugar, creamer, and premium disposables.",
  },
  {
    id: "fruit-boxes",
    icon: Apple,
    title: "Fruit Boxes",
    text: "Seasonal fresh fruit delivered daily or weekly.",
  },
  {
    id: "corporate-gifts",
    icon: Gift,
    title: "Corporate Gifts",
    text: "Branded boxes for events, clients, and staff.",
  },
]

export function EssentialAddons() {
  const { addItem } = useCart()
  const [addedId, setAddedId] = useState<string | null>(null)

  function handleAdd(id: string) {
    const product = getProduct(id)
    if (!product) return
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
    })
    setAddedId(id)
    setTimeout(() => setAddedId(null), 2000)
  }

  return (
    <section className="bg-background pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Essential Add-ons</h2>
            <p className="mt-3 text-pretty text-primary-foreground/70">
              The finishing touches for a complete office refreshment experience.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-primary-foreground/5 p-6 text-center ring-1 ring-primary-foreground/10 transition-all duration-300 hover:bg-primary-foreground/10"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <item.icon className="size-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{item.text}</p>
                <button
                  onClick={() => handleAdd(item.id)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5"
                >
                  {addedId === item.id ? (
                    <>
                      <CheckCircle2 className="size-4" />
                      Added!
                    </>
                  ) : (
                    <>
                      Add to order <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

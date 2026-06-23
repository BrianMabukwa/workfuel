"use client"

import Image from "next/image"
import { useState } from "react"
import { Check, CheckCircle2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { addOns } from "@/lib/products"

export function EssentialAddons() {
  const { addItem } = useCart()
  const [addedId, setAddedId] = useState<string | null>(null)

  function handleAdd(id: string) {
    const product = addOns.find((p) => p.id === id)
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
    <section className="bg-gray-50 pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6">
          {addOns.map((product) => (
            <div
              key={product.id}
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-[#0f2d24]">{product.name}</h3>
                <ul className="mt-4 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#0f2d24]">
                        <Check className="size-3 text-white" strokeWidth={3} />
                      </span>
                      <span className="text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleAdd(product.id)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-3 text-sm font-semibold text-[#0f2d24] transition-all hover:bg-gray-50 active:translate-y-px"
                >
                  {addedId === product.id ? (
                    <>
                      <CheckCircle2 className="size-4" />
                      Added!
                    </>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

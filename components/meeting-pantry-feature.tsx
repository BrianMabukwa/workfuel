"use client"

import Image from "next/image"
import { useState } from "react"
import { Check, CheckCircle2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { getProduct } from "@/lib/products"

export function MeetingPantryFeature() {
  const { addItem } = useCart()
  const [addedId, setAddedId] = useState<string | null>(null)

  function order(id: string) {
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

  const meetingPack = getProduct("meeting-pack")
  const officePantry = getProduct("office-pantry")

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Meeting Snack Pack */}
      <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-start-2">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src="/images/meeting-pack.png"
            alt="Meeting snack pack on a boardroom table"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-[#0f2d24]">Team Sessions</span>
          <h3 className="mt-1 text-base font-bold text-[#0f2d24]">Meeting Snack Pack</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
            Designed per attendee to keep energy high during long workshops and board meetings.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            <span className="font-bold text-[#0f2d24]">R40 - R60</span> per attendee
          </p>
          {meetingPack && (
            <ul className="mt-3 space-y-1.5">
              {meetingPack.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-xs">
                  <span className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full bg-[#0f2d24]">
                    <Check className="size-2.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={() => order("meeting-pack")}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-2.5 text-xs font-semibold text-[#0f2d24] transition-all hover:bg-gray-50 active:translate-y-px"
          >
            {addedId === "meeting-pack" ? (
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

      {/* Office Pantry */}
      <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-start-3">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src="/images/office-pantry.png"
            alt="Well-stocked office pantry shelves"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-[#0f2d24]">Full Management</span>
          <h3 className="mt-1 text-base font-bold text-[#0f2d24]">Office Pantry</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
            Weekly restock of chips, chocolates, and sodas. Never run out of your team&apos;s favorite fuels.
          </p>
          {officePantry && (
            <ul className="mt-3 space-y-1.5">
              {officePantry.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-xs">
                  <span className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full bg-[#0f2d24]">
                    <Check className="size-2.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={() => order("office-pantry")}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-2.5 text-xs font-semibold text-[#0f2d24] transition-all hover:bg-gray-50 active:translate-y-px"
          >
            {addedId === "office-pantry" ? (
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
    </div>
  )
}

"use client"

import Image from "next/image"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
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

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Meeting Snack Pack */}
      <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card sm:flex-row">
        <div className="relative h-48 sm:h-auto sm:w-2/5">
          <Image
            src="/images/meeting-pack.png"
            alt="Meeting snack pack on a boardroom table"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 20vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-teal-foreground">Team Sessions</span>
          <h3 className="mt-1 text-2xl font-bold leading-tight text-primary">Meeting Snack Pack</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Designed per attendee to keep energy high during long workshops and board meetings.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="text-lg font-bold text-primary">R40 - R60</span> per attendee
          </p>
          <button
            onClick={() => order("meeting-pack")}
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-95 active:translate-y-px"
          >
            {addedId === "meeting-pack" ? (
              <>
                <CheckCircle2 className="size-4" />
                Added!
              </>
            ) : (
              "Customize Meeting"
            )}
          </button>
        </div>
      </div>

      {/* Office Pantry */}
      <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card sm:flex-row-reverse">
        <div className="relative h-48 sm:h-auto sm:w-2/5">
          <Image
            src="/images/office-pantry.png"
            alt="Well-stocked office pantry shelves"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 20vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-teal-foreground">Full Management</span>
          <h3 className="mt-1 text-2xl font-bold leading-tight text-primary">Office Pantry</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Weekly restock of chips, chocolates, and sodas. Never run out of your team&apos;s favorite fuels.
          </p>
          <div className="mt-4 inline-flex w-fit rounded-lg bg-teal/40 px-3 py-1.5 text-xs font-semibold text-teal-foreground">
            Volume Discounts Available
          </div>
          <button
            onClick={() => order("office-pantry")}
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-muted"
          >
            {addedId === "office-pantry" ? (
              <>
                <CheckCircle2 className="size-4" />
                Added!
              </>
            ) : (
              "Weekly Quote"
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

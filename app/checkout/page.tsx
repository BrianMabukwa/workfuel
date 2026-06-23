"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  User,
  MapPin,
  CreditCard,
  Building2,
  MessageCircle,
  ArrowRight,
  Minus,
  Plus,
  Trash2,
  CheckCircle2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"

const payments = [
  { id: "card", label: "Credit Card", icon: CreditCard, disabled: true },
  { id: "eft", label: "EFT Transfer", icon: Building2, disabled: false },
]

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-900">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[#0f2d24] focus:outline-none focus:ring-2 focus:ring-[#0f2d24]/20"

export default function CheckoutPage() {
  const { items, subtotal, updateQuantity, removeItem, clear } = useCart()
  const [payment, setPayment] = useState("eft")
  const [placed, setPlaced] = useState(false)

  const delivery = 150
  const total = subtotal + delivery

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setPlaced(true)
    clear()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (placed) {
    return (
      <main className="bg-gray-50">
        <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-[#c5e8d8] text-[#0f2d24]">
            <CheckCircle2 className="size-8" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-[#0f2d24]">Order Placed!</h1>
          <p className="mt-3 text-gray-500">
            Thanks for fueling your team with WorkFuel. We&apos;ll be in touch shortly to confirm your Johannesburg
            delivery.
          </p>
          <Link
            href="/snack-boxes"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#e8a317] px-6 py-3 text-sm font-semibold text-[#0f2d24] transition-all hover:brightness-95"
          >
            Continue Shopping <ArrowRight className="size-4" />
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <h1 className="text-4xl font-bold tracking-tight text-[#0f2d24]">Checkout</h1>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
          {/* Left column */}
          <div className="space-y-6">
            {/* Contact Information */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-2 text-[#0f2d24]">
                <User className="size-5" />
                <h2 className="text-lg font-bold">Contact Information</h2>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full Name">
                  <input className={inputClass} placeholder="John Doe" required />
                </Field>
                <Field label="Company Name">
                  <input className={inputClass} placeholder="Acme Corp Johannesburg" />
                </Field>
                <Field label="Email Address">
                  <input type="email" className={inputClass} placeholder="john@acme.co.za" required />
                </Field>
                <Field label="Phone Number">
                  <input type="tel" className={inputClass} placeholder="+27 67 064 5653" required />
                </Field>
              </div>
            </section>

            {/* Delivery Details */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-2 text-[#0f2d24]">
                <MapPin className="size-5" />
                <h2 className="text-lg font-bold">Johannesburg Delivery Details</h2>
              </div>
              <div className="mt-5 space-y-4">
                <Field label="Street Address">
                  <input className={inputClass} placeholder="Suite 101, Main Office Park" required />
                </Field>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Suburb / District">
                    <select className={cn(inputClass, "appearance-none")} defaultValue="Sandton">
                      <option>Sandton</option>
                      <option>Rosebank</option>
                      <option>Midrand</option>
                      <option>Randburg</option>
                      <option>Fourways</option>
                      <option>Johannesburg CBD</option>
                    </select>
                  </Field>
                  <Field label="Postal Code">
                    <input className={inputClass} placeholder="2196" />
                  </Field>
                </div>
                <Field label="Special Delivery Instructions">
                  <textarea
                    rows={3}
                    className={cn(inputClass, "resize-none")}
                    placeholder="Access code, receptionist name, or specific floor instructions..."
                  />
                </Field>
              </div>
            </section>

            {/* Payment Method */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-2 text-[#0f2d24]">
                <CreditCard className="size-5" />
                <h2 className="text-lg font-bold">Payment Method</h2>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {payments.map((option) => {
                  const active = payment === option.id
                  return (
                    <button
                      type="button"
                      key={option.id}
                      disabled={option.disabled}
                      onClick={() => !option.disabled && setPayment(option.id)}
                      className={cn(
                        "flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-5 text-sm font-semibold transition-all",
                        option.disabled
                          ? "cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400 opacity-60"
                          : active
                            ? "border-[#0f2d24] bg-[#c5e8d8]/30 text-[#0f2d24]"
                            : "border-gray-200 bg-white text-gray-500 hover:border-[#0f2d24]/40",
                      )}
                    >
                      <option.icon className="size-6" />
                      {option.label}
                      {option.disabled && (
                        <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                          Coming Soon
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </section>
          </div>

          {/* Right column - Order Summary */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-lg font-bold text-[#0f2d24]">Order Summary</h2>

              {items.length === 0 ? (
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">Your cart is empty.</p>
                  <Link
                    href="/snack-boxes"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#e8a317] px-5 py-2.5 text-sm font-semibold text-[#0f2d24] transition-all hover:brightness-95"
                  >
                    Browse Snack Boxes <ArrowRight className="size-4" />
                  </Link>
                </div>
              ) : (
                <>
                  <ul className="mt-5 space-y-4">
                    {items.map((item) => (
                      <li key={item.id} className="flex gap-3">
                        <div className="relative size-14 shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-[#0f2d24]">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            {item.price > 0 ? `R${item.price.toFixed(2)} ${item.unit}` : item.unit}
                          </p>
                          <div className="mt-1.5 flex items-center gap-2">
                            <div className="flex items-center rounded-md border border-gray-200">
                              <button
                                type="button"
                                aria-label="Decrease quantity"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="flex size-6 items-center justify-center text-gray-500 hover:text-[#0f2d24]"
                              >
                                <Minus className="size-3" />
                              </button>
                              <span className="w-6 text-center text-xs font-medium">{item.quantity}</span>
                              <button
                                type="button"
                                aria-label="Increase quantity"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="flex size-6 items-center justify-center text-gray-500 hover:text-[#0f2d24]"
                              >
                                <Plus className="size-3" />
                              </button>
                            </div>
                            <button
                              type="button"
                              aria-label="Remove item"
                              onClick={() => removeItem(item.id)}
                              className="text-gray-500 transition-colors hover:text-red-500"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-[#0f2d24]">
                          R{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 space-y-2.5 border-t border-gray-200 pt-5 text-sm">
                    <div className="flex justify-between text-gray-500">
                      <span>Subtotal</span>
                      <span className="font-medium text-gray-900">R{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Delivery Fee</span>
                      <span className="font-medium text-gray-900">R{delivery.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                    <span className="text-lg font-bold text-[#0f2d24]">Total</span>
                    <span className="text-lg font-bold text-[#0f2d24]">R{total.toFixed(2)}</span>
                  </div>

                  <button
                    type="submit"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#e8a317] px-6 py-3.5 text-base font-bold text-[#0f2d24] shadow-sm transition-all hover:brightness-95 active:translate-y-px"
                  >
                    Place Order <ArrowRight className="size-5" />
                  </button>

                  <a
                    href="https://wa.me/27670645653"
                    className="mt-3 flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-xs transition-colors hover:bg-gray-200"
                  >
                    <MessageCircle className="size-5 shrink-0 text-[#0f2d24]" />
                    <span>
                      <span className="block font-bold text-[#0f2d24]">Quick Order via WhatsApp?</span>
                      <span className="block text-gray-500">Chat with 067 064 5653</span>
                    </span>
                  </a>
                </>
              )}
            </section>
          </div>
        </form>
      </div>
    </main>
  )
}

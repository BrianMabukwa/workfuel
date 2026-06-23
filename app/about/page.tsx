import type { Metadata } from "next"
import Link from "next/link"
import { Building2, GraduationCap, Car, Headphones, CalendarDays, ShieldCheck, Phone, Mail } from "lucide-react"
import { WhyChoose } from "@/components/home/why-choose"

export const metadata: Metadata = {
  title: "About Us | WorkFuel",
  description: "WorkFuel is a premium snack delivery service powering the modern Johannesburg workplace.",
}

const industries = [
  { icon: Building2, label: "Office Parks" },
  { icon: GraduationCap, label: "Private Schools" },
  { icon: Car, label: "Car Dealerships" },
  { icon: Headphones, label: "Call Centres" },
  { icon: CalendarDays, label: "Conferences" },
  { icon: ShieldCheck, label: "Security Firms" },
]

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#0f2d24] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Fueling Diversity Across Johannesburg
              </h1>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-white/75">
                WorkFuel is a premium snack delivery service powering the modern Johannesburg workplace. We proudly
                serve a wide range of industries across the city.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                {industries.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-[#e8a317] text-[#0f2d24]">
                      <item.icon className="size-4" />
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold">Ready to energize your team?</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Get a custom quote for your office restock or special event today.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="https://wa.me/27670645653"
                  className="flex items-center gap-4 rounded-xl bg-white/10 px-5 py-4 transition-colors hover:bg-white/15"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#e8a317] text-[#0f2d24]">
                    <Phone className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-white/60">
                      WhatsApp Us
                    </span>
                    <span className="block font-bold">067 064 5653</span>
                  </span>
                </a>
                <a
                  href="mailto:workfuelsa@gmail.com"
                  className="flex items-center gap-4 rounded-xl bg-white/10 px-5 py-4 transition-colors hover:bg-white/15"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#e8a317] text-[#0f2d24]">
                    <Mail className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-white/60">Email Us</span>
                    <span className="block font-bold">workfuelsa@gmail.com</span>
                  </span>
                </a>
              </div>

              <Link
                href="/checkout"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#e8a317] px-6 py-3 text-sm font-semibold text-[#0f2d24] transition-all hover:brightness-95 active:translate-y-px"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#0f2d24] sm:text-4xl">
            Premium snacks, powering productivity
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-gray-500">
            From budget-friendly boxes to fully managed office pantries, WorkFuel keeps Johannesburg&apos;s teams fueled
            with reliable, on-time delivery and a curated selection everyone loves.
          </p>
        </div>
      </section>
      <WhyChoose />
    </main>
  )
}

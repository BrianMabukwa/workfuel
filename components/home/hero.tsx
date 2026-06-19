import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f2d24] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,60,48,0.8),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-24 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e8a317] px-4 py-1.5 text-sm font-semibold text-[#0f2d24]">
            <CheckCircle2 className="size-4" /> Now Serving Johannesburg
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Fueling Productive
            <br />
            Teams.
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-white/70">
            Premium Snack &amp; Beverage Delivery for Offices. We keep your team energized, motivated, and productive
            every single day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/snack-boxes"
              className="inline-flex items-center gap-2 rounded-lg bg-[#e8a317] px-6 py-3 text-sm font-semibold text-[#0f2d24] shadow-sm transition-all hover:brightness-95 active:translate-y-px"
            >
              Explore Snack Boxes <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/snack-boxes"
              className="inline-flex items-center rounded-lg border-2 border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-snacks.png"
              alt="A premium assortment of office snacks and beverages"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-3 shadow-lg">
            <p className="text-xs font-medium text-gray-500">Delivered to</p>
            <p className="text-sm font-bold">
              <span className="text-[#0f2d24]">Your </span>
              <span className="text-[#e8a317]">Workplace</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

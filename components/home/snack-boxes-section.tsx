import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { snackBoxes } from "@/lib/products"
import { SnackBoxCard } from "@/components/snack-box-card"

export function SnackBoxesSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#0f2d24] sm:text-4xl">Our Snack Boxes</h2>
            <p className="mt-3 text-gray-500">Choose the perfect package for your team&apos;s needs.</p>
          </div>
          <Link
            href="/snack-boxes"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#0f2d24] transition-colors hover:text-[#e8a317]"
          >
            View All Boxes <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
          {snackBoxes.map((box) => (
            <SnackBoxCard key={box.id} product={box} />
          ))}
        </div>
      </div>
    </section>
  )
}

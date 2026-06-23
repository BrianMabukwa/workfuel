import type { Metadata } from "next"
import { EssentialAddons } from "@/components/home/essential-addons"

export const metadata: Metadata = {
  title: "Add-ons | WorkFuel",
  description: "Complete your office refreshment experience with meeting packs, office pantry management, and more.",
}

export default function AddOnsPage() {
  return (
    <main>
      <section className="bg-[#0f2d24] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Add-ons &amp; Extras</h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-white/75">
            The finishing touches for a complete office refreshment experience. Mix and match to build the perfect
            package for your Johannesburg team.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EssentialAddons />
        </div>
      </section>
    </main>
  )
}

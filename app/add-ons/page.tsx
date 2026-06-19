import type { Metadata } from "next"
import { MeetingPantryFeature } from "@/components/meeting-pantry-feature"
import { EssentialAddons } from "@/components/home/essential-addons"

export const metadata: Metadata = {
  title: "Add-ons | WorkFuel",
  description: "Complete your office refreshment experience with meeting packs, office pantry management, and more.",
}

export default function AddOnsPage() {
  return (
    <main>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Add-ons &amp; Extras</h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/75">
            The finishing touches for a complete office refreshment experience. Mix and match to build the perfect
            package for your Johannesburg team.
          </p>
        </div>
      </section>

      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MeetingPantryFeature />
        </div>
      </section>

      <EssentialAddons />
    </main>
  )
}

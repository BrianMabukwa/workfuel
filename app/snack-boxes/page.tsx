import type { Metadata } from "next"
import { SnackBarClient } from "@/components/snack-bar/snack-bar-client"
import { MeetingPantryFeature } from "@/components/meeting-pantry-feature"
import { EssentialAddons } from "@/components/home/essential-addons"

export const metadata: Metadata = {
  title: "Snack Boxes — The Snack Bar | WorkFuel",
  description: "Browse WorkFuel's curated snack boxes, meeting packs, and office pantry options for Johannesburg teams.",
}

export default function SnackBoxesPage() {
  return (
    <main>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">The Snack Bar</h1>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/75">
              Fueling productive teams across Johannesburg with premium snack and beverage delivery. Choose from our
              curated boxes or build your custom pantry.
            </p>
          </div>
          <div className="rounded-xl bg-accent px-6 py-4 text-lg font-bold text-accent-foreground shadow-lg">
            Productive Teams
            <br />
            Start Here!
          </div>
        </div>
      </section>

      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SnackBarClient />
        </div>
      </section>

      <section className="bg-background pb-12 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MeetingPantryFeature />
        </div>
      </section>

      <EssentialAddons />
    </main>
  )
}

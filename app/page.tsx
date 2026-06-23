import { Hero } from "@/components/home/hero"
import { SnackBoxesSection } from "@/components/home/snack-boxes-section"
import { HowItWorks } from "@/components/home/how-it-works"
import { EssentialAddons } from "@/components/home/essential-addons"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SnackBoxesSection />
      <HowItWorks />
      <EssentialAddons />
    </main>
  )
}

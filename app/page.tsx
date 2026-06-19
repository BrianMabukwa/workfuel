import { Hero } from "@/components/home/hero"
import { WhyChoose } from "@/components/home/why-choose"
import { HowItWorks } from "@/components/home/how-it-works"
import { SnackBoxesSection } from "@/components/home/snack-boxes-section"
import { EssentialAddons } from "@/components/home/essential-addons"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <SnackBoxesSection />
      <EssentialAddons />
    </main>
  )
}

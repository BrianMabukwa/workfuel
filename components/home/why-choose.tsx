import { Zap, TrendingUp, Truck, Wallet } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Energize",
    text: "Quality snacks that provide sustained energy for your hardest-working team members.",
  },
  {
    icon: TrendingUp,
    title: "Boost",
    text: "Improve workplace morale and productivity with delicious treats everyone loves.",
  },
  {
    icon: Truck,
    title: "Convenient",
    text: "Seamless delivery directly to your office floor across the Johannesburg area.",
  },
  {
    icon: Wallet,
    title: "Affordable",
    text: "Cost-effective solutions that fit your budget while maintaining premium quality.",
  },
]

export function WhyChoose() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Why Choose WorkFuel?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Elevating the office snack experience through premium curation and reliable delivery.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-lg"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-teal/40 text-primary">
                <feature.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-primary">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

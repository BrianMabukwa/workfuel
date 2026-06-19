const steps = [
  {
    number: 1,
    title: "Pick Your Box",
    text: "Choose from our curated budget, premium, or appreciation packages.",
  },
  {
    number: 2,
    title: "Custom Add-ons",
    text: "Include coffee station supplies, fresh fruit, or corporate gifts.",
  },
  {
    number: 3,
    title: "Scheduled Delivery",
    text: "We deliver on time, every time, directly to your Johannesburg office.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#0f2d24] sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-pretty text-gray-500">
            Get snacks delivered to your desk in three simple steps.
          </p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div
            className="absolute left-[16.66%] right-[16.66%] top-7 hidden border-t border-dashed border-gray-300 sm:block"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-[#e8a317] text-xl font-bold text-[#0f2d24] shadow-md ring-8 ring-gray-50">
                {step.number}
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#0f2d24]">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

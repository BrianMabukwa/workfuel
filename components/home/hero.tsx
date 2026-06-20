import Image from "next/image"
import Link from "next/link"
import { Zap, TrendingUp, Truck, DollarSign, Check, Phone, Mail, Calendar, PartyPopper, Coffee, Gift } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative w-full">
        {/* Main content area */}
        <div className="relative flex min-h-[500px] flex-col lg:min-h-[620px] lg:flex-row">
          {/* Left side - Cream content */}
          <div className="relative z-10 w-full bg-[#fdf6eb] lg:w-[55%]">
            {/* Gold curved band overlay on right edge */}
            <svg
              className="pointer-events-none absolute right-0 top-0 h-full w-[80px] sm:w-[120px] lg:w-[160px]"
              viewBox="0 0 160 620"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M160,0 C100,80 40,200 30,310 C20,420 60,540 160,620 L160,0 Z"
                fill="#8B7355"
                opacity="0.6"
              />
              <path
                d="M160,0 C120,80 70,200 60,310 C50,420 80,540 160,620 L160,0 Z"
                fill="#0f2d24"
                opacity="0.15"
              />
            </svg>

            <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
              {/* Work Fuel Logo */}
              <div className="mb-0.5">
                <div className="flex items-center">
                  <span
                    className="text-4xl font-bold text-[#0f2d24] sm:text-5xl lg:text-[3.2rem]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    WorkFuel
                  </span>
                  {/* Leaf icon */}
                  <svg
                    className="ml-1 h-8 w-8 sm:h-10 sm:w-10"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M20 4C14 4 8 10 8 18c0 6 3 10 7 13v5h10v-5c4-3 7-7 7-13 0-8-6-14-12-14z"
                      fill="#5a8a4e"
                    />
                    <path
                      d="M20 4c-3 4-5 9-5 14 0 4 2 7 5 9 3-2 5-5 5-9 0-5-2-10-5-14z"
                      fill="#3d6b35"
                    />
                    <path
                      d="M20 8v18M16 12c2 2 4 4 4 8M24 14c-2 2-4 5-4 8"
                      stroke="#fdf6eb"
                      strokeWidth="0.8"
                      opacity="0.5"
                    />
                  </svg>
                </div>
                <p className="mt-0.5 text-[9px] tracking-[0.3em] text-[#8B7355] uppercase sm:text-[10px]">
                  Fueling Productive Teams.
                </p>
              </div>

              {/* Headline */}
              <h1 className="mt-4">
                <span
                  className="block text-lg font-medium text-[#8B7355] italic sm:text-xl"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Premium Snack &amp; Beverage
                </span>
                <span className="mt-1 block text-3xl font-bold uppercase leading-[1.1] text-[#0f2d24] sm:text-4xl lg:text-5xl">
                  Delivery For<br />Offices!
                </span>
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600">
                We deliver quality snacks, drinks and treats that keep your team
                energized, motivated and productive every day.
              </p>

              {/* Feature Icons */}
              <div className="mt-6 flex gap-3 sm:gap-5">
                {[
                  { icon: Zap, label: "Energize\nYour Team" },
                  { icon: TrendingUp, label: "Boost\nProductivity" },
                  { icon: Truck, label: "Convenient\nDelivery" },
                  { icon: DollarSign, label: "Affordable\nPricing" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center text-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f2d24] sm:h-12 sm:w-12">
                      <item.icon className="h-5 w-5 text-[#e8a317]" />
                    </div>
                    <span className="mt-1.5 text-[8px] font-medium leading-tight text-[#0f2d24] whitespace-pre-line sm:text-[10px]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Checklist */}
              <ul className="mt-5 space-y-1">
                {[
                  "Fresh & Quality Products",
                  "Affordable Prices",
                  "On-time Delivery",
                  "Professional Service",
                  "Happy, Productive Teams",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-700">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0f2d24]">
                      <Check className="h-2.5 w-2.5 text-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tagline */}
              <p
                className="mt-5 text-lg text-[#0f2d24] italic sm:text-xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Fuel your team.<br />
                <span className="font-bold">We do the rest!</span>
              </p>
            </div>
          </div>

          {/* Right side - Dark green with image */}
          <div className="relative w-full bg-[#0f2d24] lg:w-[45%]">
            <div className="relative flex h-full items-center justify-center p-6 sm:p-8 lg:p-10">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/hero-snacks.png"
                  alt="WorkFuel premium snack box filled with chips, drinks, chocolate and more"
                  width={600}
                  height={480}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Delivered Badge - top right */}
            <div className="absolute right-4 top-4 z-10 sm:right-8 sm:top-6 lg:right-6 lg:top-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-[#e8a317] bg-[#fdf6eb] text-center shadow-lg sm:h-28 sm:w-28">
                <span className="text-[10px] font-bold uppercase leading-tight text-[#0f2d24] sm:text-xs">
                  Delivered<br />To Your<br />Workplace
                </span>
              </div>
            </div>

            {/* Sticky Note - bottom right */}
            <div className="absolute bottom-4 right-4 z-10 rotate-3 bg-[#fdf6eb] px-4 py-3 shadow-xl sm:bottom-8 sm:right-8 lg:bottom-6 lg:right-6">
              <p className="text-sm font-bold text-[#0f2d24]">Productive Teams</p>
              <p className="text-sm font-bold text-[#0f2d24]">Start Here!</p>
              <span className="mt-1 inline-block text-base">😊</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0f2d24]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row sm:py-5">
            {/* Order Now */}
            <div className="text-center sm:text-left">
              <p className="text-[10px] uppercase tracking-widest text-white/60">
                Order Now
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
                <a href="tel:0670645653" className="flex items-center gap-1.5 text-white hover:text-[#e8a317] transition-colors">
                  <Phone className="h-3.5 w-3.5 text-[#e8a317]" />
                  <span className="text-sm font-bold">067 064 5653</span>
                </a>
                <a href="mailto:workfuelsa@gmail.com" className="flex items-center gap-1.5 text-white hover:text-[#e8a317] transition-colors">
                  <Mail className="h-3.5 w-3.5 text-[#e8a317]" />
                  <span className="text-xs">workfuelsa@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Categories */}
            <div className="flex gap-5 sm:gap-8">
              {[
                { icon: Calendar, label: "Meetings" },
                { icon: PartyPopper, label: "Events" },
                { icon: Coffee, label: "Fridays" },
                { icon: Gift, label: "Appreciation" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8a317]/30 bg-[#e8a317]/10 sm:h-10 sm:w-10">
                    <item.icon className="h-4 w-4 text-[#e8a317] sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-[8px] uppercase tracking-wider text-white/70 sm:text-[10px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

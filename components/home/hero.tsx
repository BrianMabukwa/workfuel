import Image from "next/image"
import { Zap, TrendingUp, Truck, DollarSign, Check, Phone, Mail, Calendar, PartyPopper, Coffee, Gift } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f2d24]">
      <div className="relative w-full">
        <div className="relative flex min-h-[520px] flex-col lg:min-h-[620px] lg:flex-row">
          {/* Left cream panel */}
          <div className="relative z-10 w-full lg:w-[50%]">
            <div className="absolute inset-0 bg-[#fdf6eb]" />
            <div className="relative px-5 pt-6 pb-6 sm:px-8 sm:pt-8 sm:pb-8 lg:px-10 lg:pt-10 lg:pb-10 xl:px-14">
              {/* Work Fuel Logo */}
              <div>
                <h1 className="flex items-start">
                  <span
                    className="text-[2.2rem] leading-[0.9] text-[#0f2d24] sm:text-[2.8rem]"
                    style={{ fontFamily: "'Brush Script MT', 'Segoe Script', 'Dancing Script', cursive" }}
                  >
                    Work{" "}
                  </span>
                  <span
                    className="text-[2.2rem] font-bold leading-[0.9] text-[#0f2d24] sm:text-[2.8rem]"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    Fuel
                  </span>
                  <svg className="ml-0.5 mt-0.5 h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 30 30" fill="none">
                    <path d="M15 2C11 2 7 6 7 11c0 4 2 7 5 9v4h6v-4c3-2 5-5 5-9 0-5-4-9-8-9z" fill="#5a8a4e" />
                    <path d="M15 2c-2 3-3 6-3 9 0 3 1 5 3 6.5 2-1.5 3-3.5 3-6.5 0-3-1-6-3-9z" fill="#3d6b35" />
                    <path d="M15 6v12M13 9c1 1 2 3 2 5" stroke="#fdf6eb" strokeWidth="0.5" opacity="0.4" />
                  </svg>
                </h1>
                <p className="mt-0.5 text-[8px] tracking-[0.3em] uppercase text-[#8B7355] sm:text-[9px]">
                  Fueling Productive Teams.
                </p>
              </div>

              {/* Headline */}
              <h2 className="mt-4">
                <span
                  className="block text-lg text-[#8B7355] italic sm:text-xl"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Premium Snack &amp; Beverage
                </span>
                <span className="mt-1 block text-[1.8rem] font-black uppercase leading-[1.05] text-[#0f2d24] sm:text-[2.5rem] lg:text-[3rem]">
                  Delivery For<br />Offices!
                </span>
              </h2>

              {/* Description */}
              <p className="mt-3 max-w-[380px] text-[12px] leading-relaxed text-gray-600 sm:text-[13px]">
                We deliver quality snacks, drinks and treats that keep your team
                energized, motivated and productive every day.
              </p>

              {/* Feature Icons */}
              <div className="mt-5 flex gap-3 sm:gap-5">
                {[
                  { icon: Zap, label: "Energize\nYour Team" },
                  { icon: TrendingUp, label: "Boost\nProductivity" },
                  { icon: Truck, label: "Convenient\nDelivery" },
                  { icon: DollarSign, label: "Affordable\nPricing" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center text-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f2d24] sm:h-11 sm:w-11">
                      <item.icon className="h-4 w-4 text-[#e8a317] sm:h-5 sm:w-5" strokeWidth={2.5} />
                    </div>
                    <span className="mt-1 text-[7px] font-semibold uppercase leading-tight text-[#0f2d24] whitespace-pre-line sm:text-[8px]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Checklist */}
              <ul className="mt-4 space-y-0.5">
                {[
                  "Fresh & Quality Products",
                  "Affordable Prices",
                  "On-time Delivery",
                  "Professional Service",
                  "Happy, Productive Teams",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-1.5 text-[10px] text-gray-700 sm:text-[11px]">
                    <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#0f2d24]">
                      <Check className="h-2 w-2 text-white" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tagline */}
              <p
                className="mt-5 text-lg text-[#0f2d24] sm:text-xl"
                style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
              >
                Fuel your team.<br />
                <span
                  className="text-lg font-bold italic sm:text-xl"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  We do the rest!
                </span>
              </p>
            </div>
          </div>

          {/* Right side - Image area with dark green bg */}
          <div className="relative z-10 w-full lg:w-[50%]">
            <div className="absolute inset-0 bg-[#0f2d24]" />
            <div className="relative h-full min-h-[400px] overflow-hidden lg:min-h-0">
              <Image
                src="/images/hero-snacks.png"
                alt="WorkFuel premium snack box filled with chips, drinks, chocolate and more"
                fill
                priority
                className="object-cover object-center"
                sizes="50vw"
              />
            </div>

            {/* Delivered Badge */}
            <div className="absolute right-3 top-4 z-20 sm:right-6 sm:top-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#e8a317] bg-[#fdf6eb] text-center shadow-lg sm:h-24 sm:w-24">
                <span className="text-[8px] font-bold uppercase leading-tight text-[#0f2d24] sm:text-[9px]">
                  Delivered<br />To Your<br />Workplace
                </span>
              </div>
            </div>

            {/* Sticky Note */}
            <div className="absolute bottom-4 right-4 z-20 rotate-2 bg-[#fdf6eb] px-3 py-2.5 shadow-2xl sm:bottom-8 sm:right-8 lg:bottom-6 lg:right-6">
              <p className="text-xs font-bold text-[#0f2d24] sm:text-sm">Productive Teams</p>
              <p className="text-xs font-bold text-[#0f2d24] sm:text-sm">Start Here!</p>
              <span className="mt-0.5 inline-block text-sm">😊</span>
            </div>
          </div>

          {/* Olive/gold curved band - overlaying the junction */}
          <svg
            className="pointer-events-none absolute right-0 top-0 z-30 hidden h-full w-[55%] lg:block"
            viewBox="0 0 800 620"
            preserveAspectRatio="none"
          >
            <path
              d="M320,0 C340,80 380,180 400,310 C420,440 380,540 340,620 L280,620 C320,540 360,440 340,310 C320,180 280,80 260,0 Z"
              fill="#8B7355"
            />
          </svg>
          {/* Mobile olive curve */}
          <svg
            className="pointer-events-none absolute bottom-0 left-0 z-30 h-full w-full lg:hidden"
            viewBox="0 0 400 620"
            preserveAspectRatio="none"
          >
            <path
              d="M200,0 C220,100 250,220 260,310 C270,400 240,520 200,620 L160,620 C200,520 230,400 220,310 C210,220 180,100 160,0 Z"
              fill="#8B7355"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-30 bg-[#0f2d24] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row sm:py-5">
            <div className="text-center sm:text-left">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#e8a317] font-semibold">
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
            <div className="flex gap-5 sm:gap-8">
              {[
                { icon: Calendar, label: "Meetings" },
                { icon: PartyPopper, label: "Events" },
                { icon: Coffee, label: "Fridays" },
                { icon: Gift, label: "Appreciation" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8a317]/30 bg-[#e8a317]/10 sm:h-9 sm:w-9">
                    <item.icon className="h-3.5 w-3.5 text-[#e8a317] sm:h-4 sm:w-4" />
                  </div>
                  <span className="text-[7px] uppercase tracking-wider text-white/70 sm:text-[9px]">
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

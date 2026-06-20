import Image from "next/image"
import Link from "next/link"
import { Zap, TrendingUp, Truck, DollarSign, Check, Phone, Mail, Calendar, PartyPopper, Coffee, Gift } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f2d24]">
      <div className="relative w-full">
        {/* Full-width flex layout */}
        <div className="relative flex min-h-[520px] flex-col lg:min-h-[640px] lg:flex-row">
          {/* Left cream panel */}
          <div className="relative z-10 w-full lg:w-[52%]">
            <div className="absolute inset-0 bg-[#fdf6eb]" />
            <div className="relative px-6 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10 lg:px-12 lg:pt-12 lg:pb-12 xl:px-16">
              {/* Work Fuel Logo - two fonts */}
              <div>
                <h1 className="flex items-baseline gap-0.5">
                  <span
                    className="text-[2.8rem] leading-none text-[#0f2d24]"
                    style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive", fontWeight: "normal" }}
                  >
                    Work
                  </span>
                  <span
                    className="text-[2.8rem] font-bold leading-none text-[#0f2d24]"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {" "}Fuel
                  </span>
                  {/* Leaf */}
                  <svg className="ml-1 h-7 w-7 self-start" viewBox="0 0 30 30" fill="none">
                    <path d="M15 3C10 3 5 8 5 14c0 5 3 8 6 10v3h8v-3c3-2 6-5 6-10 0-6-5-11-10-11z" fill="#5a8a4e" />
                    <path d="M15 3c-2 3-3.5 7-3.5 11 0 3.5 1.5 6 3.5 7.5 2-1.5 3.5-4 3.5-7.5 0-4-1.5-8-3.5-11z" fill="#3d6b35" />
                    <path d="M15 7v14M12 10c1.5 1.5 3 3 3 6" stroke="#fdf6eb" strokeWidth="0.6" opacity="0.4" />
                  </svg>
                </h1>
                <p
                  className="mt-0.5 text-[9px] tracking-[0.35em] uppercase text-[#8B7355]"
                >
                  Fueling Productive Teams.
                </p>
              </div>

              {/* Headline */}
              <h2 className="mt-5">
                <span
                  className="block text-xl text-[#8B7355] italic sm:text-2xl"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Premium Snack &amp; Beverage
                </span>
                <span className="mt-1 block text-[2.2rem] font-black uppercase leading-[1.05] text-[#0f2d24] sm:text-5xl lg:text-[3.4rem]">
                  Delivery For<br />Offices!
                </span>
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-[420px] text-[13px] leading-relaxed text-gray-600">
                We deliver quality snacks, drinks and treats that keep your team
                energized, motivated and productive every day.
              </p>

              {/* Feature Icons */}
              <div className="mt-6 flex gap-4 sm:gap-5">
                {[
                  { icon: Zap, label: "Energize\nYour Team" },
                  { icon: TrendingUp, label: "Boost\nProductivity" },
                  { icon: Truck, label: "Convenient\nDelivery" },
                  { icon: DollarSign, label: "Affordable\nPricing" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center text-center">
                    <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#0f2d24]">
                      <item.icon className="h-5 w-5 text-[#e8a317]" strokeWidth={2.5} />
                    </div>
                    <span className="mt-1.5 text-[8px] font-semibold uppercase leading-tight text-[#0f2d24] whitespace-pre-line sm:text-[9px]">
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
                  <li key={item} className="flex items-center gap-2 text-[11px] text-gray-700">
                    <span className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#0f2d24]">
                      <Check className="h-2 w-2 text-white" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tagline */}
              <p
                className="mt-6 text-xl text-[#0f2d24] sm:text-2xl"
                style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
              >
                Fuel your team.<br />
                <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: "bold", fontStyle: "italic" }}>
                  We do the rest!
                </span>
              </p>
            </div>
          </div>

          {/* Olive/gold curved band */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-full lg:w-[52%]">
            <svg
              className="absolute right-[-60px] top-0 h-full w-[120px] sm:right-[-40px] sm:w-[100px] lg:right-[-80px] lg:w-[160px]"
              viewBox="0 0 160 640"
              preserveAspectRatio="none"
            >
              {/* Olive/gold thick band */}
              <path
                d="M80,0 C50,100 20,200 10,320 C0,440 30,540 80,640 L160,640 L160,0 Z"
                fill="#8B7355"
              />
              {/* Darker olive overlay for depth */}
              <path
                d="M90,0 C60,100 30,200 20,320 C10,440 35,540 85,640 L160,640 L160,0 Z"
                fill="#6d5a42"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Right side - Image area */}
          <div className="relative z-10 w-full lg:w-[48%]">
            <div className="absolute inset-0 bg-[#0f2d24]" />
            {/* Image with curved left edge */}
            <div className="relative h-full overflow-hidden">
              <Image
                src="/images/hero-snacks.png"
                alt="WorkFuel premium snack box filled with chips, drinks, chocolate and more"
                fill
                priority
                className="object-cover object-center"
                sizes="48vw"
              />
              {/* Gradient overlay on left edge to blend with curve */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0f2d24] to-transparent lg:w-24" />
            </div>

            {/* Delivered Badge */}
            <div className="absolute right-4 top-6 z-20 sm:right-6 sm:top-8 lg:right-5 lg:top-5">
              <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full border-[3px] border-[#e8a317] bg-[#fdf6eb] text-center shadow-lg sm:h-[100px] sm:w-[100px]">
                <span className="text-[9px] font-bold uppercase leading-tight text-[#0f2d24] sm:text-[10px]">
                  Delivered<br />To Your<br />Workplace
                </span>
              </div>
            </div>

            {/* Sticky Note */}
            <div className="absolute bottom-6 right-6 z-20 rotate-2 bg-[#fdf6eb] px-4 py-3 shadow-2xl sm:bottom-10 sm:right-10 lg:bottom-8 lg:right-8">
              <p className="text-sm font-bold text-[#0f2d24]">Productive Teams</p>
              <p className="text-sm font-bold text-[#0f2d24]">Start Here!</p>
              <span className="mt-1 inline-block text-base">😊</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-30 bg-[#0f2d24] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row sm:py-5">
            {/* Order Now */}
            <div className="text-center sm:text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#e8a317] font-semibold">
                Order Now
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
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

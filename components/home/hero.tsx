import Image from "next/image"
import { Zap, TrendingUp, Truck, DollarSign, Check, Phone, Mail, Calendar, PartyPopper, Coffee, Gift } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f2d24]">
      {/* Main flex container */}
      <div className="relative flex min-h-[480px] flex-col lg:min-h-[580px] lg:flex-row">
        {/* Left cream panel */}
        <div className="relative z-10 w-full bg-[#fdf6eb] lg:w-[48%]">
          <div className="px-5 pt-6 pb-6 sm:px-8 sm:pt-8 sm:pb-8 lg:px-10 lg:pt-10 lg:pb-10">
            {/* Work Fuel Logo */}
            <h1 className="flex items-start gap-0">
              <span
                className="text-[2.5rem] leading-none text-[#0f2d24] sm:text-[3rem]"
                style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
              >
                Work
              </span>
              <span
                className="text-[2.5rem] font-bold leading-none text-[#0f2d24] sm:text-[3rem]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {" "}Fuel
              </span>
              <svg className="ml-0.5 mt-1 h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 30 30" fill="none">
                <path d="M15 2C11 2 7 6 7 11c0 4 2 7 5 9v4h6v-4c3-2 5-5 5-9 0-5-4-9-8-9z" fill="#5a8a4e" />
                <path d="M15 2c-2 3-3 6-3 9 0 3 1 5 3 6.5 2-1.5 3-3.5 3-6.5 0-3-1-6-3-9z" fill="#3d6b35" />
              </svg>
            </h1>
            <p className="mt-0.5 text-[8px] tracking-[0.3em] uppercase text-[#8B7355] sm:text-[9px]">
              Fueling Productive Teams.
            </p>

            {/* Headline */}
            <h2 className="mt-4">
              <span
                className="block text-lg text-[#8B7355] italic sm:text-xl"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Premium Snack &amp; Beverage
              </span>
              <span className="mt-1 block text-[1.7rem] font-black uppercase leading-[1.05] text-[#0f2d24] sm:text-[2.2rem] lg:text-[2.8rem]">
                Delivery For<br />Offices!
              </span>
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-[360px] text-[11px] leading-relaxed text-gray-600 sm:text-[12px]">
              We deliver quality snacks, drinks and treats that keep your team
              energized, motivated and productive every day.
            </p>

            {/* Feature Icons */}
            <div className="mt-5 flex gap-3 sm:gap-4">
              {[
                { icon: Zap, label: "Energize\nYour Team" },
                { icon: TrendingUp, label: "Boost\nProductivity" },
                { icon: Truck, label: "Convenient\nDelivery" },
                { icon: DollarSign, label: "Affordable\nPricing" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f2d24] sm:h-10 sm:w-10">
                    <item.icon className="h-4 w-4 text-[#e8a317]" strokeWidth={2.5} />
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
                  <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[#0f2d24]">
                    <Check className="h-2 w-2 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Tagline */}
            <p
              className="mt-4 text-lg text-[#0f2d24] sm:text-xl"
              style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
            >
              Fuel your team.<br />
              <span
                className="font-bold italic"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                We do the rest!
              </span>
            </p>
          </div>
        </div>

        {/* Right image panel */}
        <div className="relative z-10 w-full bg-[#0f2d24] lg:w-[52%]">
          <div className="relative h-full min-h-[380px] overflow-hidden">
            <Image
              src="/images/hero-snacks.png"
              alt="WorkFuel premium snack box filled with chips, drinks, chocolate"
              fill
              priority
              className="object-cover"
              sizes="52vw"
            />
          </div>

          {/* Delivered Badge */}
          <div className="absolute right-3 top-4 z-20 sm:right-6 sm:top-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#e8a317] bg-[#fdf6eb] text-center shadow-lg sm:h-24 sm:w-24">
              <span className="text-[8px] font-bold uppercase leading-tight text-[#0f2d24] sm:text-[10px]">
                Delivered<br />To Your<br />Workplace
              </span>
            </div>
          </div>

          {/* Sticky Note */}
          <div className="absolute bottom-4 right-4 z-20 rotate-2 bg-[#fdf6eb] px-3 py-2 shadow-2xl sm:bottom-8 sm:right-8 lg:bottom-6 lg:right-6">
            <p className="text-[11px] font-bold text-[#0f2d24] sm:text-sm">Productive Teams</p>
            <p className="text-[11px] font-bold text-[#0f2d24] sm:text-sm">Start Here!</p>
            <span className="mt-0.5 inline-block text-sm">😊</span>
          </div>
        </div>

        {/* Olive/gold curved band - overlays junction, curves RIGHT in middle */}
        <svg
          className="pointer-events-none absolute top-0 z-20 hidden h-full lg:block"
          style={{ left: "calc(48% - 80px)", width: "160px" }}
          viewBox="0 0 160 580"
          preserveAspectRatio="none"
        >
          <path
            d="M80,0 C100,80 130,180 140,290 C150,400 120,500 80,580 L0,580 C40,500 70,400 60,290 C50,180 70,80 80,0 Z"
            fill="#8B7355"
          />
        </svg>
        {/* Mobile olive curve */}
        <svg
          className="pointer-events-none absolute top-0 z-20 h-full lg:hidden"
          style={{ left: "calc(48% - 50px)", width: "100px" }}
          viewBox="0 0 100 580"
          preserveAspectRatio="none"
        >
          <path
            d="M50,0 C65,80 80,180 85,290 C90,400 75,500 50,580 L0,580 C25,500 40,400 35,290 C30,180 35,80 50,0 Z"
            fill="#8B7355"
          />
        </svg>
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

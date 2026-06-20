import Image from "next/image"
import Link from "next/link"
import { Zap, TrendingUp, Truck, DollarSign, Check, Phone, Mail, Calendar, PartyPopper, Coffee, Gift } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[600px] lg:grid-cols-2 lg:gap-0">
          {/* Left side - Content */}
          <div className="relative bg-[#fdf8f0] px-6 py-10 sm:px-10 lg:px-12 lg:py-14"
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
            }}
          >
            {/* Work Fuel Logo */}
            <div className="mb-1">
              <div className="flex items-center gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-[#0f2d24]" style={{ fontFamily: "Georgia, serif" }}>
                  Work
                </span>
                <span className="text-4xl sm:text-5xl font-bold text-[#0f2d24]" style={{ fontFamily: "Georgia, serif" }}>
                  Fuel
                </span>
                <svg className="w-8 h-8 ml-1" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 5 5 5 9c0 3 2 5 4 6.5V22h6v-6.5c2-1.5 4-3.5 4-6.5 0-4-3-7-7-7z" fill="#8B7355"/>
                  <path d="M12 2c-2 2-3 5-3 7 0 2 1 3.5 3 5 2-1.5 3-3 3-5 0-2-1-5-3-7z" fill="#4a7c59"/>
                  <path d="M10 4c-1 1.5-1.5 3-1.5 4.5 0 1.5.5 2.5 1.5 3.5" stroke="#8B7355" strokeWidth="0.5" fill="none"/>
                </svg>
              </div>
              <p className="text-[10px] tracking-[0.25em] text-[#8B7355] font-medium uppercase mt-0.5">
                Fueling Productive Teams.
              </p>
            </div>

            {/* Headline */}
            <h1 className="mt-4">
              <span className="block text-lg sm:text-xl font-medium text-[#8B7355] italic" style={{ fontFamily: "Georgia, serif" }}>
                Premium Snack &amp; Beverage
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2d24] mt-1 leading-tight uppercase">
                Delivery For<br />Offices!
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-600 max-w-md leading-relaxed">
              We deliver quality snacks, drinks and treats that keep your team energized, motivated and productive every day.
            </p>

            {/* Feature Icons */}
            <div className="mt-6 flex gap-4 sm:gap-6">
              {[
                { icon: Zap, label: "Energize\nYour Team" },
                { icon: TrendingUp, label: "Boost\nProductivity" },
                { icon: Truck, label: "Convenient\nDelivery" },
                { icon: DollarSign, label: "Affordable\nPricing" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2d24]">
                    <item.icon className="h-5 w-5 text-[#e8a317]" />
                  </div>
                  <span className="mt-1.5 text-[9px] sm:text-[10px] text-[#0f2d24] font-medium whitespace-pre-line leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <ul className="mt-5 space-y-1.5">
              {[
                "Fresh & Quality Products",
                "Affordable Prices",
                "On-time Delivery",
                "Professional Service",
                "Happy, Productive Teams",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-gray-700">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0f2d24]">
                    <Check className="h-2.5 w-2.5 text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Tagline */}
            <p className="mt-6 text-lg sm:text-xl text-[#0f2d24] italic" style={{ fontFamily: "Georgia, serif" }}>
              Fuel your team.<br />
              <span className="font-bold">We do the rest!</span>
            </p>
          </div>

          {/* Right side - Image */}
          <div className="relative bg-[#0f2d24] flex items-center justify-center p-8 lg:p-0">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/hero-snacks.png"
                alt="WorkFuel premium snack box filled with snacks and beverages"
                width={600}
                height={500}
                priority
                className="object-contain"
              />
            </div>

            {/* Delivered Badge */}
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-6 lg:right-4 z-10">
              <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-4 border-[#e8a317] bg-[#fdf8f0] text-center">
                <span className="text-xs sm:text-sm font-bold text-[#0f2d24] uppercase leading-tight">
                  Delivered<br />To Your<br />Workplace
                </span>
              </div>
            </div>

            {/* Sticky Note */}
            <div className="absolute bottom-8 right-4 sm:bottom-12 sm:right-8 lg:bottom-10 lg:right-6 z-10 rotate-6 bg-[#fdf8f0] px-4 py-3 shadow-lg">
              <p className="text-sm font-bold text-[#0f2d24]">Productive Teams</p>
              <p className="text-sm font-bold text-[#0f2d24]">Start Here!</p>
              <div className="mt-1 flex gap-1">
                <span className="text-xs">😊</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0f2d24]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 py-4 sm:flex-row">
            {/* Order Now */}
            <div className="text-center sm:text-left">
              <p className="text-xs text-white/70 uppercase tracking-wider">Order Now</p>
              <div className="mt-1 flex items-center gap-3 justify-center sm:justify-start">
                <div className="flex items-center gap-2 text-white">
                  <Phone className="h-4 w-4 text-[#e8a317]" />
                  <span className="text-sm font-bold">067 064 5653</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Mail className="h-4 w-4 text-[#e8a317]" />
                  <span className="text-xs">workfuelsa@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="flex gap-6 sm:gap-8">
              {[
                { icon: Calendar, label: "Meetings" },
                { icon: PartyPopper, label: "Events" },
                { icon: Coffee, label: "Fridays" },
                { icon: Gift, label: "Appreciation" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8a317]/30 bg-[#e8a317]/10">
                    <item.icon className="h-5 w-5 text-[#e8a317]" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-white/80 uppercase tracking-wider">
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

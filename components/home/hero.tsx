import Image from "next/image"
import { Phone, Mail, Calendar, PartyPopper, Coffee, Gift } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f2d24]">
      {/* Hero Image */}
      <div className="relative w-full">
        <Image
          src="/hero.png"
          alt="WorkFuel - Premium Snack & Beverage Delivery for Offices. Fueling productive teams."
          width={1200}
          height={630}
          priority
          className="h-auto w-full object-contain"
        />
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

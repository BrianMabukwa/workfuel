import Link from "next/link"
import { Phone, Mail, MapPin, Building2, GraduationCap, Car, Headphones, CalendarDays, ShieldCheck, ArrowRight } from "lucide-react"

const industries = [
  { icon: Building2, label: "Office Parks" },
  { icon: GraduationCap, label: "Private Schools" },
  { icon: Car, label: "Car Dealerships" },
  { icon: Headphones, label: "Call Centres" },
  { icon: CalendarDays, label: "Conferences" },
  { icon: ShieldCheck, label: "Security Firms" },
]

export function SiteFooter() {
  return (
    <footer>
      {/* Top section - Fueling Diversity */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Fueling Diversity Across Johannesburg
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                {industries.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <item.icon className="size-4" />
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-primary-foreground/5 p-8 ring-1 ring-primary-foreground/10">
              <h3 className="text-2xl font-bold">Ready to energize your team?</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                Get a custom quote for your office restock or special event today.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="https://wa.me/27670645653"
                  className="flex items-center gap-4 rounded-xl bg-primary-foreground/10 px-5 py-4 transition-colors hover:bg-primary-foreground/15"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Phone className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-primary-foreground/60">
                      WhatsApp Us
                    </span>
                    <span className="block font-bold">067 064 5653</span>
                  </span>
                </a>
                <a
                  href="mailto:workfuelsa@gmail.com"
                  className="flex items-center gap-4 rounded-xl bg-primary-foreground/10 px-5 py-4 transition-colors hover:bg-primary-foreground/15"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Mail className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-primary-foreground/60">Email Us</span>
                    <span className="block font-bold">workfuelsa@gmail.com</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom section */}
      <div className="border-t border-primary-foreground/10 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="text-xl font-bold tracking-tight">
                Work<span className="text-accent">Fuel</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
                Premium snack delivery service powering the modern Johannesburg workplace.
              </p>
              <div className="mt-5 flex gap-3">
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Contact Info</h3>
              <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-accent" /> WhatsApp: 067 064 5653
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-accent" /> workfuelsa@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="size-4 text-accent" /> Johannesburg, South Africa
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Our Services</h3>
              <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                <li>
                  <Link href="/snack-boxes" className="transition-colors hover:text-accent">
                    Budget Boxes
                  </Link>
                </li>
                <li>
                  <Link href="/snack-boxes" className="transition-colors hover:text-accent">
                    Premium Selection
                  </Link>
                </li>
                <li>
                  <Link href="/add-ons" className="transition-colors hover:text-accent">
                    Corporate Gifting
                  </Link>
                </li>
                <li>
                  <Link href="/add-ons" className="transition-colors hover:text-accent">
                    Office Pantry Supply
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Ready to Fuel?</h3>
              <p className="mt-4 text-sm text-primary-foreground/70">Start your first subscription or order a trial box today.</p>
              <Link
                href="/checkout"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg border-2 border-accent bg-transparent px-6 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
            <p>&copy; 2024 WorkFuel SA. Fueling Productive Teams in Johannesburg.</p>
            <div className="flex gap-6">
              <Link href="#" className="transition-colors hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-accent">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export type Product = {
  id: string
  name: string
  category: "box" | "addon"
  price: number
  unit: string
  image: string
  blurb: string
  features: string[]
  popular?: boolean
}

export const snackBoxes: Product[] = [
  {
    id: "budget-box",
    name: "Budget Snack Box",
    category: "box",
    price: 50,
    unit: "per box",
    image: "/images/budget-box.png",
    blurb: "Selected favorites and balanced nutrition for high-performing teams.",
    features: ["Small Chips & Chocolate Bar", "Biscuit Pack & Juice", "Assorted Sweets"],
  },
  {
    id: "premium-box",
    name: "Premium Snack Box",
    category: "box",
    price: 80,
    unit: "per box",
    image: "/images/premium-box.png",
    blurb: "Our most popular box — premium curation for teams that deserve the best.",
    features: ["Large Chips & Premium Chocolate", "Energy Drink / Fruit Juice", "Nuts & Trail Mix", "Specialty Sweets"],
    popular: true,
  },
  {
    id: "appreciation-box",
    name: "Appreciation Box",
    category: "box",
    price: 70,
    unit: "per box",
    image: "/images/appreciation-box.png",
    blurb: "A thoughtful refreshment box to show your team you care.",
    features: ["Coffee & Hot Chocolate Sachets", "Biscuit Pack & Savory Chips", "Bottled Water"],
  },
]

export const addOns: Product[] = [
  {
    id: "meeting-pack",
    name: "Meeting Snack Pack",
    category: "addon",
    price: 40,
    unit: "per attendee",
    image: "/images/meeting-pack.png",
    blurb: "Designed per attendee to keep energy high during long workshops and board meetings.",
    features: ["Snack bar & biscuits", "Bottled water or juice", "Per attendee pricing"],
  },
  {
    id: "office-pantry",
    name: "Office Pantry",
    category: "addon",
    price: 0,
    unit: "weekly quote",
    image: "/images/office-pantry.png",
    blurb: "Weekly restock of chips, chocolates, and sodas. Never run out of your team's favorite fuels.",
    features: ["Weekly restock service", "Volume discounts available", "Custom pantry curation"],
  },
  {
    id: "coffee-station",
    name: "Coffee Station",
    category: "addon",
    price: 45,
    unit: "per pack",
    image: "/images/office-pantry.png",
    blurb: "Coffee, sugar, creamer, and premium disposables.",
    features: ["Premium coffee & creamer", "Sugar & sweeteners", "Disposable cups & stirrers"],
  },
  {
    id: "fruit-boxes",
    name: "Fruit Boxes",
    category: "addon",
    price: 60,
    unit: "per box",
    image: "/images/appreciation-box.png",
    blurb: "Seasonal fresh fruit delivered daily or weekly.",
    features: ["Seasonal fresh fruit", "Daily or weekly delivery", "Curated variety"],
  },
  {
    id: "corporate-gifts",
    name: "Corporate Gifts",
    category: "addon",
    price: 120,
    unit: "per box",
    image: "/images/premium-box.png",
    blurb: "Branded boxes for events, clients, and staff.",
    features: ["Custom branding", "Premium gourmet selection", "Event & client ready"],
  },
]

export const allProducts = [...snackBoxes, ...addOns]

export function getProduct(id: string) {
  return allProducts.find((p) => p.id === id)
}

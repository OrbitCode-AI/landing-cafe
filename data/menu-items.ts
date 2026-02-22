export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  category: "coffee" | "tea" | "pastry" | "sandwich" | "smoothie"
  available: boolean
  image?: string
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Caramel Latte",
    description: "Rich espresso with steamed milk and caramel syrup, topped with whipped cream.",
    price: 5.50,
    category: "coffee",
    available: true,
  },
  {
    id: "2",
    name: "Cappuccino",
    description: "Classic Italian coffee with equal parts espresso, steamed milk, and foam.",
    price: 4.75,
    category: "coffee",
    available: true,
  },
  {
    id: "3",
    name: "Matcha Green Tea",
    description: "Ceremonial-grade matcha whisked with your choice of milk.",
    price: 5.25,
    category: "tea",
    available: true,
  },
  {
    id: "4",
    name: "Butter Croissant",
    description: "Flaky, golden-brown croissant made with French butter.",
    price: 3.50,
    category: "pastry",
    available: true,
  },
  {
    id: "5",
    name: "Blueberry Muffin",
    description: "Moist muffin bursting with fresh blueberries and a crumble topping.",
    price: 3.75,
    category: "pastry",
    available: false,
  },
  {
    id: "6",
    name: "Turkey Club",
    description: "Sliced turkey, bacon, lettuce, tomato, and avocado on sourdough.",
    price: 9.50,
    category: "sandwich",
    available: true,
  },
  {
    id: "7",
    name: "Chai Latte",
    description: "Spiced black tea with steamed milk, cinnamon, and cardamom.",
    price: 4.95,
    category: "tea",
    available: true,
  },
  {
    id: "8",
    name: "Mango Smoothie",
    description: "Tropical blend of mango, banana, yogurt, and a splash of orange juice.",
    price: 6.25,
    category: "smoothie",
    available: true,
  },
]

export const categories = ["coffee", "tea", "pastry", "sandwich", "smoothie"] as const

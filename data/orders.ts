export type OrderStatus = "pending" | "preparing" | "ready" | "completed" | "cancelled"

export type Order = {
  id: string
  customer: string
  initials: string
  items: string[]
  total: number
  status: OrderStatus
  time: string
  date: string
}

export const recentOrders: Order[] = [
  { id: "ORD-001", customer: "Alice Johnson", initials: "AJ", items: ["Caramel Latte", "Croissant"], total: 9.00, status: "completed", time: "9:15 AM", date: "2026-02-21" },
  { id: "ORD-002", customer: "Bob Martinez", initials: "BM", items: ["Cappuccino"], total: 4.75, status: "ready", time: "9:22 AM", date: "2026-02-21" },
  { id: "ORD-003", customer: "Carol Chen", initials: "CC", items: ["Matcha Green Tea", "Blueberry Muffin"], total: 9.00, status: "preparing", time: "9:30 AM", date: "2026-02-21" },
  { id: "ORD-004", customer: "David Kim", initials: "DK", items: ["Turkey Club", "Mango Smoothie"], total: 15.75, status: "pending", time: "9:35 AM", date: "2026-02-21" },
  { id: "ORD-005", customer: "Eva Williams", initials: "EW", items: ["Chai Latte"], total: 4.95, status: "completed", time: "9:40 AM", date: "2026-02-21" },
]

export const allOrders: Order[] = [
  ...recentOrders,
  { id: "ORD-006", customer: "Frank Davis", initials: "FD", items: ["Espresso", "Croissant"], total: 6.50, status: "completed", time: "8:45 AM", date: "2026-02-21" },
  { id: "ORD-007", customer: "Grace Lee", initials: "GL", items: ["Caramel Latte"], total: 5.50, status: "completed", time: "8:30 AM", date: "2026-02-21" },
  { id: "ORD-008", customer: "Henry Wilson", initials: "HW", items: ["Cappuccino", "Blueberry Muffin"], total: 8.50, status: "cancelled", time: "8:15 AM", date: "2026-02-21" },
  { id: "ORD-009", customer: "Iris Thompson", initials: "IT", items: ["Matcha Green Tea"], total: 5.25, status: "completed", time: "8:00 AM", date: "2026-02-21" },
  { id: "ORD-010", customer: "Jack Brown", initials: "JB", items: ["Turkey Club"], total: 9.50, status: "ready", time: "7:45 AM", date: "2026-02-20" },
  { id: "ORD-011", customer: "Karen White", initials: "KW", items: ["Chai Latte", "Croissant"], total: 8.45, status: "completed", time: "7:30 AM", date: "2026-02-20" },
  { id: "ORD-012", customer: "Leo Garcia", initials: "LG", items: ["Mango Smoothie"], total: 6.25, status: "preparing", time: "7:15 AM", date: "2026-02-20" },
  { id: "ORD-013", customer: "Maya Patel", initials: "MP", items: ["Cappuccino", "Turkey Club"], total: 14.25, status: "pending", time: "7:00 AM", date: "2026-02-20" },
  { id: "ORD-014", customer: "Nathan Clark", initials: "NC", items: ["Caramel Latte", "Blueberry Muffin"], total: 9.25, status: "completed", time: "6:45 AM", date: "2026-02-20" },
  { id: "ORD-015", customer: "Olivia Hall", initials: "OH", items: ["Espresso"], total: 3.00, status: "completed", time: "6:30 AM", date: "2026-02-20" },
]

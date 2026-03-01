import { useState } from 'react'
import { menuItems as initialItems } from '@/data/menu-items'
import { MenuCard } from './menu-card'
import AddItemDialog from './add-item-dialog'

export default function MenuGrid() {
  const [items, setItems] = useState(initialItems)

  function toggleAvailability(id: string) {
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, available: !item.available } : item)),
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Menu Items</h2>
          <p className="text-sm text-muted-foreground">
            {items.filter(i => i.available).length} of {items.length} items available
          </p>
        </div>
        <AddItemDialog />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map(item => (
          <MenuCard key={item.id} item={item} onToggleAvailability={toggleAvailability} />
        ))}
      </div>
    </div>
  )
}

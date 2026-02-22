import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import type { MenuItem } from "@/data/menu-items"

const categoryColors: Record<string, string> = {
  coffee: "bg-amber-100 text-amber-800",
  tea: "bg-green-100 text-green-800",
  pastry: "bg-orange-100 text-orange-800",
  sandwich: "bg-blue-100 text-blue-800",
  smoothie: "bg-purple-100 text-purple-800",
}

export function MenuCard({
  item,
  onToggleAvailability,
}: {
  item: MenuItem
  onToggleAvailability: (id: string) => void
}) {
  return (
    <Card className={!item.available ? "opacity-60" : ""}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base">{item.name}</CardTitle>
          <Badge variant="outline" className={categoryColors[item.category]}>
            {item.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">${item.price.toFixed(2)}</span>
          <div className="flex items-center gap-2">
            <Checkbox
              id={`avail-${item.id}`}
              checked={item.available}
              onCheckedChange={() => onToggleAvailability(item.id)}
            />
            <label htmlFor={`avail-${item.id}`} className="text-sm text-muted-foreground cursor-pointer">
              Available
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

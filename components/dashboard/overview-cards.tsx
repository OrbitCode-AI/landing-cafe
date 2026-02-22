import { DollarSign, ShoppingBag, Users, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { stats } from "@/data/stats"

const icons = [DollarSign, ShoppingBag, Users, Clock]

export function OverviewCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => {
        const Icon = icons[i]
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 pt-1">
                <Badge
                  variant={stat.trend === "up" ? "default" : "secondary"}
                  className="text-xs px-1.5 py-0"
                >
                  {stat.change}
                </Badge>
                <span className="text-xs text-muted-foreground">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

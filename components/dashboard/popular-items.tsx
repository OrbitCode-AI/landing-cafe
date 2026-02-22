import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { popularItems } from "@/data/stats"

export function PopularItems() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Items</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {popularItems.map((item, i) => (
          <div key={item.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{item.name}</span>
              <span className="text-sm text-muted-foreground">{item.orders} orders</span>
            </div>
            <Progress value={item.percentage} className="h-2" />
            {i < popularItems.length - 1 && <Separator />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { recentOrders } from "@/data/orders"
import type { OrderStatus } from "@/data/orders"

const statusVariant: Record<OrderStatus, "default" | "secondary" | "destructive" | "outline"> = {
  pending: "outline",
  preparing: "secondary",
  ready: "default",
  completed: "default",
  cancelled: "destructive",
}

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7">
                      <AvatarFallback className="text-xs bg-muted">
                        {order.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">{order.customer}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {order.items.join(", ")}
                </TableCell>
                <TableCell className="text-sm">${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[order.status]} className="capitalize text-xs">
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-sm text-muted-foreground">
                  {order.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

import { useState, useMemo } from "react"
import { MoreHorizontal, Eye, RefreshCw } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner"
import { allOrders } from "@/data/orders"
import type { Order, OrderStatus } from "@/data/orders"
import { OrdersFilters } from "./orders-filters"
import { OrderDetailDialog } from "./order-detail-dialog"

const statusVariant: Record<OrderStatus, "default" | "secondary" | "destructive" | "outline"> = {
  pending: "outline",
  preparing: "secondary",
  ready: "default",
  completed: "default",
  cancelled: "destructive",
}

export function OrdersTable() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<Set<OrderStatus>>(
    new Set(["pending", "preparing", "ready", "completed", "cancelled"])
  )
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)

  function toggleStatus(status: OrderStatus) {
    setStatusFilter((prev) => {
      const next = new Set(prev)
      if (next.has(status)) {
        next.delete(status)
      } else {
        next.add(status)
      }
      return next
    })
  }

  const filteredOrders = useMemo(() => {
    return allOrders.filter((order) => {
      if (!statusFilter.has(order.status)) return false
      if (search) {
        const q = search.toLowerCase()
        return (
          order.customer.toLowerCase().includes(q) ||
          order.id.toLowerCase().includes(q) ||
          order.items.some((item) => item.toLowerCase().includes(q))
        )
      }
      return true
    })
  }, [search, statusFilter])

  function handleViewDetails(order: Order) {
    setSelectedOrder(order)
    setDetailOpen(true)
  }

  function handleUpdateStatus(order: Order) {
    const nextStatus: Record<OrderStatus, string> = {
      pending: "preparing",
      preparing: "ready",
      ready: "completed",
      completed: "completed",
      cancelled: "cancelled",
    }
    toast.success(`Order ${order.id} updated`, {
      description: `Status changed to "${nextStatus[order.status]}".`,
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <OrdersFilters
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusFilterChange={toggleStatus}
      />

      <ScrollArea className="h-[500px] rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-mono text-sm">{order.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7">
                      <AvatarFallback className="text-xs bg-muted">
                        {order.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{order.customer}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground max-w-48 truncate">
                  {order.items.join(", ")}
                </TableCell>
                <TableCell className="text-sm">${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[order.status]} className="capitalize text-xs">
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{order.time}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleViewDetails(order)}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <DropdownMenuItem
                            onClick={() => handleUpdateStatus(order)}
                            disabled={order.status === "completed" || order.status === "cancelled"}
                          >
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Update Status
                          </DropdownMenuItem>
                        </TooltipTrigger>
                        <TooltipContent>Advance to next status</TooltipContent>
                      </Tooltip>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
            {filteredOrders.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>

      <OrderDetailDialog
        order={selectedOrder}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />
    </div>
  )
}

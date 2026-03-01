import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import type { Order, OrderStatus } from '@/data/orders'

const statusVariant: Record<OrderStatus, 'default' | 'secondary' | 'destructive' | 'outline'> = {
  pending: 'outline',
  preparing: 'secondary',
  ready: 'default',
  completed: 'default',
  cancelled: 'destructive',
}

export default function OrderDetailDialogPreview() {
  const order = {
    id: 'ORD-001',
    customer: 'Alice Johnson',
    initials: 'AJ',
    items: ['Caramel Latte', 'Croissant'],
    total: 9.0,
    status: 'completed' as OrderStatus,
    time: '9:15 AM',
    date: '2026-02-21',
  }
  return (
    <div className="rounded-lg border bg-background p-6 max-w-md flex flex-col gap-4">
      <div className="text-lg leading-none font-semibold">Order {order.id}</div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Customer</span>
        <span className="font-medium">{order.customer}</span>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Status</span>
        <Badge variant={statusVariant[order.status]} className="capitalize">
          {order.status}
        </Badge>
      </div>
      <Separator />
      <div className="flex flex-col gap-1">
        <span className="text-sm text-muted-foreground">Items</span>
        <ul className="flex flex-col gap-1">
          {order.items.map((item, i) => (
            <li key={i} className="text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Total</span>
        <span className="text-lg font-semibold">${order.total.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Time</span>
        <span className="text-sm">
          {order.time} &middot; {order.date}
        </span>
      </div>
    </div>
  )
}

export function OrderDetailDialog({
  order,
  open,
  onOpenChange,
}: {
  order: Order | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!order) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Order {order.id}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Customer</span>
            <span className="font-medium">{order.customer}</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Status</span>
            <Badge variant={statusVariant[order.status]} className="capitalize">
              {order.status}
            </Badge>
          </div>
          <Separator />
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">Items</span>
            <ul className="flex flex-col gap-1">
              {order.items.map((item, i) => (
                <li key={i} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="text-lg font-semibold">${order.total.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Time</span>
            <span className="text-sm">
              {order.time} &middot; {order.date}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

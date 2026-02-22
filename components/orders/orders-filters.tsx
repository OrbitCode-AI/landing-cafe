import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { OrderStatus } from "@/data/orders"

const statuses: OrderStatus[] = ["pending", "preparing", "ready", "completed", "cancelled"]

export function OrdersFilters({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}: {
  search: string
  onSearchChange: (value: string) => void
  statusFilter: Set<OrderStatus>
  onStatusFilterChange: (status: OrderStatus) => void
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search orders..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Status {statusFilter.size < statuses.length && `(${statusFilter.size})`}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {statuses.map((status) => (
            <DropdownMenuCheckboxItem
              key={status}
              checked={statusFilter.has(status)}
              onCheckedChange={() => onStatusFilterChange(status)}
              className="capitalize"
            >
              {status}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

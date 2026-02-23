import { useState } from "react"
import { type Coffee, LayoutDashboard, UtensilsCrossed, ClipboardList, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Tab = "dashboard" | "menu" | "orders" | "settings"

const navItems: { icon: typeof Coffee; label: string; value: Tab }[] = [
  { icon: LayoutDashboard, label: "Dashboard", value: "dashboard" },
  { icon: UtensilsCrossed, label: "Menu", value: "menu" },
  { icon: ClipboardList, label: "Orders", value: "orders" },
  { icon: Settings, label: "Settings", value: "settings" },
]

export function AppSidebar({
  activeTab,
  onTabChange,
}: {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}) {
  const [hoveredTab, setHoveredTab] = useState<Tab | null>(null)

  return (
    <aside className="hidden md:flex h-screen w-16 flex-col items-center border-r border-sidebar-border bg-sidebar py-4 gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground text-lg">
        ☕
      </div>
      <Separator className="w-8 bg-sidebar-border" />
      <nav className="flex flex-1 flex-col items-center gap-2">
        {navItems.map((item) => (
          <Tooltip key={item.value} open={hoveredTab === item.value}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`h-10 w-10 ${
                  activeTab === item.value
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                }`}
                onFocus={() => setHoveredTab(item.value)}
                onBlur={() => setHoveredTab(current => (current === item.value ? null : current))}
                onMouseEnter={() => setHoveredTab(item.value)}
                onMouseLeave={() => setHoveredTab(current => (current === item.value ? null : current))}
                onClick={() => onTabChange(item.value)}
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.label}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </aside>
  )
}

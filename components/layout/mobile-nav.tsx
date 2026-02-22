import { Menu, type Coffee, LayoutDashboard, UtensilsCrossed, ClipboardList, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

type Tab = "dashboard" | "menu" | "orders" | "settings"

const navItems: { icon: typeof Coffee; label: string; value: Tab }[] = [
  { icon: LayoutDashboard, label: "Dashboard", value: "dashboard" },
  { icon: UtensilsCrossed, label: "Menu", value: "menu" },
  { icon: ClipboardList, label: "Orders", value: "orders" },
  { icon: Settings, label: "Settings", value: "settings" },
]

export function MobileNav({
  activeTab,
  onTabChange,
}: {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 bg-sidebar text-sidebar-foreground p-0">
        <SheetHeader className="p-4">
          <SheetTitle className="flex items-center gap-2 text-sidebar-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              ☕
            </span>
            Cozy Cafe
          </SheetTitle>
        </SheetHeader>
        <Separator className="bg-sidebar-border" />
        <nav className="flex flex-col gap-1 p-2">
          {navItems.map((item) => (
            <Button
              key={item.value}
              variant="ghost"
              className={`justify-start gap-3 ${
                activeTab === item.value
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              }`}
              onClick={() => {
                onTabChange(item.value)
                setOpen(false)
              }}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

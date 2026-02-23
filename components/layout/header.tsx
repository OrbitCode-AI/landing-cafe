import { Bell, LogOut, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MobileNav } from "./mobile-nav"

type Tab = "dashboard" | "menu" | "orders" | "settings"

const tabLabels: Record<Tab, string> = {
  dashboard: "Dashboard",
  menu: "Menu",
  orders: "Orders",
  settings: "Settings",
}

export default function HeaderPreview() {
  return <Header activeTab="dashboard" onTabChange={() => {}} />
}

export function Header({
  activeTab,
  onTabChange,
}: {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}) {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6 lg:px-10">
      <div className="flex items-center gap-3">
        <MobileNav activeTab={activeTab} onTabChange={onTabChange} />
        <h1 className="text-lg font-semibold">{tabLabels[activeTab]}</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  JD
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Jane Doe</p>
                <p className="text-xs text-muted-foreground">jane@cozycafe.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

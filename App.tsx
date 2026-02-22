import { useState } from "react"
import "./index.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { Header } from "@/components/layout/header"
import { OverviewCards } from "@/components/dashboard/overview-cards"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { PopularItems } from "@/components/dashboard/popular-items"
import { MenuGrid } from "@/components/menu/menu-grid"
import { OrdersTable } from "@/components/orders/orders-table"
import { SettingsForm } from "@/components/settings/settings-form"

type Tab = "dashboard" | "menu" | "orders" | "settings"

function DashboardTab() {
  return (
    <div className="flex flex-col gap-8">
      <OverviewCards />
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <RecentOrders />
        </div>
        <div className="lg:col-span-2">
          <PopularItems />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard")

  return (
    <TooltipProvider>
      <div className="flex h-screen overflow-hidden">
        <AppSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header activeTab={activeTab} onTabChange={setActiveTab} />
          <main className="flex-1 overflow-y-auto p-6 lg:p-10">
            {activeTab === "dashboard" && <DashboardTab />}
            {activeTab === "menu" && <MenuGrid />}
            {activeTab === "orders" && <OrdersTable />}
            {activeTab === "settings" && <SettingsForm />}
          </main>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </TooltipProvider>
  )
}

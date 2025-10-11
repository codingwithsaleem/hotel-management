import type { ReactNode } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardSidebar from "@/components/layouts/dashboard/dashboard-sidebar"
import DashboardHeader from "@/components/layouts/dashboard/dashboard-header"
import DashboardFooter from "@/components/layouts/dashboard/dashboard-footer"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen" style={{
        backgroundImage: "url('/images/auth/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          {/* Sidebar */}
          <DashboardSidebar />

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <DashboardHeader />

            {/* Page Content */}
            <main className="flex-1 p-4">{children}</main>

            {/* Footer */}
            <DashboardFooter />
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}

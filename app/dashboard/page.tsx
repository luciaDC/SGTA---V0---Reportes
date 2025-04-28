import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { UpcomingDeadlines } from "@/components/dashboard/upcoming-deadlines"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentActivity />
        <UpcomingDeadlines />
      </div>
    </div>
  )
}

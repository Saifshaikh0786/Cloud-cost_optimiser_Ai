import { Navbar } from "@/components/navbar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { CostOverview } from "@/components/dashboard/cost-overview"
import { ResourceUtilization } from "@/components/dashboard/resource-utilization"
import { OptimizationRecommendations } from "@/components/dashboard/optimization-recommendations"
import { CostForecast } from "@/components/dashboard/cost-forecast"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <DashboardHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <CostOverview />
          <ResourceUtilization />
        </div>
        <div className="mt-8">
          <OptimizationRecommendations />
        </div>
        <div className="mt-8">
          <CostForecast />
        </div>
      </main>
      <Footer />
    </div>
  )
}

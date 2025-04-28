"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for the cost overview chart
const costData = [
  { date: "Jan 1", aws: 1200, azure: 800, gcp: 600, total: 2600 },
  { date: "Jan 8", aws: 1300, azure: 900, gcp: 550, total: 2750 },
  { date: "Jan 15", aws: 1100, azure: 950, gcp: 700, total: 2750 },
  { date: "Jan 22", aws: 1400, azure: 850, gcp: 650, total: 2900 },
  { date: "Jan 29", aws: 1350, azure: 750, gcp: 800, total: 2900 },
  { date: "Feb 5", aws: 1500, azure: 850, gcp: 750, total: 3100 },
  { date: "Feb 12", aws: 1450, azure: 900, gcp: 700, total: 3050 },
  { date: "Feb 19", aws: 1400, azure: 950, gcp: 650, total: 3000 },
  { date: "Feb 26", aws: 1300, azure: 1000, gcp: 600, total: 2900 },
  { date: "Mar 5", aws: 1200, azure: 1050, gcp: 550, total: 2800 },
  { date: "Mar 12", aws: 1100, azure: 1100, gcp: 500, total: 2700 },
  { date: "Mar 19", aws: 1000, azure: 1050, gcp: 450, total: 2500 },
  { date: "Mar 26", aws: 900, azure: 1000, gcp: 400, total: 2300 },
]

// Sample data for the service breakdown
const serviceData = [
  { name: "Compute", aws: 600, azure: 400, gcp: 300 },
  { name: "Storage", aws: 250, azure: 200, gcp: 150 },
  { name: "Database", aws: 350, azure: 250, gcp: 100 },
  { name: "Networking", aws: 200, azure: 150, gcp: 50 },
]

export function CostOverview() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle>Cost Overview</CardTitle>
        <CardDescription>Cloud spending trends over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="trend">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800">
            <TabsTrigger value="trend">Cost Trend</TabsTrigger>
            <TabsTrigger value="services">By Service</TabsTrigger>
          </TabsList>
          <TabsContent value="trend" className="pt-4">
            <ChartContainer
              config={{
                total: {
                  label: "Total",
                  color: "hsl(var(--chart-1))",
                },
                aws: {
                  label: "AWS",
                  color: "hsl(var(--chart-2))",
                },
                azure: {
                  label: "Azure",
                  color: "hsl(var(--chart-3))",
                },
                gcp: {
                  label: "GCP",
                  color: "hsl(var(--chart-4))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={costData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="date" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stroke="var(--color-total)"
                    fill="var(--color-total)"
                    fillOpacity={0.2}
                    stackId="1"
                  />
                  <Area
                    type="monotone"
                    dataKey="aws"
                    stroke="var(--color-aws)"
                    fill="var(--color-aws)"
                    fillOpacity={0.2}
                    stackId="2"
                  />
                  <Area
                    type="monotone"
                    dataKey="azure"
                    stroke="var(--color-azure)"
                    fill="var(--color-azure)"
                    fillOpacity={0.2}
                    stackId="2"
                  />
                  <Area
                    type="monotone"
                    dataKey="gcp"
                    stroke="var(--color-gcp)"
                    fill="var(--color-gcp)"
                    fillOpacity={0.2}
                    stackId="2"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="text-sm text-slate-400">Total</div>
                <div className="text-xl font-bold">$2,800</div>
                <div className="text-sm text-red-400">+12% vs last month</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="text-sm text-slate-400">AWS</div>
                <div className="text-xl font-bold">$1,200</div>
                <div className="text-sm text-red-400">+8% vs last month</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="text-sm text-slate-400">Azure</div>
                <div className="text-xl font-bold">$1,050</div>
                <div className="text-sm text-red-400">+15% vs last month</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="text-sm text-slate-400">GCP</div>
                <div className="text-xl font-bold">$550</div>
                <div className="text-sm text-green-400">-5% vs last month</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services" className="pt-4">
            <ChartContainer
              config={{
                aws: {
                  label: "AWS",
                  color: "hsl(var(--chart-2))",
                },
                azure: {
                  label: "Azure",
                  color: "hsl(var(--chart-3))",
                },
                gcp: {
                  label: "GCP",
                  color: "hsl(var(--chart-4))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={serviceData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="aws" stackId="a" fill="var(--color-aws)" />
                  <Bar dataKey="azure" stackId="a" fill="var(--color-azure)" />
                  <Bar dataKey="gcp" stackId="a" fill="var(--color-gcp)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="text-sm text-slate-400">Highest Cost Service</div>
                <div className="text-xl font-bold">Compute ($1,300)</div>
                <div className="text-sm text-slate-400">46% of total spending</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="text-sm text-slate-400">Fastest Growing</div>
                <div className="text-xl font-bold">Database Services</div>
                <div className="text-sm text-red-400">+23% vs last month</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

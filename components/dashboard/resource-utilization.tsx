"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for CPU utilization
const cpuData = [
  { time: "00:00", aws: 45, azure: 60, gcp: 30 },
  { time: "02:00", aws: 40, azure: 55, gcp: 25 },
  { time: "04:00", aws: 35, azure: 50, gcp: 20 },
  { time: "06:00", aws: 30, azure: 45, gcp: 15 },
  { time: "08:00", aws: 50, azure: 65, gcp: 35 },
  { time: "10:00", aws: 70, azure: 75, gcp: 55 },
  { time: "12:00", aws: 75, azure: 80, gcp: 60 },
  { time: "14:00", aws: 80, azure: 85, gcp: 65 },
  { time: "16:00", aws: 85, azure: 90, gcp: 70 },
  { time: "18:00", aws: 75, azure: 80, gcp: 60 },
  { time: "20:00", aws: 65, azure: 70, gcp: 50 },
  { time: "22:00", aws: 55, azure: 65, gcp: 40 },
]

// Sample data for instance utilization
const instanceData = [
  { name: "Optimized", value: 35, color: "#22c55e" },
  { name: "Under-utilized", value: 45, color: "#f59e0b" },
  { name: "Over-provisioned", value: 20, color: "#ef4444" },
]

export function ResourceUtilization() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle>Resource Utilization</CardTitle>
        <CardDescription>CPU usage and instance efficiency</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="cpu">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800">
            <TabsTrigger value="cpu">CPU Usage</TabsTrigger>
            <TabsTrigger value="instances">Instance Efficiency</TabsTrigger>
          </TabsList>
          <TabsContent value="cpu" className="pt-4">
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
                <LineChart
                  data={cpuData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="aws" stroke="var(--color-aws)" strokeWidth={2} />
                  <Line type="monotone" dataKey="azure" stroke="var(--color-azure)" strokeWidth={2} />
                  <Line type="monotone" dataKey="gcp" stroke="var(--color-gcp)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="text-sm text-slate-400">AWS Avg CPU</div>
                <div className="text-xl font-bold">58.8%</div>
                <div className="text-sm text-yellow-400">Medium utilization</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="text-sm text-slate-400">Azure Avg CPU</div>
                <div className="text-xl font-bold">68.3%</div>
                <div className="text-sm text-green-400">Good utilization</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="text-sm text-slate-400">GCP Avg CPU</div>
                <div className="text-xl font-bold">43.8%</div>
                <div className="text-sm text-red-400">Low utilization</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="instances" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-[300px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={instanceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {instanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-green-500">
                  <div className="text-lg font-semibold">35% Optimized</div>
                  <p className="text-slate-300 text-sm">These instances are properly sized and utilized efficiently.</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-yellow-500">
                  <div className="text-lg font-semibold">45% Under-utilized</div>
                  <p className="text-slate-300 text-sm">
                    These instances have low CPU/memory usage and could be downsized.
                  </p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-red-500">
                  <div className="text-lg font-semibold">20% Over-provisioned</div>
                  <p className="text-slate-300 text-sm">
                    These instances are significantly larger than needed and wasting resources.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

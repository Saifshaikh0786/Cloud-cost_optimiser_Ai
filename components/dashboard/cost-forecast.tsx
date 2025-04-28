"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for cost forecasting
const forecastData = [
  { month: "Jan", actual: 2600, forecast: null, optimized: null, budget: 3000 },
  { month: "Feb", actual: 2800, forecast: null, optimized: null, budget: 3000 },
  { month: "Mar", actual: 3100, forecast: null, optimized: null, budget: 3000 },
  { month: "Apr", actual: 3300, forecast: null, optimized: null, budget: 3000 },
  { month: "May", actual: 3500, forecast: null, optimized: null, budget: 3500 },
  { month: "Jun", actual: 3700, forecast: null, optimized: null, budget: 3500 },
  { month: "Jul", actual: null, forecast: 3900, optimized: 3200, budget: 3500 },
  { month: "Aug", actual: null, forecast: 4100, optimized: 3300, budget: 3500 },
  { month: "Sep", actual: null, forecast: 4300, optimized: 3400, budget: 3500 },
  { month: "Oct", actual: null, forecast: 4500, optimized: 3500, budget: 4000 },
  { month: "Nov", actual: null, forecast: 4700, optimized: 3600, budget: 4000 },
  { month: "Dec", actual: null, forecast: 4900, optimized: 3700, budget: 4000 },
]

export function CostForecast() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle>Cost Forecast</CardTitle>
        <CardDescription>Projected cloud spending for the next 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="forecast">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800">
            <TabsTrigger value="forecast">Cost Projection</TabsTrigger>
            <TabsTrigger value="savings">Potential Savings</TabsTrigger>
          </TabsList>
          <TabsContent value="forecast" className="pt-4">
            <ChartContainer
              config={{
                actual: {
                  label: "Actual Spend",
                  color: "hsl(var(--chart-1))",
                },
                forecast: {
                  label: "Forecasted Spend",
                  color: "hsl(var(--chart-2))",
                },
                optimized: {
                  label: "Optimized Forecast",
                  color: "hsl(var(--chart-3))",
                },
                budget: {
                  label: "Budget",
                  color: "hsl(var(--chart-4))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={forecastData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <ReferenceLine
                    x="Jun"
                    stroke="#94a3b8"
                    strokeDasharray="3 3"
                    label={{ value: "Current", position: "top", fill: "#94a3b8" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="var(--color-actual)"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="forecast"
                    stroke="var(--color-forecast)"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="optimized"
                    stroke="var(--color-optimized)"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                  <Line type="monotone" dataKey="budget" stroke="var(--color-budget)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="text-sm text-slate-400">Current Monthly Cost</div>
                <div className="text-xl font-bold">$3,700</div>
                <div className="text-sm text-red-400">+5.7% vs last month</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="text-sm text-slate-400">Projected EOY Cost</div>
                <div className="text-xl font-bold">$4,900</div>
                <div className="text-sm text-red-400">+32.4% vs current</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3">
                <div className="text-sm text-slate-400">Optimized EOY Cost</div>
                <div className="text-xl font-bold">$3,700</div>
                <div className="text-sm text-green-400">24.5% potential savings</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="savings" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">Projected Annual Savings</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-300">Right-sizing</span>
                      <span className="text-sm font-medium text-green-400">$4,800</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-300">Reserved Instances</span>
                      <span className="text-sm font-medium text-green-400">$3,600</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-300">Idle Resources</span>
                      <span className="text-sm font-medium text-green-400">$2,400</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-300">Storage Optimization</span>
                      <span className="text-sm font-medium text-green-400">$1,200</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-white">Total Potential Savings</span>
                    <span className="text-2xl font-bold text-green-400">$12,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">Savings by Cloud Provider</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-300">AWS</span>
                      <span className="text-sm font-medium text-green-400">$6,000</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-300">Azure</span>
                      <span className="text-sm font-medium text-green-400">$3,600</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-300">Google Cloud</span>
                      <span className="text-sm font-medium text-green-400">$2,400</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Current Annual Cost</p>
                      <p className="text-lg font-semibold text-white">$42,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Optimized Annual Cost</p>
                      <p className="text-lg font-semibold text-cyan-400">$30,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Savings Percentage</p>
                      <p className="text-lg font-semibold text-green-400">28.6%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

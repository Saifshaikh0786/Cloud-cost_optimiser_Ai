"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpDown, Check, ChevronDown, ChevronUp, Download, Filter } from "lucide-react"

// Sample recommendations data
const recommendationsData = [
  {
    id: 1,
    resource: "EC2 Instance i-0a1b2c3d4e5f",
    provider: "AWS",
    type: "Right-sizing",
    impact: "High",
    savings: "$73.00/mo",
    details: "Downsize from m5.xlarge to m5.large based on 15% average CPU utilization",
    implemented: false,
  },
  {
    id: 2,
    resource: "Azure VM vm-eastus-web01",
    provider: "Azure",
    type: "Reserved Instance",
    impact: "High",
    savings: "$124.50/mo",
    details: "Purchase 1-year reserved instance for consistent workload",
    implemented: false,
  },
  {
    id: 3,
    resource: "GCP Instance gcp-us-central1-app02",
    provider: "GCP",
    type: "Idle Resource",
    impact: "Medium",
    savings: "$45.20/mo",
    details: "Instance has been idle for 14 days, consider shutting down",
    implemented: true,
  },
  {
    id: 4,
    resource: "RDS Database db-prod-mysql",
    provider: "AWS",
    type: "Storage Optimization",
    impact: "Medium",
    savings: "$38.75/mo",
    details: "Reduce provisioned IOPS from 5000 to 3000 based on usage patterns",
    implemented: false,
  },
  {
    id: 5,
    resource: "Azure SQL Database sql-westus-analytics",
    provider: "Azure",
    type: "Right-sizing",
    impact: "Low",
    savings: "$28.30/mo",
    details: "Downgrade from Premium to Standard tier based on performance metrics",
    implemented: false,
  },
]

export function OptimizationRecommendations() {
  const [recommendations, setRecommendations] = useState(recommendationsData)
  const [sortField, setSortField] = useState("savings")
  const [sortDirection, setSortDirection] = useState("desc")
  const [expandedRows, setExpandedRows] = useState<number[]>([])

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const sortedRecommendations = [...recommendations].sort((a, b) => {
    if (sortField === "savings") {
      const aValue = Number.parseFloat(a.savings.replace("$", "").replace("/mo", ""))
      const bValue = Number.parseFloat(b.savings.replace("$", "").replace("/mo", ""))
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue
    } else if (sortField === "impact") {
      const impactOrder = { High: 3, Medium: 2, Low: 1 }
      const aValue = impactOrder[a.impact as keyof typeof impactOrder]
      const bValue = impactOrder[b.impact as keyof typeof impactOrder]
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue
    } else {
      const aValue = a[sortField as keyof typeof a]
      const bValue = b[sortField as keyof typeof b]
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
      }
      return 0
    }
  })

  const toggleRowExpanded = (id: number) => {
    setExpandedRows((prevState) =>
      prevState.includes(id) ? prevState.filter((rowId) => rowId !== id) : [...prevState, id],
    )
  }

  const handleImplement = (id: number) => {
    setRecommendations((prevState) => prevState.map((rec) => (rec.id === id ? { ...rec, implemented: true } : rec)))
  }

  const totalSavings = recommendations.reduce((sum, rec) => {
    return sum + Number.parseFloat(rec.savings.replace("$", "").replace("/mo", ""))
  }, 0)

  const implementedSavings = recommendations
    .filter((rec) => rec.implemented)
    .reduce((sum, rec) => {
      return sum + Number.parseFloat(rec.savings.replace("$", "").replace("/mo", ""))
    }, 0)

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <CardTitle>Optimization Recommendations</CardTitle>
          <CardDescription>Actionable insights to reduce cloud costs</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="text-sm text-slate-400">Total Potential Savings</div>
            <div className="text-2xl font-bold">${totalSavings.toFixed(2)}/mo</div>
            <div className="text-sm text-cyan-400">Across all recommendations</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="text-sm text-slate-400">Implemented Savings</div>
            <div className="text-2xl font-bold">${implementedSavings.toFixed(2)}/mo</div>
            <div className="text-sm text-green-400">
              {((implementedSavings / totalSavings) * 100).toFixed(1)}% of potential
            </div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="text-sm text-slate-400">Recommendations</div>
            <div className="text-2xl font-bold">{recommendations.length}</div>
            <div className="text-sm text-slate-400">
              {recommendations.filter((r) => r.implemented).length} implemented
            </div>
          </div>
        </div>

        <div className="rounded-md border border-slate-700 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-800">
              <TableRow className="hover:bg-slate-800/50">
                <TableHead className="w-[30px]"></TableHead>
                <TableHead>Resource</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("impact")}>
                  <div className="flex items-center">
                    Impact
                    {sortField === "impact" ? (
                      sortDirection === "asc" ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )
                    ) : (
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("savings")}>
                  <div className="flex items-center">
                    Monthly Savings
                    {sortField === "savings" ? (
                      sortDirection === "asc" ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )
                    ) : (
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedRecommendations.map((rec) => (
                <>
                  <TableRow key={rec.id} className="hover:bg-slate-800/50">
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => toggleRowExpanded(rec.id)}>
                        {expandedRows.includes(rec.id) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell className="font-medium">{rec.resource}</TableCell>
                    <TableCell>{rec.provider}</TableCell>
                    <TableCell>{rec.type}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`
                          ${rec.impact === "High" ? "border-red-500 text-red-500" : ""}
                          ${rec.impact === "Medium" ? "border-yellow-500 text-yellow-500" : ""}
                          ${rec.impact === "Low" ? "border-green-500 text-green-500" : ""}
                        `}
                      >
                        {rec.impact}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold">{rec.savings}</TableCell>
                    <TableCell>
                      {rec.implemented ? (
                        <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/20">Implemented</Badge>
                      ) : (
                        <Badge variant="outline" className="border-slate-500 text-slate-300">
                          Pending
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        className={`w-full ${
                          rec.implemented
                            ? "bg-green-500/20 text-green-500 hover:bg-green-500/30 cursor-default"
                            : "bg-cyan-500 hover:bg-cyan-600 text-white"
                        }`}
                        onClick={() => !rec.implemented && handleImplement(rec.id)}
                        disabled={rec.implemented}
                      >
                        {rec.implemented ? (
                          <>
                            <Check className="h-4 w-4 mr-1" /> Done
                          </>
                        ) : (
                          "Implement"
                        )}
                      </Button>
                    </TableCell>
                  </TableRow>
                  {expandedRows.includes(rec.id) && (
                    <TableRow className="bg-slate-800/30">
                      <TableCell colSpan={8} className="p-4">
                        <div className="text-sm text-slate-300">
                          <strong>Details:</strong> {rec.details}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Search, Plus, History, Bookmark, Download, Trash2, Bot } from "lucide-react"

export function ChatSidebar() {
  const [searchQuery, setSearchQuery] = useState("")

  const conversations = [
    { id: 1, title: "AWS EC2 Optimization", date: "2 hours ago", active: true },
    { id: 2, title: "Azure Storage Costs", date: "Yesterday", active: false },
    { id: 3, title: "GCP Network Pricing", date: "3 days ago", active: false },
    { id: 4, title: "Reserved Instances Strategy", date: "1 week ago", active: false },
    { id: 5, title: "Kubernetes Cost Management", date: "2 weeks ago", active: false },
    { id: 6, title: "Database Optimization", date: "3 weeks ago", active: false },
  ]

  const filteredConversations = conversations.filter((conv) =>
    conv.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card className="bg-slate-900 border-slate-800 h-full relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-40 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <CardHeader className="px-4 py-3 border-b border-slate-800 relative z-10">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Bot className="h-5 w-5 mr-2 text-cyan-400" />
          Conversations
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 relative z-10">
        <div className="space-y-4">
          <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            <Plus className="h-4 w-4 mr-2" />
            New Conversation
          </Button>

          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-500" />
            <Input
              placeholder="Search conversations..."
              className="pl-8 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-2 rounded-lg cursor-pointer transition-colors ${
                  conversation.active
                    ? "bg-gradient-to-r from-slate-800 to-slate-800/80 border border-slate-700"
                    : "hover:bg-slate-800/50"
                }`}
              >
                <div className="flex items-start gap-2">
                  <MessageSquare
                    className={`h-4 w-4 mt-0.5 ${conversation.active ? "text-cyan-400" : "text-slate-400"}`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3
                        className={`font-medium text-sm truncate ${conversation.active ? "text-white" : "text-slate-300"}`}
                      >
                        {conversation.title}
                      </h3>
                      {conversation.active && (
                        <Badge className="ml-2 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 text-xs">Active</Badge>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">{conversation.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800">
            <div className="flex flex-col gap-1">
              <Button variant="ghost" size="sm" className="justify-start text-slate-400 hover:text-white">
                <History className="h-4 w-4 mr-2" />
                History
              </Button>
              <Button variant="ghost" size="sm" className="justify-start text-slate-400 hover:text-white">
                <Bookmark className="h-4 w-4 mr-2" />
                Saved Responses
              </Button>
              <Button variant="ghost" size="sm" className="justify-start text-slate-400 hover:text-white">
                <Download className="h-4 w-4 mr-2" />
                Export Chats
              </Button>
              <Button variant="ghost" size="sm" className="justify-start text-slate-400 hover:text-white">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear History
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

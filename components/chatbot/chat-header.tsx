"use client"

import { useState } from "react"
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Share2, MoreHorizontal, Copy, Printer, FileText, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ChatHeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function ChatHeader({ activeTab, setActiveTab }: ChatHeaderProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyConversation = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const getTitle = () => {
    switch (activeTab) {
      case "chat":
        return "AI Assistant"
      case "resources":
        return "Resources & Documentation"
      case "profile":
        return "User Profile"
      default:
        return "AI Assistant"
    }
  }

  const getDescription = () => {
    switch (activeTab) {
      case "chat":
        return "Ask questions about cloud cost optimization"
      case "resources":
        return "Helpful guides and tools for cloud optimization"
      case "profile":
        return "Manage your account and preferences"
      default:
        return "Ask questions about cloud cost optimization"
    }
  }

  return (
    <CardHeader className="flex flex-row items-center justify-between border-b border-slate-800 pb-4">
      <div>
        <CardTitle>{getTitle()}</CardTitle>
        <CardDescription>{getDescription()}</CardDescription>
      </div>
      <div className="flex items-center gap-2">
        {activeTab === "chat" && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 text-slate-300">
                <DropdownMenuItem onClick={handleCopyConversation} className="cursor-pointer hover:text-white">
                  <Copy className="mr-2 h-4 w-4" />
                  <span>{isCopied ? "Copied!" : "Copy conversation"}</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:text-white">
                  <Printer className="mr-2 h-4 w-4" />
                  <span>Print</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:text-white">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Export as PDF</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-700" />
                <DropdownMenuItem className="cursor-pointer text-red-400 hover:text-red-300 hover:bg-red-900/20">
                  <Trash2 className="mr-2 h-4 w-4" />
                  <span>Clear conversation</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </CardHeader>
  )
}

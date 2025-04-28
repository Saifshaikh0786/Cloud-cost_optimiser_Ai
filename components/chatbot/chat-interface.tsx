"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChatMessage } from "@/components/chatbot/chat-message"
import { ChatSidebar } from "@/components/chatbot/chat-sidebar"
import { ChatHeader } from "@/components/chatbot/chat-header"
import { ChatProfile } from "@/components/chatbot/chat-profile"
import { Send, Loader2, Sparkles, Paperclip, Mic, Bot } from "lucide-react"
import { gemini } from "@/lib/gemini"
import { motion, AnimatePresence } from "framer-motion"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-message",
      role: "assistant",
      content:
        "👋 Welcome to CloudOptimize AI Assistant! I can help you with cloud cost optimization, resource management, and best practices. What would you like to know today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const suggestions = [
    "How can I reduce my AWS EC2 costs?",
    "What are the best practices for Azure storage optimization?",
    "Compare reserved instances vs. spot instances",
    "How to identify idle resources in my cloud infrastructure?",
  ]

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (messages.length > 1) {
      setShowSuggestions(false)
    }
  }, [messages.length])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Use the Gemini API directly
      const model = gemini("gemini-1.5-pro-latest")
      const result =
        await model.generateContent(`You are CloudOptimize AI, a specialized assistant for cloud cost optimization. 
      Provide detailed, actionable advice on cloud cost management, resource optimization, 
      and best practices. Format your responses with clear headings and sections.
      
      User query: ${input}`)

      const text = result.response.text()

      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: text,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error generating response:", error)

      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: "I'm sorry, I encountered an error while processing your request. Please try again.",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    inputRef.current?.focus()
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-1/4">
        <ChatSidebar />
      </div>

      <div className="lg:w-3/4">
        <Card className="bg-slate-900 border-slate-800 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <ChatHeader activeTab={activeTab} setActiveTab={setActiveTab} />

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 bg-slate-800">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="p-0 relative">
              <CardContent className="p-0">
                <div className="flex flex-col h-[600px]">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
                    <AnimatePresence>
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChatMessage message={message} />
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">AI</span>
                        </div>
                        <div className="flex-1 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
                            <span className="text-slate-300">Generating response...</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {showSuggestions && messages.length === 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6"
                      >
                        <div className="text-sm text-slate-400 mb-2">Try asking about:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              className="justify-start h-auto py-2 px-3 text-left border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-300"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              <Bot className="h-4 w-4 mr-2 text-cyan-400" />
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  <div className="border-t border-slate-800 p-4 bg-slate-900/80 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <Input
                          ref={inputRef}
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Ask about cloud cost optimization..."
                          className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                          disabled={isLoading}
                        />
                        <Button
                          type="submit"
                          disabled={isLoading || !input.trim()}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                        >
                          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                        </Button>
                      </div>
                      <div className="flex justify-between items-center px-1">
                        <div className="flex gap-2">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-slate-400 hover:text-white"
                          >
                            <Paperclip className="h-4 w-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-slate-400 hover:text-white"
                          >
                            <Mic className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-xs text-slate-500 flex items-center">
                          <Sparkles className="h-3 w-3 mr-1 text-cyan-400" />
                          Powered by Gemini AI
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="resources">
              <CardContent className="p-6 relative z-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Cloud Cost Optimization Resources</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-colors">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-cyan-400 mb-2">AWS Cost Optimization</h4>
                          <p className="text-sm text-slate-300 mb-3">
                            Best practices for optimizing costs on Amazon Web Services.
                          </p>
                          <Button variant="link" className="text-cyan-400 p-0 h-auto">
                            View Guide
                          </Button>
                        </CardContent>
                      </Card>
                      <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-colors">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-cyan-400 mb-2">Azure Cost Management</h4>
                          <p className="text-sm text-slate-300 mb-3">
                            Strategies for reducing costs on Microsoft Azure.
                          </p>
                          <Button variant="link" className="text-cyan-400 p-0 h-auto">
                            View Guide
                          </Button>
                        </CardContent>
                      </Card>
                      <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-colors">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-cyan-400 mb-2">GCP Cost Optimization</h4>
                          <p className="text-sm text-slate-300 mb-3">
                            Tips for optimizing Google Cloud Platform spending.
                          </p>
                          <Button variant="link" className="text-cyan-400 p-0 h-auto">
                            View Guide
                          </Button>
                        </CardContent>
                      </Card>
                      <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-colors">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-cyan-400 mb-2">Multi-Cloud Strategy</h4>
                          <p className="text-sm text-slate-300 mb-3">Managing costs across multiple cloud providers.</p>
                          <Button variant="link" className="text-cyan-400 p-0 h-auto">
                            View Guide
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Live Architecture</h3>
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 p-4">
                      <div className="aspect-video relative overflow-hidden rounded-md">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg viewBox="0 0 800 400" className="w-full h-auto">
                            {/* Cloud Providers */}
                            <g>
                              <rect
                                x="50"
                                y="50"
                                width="150"
                                height="80"
                                rx="10"
                                fill="#0f172a"
                                stroke="#334155"
                                strokeWidth="2"
                              />
                              <text x="125" y="85" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold">
                                AWS
                              </text>
                              <circle cx="125" cy="110" r="10" fill="#0ea5e9" className="animate-pulse">
                                <animate
                                  attributeName="opacity"
                                  values="0.3;0.8;0.3"
                                  dur="2s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                            </g>

                            <g>
                              <rect
                                x="50"
                                y="160"
                                width="150"
                                height="80"
                                rx="10"
                                fill="#0f172a"
                                stroke="#334155"
                                strokeWidth="2"
                              />
                              <text x="125" y="195" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold">
                                Azure
                              </text>
                              <circle cx="125" cy="220" r="10" fill="#0ea5e9" className="animate-pulse">
                                <animate
                                  attributeName="opacity"
                                  values="0.3;0.8;0.3"
                                  dur="2.5s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                            </g>

                            <g>
                              <rect
                                x="50"
                                y="270"
                                width="150"
                                height="80"
                                rx="10"
                                fill="#0f172a"
                                stroke="#334155"
                                strokeWidth="2"
                              />
                              <text x="125" y="305" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold">
                                GCP
                              </text>
                              <circle cx="125" cy="330" r="10" fill="#0ea5e9" className="animate-pulse">
                                <animate
                                  attributeName="opacity"
                                  values="0.3;0.8;0.3"
                                  dur="3s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                            </g>

                            {/* Data Collection */}
                            <g>
                              <rect
                                x="300"
                                y="100"
                                width="200"
                                height="200"
                                rx="10"
                                fill="#0f172a"
                                stroke="#334155"
                                strokeWidth="2"
                              />
                              <text x="400" y="130" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold">
                                Data Collection
                              </text>
                              <rect
                                x="330"
                                y="150"
                                width="140"
                                height="30"
                                rx="5"
                                fill="#1e293b"
                                stroke="#334155"
                                strokeWidth="1"
                              />
                              <text x="400" y="170" textAnchor="middle" fill="#94a3b8" fontSize="12">
                                API Connectors
                              </text>
                              <rect
                                x="330"
                                y="200"
                                width="140"
                                height="30"
                                rx="5"
                                fill="#1e293b"
                                stroke="#334155"
                                strokeWidth="1"
                              />
                              <text x="400" y="220" textAnchor="middle" fill="#94a3b8" fontSize="12">
                                Cost Data
                              </text>
                              <rect
                                x="330"
                                y="250"
                                width="140"
                                height="30"
                                rx="5"
                                fill="#1e293b"
                                stroke="#334155"
                                strokeWidth="1"
                              />
                              <text x="400" y="270" textAnchor="middle" fill="#94a3b8" fontSize="12">
                                Usage Metrics
                              </text>
                            </g>

                            {/* AI Engine */}
                            <g>
                              <rect
                                x="600"
                                y="100"
                                width="150"
                                height="200"
                                rx="10"
                                fill="#0f172a"
                                stroke="#334155"
                                strokeWidth="2"
                              />
                              <text x="675" y="130" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold">
                                AI Engine
                              </text>
                              <rect
                                x="625"
                                y="150"
                                width="100"
                                height="30"
                                rx="5"
                                fill="#1e293b"
                                stroke="#334155"
                                strokeWidth="1"
                              />
                              <text x="675" y="170" textAnchor="middle" fill="#94a3b8" fontSize="12">
                                Gemini AI
                              </text>
                              <rect
                                x="625"
                                y="200"
                                width="100"
                                height="30"
                                rx="5"
                                fill="#1e293b"
                                stroke="#334155"
                                strokeWidth="1"
                              />
                              <text x="675" y="220" textAnchor="middle" fill="#94a3b8" fontSize="12">
                                Analysis
                              </text>
                              <rect
                                x="625"
                                y="250"
                                width="100"
                                height="30"
                                rx="5"
                                fill="#1e293b"
                                stroke="#334155"
                                strokeWidth="1"
                              />
                              <text x="675" y="270" textAnchor="middle" fill="#94a3b8" fontSize="12">
                                Recommendations
                              </text>
                            </g>

                            {/* Connecting Lines */}
                            <g stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5">
                              <line x1="200" y1="90" x2="300" y2="150" />
                              <line x1="200" y1="200" x2="300" y2="200" />
                              <line x1="200" y1="310" x2="300" y2="250" />
                              <line x1="500" y1="200" x2="600" y2="200" />
                            </g>

                            {/* Data Flow Animations */}
                            <g>
                              <circle cx="250" cy="120" r="5" fill="#0ea5e9">
                                <animate attributeName="cx" from="200" to="300" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="cy" from="90" to="150" dur="2s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="250" cy="200" r="5" fill="#0ea5e9">
                                <animate attributeName="cx" from="200" to="300" dur="3s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="250" cy="280" r="5" fill="#0ea5e9">
                                <animate attributeName="cx" from="200" to="300" dur="2.5s" repeatCount="indefinite" />
                                <animate attributeName="cy" from="310" to="250" dur="2.5s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="550" cy="200" r="5" fill="#0ea5e9">
                                <animate attributeName="cx" from="500" to="600" dur="2s" repeatCount="indefinite" />
                              </circle>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="mt-4 text-sm text-slate-300">
                        <p>
                          Live architecture showing data flow from cloud providers through our data collection layer to
                          the AI-powered analysis engine. The system continuously monitors your cloud resources to
                          identify optimization opportunities.
                        </p>
                      </div>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Recommended Tools</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors">
                        <h4 className="font-medium text-cyan-400 mb-1">AWS Cost Explorer</h4>
                        <p className="text-xs text-slate-300">
                          Visualize and manage your AWS costs and usage over time.
                        </p>
                      </div>
                      <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors">
                        <h4 className="font-medium text-cyan-400 mb-1">Azure Cost Analysis</h4>
                        <p className="text-xs text-slate-300">
                          Analyze and manage your Azure costs with detailed reports.
                        </p>
                      </div>
                      <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors">
                        <h4 className="font-medium text-cyan-400 mb-1">GCP Cost Management</h4>
                        <p className="text-xs text-slate-300">Monitor and optimize your Google Cloud spending.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="profile">
              <CardContent className="p-6 relative z-10">
                <ChatProfile />
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}

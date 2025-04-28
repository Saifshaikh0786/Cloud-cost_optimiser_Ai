"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Sparkles, Settings, Bell, Shield, Clock, Download, User, Key } from "lucide-react"

export function ChatProfile() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/3">
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Cloud Admin</h3>
                <p className="text-slate-400 text-sm mb-3">Enterprise Account</p>
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none mb-4">
                  <Sparkles className="h-3 w-3 mr-1" /> Premium
                </Badge>
                <div className="w-full space-y-2">
                  <Button
                    variant="outline"
                    className="w-full border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700"
                  >
                    <Key className="h-4 w-4 mr-2" />
                    API Keys
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-2/3">
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 bg-slate-900">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  <TabsTrigger value="usage">Usage</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="pt-4 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Account Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="text-slate-200">admin@cloudoptimize.com</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-slate-400">Account Type</p>
                        <p className="text-slate-200">Enterprise</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-slate-400">Member Since</p>
                        <p className="text-slate-200">January 15, 2023</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-slate-400">Subscription</p>
                        <p className="text-slate-200">Premium (Annual)</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Connected Cloud Accounts</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                            <svg
                              className="h-5 w-5 text-blue-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.5 8C6.5 6 8.5 4 10.5 4H16.5C18.5 4 20.5 6 20.5 8V16C20.5 18 18.5 20 16.5 20H10.5C8.5 20 6.5 18 6.5 16V8Z"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path d="M3.5 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white font-medium">AWS</p>
                            <p className="text-xs text-slate-400">Connected on Jan 10, 2023</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/20">Active</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                            <svg
                              className="h-5 w-5 text-blue-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4L3 9L12 14L21 9L12 4Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 14L12 19L21 14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white font-medium">Azure</p>
                            <p className="text-xs text-slate-400">Connected on Feb 5, 2023</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/20">Active</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                            <svg
                              className="h-5 w-5 text-blue-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white font-medium">Google Cloud</p>
                            <p className="text-xs text-slate-400">Connected on Mar 15, 2023</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/20">Active</Badge>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="preferences" className="pt-4 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">AI Assistant Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-white">Detailed Responses</Label>
                          <p className="text-xs text-slate-400">Receive more comprehensive answers</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-white">Code Examples</Label>
                          <p className="text-xs text-slate-400">Include code snippets in responses</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-white">Cost Estimates</Label>
                          <p className="text-xs text-slate-400">Show estimated savings in recommendations</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Notification Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-white">Email Notifications</Label>
                          <p className="text-xs text-slate-400">Receive optimization alerts via email</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-white">Cost Anomalies</Label>
                          <p className="text-xs text-slate-400">Alert when costs exceed normal patterns</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-white">Weekly Reports</Label>
                          <p className="text-xs text-slate-400">Receive weekly cost optimization reports</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="usage" className="pt-4 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">AI Usage Statistics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-slate-900 rounded-lg border border-slate-800 p-4">
                        <div className="flex items-center mb-2">
                          <Bell className="h-4 w-4 text-cyan-400 mr-2" />
                          <h4 className="text-white font-medium">Conversations</h4>
                        </div>
                        <p className="text-2xl font-bold text-white">247</p>
                        <p className="text-xs text-slate-400">This month</p>
                      </div>
                      <div className="bg-slate-900 rounded-lg border border-slate-800 p-4">
                        <div className="flex items-center mb-2">
                          <Shield className="h-4 w-4 text-cyan-400 mr-2" />
                          <h4 className="text-white font-medium">Recommendations</h4>
                        </div>
                        <p className="text-2xl font-bold text-white">89</p>
                        <p className="text-xs text-slate-400">Implemented</p>
                      </div>
                      <div className="bg-slate-900 rounded-lg border border-slate-800 p-4">
                        <div className="flex items-center mb-2">
                          <Clock className="h-4 w-4 text-cyan-400 mr-2" />
                          <h4 className="text-white font-medium">Time Saved</h4>
                        </div>
                        <p className="text-2xl font-bold text-white">37.5h</p>
                        <p className="text-xs text-slate-400">This month</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Subscription Details</h3>
                    <Card className="bg-slate-900 border-slate-800">
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div>
                            <div className="flex items-center">
                              <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
                              <h4 className="text-white font-medium">Premium Plan</h4>
                            </div>
                            <p className="text-sm text-slate-400 mt-1">Renews on January 15, 2024</p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Invoices
                            </Button>
                            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                              Manage Plan
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

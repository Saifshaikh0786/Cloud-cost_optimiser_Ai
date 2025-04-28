"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare } from "lucide-react"

export function DemoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-blue-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            AI-Powered Cloud Assistant
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get personalized cloud optimization recommendations with our AI chatbot. Ask questions, get insights, and
            implement cost-saving strategies.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
                <div className="p-1 bg-slate-800">
                  <div className="flex items-center space-x-1.5 px-2 py-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-xs text-slate-400">CloudOptimize AI Assistant</div>
                  </div>
                </div>
                <div className="p-4 h-[400px] overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="flex-1 bg-slate-800 rounded-lg p-3">
                        <p className="text-slate-300">How can I reduce my AWS EC2 costs?</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">AI</span>
                      </div>
                      <div className="flex-1 bg-slate-800 rounded-lg p-3">
                        <div className="space-y-2">
                          <h4 className="font-medium text-cyan-400">EC2 Cost Optimization Strategies</h4>
                          <p className="text-slate-300">Here are several ways to reduce your AWS EC2 costs:</p>
                          <ul className="list-disc pl-5 text-slate-300 space-y-1">
                            <li>Right-size your instances based on actual usage metrics</li>
                            <li>Use Reserved Instances for predictable workloads</li>
                            <li>Implement auto-scaling for variable workloads</li>
                            <li>Utilize Spot Instances for non-critical, interruptible workloads</li>
                            <li>Schedule instance shutdowns during off-hours</li>
                          </ul>

                          <h4 className="font-medium text-cyan-400 mt-4">Current Instance Analysis</h4>
                          <p className="text-slate-300">
                            Based on your current usage patterns, you could save approximately
                            <span className="text-green-400 font-semibold"> 32% </span>
                            by right-sizing 8 of your instances and purchasing Reserved Instances for your production
                            environment.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="flex-1 bg-slate-800 rounded-lg p-3">
                        <p className="text-slate-300">Can you show me which instances should be right-sized?</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">AI</span>
                      </div>
                      <div className="flex-1 bg-slate-800 rounded-lg p-3">
                        <div className="space-y-2">
                          <h4 className="font-medium text-cyan-400">Instance Right-Sizing Recommendations</h4>
                          <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-slate-300">
                              <thead>
                                <tr className="border-b border-slate-700">
                                  <th className="text-left py-2">Instance ID</th>
                                  <th className="text-left py-2">Current Type</th>
                                  <th className="text-left py-2">Recommended Type</th>
                                  <th className="text-left py-2">Monthly Savings</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-slate-700">
                                  <td className="py-2">i-0a1b2c3d4e5f</td>
                                  <td className="py-2">m5.xlarge</td>
                                  <td className="py-2">m5.large</td>
                                  <td className="py-2 text-green-400">$73.00</td>
                                </tr>
                                <tr className="border-b border-slate-700">
                                  <td className="py-2">i-1a2b3c4d5e6f</td>
                                  <td className="py-2">c5.2xlarge</td>
                                  <td className="py-2">c5.xlarge</td>
                                  <td className="py-2 text-green-400">$124.50</td>
                                </tr>
                                <tr>
                                  <td className="py-2">i-2a3b4c5d6e7f</td>
                                  <td className="py-2">r5.xlarge</td>
                                  <td className="py-2">r5.large</td>
                                  <td className="py-2 text-green-400">$96.75</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="text-slate-300 mt-2">
                            These instances are consistently underutilized, with average CPU usage below 20% and memory
                            usage below 30% over the past 30 days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Your Personal Cloud Cost Advisor</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Natural Language Queries</h4>
                  <p className="text-slate-300">
                    Ask questions about your cloud costs and usage in plain English. No need to learn complex query
                    languages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-cyan-400"
                  >
                    <path d="M12 2v4"></path>
                    <path d="M12 18v4"></path>
                    <path d="m4.93 4.93 2.83 2.83"></path>
                    <path d="m16.24 16.24 2.83 2.83"></path>
                    <path d="M2 12h4"></path>
                    <path d="M18 12h4"></path>
                    <path d="m4.93 19.07 2.83-2.83"></path>
                    <path d="m16.24 7.76 2.83-2.83"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Contextual Recommendations</h4>
                  <p className="text-slate-300">
                    Get personalized recommendations based on your specific cloud infrastructure, usage patterns, and
                    business requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-cyan-400"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                    <path d="M10 9H8"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Exportable Reports</h4>
                  <p className="text-slate-300">
                    Download detailed reports and recommendations to share with your team or include in your cost
                    optimization initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/chatbot">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium px-8"
                >
                  Try AI Assistant Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

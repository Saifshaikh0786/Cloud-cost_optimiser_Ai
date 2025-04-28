"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export function ArchitectureSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-blue-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            System Architecture
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our platform uses a sophisticated architecture to collect, analyze, and optimize your cloud resources across
            multiple providers.
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto max-w-5xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-lg p-6 overflow-hidden">
            <div className="flex justify-center">
              {/* Architecture Diagram */}
              <div className="w-full max-w-4xl">
                <svg viewBox="0 0 800 500" className="w-full h-auto">
                  {/* Background Grid */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="800" height="500" fill="url(#grid)" />

                  {/* Cloud Providers */}
                  <g>
                    <rect
                      x="50"
                      y="50"
                      width="180"
                      height="100"
                      rx="10"
                      fill="#0f172a"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                    <text x="140" y="85" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="bold">
                      AWS
                    </text>
                    <rect
                      x="70"
                      y="100"
                      width="60"
                      height="30"
                      rx="5"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text x="100" y="120" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      EC2
                    </text>
                    <rect
                      x="150"
                      y="100"
                      width="60"
                      height="30"
                      rx="5"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text x="180" y="120" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      S3
                    </text>
                  </g>

                  <g>
                    <rect
                      x="50"
                      y="200"
                      width="180"
                      height="100"
                      rx="10"
                      fill="#0f172a"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                    <text x="140" y="235" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="bold">
                      Azure
                    </text>
                    <rect
                      x="70"
                      y="250"
                      width="60"
                      height="30"
                      rx="5"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text x="100" y="270" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      VMs
                    </text>
                    <rect
                      x="150"
                      y="250"
                      width="60"
                      height="30"
                      rx="5"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text x="180" y="270" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      Storage
                    </text>
                  </g>

                  <g>
                    <rect
                      x="50"
                      y="350"
                      width="180"
                      height="100"
                      rx="10"
                      fill="#0f172a"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                    <text x="140" y="385" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="bold">
                      Google Cloud
                    </text>
                    <rect
                      x="70"
                      y="400"
                      width="60"
                      height="30"
                      rx="5"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text x="100" y="420" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      GCE
                    </text>
                    <rect
                      x="150"
                      y="400"
                      width="60"
                      height="30"
                      rx="5"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text x="180" y="420" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      GCS
                    </text>
                  </g>

                  {/* Data Collection Layer */}
                  <g>
                    <rect
                      x="300"
                      y="150"
                      width="180"
                      height="200"
                      rx="10"
                      fill="#0f172a"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                    <text x="390" y="180" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="bold">
                      Data Collection
                    </text>
                    <rect
                      x="320"
                      y="200"
                      width="140"
                      height="30"
                      rx="5"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text x="390" y="220" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      API Connectors
                    </text>
                    <rect
                      x="320"
                      y="250"
                      width="140"
                      height="30"
                      rx="5"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text x="390" y="270" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      Cost Data
                    </text>
                    <rect
                      x="320"
                      y="300"
                      width="140"
                      height="30"
                      rx="5"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text x="390" y="320" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      Usage Metrics
                    </text>
                  </g>

                  {/* Analysis Engine */}
                  <g>
                    <rect
                      x="550"
                      y="150"
                      width="180"
                      height="200"
                      rx="10"
                      fill="#0f172a"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                    <text x="640" y="180" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="bold">
                      Analysis Engine
                    </text>
                    <rect
                      x="570"
                      y="200"
                      width="140"
                      height="30"
                      rx="5"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text x="640" y="220" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      AI Models
                    </text>
                    <rect
                      x="570"
                      y="250"
                      width="140"
                      height="30"
                      rx="5"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text x="640" y="270" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      Optimization Rules
                    </text>
                    <rect
                      x="570"
                      y="300"
                      width="140"
                      height="30"
                      rx="5"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="1"
                    />
                    <text x="640" y="320" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      Forecasting
                    </text>
                  </g>

                  {/* Connecting Lines */}
                  <g stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5">
                    <line x1="230" y1="100" x2="300" y2="200" />
                    <line x1="230" y1="250" x2="300" y2="250" />
                    <line x1="230" y1="400" x2="300" y2="300" />
                    <line x1="480" y1="250" x2="550" y2="250" />
                  </g>

                  {/* Data Flow Animations */}
                  <g>
                    <circle className="animate-pulse" cx="265" cy="150" r="5" fill="#0ea5e9">
                      <animate attributeName="cx" from="230" to="300" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="cy" from="100" to="200" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle className="animate-pulse" cx="265" cy="250" r="5" fill="#0ea5e9">
                      <animate attributeName="cx" from="230" to="300" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle className="animate-pulse" cx="265" cy="350" r="5" fill="#0ea5e9">
                      <animate attributeName="cx" from="230" to="300" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="cy" from="400" to="300" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle className="animate-pulse" cx="515" cy="250" r="5" fill="#0ea5e9">
                      <animate attributeName="cx" from="480" to="550" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </svg>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Data Collection</h3>
                <p className="text-slate-300 text-sm">
                  Secure API connectors gather cost and usage data from all your cloud providers in real-time.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Analysis Engine</h3>
                <p className="text-slate-300 text-sm">
                  AI-powered analysis identifies optimization opportunities and forecasts future costs.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Recommendation System</h3>
                <p className="text-slate-300 text-sm">
                  Actionable recommendations for resource right-sizing, reserved instances, and more.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

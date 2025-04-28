"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { BarChart3, Tag, Layers, AlertCircle, Cpu, Database, Clock, TrendingDown } from "lucide-react"

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-cyan-500" />,
    title: "Cost Forecasting",
    description: "Predict future cloud costs based on historical data and usage patterns.",
  },
  {
    icon: <Tag className="h-10 w-10 text-cyan-500" />,
    title: "Resource Tagging",
    description: "Automatically tag resources for better organization and cost allocation.",
  },
  {
    icon: <Layers className="h-10 w-10 text-cyan-500" />,
    title: "Multi-Cloud Dashboard",
    description: "Unified view of resources across AWS, Azure, Google Cloud, and more.",
  },
  {
    icon: <AlertCircle className="h-10 w-10 text-cyan-500" />,
    title: "Anomaly Detection",
    description: "Identify unusual spending patterns and receive instant alerts.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-cyan-500" />,
    title: "Right-sizing Recommendations",
    description: "Optimize instance types and sizes based on actual usage.",
  },
  {
    icon: <Database className="h-10 w-10 text-cyan-500" />,
    title: "Storage Optimization",
    description: "Identify unused storage and recommend appropriate storage tiers.",
  },
  {
    icon: <Clock className="h-10 w-10 text-cyan-500" />,
    title: "Scheduled Shutdowns",
    description: "Automatically schedule resource shutdowns during off-hours.",
  },
  {
    icon: <TrendingDown className="h-10 w-10 text-cyan-500" />,
    title: "Reserved Instance Planning",
    description: "Recommendations for reserved instances to maximize savings.",
  },
]

export function FeatureSection() {
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
            Comprehensive Cloud Optimization
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our platform provides a complete suite of tools to help you monitor, analyze, and optimize your cloud
            infrastructure costs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Users, Globe } from "lucide-react"

interface ViewStats {
  pageViews: number
  activeUsers: number
  totalViews: number
}

export function ViewCounter() {
  const [stats, setStats] = useState<ViewStats>({
    pageViews: 0,
    activeUsers: 0,
    totalViews: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize with base stats
    setStats({
      pageViews: 12547,
      activeUsers: 43,
      totalViews: 156892,
    })
    setLoading(false)

    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats((prev) => ({
        pageViews: prev.pageViews + Math.floor(Math.random() * 3),
        activeUsers: 40 + Math.floor(Math.random() * 10),
        totalViews: prev.totalViews + Math.floor(Math.random() * 5),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { icon: Eye, label: "Current Views", value: stats.pageViews },
        { icon: Users, label: "Active Users", value: stats.activeUsers },
        { icon: Globe, label: "Total Views", value: stats.totalViews },
      ].map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-card backdrop-blur-lg rounded-lg p-6 border flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-2 text-lg font-medium mb-2">
            <stat.icon className="h-5 w-5 text-primary" />
            <span>{stat.label}</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-3xl font-bold"
            >
              {loading ? <div className="h-8 w-24 animate-pulse rounded bg-muted" /> : stat.value.toLocaleString()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}


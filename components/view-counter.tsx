"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Users, Globe, Clock, MousePointer, Monitor, Link } from "lucide-react"

interface W3CounterStats {
  pageViews: number
  visits: number
  duration: number
  bounceRate: number
  topCountry: string
  topReferrer: string
  topDevice: string
  topChannel: string
}

export function ViewCounter() {
  const [stats, setStats] = useState<W3CounterStats>({
    pageViews: 0,
    visits: 0,
    duration: 0,
    bounceRate: 0,
    topCountry: "",
    topReferrer: "",
    topDevice: "",
    topChannel: "",
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setStats(data)
        setLoading(false)
        setError(null)
      } catch (error) {
        console.error("Error fetching stats:", error)
        setLoading(false)
        setError("Failed to load stats. Please try again later.")
      }
    }

    fetchStats()

    // Fetch stats every 5 minutes
    const interval = setInterval(fetchStats, 300000)

    return () => clearInterval(interval)
  }, [])

  const statItems = [
    { icon: Eye, label: "Page Views", value: stats.pageViews },
    { icon: Users, label: "Visits", value: stats.visits },
    { icon: Clock, label: "Avg. Duration", value: `${stats.duration.toFixed(2)}s` },
    { icon: MousePointer, label: "Bounce Rate", value: `${stats.bounceRate.toFixed(2)}%` },
    { icon: Globe, label: "Top Country", value: stats.topCountry },
    { icon: Link, label: "Top Referrer", value: stats.topReferrer },
    { icon: Monitor, label: "Top Device", value: stats.topDevice },
    { icon: Users, label: "Top Channel", value: stats.topChannel },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((stat, index) => (
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
              key={error ? "error" : stat.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-2xl font-bold"
            >
              {loading ? (
                <div className="h-8 w-24 animate-pulse rounded bg-muted" />
              ) : error ? (
                <span className="text-red-500 text-sm">Error loading data</span>
              ) : (
                stat.value || "N/A"
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}


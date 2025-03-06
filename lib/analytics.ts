export const analyticsConfig = {
  // Vercel Web Analytics configuration
  webAnalytics: {
    debug: process.env.NODE_ENV !== "production",
  },

  // Vercel Speed Insights configuration
  speedInsights: {
    // Optional configuration options
    sampleRate: 100, // Sample 100% of pageviews in production
    debugMode: process.env.NODE_ENV !== "production",
  },

  // You can add other analytics providers configuration here
  // For example, if you want to add Google Analytics in the future
}

// Helper function to determine if analytics should be enabled
export function shouldEnableAnalytics(): boolean {
  // Disable analytics in development by default
  if (process.env.NODE_ENV !== "production") {
    return false
  }

  // Check for user opt-out (if you implement this feature)
  if (typeof window !== "undefined") {
    if (localStorage.getItem("analytics-opt-out") === "true") {
      return false
    }
  }

  return true
}


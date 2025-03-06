export const analyticsConfig = {
  // Vercel Web Analytics configuration
  webAnalytics: {
    debug: process.env.NODE_ENV !== "production",
  },

  // Vercel Speed Insights configuration
  speedInsights: {
    sampleRate: 100, // Sample 100% of pageviews in production
    debugMode: process.env.NODE_ENV !== "production",
  },

  // Google Analytics configuration
  googleAnalytics: {
    measurementId: "G-XXXXXXXXXX", // Replace with your Google Analytics measurement ID
  },
}

// Helper function to determine if analytics should be enabled
export function shouldEnableAnalytics(): boolean {
  if (process.env.NODE_ENV !== "production") {
    return false
  }

  if (typeof window !== "undefined") {
    if (localStorage.getItem("analytics-opt-out") === "true") {
      return false
    }
  }

  return true
}

// Function to track custom events
export function trackEvent(eventName: string, eventProperties?: Record<string, any>) {
  if (shouldEnableAnalytics()) {
    // Implement your event tracking logic here
    console.log(`Tracking event: ${eventName}`, eventProperties)

    // Example: Send event to Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", eventName, eventProperties)
    }
  }
}


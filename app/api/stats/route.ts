import { NextResponse } from "next/server"

export async function GET() {
  try {
    const endpoints = [
      "https://www.w3counter.com/stats/155132/dashboard/pages.json",
      "https://www.w3counter.com/stats/155132/dashboard/locations.json",
      "https://www.w3counter.com/stats/155132/dashboard/referring_domains.json",
      "https://www.w3counter.com/stats/155132/dashboard/devices.json",
      "https://www.w3counter.com/stats/155132/dashboard/channels.json",
    ]

    const responses = await Promise.all(endpoints.map((url) => fetch(url)))
    const data = await Promise.all(responses.map((res) => res.json()))

    const [pages, locations, referrers, devices, channels] = data

    const stats = {
      pageViews: Number.parseInt(pages[0].page_views),
      visits: Number.parseInt(pages[0].visits),
      duration: Number.parseFloat(pages[0].duration),
      bounceRate: Number.parseFloat(pages[0].bounce_rate) * 100,
      topCountry: locations[0].country,
      topReferrer: referrers[0].referring_domain,
      topDevice: devices[0].device,
      topChannel: channels[0].channel,
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error fetching W3Counter stats:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}


import { siteConfig } from "@/config/site"

export async function submitToIndexNow(url: string) {
  const apiKey = process.env.INDEX_NOW_API_KEY || "your-index-now-api-key"
  const indexNowUrl = "https://api.indexnow.org/indexnow"

  try {
    const response = await fetch(indexNowUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        host: new URL(siteConfig.url).hostname,
        key: apiKey,
        urlList: [url],
        keyLocation: `${siteConfig.url}/${apiKey}.txt`,
      }),
    })

    if (!response.ok) {
      throw new Error(`IndexNow submission failed: ${response.statusText}`)
    }

    console.log(`Successfully submitted ${url} to IndexNow!`)
  } catch (error) {
    console.error("Error submitting to IndexNow:", error)
  }
}


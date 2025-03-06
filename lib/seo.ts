import { siteConfig } from "@/config/site"

export const canonicalUrl = (path: string) => `${siteConfig.url}${path}`

export const generateMetadata = (title: string, description: string, path: string) => ({
  title,
  description,
  openGraph: {
    title,
    description,
    url: canonicalUrl(path),
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@whosheikh",
  },
  alternates: {
    canonical: canonicalUrl(path),
  },
})

export const structuredData = (data: object) => ({
  __html: JSON.stringify(data),
})


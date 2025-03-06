import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { siteImages } from "@/config/images"

type MetadataProps = {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
}

export function constructMetadata({ title, description, image, noIndex }: MetadataProps = {}): Metadata {
  return {
    title: {
      default: title || siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: description || siteConfig.description,
    openGraph: {
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image || siteImages.ogImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      images: [image || siteImages.ogImage],
      creator: "@sheikhcodes",
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.svg",
        },
      ],
    },
    manifest: "/site.webmanifest",
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "bn-BD": "/bn-BD",
      },
    },
  }
}


import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/blog", "/services", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  const blogPosts = siteConfig.projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.id}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogPosts]
}


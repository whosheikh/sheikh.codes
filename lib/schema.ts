import { siteConfig } from "@/config/site"

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    "@type": "Person",
    name: "Sheikh Likhon",
    url: `${siteConfig.url}/about`,
  },
  sameAs: [siteConfig.links.twitter, siteConfig.links.github, siteConfig.links.linkedin],
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sheikh Likhon",
  url: siteConfig.url,
  jobTitle: "Full-Stack Developer & SEO Specialist",
  sameAs: [siteConfig.links.twitter, siteConfig.links.github, siteConfig.links.linkedin],
  knowsAbout: ["Web Development", "SEO", "React", "Node.js", "Knowledge Graphs"],
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [siteConfig.links.twitter, siteConfig.links.github, siteConfig.links.linkedin],
}


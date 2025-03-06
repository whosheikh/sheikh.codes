import { siteConfig } from "@/config/site"

interface Entity {
  "@type": string
  "@id": string
  name: string
  description?: string
  url?: string
  sameAs?: string[]
}

const baseUrl = siteConfig.url

export const knowledgeGraph: Entity[] = [
  {
    "@type": "Person",
    "@id": `${baseUrl}#sheikh-likhon`,
    name: "Sheikh Likhon",
    description: "Full-Stack Developer & SEO Specialist",
    url: baseUrl,
    sameAs: [siteConfig.links.twitter, siteConfig.links.github, siteConfig.links.linkedin],
  },
  {
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    name: siteConfig.name,
    url: baseUrl,
  },
  {
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    name: siteConfig.name,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      "@id": `${baseUrl}#logo`,
      url: `${baseUrl}/logo.png`,
      width: 112,
      height: 112,
    },
    sameAs: [siteConfig.links.twitter, siteConfig.links.github, siteConfig.links.linkedin],
  },
]

export function generateEntityMarkup(entity: Entity): string {
  return `
    <script type="application/ld+json">
      ${JSON.stringify(entity)}
    </script>
  `
}

export function generateKnowledgeGraphMarkup(): string {
  return `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@graph": ${JSON.stringify(knowledgeGraph)}
      }
    </script>
  `
}


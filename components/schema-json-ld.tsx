import { JsonLd } from "react-schemaorg"
import type { Person, Article, WebSite, Organization } from "schema-dts"

type SchemaProps = {
  type: string
  name: string
  description?: string
  url?: string
  sameAs?: string[]
  jobTitle?: string
  worksFor?: {
    "@type": string
    name: string
  }
  alumniOf?: {
    "@type": string
    name: string
  }
  knowsAbout?: string[]
  author?: {
    "@type": string
    name: string
  }
  datePublished?: string
  dateModified?: string
  image?: string
  logo?: string
}

export function SchemaJsonLd({
  type,
  name,
  description,
  url,
  sameAs,
  jobTitle,
  worksFor,
  alumniOf,
  knowsAbout,
  author,
  datePublished,
  dateModified,
  image,
  logo,
}: SchemaProps) {
  if (type === "Person") {
    return (
      <JsonLd<Person>
        item={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: name,
          description: description,
          url: url,
          sameAs: sameAs,
          jobTitle: jobTitle,
          worksFor: worksFor,
          alumniOf: alumniOf,
          knowsAbout: knowsAbout,
          image: image || "https://sheikh.codes/images/profile.jpg",
        }}
      />
    )
  }

  if (type === "Article") {
    return (
      <JsonLd<Article>
        item={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: name,
          description: description,
          author: author,
          datePublished: datePublished,
          dateModified: dateModified,
          image: image || "https://sheikh.codes/images/og-image.jpg",
        }}
      />
    )
  }

  if (type === "WebSite") {
    return (
      <JsonLd<WebSite>
        item={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: name,
          description: description,
          url: url,
        }}
      />
    )
  }

  if (type === "Organization") {
    return (
      <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: name,
          description: description,
          url: url,
          logo: logo,
          sameAs: sameAs,
        }}
      />
    )
  }

  return null
}


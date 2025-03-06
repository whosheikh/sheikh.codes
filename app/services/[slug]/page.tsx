import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SchemaJsonLd } from "@/components/schema-json-ld"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Service Details",
  description: "Learn more about our services",
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = siteConfig.services.find((s) => s.href.endsWith(params.slug))

  if (!service) {
    notFound()
  }

  return (
    <>
      <SchemaJsonLd
        type="Service"
        name={service.title}
        description={service.description}
        url={`${siteConfig.url}${service.href}`}
      />
      <main className="container px-4 py-12 md:py-20">
        <Link href="/services" className="mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to services
        </Link>
        <h1 className="mb-6 text-4xl font-bold">{service.title}</h1>
        <p className="mb-8 text-xl text-muted-foreground">{service.description}</p>
        {/* Add more detailed content about the service here */}
      </main>
    </>
  )
}


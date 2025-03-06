import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SchemaJsonLd } from "@/components/schema-json-ld"
import { ServiceShowcase } from "@/components/service-showcase"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Services - Sheikh Likhon",
  description: "Professional web development and SEO services offered by Sheikh Likhon.",
}

export default function ServicesPage() {
  return (
    <>
      <SchemaJsonLd
        type="Service"
        name="Services - Sheikh Likhon"
        description="Professional web development and SEO services"
        url={`${siteConfig.url}/services`}
      />
      <main className="container px-4 py-12 md:py-20">
        <Link href="/" className="mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        <h1 className="mb-6 text-4xl font-bold">My Services</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Comprehensive web development and SEO services to help your business thrive online.
        </p>
        <ServiceShowcase />
      </main>
    </>
  )
}


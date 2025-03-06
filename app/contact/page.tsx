import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SchemaJsonLd } from "@/components/schema-json-ld"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Contact - Sheikh Likhon",
  description: "Get in touch with Sheikh Likhon for web development and SEO services.",
}

export default function ContactPage() {
  return (
    <>
      <SchemaJsonLd
        type="ContactPage"
        name="Contact - Sheikh Likhon"
        description="Get in touch with Sheikh Likhon for web development and SEO services"
        url={`${siteConfig.url}/contact`}
      />
      <main className="container px-4 py-12 md:py-20">
        <Link href="/" className="mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        <h1 className="mb-6 text-4xl font-bold">Contact Me</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Have a project in mind or want to discuss how I can help your business? Get in touch!
        </p>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input id="name" placeholder="Your name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea id="message" placeholder="Your message" rows={5} required />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </main>
    </>
  )
}


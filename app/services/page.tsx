import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceShowcase } from "@/components/service-showcase"
import { SchemaJsonLd } from "@/components/schema-json-ld"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Services - Sheikh Likhon",
  description:
    "Professional services offered by Sheikh Likhon including web development, SEO optimization, and technical consulting.",
}

export default function ServicesPage() {
  return (
    <>
      <SchemaJsonLd
        type="WebSite"
        name="Services - Sheikh Likhon"
        description="Professional services offered by Sheikh Likhon including web development, SEO optimization, and technical consulting."
        url={`${siteConfig.url}/services`}
      />
      <div className="min-h-screen bg-background">
        <header className="border-b border-border">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Likhon Sheikh</span>
            </Link>
            <nav className="flex items-center gap-4 md:gap-6">
              <ThemeToggle />
              <Link href="/about" className="text-sm font-medium hover:underline">
                About
              </Link>
              <Link href="/projects" className="text-sm font-medium hover:underline">
                Projects
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:underline">
                Blog
              </Link>
              <Link href="/services" className="text-sm font-medium hover:underline">
                Services
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="container px-4 py-12 md:px-6 md:py-24">
          <div className="mx-auto max-w-5xl">
            <Link href="/" className="mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>

            <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Services</h1>
            <p className="mb-12 text-lg text-muted-foreground">
              I offer a range of professional services to help businesses and individuals achieve their digital goals.
              From web development to SEO optimization, I provide tailored solutions to meet your specific needs.
            </p>

            <div className="mb-16">
              <ServiceShowcase />
            </div>

            <section className="mb-16">
              <h2 className="mb-6 text-2xl font-bold">How I Work</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Discovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      I begin by understanding your goals, requirements, and challenges through in-depth consultation.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>2. Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Based on our discovery, I develop a tailored strategy and roadmap to achieve your objectives.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>3. Implementation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      I execute the strategy with precision, keeping you informed throughout the process.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What is your typical project timeline?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Project timelines vary based on complexity. Simple websites may take 2-3 weeks, while complex web
                      applications can take 2-3 months. I'll provide a detailed timeline during our initial
                      consultation.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you offer ongoing maintenance?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, I offer ongoing maintenance and support packages to ensure your website or application
                      remains secure, up-to-date, and performing optimally.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How do you handle project communication?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      I maintain regular communication through your preferred channels (email, Slack, etc.) and provide
                      weekly progress updates. I'm always available to address questions or concerns.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What technologies do you specialize in?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      I specialize in React, Next.js, Node.js, and TypeScript for web development. For SEO, I focus on
                      technical SEO, content optimization, and knowledge graph implementation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>

        <footer className="border-t border-border">
          <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
            <div className="flex-1 space-y-4">
              <div className="text-xl font-bold">Likhon Sheikh</div>
              <p className="text-sm text-muted-foreground">
                Full-stack developer and SEO specialist based in Bangladesh.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="text-sm font-medium">Links</div>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="text-sm font-medium">Contact</div>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="mailto:likhonsheikh54@icloud.com" className="hover:underline">
                  likhonsheikh54@icloud.com
                </a>
                <a href="mailto:hire@likhonsheikh.com" className="hover:underline">
                  hire@likhonsheikh.com
                </a>
                <a href="mailto:works@sheikh.codes" className="hover:underline">
                  works@sheikh.codes
                </a>
              </nav>
            </div>
          </div>
          <div className="border-t border-border">
            <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
              <div className="text-center text-sm text-muted-foreground md:text-left">
                © {new Date().getFullYear()} Likhon Sheikh. All rights reserved.
              </div>
              <p className="text-center text-sm text-muted-foreground md:text-left">
                Built with Next.js and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}


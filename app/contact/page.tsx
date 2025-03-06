import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Send, Phone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaJsonLd } from "@/components/schema-json-ld"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Contact - Sheikh Likhon",
  description: "Get in touch with Sheikh Likhon for web development, SEO services, or general inquiries.",
}

export default function ContactPage() {
  return (
    <>
      <SchemaJsonLd
        type="WebSite"
        name="Contact - Sheikh Likhon"
        description="Get in touch with Sheikh Likhon for web development, SEO services, or general inquiries."
        url={`${siteConfig.url}/contact`}
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

            <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Contact Me</h1>
            <p className="mb-12 text-lg text-muted-foreground">
              Have a question or want to work together? Feel free to reach out using the form below or through any of my
              contact channels.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" type="email" placeholder="Your email" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input id="subject" placeholder="Subject of your message" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea id="message" placeholder="Your message" rows={6} required />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a
                          href="mailto:likhonsheikh54@icloud.com"
                          className="text-sm text-muted-foreground hover:underline"
                        >
                          likhonsheikh54@icloud.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Send className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Telegram</h3>
                        <a
                          href="https://t.me/likhonsheikh"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:underline"
                        >
                          @likhonsheikh
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Response Time</h3>
                        <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Availability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      I'm currently available for freelance projects, consulting, and collaboration opportunities.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Freelance Projects</span>
                        <span className="text-sm font-medium text-green-500">Available</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Full-time Positions</span>
                        <span className="text-sm font-medium text-yellow-500">Limited</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Consulting</span>
                        <span className="text-sm font-medium text-green-500">Available</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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


import Link from "next/link"
import Image from "next/image"
import { Coffee } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { siteConfig } from "@/config/site"

const poweredByLogos = [
  { src: "/images/logos/vercel.svg", alt: "Powered by Vercel", href: "https://vercel.com" },
  { src: "/images/logos/cloudflare.svg", alt: "Protected by Cloudflare", href: "https://www.cloudflare.com" },
  { src: "/images/logos/github.svg", alt: "Available on GitHub", href: "https://github.com" },
  { src: "/images/logos/gitlab.svg", alt: "Available on GitLab", href: "https://gitlab.com" },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold">sheikh.codes</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Full-stack developer and SEO specialist based in Bangladesh, specializing in React, Redux, Node.js, Sails,
              PHP, C#, ASP.NET, and advanced SEO techniques.
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Pages</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.services.slice(0, 5).map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@sheikh.codes"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  contact@sheikh.codes
                </a>
              </li>
              <li>
                <a
                  href="mailto:hire@sheikh.codes"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  hire@sheikh.codes
                </a>
              </li>
              <li>
                <Button variant="outline" size="sm" asChild className="mt-4">
                  <Link href="/donate">
                    <Coffee className="mr-2 h-4 w-4" />
                    Buy me a coffee
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {poweredByLogos.map((logo) => (
              <Link key={logo.alt} href={logo.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Likhon Sheikh. All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-right">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}


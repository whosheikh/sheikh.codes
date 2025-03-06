import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, FileCode, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectShowcase } from "@/components/project-showcase"
import { SchemaJsonLd } from "@/components/schema-json-ld"
import { SocialLinks } from "@/components/social-links"
import { ViewCounter } from "@/components/view-counter"
import { BlogPosts } from "@/components/blog-posts"
import { ServiceShowcase } from "@/components/service-showcase"
import { DomainSwitcher } from "@/components/domain-switcher"
import { siteConfig } from "@/config/site"

export default function HomePage() {
  return (
    <>
      <SchemaJsonLd type="WebSite" name={siteConfig.name} description={siteConfig.description} url={siteConfig.url} />
      <main className="container px-4 py-12 md:py-20">
        <DomainSwitcher className="mb-10" />

        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Sheikh Likhon</h1>
              <p className="mb-4 text-xl text-muted-foreground">Full-Stack Developer & SEO Specialist</p>
              <p className="mb-6 text-muted-foreground">
                Crafting modern web applications with React, Redux, Node.js, Sails, PHP, C#, and ASP.NET. Specializing
                in advanced SEO techniques and knowledge graph optimization to boost your online presence.
              </p>
              <div className="mb-6 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/projects">
                    <FileCode className="mr-2 h-4 w-4" /> View Projects
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Link>
                </Button>
              </div>
              <SocialLinks />
            </div>
            <div className="order-1 md:order-2">
              <div className="relative mx-auto aspect-square max-w-[350px] overflow-hidden rounded-xl border shadow-xl">
                <Image
                  src="https://public.bnbstatic.com/image/pgc/202311/534707992a2382225ce8b11b3e7bcb72.png"
                  alt="Sheikh Likhon"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <Suspense fallback={<div className="h-24 rounded-lg bg-muted/50" />}>
            <ViewCounter />
          </Suspense>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Services</h2>
            <Link
              href="/services"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              View all services <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <Suspense fallback={<div className="h-[400px] rounded-lg bg-muted/50" />}>
            <ServiceShowcase limit={3} />
          </Suspense>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <Link
              href="/projects"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              View all projects <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <Suspense
            fallback={
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-[350px] rounded-lg bg-muted/50" />
                ))}
              </div>
            }
          >
            <ProjectShowcase
              limit={3}
              featuredImages={[
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vortexcybersecurity.org-X4jXEpZGj8D9k4UTRPfhBeeIlhDAai.webp",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PorashonaGPT.jpg-4ljGW0ADy1NGiSxFWzAGthuKbKns3Y.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RecentCoders-mROYoatNQAxJBcypoYzDtaUXoZfzIt.png",
              ]}
            />
          </Suspense>
        </section>

        {/* Blog Section */}
        <section className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Latest Posts</h2>
            <Link
              href="/blog"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              View all posts <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <Suspense fallback={<div className="h-[400px] rounded-lg bg-muted/50" />}>
            <BlogPosts limit={5} />
          </Suspense>
        </section>
      </main>
    </>
  )
}


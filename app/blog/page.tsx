import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "Social Engineering Attack: What You Need to Know in 2025",
    description:
      "Learn about the latest social engineering techniques and how to protect yourself from these sophisticated attacks.",
    date: "March 1, 2025",
    category: "Cybersecurity",
    readTime: "8 min read",
    slug: "social-engineering-attack-2025",
  },
  {
    id: 2,
    title: "Exciting Partnership Announcement",
    description:
      "We're thrilled to announce our new partnership that will bring exciting opportunities for developers.",
    date: "February 15, 2025",
    category: "News",
    readTime: "3 min read",
    slug: "partnership-announcement",
  },
  {
    id: 3,
    title: "Your Own Server and Unlimited Cloud Storage in 2025",
    description:
      "A comprehensive guide to setting up your personal server and accessing unlimited cloud storage options.",
    date: "February 10, 2025",
    category: "Technology",
    readTime: "12 min read",
    slug: "server-cloud-storage-2025",
  },
  {
    id: 4,
    title: "Writing Articles with ChatGPT for Google AdSense Approval",
    description:
      "Learn how to effectively use ChatGPT to create high-quality content that meets Google AdSense requirements.",
    date: "January 28, 2025",
    category: "SEO",
    readTime: "10 min read",
    slug: "chatgpt-articles-adsense",
  },
  {
    id: 5,
    title: "Secret Android Phone Codes You Don't Know About",
    description:
      "Discover hidden codes and features in your Android phone that can help you access advanced settings and diagnostics.",
    date: "January 15, 2025",
    category: "Mobile",
    readTime: "7 min read",
    slug: "android-secret-codes",
  },
]

export default function BlogPage() {
  return (
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
          </nav>
        </div>
      </header>

      <main className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Blog</h1>
          <p className="mb-12 text-lg text-muted-foreground">
            Thoughts, insights, and tutorials on web development, cybersecurity, and technology trends.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                <Card className="transition-all hover:shadow-md">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Badge variant="secondary">{post.category}</Badge>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="text-xl font-bold">Likhon Sheikh</div>
            <p className="text-sm text-muted-foreground">
              Full-stack developer and commerce student based in Mumbai, India.
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
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="text-sm font-medium">Social</div>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link
                href="https://github.com/likhonsheikhcodes"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/likhonsheikhcodes"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com/likhoncodes"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
              <Link
                href="https://ko-fi.com/likhonsheikh"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ko-fi
              </Link>
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
  )
}


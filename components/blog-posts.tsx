"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { formatDate } from "@/lib/utils"

type Post = {
  id: string
  date: string
  title: string
  views: number
  slug: string
  excerpt: string
  tags: string[]
}

const posts: Post[] = [
  {
    id: "1",
    date: "2025-03-01",
    title: "Optimizing Knowledge Graphs for SEO",
    views: 83118,
    slug: "optimizing-knowledge-graphs-seo",
    excerpt:
      "Learn how to implement and optimize knowledge graphs to improve your website's SEO performance and visibility.",
    tags: ["SEO", "Knowledge Graphs", "Structured Data"],
  },
  {
    id: "2",
    date: "2025-02-15",
    title: "The Future of Web Development",
    views: 41076,
    slug: "future-web-development",
    excerpt:
      "Exploring upcoming trends and technologies that will shape the future of web development in the next decade.",
    tags: ["Web Development", "Trends", "Future Tech"],
  },
  {
    id: "3",
    date: "2025-02-01",
    title: "Advanced React Patterns",
    views: 33147,
    slug: "advanced-react-patterns",
    excerpt: "Deep dive into advanced React patterns that will help you write more maintainable and scalable code.",
    tags: ["React", "JavaScript", "Patterns"],
  },
  {
    id: "4",
    date: "2025-01-20",
    title: "SEO Strategies for 2025",
    views: 32696,
    slug: "seo-strategies-2025",
    excerpt: "Comprehensive guide to SEO strategies that will help your website rank higher in 2025 and beyond.",
    tags: ["SEO", "Digital Marketing", "Strategy"],
  },
  {
    id: "5",
    date: "2025-01-10",
    title: "Building Performant Next.js Applications",
    views: 38616,
    slug: "performant-nextjs-applications",
    excerpt: "Learn how to optimize your Next.js applications for maximum performance and user experience.",
    tags: ["Next.js", "Performance", "React"],
  },
  {
    id: "6",
    date: "2024-12-15",
    title: "TypeScript Best Practices",
    views: 17428,
    slug: "typescript-best-practices",
    excerpt: "Essential TypeScript best practices that will help you write more robust and maintainable code.",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
  },
  {
    id: "7",
    date: "2024-12-01",
    title: "The Rise of AI in Web Development",
    views: 51740,
    slug: "ai-web-development",
    excerpt: "How AI is transforming web development and what developers need to know to stay ahead.",
    tags: ["AI", "Web Development", "Future Tech"],
  },
  {
    id: "8",
    date: "2024-11-15",
    title: "2024 in Review: Web Technologies",
    views: 65630,
    slug: "2024-web-technologies-review",
    excerpt: "A comprehensive review of the most important web technology developments of 2024.",
    tags: ["Web Development", "Year in Review", "Technology"],
  },
]

export function BlogPosts({ limit = 0 }: { limit?: number }) {
  const [mounted, setMounted] = useState(false)
  const displayPosts = limit > 0 ? posts.slice(0, limit) : posts

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-[400px] rounded-lg bg-muted/50"></div>
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {displayPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <Link href={`/blog/${post.slug}`} className="group block h-full">
            <div className="h-full rounded-lg border bg-card p-6 transition-colors hover:bg-muted/50">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>{post.views.toLocaleString()} views</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="mt-2 line-clamp-3 text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}


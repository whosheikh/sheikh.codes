"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { formatDate } from "@/lib/utils"
import { blogPosts, type BlogPost } from "@/lib/blog-data"

export function BlogPosts({ limit = 0 }: { limit?: number }) {
  const [mounted, setMounted] = useState(false)
  const displayPosts = limit > 0 ? blogPosts.slice(0, limit) : blogPosts

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-[400px] rounded-lg bg-muted/50"></div>
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {displayPosts.map((post, index) => (
        <BlogPostCard key={post.id} post={post} index={index} />
      ))}
    </div>
  )
}

function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div className="h-full rounded-lg border bg-card transition-colors hover:bg-muted/50">
          <div className="relative aspect-video overflow-hidden rounded-t-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>{post.tags[0]}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
            <p className="mt-2 line-clamp-3 text-muted-foreground">{post.excerpt}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}


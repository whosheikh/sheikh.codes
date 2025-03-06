import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { SchemaJsonLd } from "@/components/schema-json-ld"
import { siteConfig } from "@/config/site"
import { blogPosts } from "@/lib/blog-data"

export const metadata = {
  title: "Blog Post",
  description: "Read our latest blog post",
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <SchemaJsonLd
        type="BlogPosting"
        name={post.title}
        description={post.excerpt}
        author={{
          "@type": "Person",
          name: post.author.name,
          url: post.author.url,
        }}
        datePublished={post.date}
        image={post.image}
        url={`${siteConfig.url}/blog/${post.slug}`}
      />
      <main className="container px-4 py-12 md:py-20">
        <Link href="/blog" className="mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>
        <article className="prose dark:prose-invert mx-auto">
          <div className="relative aspect-video mb-8 overflow-hidden rounded-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <h1>{post.title}</h1>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-8">
            <time dateTime={post.date}>{post.date}</time>
            <span>{post.tags.join(", ")}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </>
  )
}


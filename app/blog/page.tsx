import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SchemaJsonLd } from "@/components/schema-json-ld"
import { BlogPosts } from "@/components/blog-posts"
import { siteConfig } from "@/config/site"
import { blogPosts } from "@/lib/blog-data"

export const metadata = {
  title: "Blog - Sheikh Likhon",
  description: "Insights and articles on web development, SEO, and tech trends by Sheikh Likhon.",
}

export default function BlogPage() {
  return (
    <>
      <SchemaJsonLd
        type="Blog"
        name="Blog - Sheikh Likhon"
        description="Insights and articles on web development, SEO, and tech trends"
        url={`${siteConfig.url}/blog`}
        blogPosts={blogPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: post.author.name,
            url: post.author.url,
          },
          url: `${siteConfig.url}/blog/${post.slug}`,
        }))}
      />
      <main className="container px-4 py-12 md:py-20">
        <Link href="/" className="mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        <h1 className="mb-6 text-4xl font-bold">Blog</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Explore my thoughts and insights on web development, SEO, and the latest tech trends.
        </p>
        <BlogPosts />
      </main>
    </>
  )
}


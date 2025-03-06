import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft } from "lucide-react"

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // In a real implementation, you would fetch the post data based on the slug
  const post = {
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    date: "March 6, 2025",
    content: `This is a placeholder for the "${slug}" post content. In a real implementation, this would be fetched from a database or CMS.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.

## Subheading

Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor.

- List item one
- List item two
- List item three

### Another subheading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.`,
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
        <h1 className="text-2xl font-medium text-center flex-1">Guillermo Rauch</h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/about" className="text-sm hover:underline">
            About
          </Link>
          <Link
            href="https://twitter.com/rauchg"
            className="text-sm hover:underline flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            Follow me
          </Link>
        </div>
      </header>
      <main>
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <div className="text-gray-500 dark:text-gray-400 mb-8">{post.date}</div>
          <div className="whitespace-pre-line">{post.content}</div>
        </article>
      </main>
    </div>
  )
}


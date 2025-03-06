import { siteConfig } from "@/config/site"

export interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
  author: {
    name: string
    url: string
  }
  excerpt: string
  content: string
  tags: string[]
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "optimizing-knowledge-graphs-seo",
    title: "Optimizing Knowledge Graphs for SEO",
    date: "2025-03-01",
    author: {
      name: "Sheikh Likhon",
      url: `${siteConfig.url}/about`,
    },
    excerpt:
      "Learn how to implement and optimize knowledge graphs to improve your website's SEO performance and visibility.",
    content: "Content for optimizing knowledge graphs...",
    tags: ["SEO", "Knowledge Graphs", "Structured Data"],
    image: "https://picsum.photos/seed/blog1/800/400",
  },
  {
    id: "2",
    slug: "future-web-development",
    title: "The Future of Web Development",
    date: "2025-02-15",
    author: {
      name: "Sheikh Likhon",
      url: `${siteConfig.url}/about`,
    },
    excerpt:
      "Exploring upcoming trends and technologies that will shape the future of web development in the next decade.",
    content: "Content about the future of web development...",
    tags: ["Web Development", "Trends", "Future Tech"],
    image: "https://picsum.photos/seed/blog2/800/400",
  },
  {
    id: "3",
    slug: "advanced-react-patterns",
    title: "Advanced React Patterns",
    date: "2025-02-01",
    author: {
      name: "Sheikh Likhon",
      url: `${siteConfig.url}/about`,
    },
    excerpt: "Deep dive into advanced React patterns that will help you write more maintainable and scalable code.",
    content: "Content about advanced React patterns...",
    tags: ["React", "JavaScript", "Patterns"],
    image: "https://picsum.photos/seed/blog3/800/400",
  },
  {
    id: "4",
    slug: "seo-strategies-2025",
    title: "SEO Strategies for 2025",
    date: "2025-01-20",
    author: {
      name: "Sheikh Likhon",
      url: `${siteConfig.url}/about`,
    },
    excerpt: "Comprehensive guide to SEO strategies that will help your website rank higher in 2025 and beyond.",
    content: "Content about SEO strategies for 2025...",
    tags: ["SEO", "Digital Marketing", "Strategy"],
    image: "https://picsum.photos/seed/blog4/800/400",
  },
  {
    id: "5",
    slug: "performant-nextjs-applications",
    title: "Building Performant Next.js Applications",
    date: "2025-01-10",
    author: {
      name: "Sheikh Likhon",
      url: `${siteConfig.url}/about`,
    },
    excerpt: "Learn how to optimize your Next.js applications for maximum performance and user experience.",
    content: "Content about building performant Next.js applications...",
    tags: ["Next.js", "Performance", "React"],
    image: "https://picsum.photos/seed/blog5/800/400",
  },
]


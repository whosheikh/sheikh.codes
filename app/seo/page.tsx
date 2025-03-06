import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SchemaJsonLd } from "@/components/schema-json-ld"

export const metadata = {
  title: "SEO Expertise - Likhon Sheikh",
  description:
    "Comprehensive guide to SEO strategies, including On-Page, Technical, Local, Off-Page SEO, emerging trends, and knowledge graph optimization.",
}

const seoTypes = [
  {
    title: "On-Page SEO",
    description: "Optimizing individual web pages for higher rankings and more relevant traffic.",
    content:
      "On-Page SEO involves optimizing content, HTML source code, and structure of a webpage. Key elements include title tags, meta descriptions, header tags (H1, H2, etc.), content optimization, internal linking, and implementing Schema JSON-LD for rich snippets.",
  },
  {
    title: "Technical SEO",
    description: "Improving the technical aspects of a website to increase the ranking of its pages in search engines.",
    content:
      "Technical SEO focuses on website and server optimizations that help search engine spiders crawl and index your site more effectively. This includes improving site speed, implementing SSL, creating XML sitemaps, fixing crawl errors, optimizing robots.txt, and ensuring mobile-friendliness.",
  },
  {
    title: "Local SEO",
    description: "Optimizing your online presence to attract more business from relevant local searches.",
    content:
      "Local SEO is crucial for businesses wanting to be found in local search results. It involves optimizing Google My Business listings, managing online reviews, creating local content, ensuring NAP (Name, Address, Phone) consistency across the web, and implementing local structured data markup.",
  },
  {
    title: "Off-Page SEO",
    description: "Improving the perception of a site's popularity, relevance, trustworthiness, and authority.",
    content:
      "Off-Page SEO refers to actions taken outside of your website to impact your rankings within search engine results pages (SERPs). This primarily involves building high-quality backlinks, but also includes social media marketing, influencer outreach, content marketing, and brand mentions.",
  },
  {
    title: "Emerging SEO Trends",
    description: "Staying ahead with the latest developments in search engine optimization.",
    content:
      "Emerging SEO trends include voice search optimization, video SEO, AI-powered SEO tools, and optimizing for featured snippets. Voice search optimization involves targeting long-tail keywords and question phrases. Video SEO focuses on optimizing video content for search engines, including proper titles, descriptions, and transcripts.",
  },
]

const webmasterTools = [
  {
    name: "Google Search Console",
    description:
      "Free tool from Google to help you monitor, maintain, and troubleshoot your site's presence in Google Search results.",
  },
  {
    name: "Bing Webmaster Tools",
    description:
      "Free tool from Microsoft to help ensure your website is being indexed and ranking well in Bing search results.",
  },
  {
    name: "Ahrefs",
    description: "SEO tool that provides comprehensive data on backlinks, keywords, and competitor analysis.",
  },
  {
    name: "SEMrush",
    description:
      "All-in-one marketing toolkit for digital marketing professionals, providing insights on SEO, PPC, content, social media, and competitive research.",
  },
  {
    name: "Moz Pro",
    description:
      "SEO software that provides tools for link building, keyword research, site audits, and page optimization.",
  },
]

const knowledgeGraphTypes = [
  {
    name: "General-Purpose Knowledge Graphs",
    description: "Broad, open-domain graphs covering diverse topics (e.g., people, places, concepts).",
  },
  {
    name: "Domain-Specific Knowledge Graphs",
    description: "Focused on specific fields like healthcare, finance, or e-commerce.",
  },
  {
    name: "Enterprise Knowledge Graphs",
    description: "Built for internal business use, integrating company data across silos.",
  },
  {
    name: "Personal Knowledge Graphs",
    description: "User-created for note-taking or personal data management.",
  },
  {
    name: "Product Knowledge Graphs",
    description: "Tailored for e-commerce, linking products, features, and customer data.",
  },
  {
    name: "Semantic Knowledge Graphs",
    description: "Use ontologies and Schema JSON-LD for machine-readable, structured data.",
  },
  {
    name: "Social Knowledge Graphs",
    description: "Map relationships between individuals or entities (e.g., social media networks).",
  },
  {
    name: "Geospatial Knowledge Graphs",
    description: "Focus on location-based data and relationships.",
  },
  {
    name: "Temporal Knowledge Graphs",
    description: "Track changes over time, emphasizing evolving relationships.",
  },
  {
    name: "Open Knowledge Graphs",
    description: "Publicly accessible, like Wikidata or DBpedia, for shared use.",
  },
]

export default function SEOPage() {
  return (
    <>
      <SchemaJsonLd
        type="Article"
        name="SEO Expertise by Likhon Sheikh"
        description="Comprehensive guide to SEO strategies and knowledge graph optimization by Likhon Sheikh."
        author={{
          type: "Person",
          name: "Likhon Sheikh",
        }}
        datePublished={new Date().toISOString()}
        dateModified={new Date().toISOString()}
      />
      <div className="min-h-screen bg-black text-green-400 p-4">
        <header className="mb-8">
          <div className="container mx-auto">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                sheikh.codes:~$
              </Link>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <Link href="/about" className="hover:text-green-300">
                  about
                </Link>
                <Link href="/projects" className="hover:text-green-300">
                  projects
                </Link>
                <Link href="/blog" className="hover:text-green-300">
                  blog
                </Link>
                <Link href="/seo" className="hover:text-green-300">
                  seo
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="container mx-auto">
          <Link href="/" className="mb-8 flex items-center text-sm hover:text-green-300">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <h1 className="text-4xl font-bold mb-8">SEO Expertise</h1>
          <p className="text-xl mb-12">
            Explore comprehensive SEO strategies and knowledge graph optimization techniques to improve your website's
            visibility and search engine rankings.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Types of SEO</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {seoTypes.map((type, index) => (
                <Card key={index} className="bg-gray-900 border-green-700">
                  <CardHeader>
                    <CardTitle className="text-green-400">{type.title}</CardTitle>
                    <CardDescription className="text-green-300">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-200">{type.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Webmaster Tools</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {webmasterTools.map((tool, index) => (
                <Card key={index} className="bg-gray-900 border-green-700">
                  <CardHeader>
                    <CardTitle className="text-green-400">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-200">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Knowledge Graph Types</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {knowledgeGraphTypes.map((graph, index) => (
                <Card key={index} className="bg-gray-900 border-green-700">
                  <CardHeader>
                    <CardTitle className="text-green-400">{graph.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-200">{graph.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-16 border-t border-green-700 pt-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Likhon Sheikh</h3>
              <p className="text-green-300">Full-stack developer and SEO specialist based in Bangladesh.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h4 className="text-lg font-semibold mb-4">Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="hover:text-green-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-green-300">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-green-300">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo" className="hover:text-green-300">
                      SEO
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:likhonsheikh54@icloud.com" className="hover:text-green-300">
                      likhonsheikh54@icloud.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hire@likhonsheikh.com" className="hover:text-green-300">
                      hire@likhonsheikh.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:works@sheikh.codes" className="hover:text-green-300">
                      works@sheikh.codes
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Social</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://github.com/sheikh-developer" className="hover:text-green-300">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://huggingface.co/likhonsheikh" className="hover:text-green-300">
                      Hugging Face
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/likhonsheikh" className="hover:text-green-300">
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-green-300">
            <p>© {new Date().getFullYear()} Likhon Sheikh. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}


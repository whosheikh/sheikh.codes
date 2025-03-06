import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SchemaJsonLd } from "@/components/schema-json-ld"
import { ProjectShowcase } from "@/components/project-showcase"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Projects - Sheikh Likhon",
  description: "Explore Sheikh Likhon's portfolio of web development and SEO projects.",
}

export default function ProjectsPage() {
  return (
    <>
      <SchemaJsonLd
        type="CollectionPage"
        name="Projects - Sheikh Likhon"
        description="Portfolio of web development and SEO projects by Sheikh Likhon"
        url={`${siteConfig.url}/projects`}
      />
      <main className="container px-4 py-12 md:py-20">
        <Link href="/" className="mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        <h1 className="mb-6 text-4xl font-bold">My Projects</h1>
        <p className="mb-8 text-xl text-muted-foreground">Explore my portfolio of web development and SEO projects.</p>
        <ProjectShowcase
          featuredImages={[
            "https://picsum.photos/seed/project1/800/450",
            "https://picsum.photos/seed/project2/800/450",
            "https://picsum.photos/seed/project3/800/450",
            "https://picsum.photos/seed/project4/800/450",
            "https://picsum.photos/seed/project5/800/450",
            "https://picsum.photos/seed/project6/800/450",
          ]}
        />
      </main>
    </>
  )
}


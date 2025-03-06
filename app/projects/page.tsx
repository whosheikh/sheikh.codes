import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/config/projects"

export const metadata = {
  title: "Projects - Sheikh Likhon",
  description: "Explore my portfolio of web development, cybersecurity, and educational technology projects.",
}

export default function ProjectsPage() {
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
        <div className="mx-auto max-w-5xl">
          <Link href="/" className="mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Projects</h1>
          <p className="mb-12 text-lg text-muted-foreground">
            A collection of my work in web development, cybersecurity, and educational technology. Each project
            represents my commitment to creating impactful digital solutions.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
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


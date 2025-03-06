import Link from "next/link"
import { ArrowLeft, Github } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { SchemaJsonLd } from "@/components/schema-json-ld"

export const metadata = {
  title: "About Likhon Sheikh - Full-Stack Developer & SEO Specialist",
  description:
    "Learn about Likhon Sheikh, a full-stack developer and SEO specialist from Bangladesh with expertise in React, Node.js, and advanced SEO techniques.",
}

export default function AboutPage() {
  return (
    <>
      <SchemaJsonLd
        type="Person"
        name="Likhon Sheikh"
        jobTitle="Full-Stack Developer & SEO Specialist"
        url="https://sheikh.codes/about"
        sameAs={["https://github.com/whosheikh", "https://huggingface.co/likhonsheikh", "https://t.me/likhonsheikh"]}
      />
      <div className="min-h-screen bg-background">
        <header className="border-b border-border">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Likhon Sheikh</span>
            </Link>
            <nav className="flex items-center gap-4 md:gap-6">
              <Link href="/about" className="text-sm font-medium hover:underline">
                About
              </Link>
              <Link href="/projects" className="text-sm font-medium hover:underline">
                Projects
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:underline">
                Blog
              </Link>
              <Link href="/seo" className="text-sm font-medium hover:underline">
                SEO
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

            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
              <div className="md:w-1/3">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <OptimizedImage
                    src="https://cdn.bio.link/uploads/profile_pictures/2023-03-19/UiY9qoV5xOgwCX9H7inNc2N9fdSInGWi.png"
                    alt="Likhon Sheikh"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <Link href="https://github.com/whosheikh" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://huggingface.co/likhonsheikh" target="_blank" rel="noopener noreferrer">
                    <svg
                      className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-10c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm6 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-3 5c-2.761 0-5-2.239-5-5h2c0 1.657 1.343 3 3 3s3-1.343 3-3h2c0 2.761-2.239 5-5 5z" />
                    </svg>
                    <span className="sr-only">Hugging Face</span>
                  </Link>
                  <Link href="https://t.me/likhonsheikh" target="_blank" rel="noopener noreferrer">
                    <svg
                      className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.766-.72 3.457-1.02 4.585-.3 1.128-.539 1.866-.779 2.486-.24.62-.435.801-.719.821-.619.041-1.08-.459-1.68-.9-.94-.694-1.479-1.124-2.379-1.8-.998-.744-.351-1.154.219-1.824.149-.174 2.699-2.477 2.759-2.689.007-.026.013-.122-.047-.173-.06-.051-.148-.032-.211-.019-.09.019-1.529.964-4.319 2.834-.409.28-.779.418-1.109.412-.365-.008-1.061-.205-1.581-.373-.639-.207-1.145-.317-1.1-.668.023-.183.278-.373.758-.572 2.974-1.292 4.958-2.146 5.953-2.562 2.833-1.188 3.424-1.393 3.814-1.401.084-.001.271.019.391.119.096.079.121.187.127.273a1.14 1.14 0 0 1-.023.277z" />
                    </svg>
                    <span className="sr-only">Telegram</span>
                  </Link>
                </div>
              </div>

              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">About Me</h1>

                <div className="mt-6 space-y-6 text-muted-foreground">
                  <p>
                    I'm Likhon Sheikh, a full-stack developer and SEO specialist from Bangladesh. My journey in
                    technology began in 2019 when I started contributing to open-source projects, inspired by my passion
                    for creating impactful digital solutions.
                  </p>

                  <p>
                    As a developer, I specialize in building modern web applications using React, Redux, Node.js, and
                    TypeScript. I'm passionate about transforming complex ideas into streamlined, visually appealing,
                    and intuitive platforms that provide exceptional user experiences.
                  </p>

                  <p>
                    My expertise extends beyond coding to advanced SEO techniques and knowledge graph optimization. I
                    help businesses improve their online visibility and search engine rankings through comprehensive
                    on-page, technical, and off-page SEO strategies.
                  </p>

                  <p>
                    I'm also deeply involved in the tech community, managing online groups on platforms like Telegram
                    and Discord, where I foster engagement and create spaces for people to connect and learn. I enjoy
                    teaching and mentoring students in web development, SEO, and emerging technologies.
                  </p>

                  <p>
                    My work in cybersecurity, particularly through my association with VorTex Cybersecurity, allows me
                    to contribute to enhancing digital security landscapes. I'm also involved with blockchain and DeFi
                    protocol development, exploring the intersection of decentralized technologies and SEO.
                  </p>

                  <p>
                    When I'm not coding or optimizing websites, I create content for my blog and YouTube channel, where
                    I share insights on SEO strategies, web development tips, and the latest in technology trends.
                  </p>

                  <h2 className="text-xl font-semibold text-foreground pt-4">Education</h2>
                  <ul className="list-disc pl-5">
                    <li>Bachelor of Commerce (Honours) in Accounting - Currently pursuing</li>
                    <li>Self-taught in web development and SEO through online courses and practical experience</li>
                  </ul>

                  <h2 className="text-xl font-semibold text-foreground pt-4">Skills</h2>
                  <ul className="list-disc pl-5">
                    <li>Frontend: React, Redux, HTML5, CSS3, JavaScript, TypeScript</li>
                    <li>Backend: Node.js, Express, Python, Django</li>
                    <li>SEO: On-Page, Technical, Local, Off-Page, Voice Search Optimization</li>
                    <li>Tools: Google Search Console, Bing Webmaster Tools, Ahrefs, SEMrush, Moz</li>
                    <li>Knowledge Graphs: Implementation and Optimization</li>
                    <li>Cybersecurity & Blockchain Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-border">
          <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
            <div className="flex-1 space-y-4">
              <div className="text-xl font-bold">Likhon Sheikh</div>
              <p className="text-sm text-muted-foreground">
                Full-stack developer and SEO specialist based in Bangladesh.
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
                <Link href="/seo" className="hover:underline">
                  SEO
                </Link>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="text-sm font-medium">Contact</div>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="mailto:likhonsheikh54@icloud.com" className="hover:underline">
                  likhonsheikh54@icloud.com
                </a>
                <a href="mailto:hire@likhonsheikh.com" className="hover:underline">
                  hire@likhonsheikh.com
                </a>
                <a href="mailto:works@sheikh.codes" className="hover:underline">
                  works@sheikh.codes
                </a>
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
    </>
  )
}


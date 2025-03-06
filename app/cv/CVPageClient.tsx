"use client"

import Link from "next/link"
import { ArrowLeft, Download, Github, Gitlab, Twitter, Globe, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/optimized-image"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

function PoweredBy() {
  return (
    <div className="text-center text-gray-500">
      Powered by{" "}
      <a href="https://sheikh.codes" className="underline">
        sheikh.codes
      </a>
    </div>
  )
}

export default function CVPageClient() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 print:bg-white print:py-0 print:px-0">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between print:hidden">
          <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
          <Button onClick={() => window.print()} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Save as PDF
          </Button>
        </div>

        <Card className="overflow-hidden bg-white shadow-lg print:shadow-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground print:p-6">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/20 md:h-40 md:w-40">
                <OptimizedImage src="/images/profile.jpg" alt="Likhon Sheikh" fill className="object-cover" priority />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold md:text-4xl">Likhon Sheikh</h1>
                <p className="mt-2 text-xl text-blue-100">Full-stack Developer</p>
                <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
                  <Badge className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30">
                    <MapPin className="mr-1 h-3 w-3" /> Dhaka, Bangladesh
                  </Badge>
                  <Badge className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30">
                    <Clock className="mr-1 h-3 w-3" /> UTC +6:00
                  </Badge>
                  <Badge className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30">
                    <Mail className="mr-1 h-3 w-3" /> likhon@sheikh.codes
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 print:p-6">
            {/* About Me */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">About Me</h2>
              <p className="text-gray-600">
                Full-stack developer based in Dhaka, Bangladesh specialized in building modern web applications. I focus
                on delivering high-quality, efficient, and user-friendly solutions that solve real-world problems.
              </p>
              <div className="mt-4 rounded-md bg-gray-50 p-4 font-mono text-sm">
                <pre className="whitespace-pre-wrap">
                  {`const likhon = {
  profession: "Full-stack Developer",
  location: "Dhaka, Bangladesh",
  timezone: "UTC +6:00",
  website: "https://sheikh.codes",
  email: "likhon@sheikh.codes"
};`}
                </pre>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">Tech Stack</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-3 text-center font-semibold text-gray-700">Frontend</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["React", "Redux", "JavaScript"].map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-blue-50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-3 text-center font-semibold text-gray-700">Backend</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Node.js", "Sails.js", "PHP", "C#", "ASP.NET"].map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-green-50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-3 text-center font-semibold text-gray-700">Other</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["HTML5", "CSS3", "Git"].map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-purple-50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">Projects</h2>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold text-gray-800">VorTex Cybersecurity</h3>
                  <p className="mt-1 text-gray-600">
                    Enhanced digital security landscape with tools for vulnerability assessment and penetration testing.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Python", "React", "Security", "API"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-100">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold text-gray-800">PorashonaGPT</h3>
                  <p className="mt-1 text-gray-600">
                    AI-powered educational assistant for students, with a focus on Bangla language support.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Next.js", "AI", "TypeScript", "Tailwind"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-100">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold text-gray-800">RecentCoder Community</h3>
                  <p className="mt-1 text-gray-600">
                    A thriving community platform for developers to share, learn, and grow together.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB", "Socket.io"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-100">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">Experience</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row">
                    <h3 className="text-lg font-semibold text-gray-800">Full-stack Developer</h3>
                    <span className="text-sm text-gray-500">Jan 2022 - Present</span>
                  </div>
                  <p className="text-gray-700">VorTex Cybersecurity</p>
                  <ul className="mt-2 list-inside list-disc text-gray-600">
                    <li>Developed and maintained security assessment tools</li>
                    <li>Implemented vulnerability scanning and reporting features</li>
                    <li>Collaborated with security experts to enhance platform capabilities</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row">
                    <h3 className="text-lg font-semibold text-gray-800">Frontend Developer</h3>
                    <span className="text-sm text-gray-500">Mar 2020 - Dec 2021</span>
                  </div>
                  <p className="text-gray-700">RecentCoder</p>
                  <ul className="mt-2 list-inside list-disc text-gray-600">
                    <li>Built responsive user interfaces using React and Redux</li>
                    <li>Implemented real-time features with Socket.io</li>
                    <li>Optimized application performance and user experience</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">Education</h2>
              <div>
                <div className="flex flex-col justify-between gap-1 sm:flex-row">
                  <h3 className="text-lg font-semibold text-gray-800">Bachelor of Commerce (Honours) in Accounting</h3>
                  <span className="text-sm text-gray-500">2019 - Present</span>
                </div>
                <p className="text-gray-600">Currently pursuing</p>
              </div>
            </section>

            {/* Connect */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-800">Connect With Me</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <a
                  href="https://github.com/sheikhcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border p-3 text-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://gitlab.com/sheikhcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border p-3 text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                >
                  <Gitlab className="h-5 w-5" />
                  <span>GitLab</span>
                </a>
                <a
                  href="https://twitter.com/sheikhcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border p-3 text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                >
                  <Twitter className="h-5 w-5" />
                  <span>Twitter</span>
                </a>
                <a
                  href="https://sheikh.codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border p-3 text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                >
                  <Globe className="h-5 w-5" />
                  <span>Website</span>
                </a>
                <a
                  href="mailto:likhon@sheikh.codes"
                  className="flex items-center gap-2 rounded-md border p-3 text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://t.me/sheikhcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border p-3 text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                >
                  <Send className="h-5 w-5" />
                  <span>Telegram</span>
                </a>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-6 text-center text-gray-500 print:bg-white">
            <p>This CV was generated from sheikh.codes/cv</p>
          </div>
        </Card>
      </div>
      {/* Add PoweredBy component at the bottom */}
      <div className="mt-8 print:hidden">
        <PoweredBy />
      </div>
    </div>
  )
}


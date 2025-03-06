import Link from "next/link"
import { Github, Twitter, Linkedin, Send, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" size="icon" asChild>
        <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="h-4 w-4" />
        </Link>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="h-4 w-4" />
        </Link>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-4 w-4" />
        </Link>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <Link href={siteConfig.links.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <Send className="h-4 w-4" />
        </Link>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <Link href={siteConfig.links.gitlab} target="_blank" rel="noopener noreferrer" aria-label="GitLab">
          <Globe className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}


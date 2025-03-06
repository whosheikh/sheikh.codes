import type { Icons } from "@/components/icons"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: string
    gitlab: string
    telegram: string
  }
  author: string
  keywords: string[]
  mainNav: MainNavItem[]
  domains: {
    name: string
    description: string
    url: string
  }[]
  services: {
    title: string
    description: string
    icon: keyof typeof Icons
    href: string
  }[]
  projects: {
    id: number
    title: string
    description: string
    longDescription: string
    image: string
    tags: string[]
    github: string
    demo: string
    featured: boolean
  }[]
}

export type DomainData = {
  domain: string
  title: string
  description: string
  theme: {
    primary: string
    secondary: string
    accent: string
    background: string
  }
}


import type { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "Sheikh Likhon - Full-Stack Developer & SEO Specialist",
  description:
    "Sheikh Likhon is a full-stack developer and SEO specialist, expert in React, Redux, Node.js, Sails, PHP, C#, ASP.NET, and advanced SEO techniques including Knowledge Graphs.",
  url: "https://sheikh.codes",
  ogImage: "https://sheikh.codes/og-image.jpg",
  links: {
    twitter: "https://twitter.com/sheikhcodes",
    github: "https://github.com/sheikhcodes",
    linkedin: "https://linkedin.com/in/sheikhcodes",
    gitlab: "https://gitlab.com/sheikhcodes",
    telegram: "https://t.me/sheikhcodes",
  },
  author: "Sheikh Likhon",
  keywords: [
    "Full-stack developer",
    "SEO specialist",
    "React",
    "Redux",
    "Node.js",
    "Sails",
    "PHP",
    "C#",
    "ASP.NET",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Knowledge Graphs",
    "Sheikh Likhon",
    "sheikh.codes",
  ],
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  domains: [
    {
      name: "sheikh.codes",
      description: "Main portfolio and professional presence",
      url: "https://sheikh.codes",
    },
    {
      name: "likhon.sheikh.codes",
      description: "Personal blog and technical writings",
      url: "https://likhon.sheikh.codes",
    },
  ],
  services: [
    {
      title: "Web Development",
      description:
        "Modern, responsive web applications built with React, Next.js, and other cutting-edge technologies.",
      icon: "Code",
      href: "/services/web-development",
    },
    {
      title: "SEO Optimization",
      description:
        "Comprehensive SEO strategies including technical SEO, content optimization, and knowledge graph implementation.",
      icon: "Search",
      href: "/services/seo",
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions using Node.js, ASP.NET Core, PHP, and other backend technologies.",
      icon: "Server",
      href: "/services/backend",
    },
    {
      title: "Technical Consulting",
      description: "Expert advice on technology stack selection, architecture design, and implementation strategies.",
      icon: "Lightbulb",
      href: "/services/consulting",
    },
    {
      title: "Cybersecurity",
      description: "Security audits, vulnerability assessments, and implementation of security best practices.",
      icon: "Shield",
      href: "/services/cybersecurity",
    },
    {
      title: "Community Management",
      description: "Building and managing online communities on platforms like Discord, Telegram, and more.",
      icon: "Users",
      href: "/services/community",
    },
  ],
  projects: [
    {
      id: 1,
      title: "VorTex Cybersecurity",
      description: "Strategic IT architecture and security solutions for modern enterprises.",
      longDescription:
        "Comprehensive cybersecurity platform offering vulnerability assessment, penetration testing, and security monitoring with advanced threat detection.",
      image: "/images/projects/vortex.webp",
      tags: ["Python", "React", "Security", "API"],
      github: "https://github.com/sheikhcodes/vortex-platform",
      demo: "https://vortexnetwork.tech",
      featured: true,
    },
    {
      id: 2,
      title: "PorashonaGPT",
      description:
        "AI-powered educational assistant with Bangla language support, helping students learn more effectively.",
      longDescription:
        "An innovative educational platform leveraging AI to provide personalized learning experiences in Bangla. Features include interactive lessons, real-time translation, and adaptive learning paths.",
      image: "/images/projects/porashonagpt.jpg",
      tags: ["Next.js", "AI", "TypeScript", "Tailwind"],
      github: "https://github.com/sheikhcodes/porashonagpt",
      demo: "https://porashonagpt.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "RecentCoder Community",
      description: "Dynamic coding community platform for knowledge sharing and collaboration.",
      longDescription:
        "A vibrant community platform featuring real-time code collaboration, mentorship programs, and interactive learning resources.",
      image: "/images/projects/recentcoder.png",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/sheikhcodes/recentcoder",
      demo: "https://recentcoder.com",
      featured: true,
    },
    {
      id: 4,
      title: "Knowledge Graph Builder",
      description: "Tool for creating and optimizing knowledge graphs for SEO and data organization.",
      longDescription:
        "A specialized tool for building, visualizing, and optimizing knowledge graphs. Helps businesses improve their SEO through structured data and semantic relationships.",
      image: "/images/projects/knowledge-graph.jpg",
      tags: ["TypeScript", "D3.js", "GraphQL", "Next.js"],
      github: "https://github.com/sheikhcodes/knowledge-graph-builder",
      demo: "https://kg-builder.vercel.app",
      featured: false,
    },
    {
      id: 5,
      title: "SEO Analytics Dashboard",
      description: "Comprehensive SEO analytics platform with real-time insights and recommendations.",
      longDescription:
        "An advanced SEO analytics dashboard providing real-time insights, competitor analysis, and actionable recommendations for improving search rankings.",
      image: "/images/projects/seo-dashboard.jpg",
      tags: ["React", "D3.js", "API", "Firebase"],
      github: "https://github.com/sheikhcodes/seo-analytics",
      demo: "https://seo-analytics.vercel.app",
      featured: false,
    },
    {
      id: 6,
      title: "ASP.NET Core Starter Kit",
      description: "A comprehensive starter template for ASP.NET Core applications with best practices built-in.",
      longDescription:
        "A production-ready ASP.NET Core starter kit with authentication, authorization, API documentation, testing, and CI/CD pipelines pre-configured.",
      image: "/images/projects/aspnet-starter.jpg",
      tags: ["C#", "ASP.NET Core", "Entity Framework", "Azure"],
      github: "https://github.com/sheikhcodes/aspnet-starter-kit",
      demo: "https://aspnet-starter.azurewebsites.net",
      featured: false,
    },
  ],
}


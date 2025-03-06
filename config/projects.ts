import { siteImages } from "@/config/site-images"

export const projects = [
  {
    id: 1,
    title: "VorTex Cybersecurity",
    description: "Strategic IT architecture and security solutions for modern enterprises.",
    image: siteImages.projects.vortex,
    tags: ["Python", "React", "Security", "API"],
    github: "https://github.com/vortexcybersecurity/vortex-platform",
    demo: "https://vortexnetwork.tech",
    longDescription:
      "VorTex Cybersecurity is a comprehensive platform for digital security assessment and enhancement. The project includes tools for vulnerability scanning, penetration testing, and security monitoring.",
  },
  {
    id: 2,
    title: "PorashonaGPT",
    description: "AI-powered educational assistant with Bangla language support.",
    image: siteImages.projects.porashonagpt,
    tags: ["Next.js", "AI", "TypeScript", "Tailwind"],
    github: "https://github.com/likhonsheikhcodes/porashonagpt",
    demo: "https://porashonagpt.vercel.app",
    longDescription:
      "PorashonaGPT is an educational AI assistant designed specifically for Bangla-speaking students. It provides homework help, explanations of complex concepts, and interactive learning experiences.",
  },
  {
    id: 3,
    title: "RecentCoder Community",
    description: "Dynamic coding community platform for knowledge sharing.",
    image: siteImages.projects.recentcoders,
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/likhonsheikhcodes/recentcoder",
    demo: "https://recentcoder.com",
    longDescription:
      "RecentCoder is a community platform designed to connect developers of all skill levels. The platform features real-time chat, code sharing, project collaboration, and learning resources.",
  },
]


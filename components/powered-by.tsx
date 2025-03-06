"use client"

import { motion } from "framer-motion"
import { OptimizedImage } from "@/components/optimized-image"
import { siteImages } from "@/config/images"

export function PoweredBy() {
  const badges = [
    { src: siteImages.badges.vercel, alt: "Powered by Vercel", href: "https://vercel.com" },
    { src: siteImages.badges.cloudflare, alt: "Protected by Cloudflare", href: "https://cloudflare.com" },
    { src: siteImages.badges.pciDss, alt: "PCI DSS Compliant", href: "#" },
    { src: siteImages.badges.dmca, alt: "DMCA Protected", href: "https://www.dmca.com" },
    { src: siteImages.badges.github, alt: "Available on GitHub", href: "https://github.com" },
    { src: siteImages.badges.gitlab, alt: "Available on GitLab", href: "https://gitlab.com" },
    { src: siteImages.badges.uptimeRobot, alt: "Monitored by Uptime Robot", href: "https://uptimerobot.com" },
  ]

  return (
    <div className="w-full py-8 bg-muted/30 backdrop-blur-lg rounded-lg">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-6">Powered By & Protected By</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {badges.map((badge, index) => (
            <motion.a
              key={badge.alt}
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative h-8 dark:invert"
            >
              <OptimizedImage src={badge.src} alt={badge.alt} width={120} height={32} className="object-contain" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}


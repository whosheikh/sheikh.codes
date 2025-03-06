"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const badges = [
  {
    src: "/images/badges/trustpilot.png",
    alt: "TrustPilot Rating",
    width: 120,
  },
  {
    src: "/images/badges/pci-dss.png",
    alt: "PCI DSS Compliant",
    width: 100,
  },
  {
    src: "/images/badges/dmca.png",
    alt: "DMCA Protected",
    width: 100,
  },
  {
    src: "/images/badges/github.webp",
    alt: "GitHub",
    width: 80,
  },
  {
    src: "/images/badges/cloudflare.png",
    alt: "Cloudflare Protected",
    width: 120,
  },
  {
    src: "/images/badges/vercel.png",
    alt: "Powered by Vercel",
    width: 100,
  },
  {
    src: "/images/badges/gitlab.png",
    alt: "GitLab",
    width: 80,
  },
]

export function TrustBadges() {
  return (
    <div className="w-full py-6 bg-muted/30 backdrop-blur-lg rounded-lg">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-4">Trusted By & Powered By</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.alt}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative h-8 dark:invert"
              style={{ width: badge.width }}
            >
              <Image
                src={badge.src || "/placeholder.svg"}
                alt={badge.alt}
                fill
                className="object-contain"
                sizes={`${badge.width}px`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


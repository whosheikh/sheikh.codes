"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export function ProjectShowcase({ limit = 0 }: { limit?: number }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const projects = limit > 0 ? siteConfig.projects.filter((p) => p.featured).slice(0, limit) : siteConfig.projects

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          onHoverStart={() => setHoveredId(project.id)}
          onHoverEnd={() => setHoveredId(null)}
          className="group relative"
        >
          <Card className="h-full flex flex-col bg-gradient-to-br from-muted/50 via-background to-muted/50 backdrop-blur-xl border-2 border-muted/80 dark:bg-opacity-10">
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className={`object-cover transition-all duration-500 ${
                  hoveredId === project.id ? "scale-110 blur-[2px]" : "scale-100"
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center p-6"
                  >
                    <p className="text-white text-center text-sm">{project.longDescription}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {project.title}
                <motion.div animate={{ rotate: hoveredId === project.id ? 45 : 0 }} transition={{ duration: 0.2 }}>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-background/50 hover:bg-background/80 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <span>Live Demo</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}


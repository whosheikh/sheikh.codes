"use client"

import { motion } from "framer-motion"
import { Code, Users, BookOpen, Shield, Globe, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Modern web applications built with React, Redux, Node.js, and TypeScript. Responsive designs that work across all devices.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Consulting",
    description:
      "Security audits, vulnerability assessments, and implementation of best practices to protect your digital assets.",
  },
  {
    icon: Users,
    title: "Community Management",
    description:
      "Building and managing online communities on platforms like Discord, Telegram, and Facebook. Fostering engagement and growth.",
  },
  {
    icon: BookOpen,
    title: "Technical Education",
    description:
      "Personalized teaching and mentorship in web development, programming, and computer fundamentals for students of all levels.",
  },
  {
    icon: Globe,
    title: "Website Redesign",
    description:
      "Transforming outdated websites into modern, intuitive, and visually appealing platforms with improved user experience.",
  },
  {
    icon: Lightbulb,
    title: "Digital Marketing Strategy",
    description:
      "Strategic guidance for online presence, content creation, and audience engagement to maximize your digital impact.",
  },
]

export function ServicesSection() {
  return (
    <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon

        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}


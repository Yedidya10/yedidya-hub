"use client"

import MinimalProjectCard from "@/components/ui/minimal-project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const ventures = [
  {
    title: "PinFlux",
    description: "Chrome extension that enables pinning important messages in ChatGPT conversations. Features quick access to saved content and intuitive organization tools for enhanced productivity.",
    githubUrl: "https://github.com/AuxionCore/PinFlux",
    liveUrl: "https://pin-flux.auxion.space/",
    technologies: ["TypeScript", "Chrome APIs", "HTML5", "CSS3", "ChatGPT Integration"],
    category: "Browser Extension" as const,
    featured: true
  },
  {
    title: "RTLify GPT",
    description: "Browser extension that automatically detects and formats Right-to-Left (RTL) languages in ChatGPT. Improves readability for Hebrew, Arabic, and other RTL languages with proper text direction.",
    githubUrl: "https://github.com/AuxionCore/RTLify_GPT",
    liveUrl: "https://rtlify-gpt.auxion.space/",
    technologies: ["JavaScript", "CSS3", "Chrome Extension APIs", "DOM Manipulation", "RTL Support"],
    category: "Browser Extension" as const
  },
  {
    title: "ShareFood",
    description: "Community platform connecting people to share surplus food and reduce waste. Features real-time location matching, user profiles, rating systems, and secure messaging for safe food sharing.",
    githubUrl: "https://github.com/Yedidya10/share_food",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "JWT Authentication"],
    category: "Social Platform" as const
  },
  {
    title: "ShareSphere",
    description: "Community platform for sharing household items and resources. Connects neighbors to lend and borrow everyday objects, reducing waste and building stronger local communities.",
    githubUrl: "https://github.com/Yedidya10/sharesphere",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js", "Tailwind CSS", "Vercel"],
    category: "Social Platform" as const
  }
]

export default function VenturesSection() {
  return (
    <section id="ventures" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Minimal Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Selected Ventures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A collection of digital products built to solve specific problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {ventures.map((venture, index) => (
            <MinimalProjectCard
              key={index}
              {...venture}
            />
          ))}
        </div>

        {/* Minimal Call to Action */}
        <div className="flex justify-start">
          <Button variant="link" className="group p-0 h-auto text-lg" asChild>
            <a href="https://github.com/Yedidya10" target="_blank" rel="noopener noreferrer">
              Explore more on GitHub
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

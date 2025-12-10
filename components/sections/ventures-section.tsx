"use client"

import MinimalProjectCard from "@/components/ui/minimal-project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const ventures = [
  {
    title: "InSight",
    description: "A living partner matching platform built on the principles of Calm Technology and Radical Honesty. We help users find compatible living partners through deep analysis (In) and clarity (Sight), allowing technology to quietly recede into the background while authentic connections emerge.",
    githubUrl: "https://github.com/Yedidya10/insight",
    liveUrl: "https://insight.example.com/",
    technologies: ["Next.js", "TypeScript", "AI/ML", "PostgreSQL", "Prisma", "Tailwind CSS"],
    category: "Startup" as const,
    featured: true
  },
  {
    title: "PinFlux",
    description: "Chrome extension that enables pinning important messages in ChatGPT conversations. Features quick access to saved content and intuitive organization tools for enhanced productivity.",
    githubUrl: "https://github.com/AuxionCore/PinFlux",
    liveUrl: "https://pin-flux.auxion.space/",
    technologies: ["TypeScript", "Chrome APIs", "HTML5", "CSS3", "ChatGPT Integration"],
    category: "Browser Extension" as const,
    featured: true
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

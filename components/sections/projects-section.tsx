"use client"

import ProjectCard from "@/components/ui/project-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, Sparkles } from "lucide-react"

const projects = [
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Projects & <span className="text-muted-foreground">Innovations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my latest work in browser extensions and social platforms, 
            built with modern technologies and focused on user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

        {/* Technology Overview */}
        <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-muted-foreground mb-2">
              <Code2 className="w-5 h-5" />
              <span className="text-sm font-medium">Technology Stack</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Tools & Technologies</h3>
            <p className="text-muted-foreground">
              A comprehensive overview of the technologies I work with
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Frontend</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"].map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold mb-4 text-green-600 dark:text-green-400">Backend</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "JWT", "Firebase", "Supabase"].map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold mb-4 text-purple-600 dark:text-purple-400">Tools & APIs</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Chrome APIs", "Google Maps", "NextAuth.js", "AI Agents", "Vercel"].map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" className="group" asChild>
            <a href="https://github.com/Yedidya10" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

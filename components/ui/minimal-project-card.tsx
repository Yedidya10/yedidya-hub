"use client"

import { ArrowUpRight } from "lucide-react"

interface MinimalProjectCardProps {
  title: string
  description: string
  githubUrl: string
  liveUrl?: string
  technologies: string[]
  category: string
  featured?: boolean
}

export default function MinimalProjectCard({
  title,
  description,
  githubUrl,
  liveUrl,
  technologies,
  category,
}: MinimalProjectCardProps) {
  return (
    <div className="group flex flex-col h-full border-l-2 border-muted pl-6 hover:border-foreground transition-colors duration-300">
      <div className="mb-4">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-2xl font-bold mt-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <div className="space-y-6 mt-auto">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs text-muted-foreground/80 bg-muted/30 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4"
            >
              Visit Site
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </a>
          )}
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}

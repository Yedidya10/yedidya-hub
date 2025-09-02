"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  githubUrl: string
  liveUrl?: string
  technologies: string[]
  category: "Browser Extension" | "Social Platform" | "Web App" | "Mobile App"
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  githubUrl,
  liveUrl,
  technologies,
  category,
  featured = false
}: ProjectCardProps) {

  const categoryColors = {
    "Browser Extension": "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
    "Social Platform": "bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20",
    "Web App": "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
    "Mobile App": "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20"
  }

  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 flex flex-col h-full ${
      featured ? 'shadow-lg' : ''
    }`}>
      {featured && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
          <Star className="w-3 h-3 inline mr-1" />
          Featured
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Badge className={categoryColors[category]} variant="outline">
              {category}
            </Badge>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 flex-grow">
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs font-medium bg-muted/50 hover:bg-muted transition-all duration-200 hover:scale-105 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4 gap-2 mt-auto">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Code
          </a>
        </Button>
        {liveUrl && (
          <Button size="sm" className="flex-1" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              {category === "Browser Extension" ? "Website" : "Live Demo"}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

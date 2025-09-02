"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import DownloadableResume from "@/components/ui/downloadable-resume"
import Image from "next/image"

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <Badge variant="outline" className="mb-4">
              Full Stack Developer
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Yedidya <span className="text-muted-foreground">Aberjel</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building Advanced Digital Solutions
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
            Driven full-stack developer with comprehensive communication, collaborative and organizational skills. 
            Quick learner with focused attention to detail, seeking to apply professional knowledge and experience in innovative projects.
            As a developer, I see great value in contributing to open source libraries.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToProjects}
            >
              <span className="relative z-10 flex items-center">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            <DownloadableResume />
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 hover:bg-primary/10 hover:text-primary" asChild>
              <a href="https://github.com/Yedidya10" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 hover:bg-primary/10 hover:text-primary" asChild>
              <a href="https://www.linkedin.com/in/yedidya-aberjel/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 hover:bg-primary/10 hover:text-primary" asChild>
              <a href="mailto:yedidya.abergel@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/5 border-2 border-border overflow-hidden shadow-2xl">
              {/* Profile Image */}
              <Image
                src="/profile-image.jpeg"
                alt="Yedidya Aberjel"
                width={384}
                height={384}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Floating badges */}
            <Badge className="absolute -top-4 -right-4 shadow-lg">
              React Expert
            </Badge>
            <Badge className="absolute -bottom-4 -left-4 shadow-lg" variant="secondary">
              Open Source Enthusiast
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

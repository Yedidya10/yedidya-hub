"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const scrollToVentures = () => {
  const venturesSection = document.getElementById('ventures')
  if (venturesSection) {
    venturesSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
}

export default function FounderHero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-background">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 text-center md:text-left order-2 md:order-1">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
              Yedidya.
            </h1>
            <p className="text-2xl sm:text-3xl text-muted-foreground font-light tracking-tight">
              Turning concepts into <span className="text-foreground font-medium">scalable realities</span>.
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground/80 max-w-md mx-auto md:mx-0 leading-relaxed">
            I build digital products that solve real problems. 
            From ideation to deployment, I focus on creating value through clean code and intuitive design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button 
              size="lg" 
              className="rounded-full px-8"
              onClick={scrollToVentures}
            >
              View Ventures
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8"
              asChild
            >
              <a href="mailto:yedidya.abergel@gmail.com">
                Let&apos;s Collaborate
              </a>
            </Button>
          </div>
        </div>

        {/* Minimal Image */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
            <Image
              src="/profile-image.jpeg"
              alt="Yedidya Aberjel"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

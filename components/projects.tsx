import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced filtering, cart management, and payment integration.",
      image: "/modern-ecommerce-interface.png",
      tech: ["React", "Next.js", "Stripe", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      image: "/task-management-dashboard.png",
      tech: ["React", "TypeScript", "Socket.io", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      image: "/weather-dashboard-app-interface.png",
      tech: ["Vue.js", "API Integration", "Charts.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing modern design principles and smooth animations.",
      image: "/portfolio-website-design.png",
      tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projetos em destaque</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Um pouco da minha jornada como desenvolvedor, criando soluções web e experiências digitais.
          </p>
        </div>

        {/*<div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 overflow-hidden group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-emerald-400 text-emerald-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 hover:border-emerald-400 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>*/}
      </div>
    </section>
  )
}

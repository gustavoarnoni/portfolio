import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const technologies = [
    { name: "JavaScript", logo: "/javascript-icon.png" },
    { name: "TypeScript", logo: "/typescript-icon.png" },
    { name: "Node.js", logo: "/nodejs-icon.png" },
    { name: "NestJS", logo: "/nestjs-icon.png" },
    { name: "React", logo: "/react-icon.png" },
    { name: "MongoDB", logo: "/mongodb-icon.png" },
    { name: "PostgreSQL", logo: "/postgresql-icon.png" },
    { name: "Docker", logo: "/docker-icon.png" },
    { name: "Git", logo: "/git-icon.png" },
  ]

  const experience = [
    {
      year: "Sep. 2024 - Present",
      title: "Technical SEO Analyst Junior",
      company: "liveSEO",
      description: "Pilot tec teste",
    },
    {
      year: "2004 - 2024",
      title: "Auxiliar de Financeiro",
      company: "Atacado Diesel",
      description: "paga boleto",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Sobre</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Entusiasta em criar soluções de software escaláveis, desenvolver experiências de uso marcantes e explorar o potencial da inteligência artificial e da cibersegurança para gerar inovação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">Tecnologias</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors duration-300 group"
                  >
                    <img
                      src={tech.logo || "/placeholder.svg"}
                      alt={`${tech.name} logo`}
                      className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm text-gray-300 text-center font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">Experiências</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-emerald-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-400 rounded-full"></div>
                    <Badge variant="outline" className="mb-2 border-emerald-400 text-emerald-400">
                      {exp.year}
                    </Badge>
                    <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                    <p className="text-emerald-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

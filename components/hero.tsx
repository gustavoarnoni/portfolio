import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Gustavo
              <span className="text-emerald-400 block">Arnoni</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">Engenheiro de Software | Desenvolvedor Full-Stack</p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              Entusiasta em criar soluções escaláveis, seguras e inteligentes, unindo tecnologia, cibersegurança e inteligência artificial para transformar ideias em experiências digitais marcantes e funcionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Botão Download Currículo */}
              <Button 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3"
                asChild
              >
                <a 
                  href="/curriculo-gustavo-arnoni.pdf" 
                  download="Gustavo_Arnoni_Curriculo.pdf"
                  aria-label="Baixar currículo"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar currículo
                </a>
              </Button>
              
              <div className="flex gap-4 justify-center">
                {/* Botão GitHub */}
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 hover:border-emerald-400 bg-transparent"
                  asChild
                >
                  <a 
                    href="https://github.com/gustavoarnoni" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                
                {/* Botão LinkedIn */}
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 hover:border-emerald-400 bg-transparent"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/gustavo-dos-santos-arnoni-a5ba06220/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                
                {/* Botão Email */}
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 hover:border-emerald-400 bg-transparent"
                  asChild
                >
                  <a 
                    href="mailto:gustavoarnoni4@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-100 h-100">
                <img
                  src="/gustavo-arnoni-pfp.png"
                  alt="Gustavo Arnoni"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div> */}
              {/* <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-400 rounded-full opacity-30 animate-pulse delay-1000"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
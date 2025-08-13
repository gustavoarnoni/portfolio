"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-sm border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-emerald-400">Gustavo Arnoni</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              Entre em contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-emerald-500 hover:bg-emerald-600 text-white w-fit"
              >
                Get In Touch
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

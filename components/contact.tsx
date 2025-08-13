"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Entre em contato</h2>
          {/* <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>*/}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">Informações de contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                    <span className="text-gray-300">gustavoarnoni4@gmail.com</span>
                  </div>
                  <div className="flex gap-4">
                    {/* Botão GitHub */}
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 bg-transparent"
                      asChild
                    >
                      <a 
                        href="https://github.com/gustavoarnoni" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    
                    {/* Botão LinkedIn */}
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 bg-transparent"
                      asChild
                    >
                      <a 
                        href="https://www.linkedin.com/in/gustavo-dos-santos-arnoni-a5ba06220/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    
                    {/* Botão Email */}
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 bg-transparent"
                      asChild
                    >
                      <a 
                        href="mailto:gustavoarnoni4@gmail.com"
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Trophy } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg md:text-xl text-foreground">BPL 2025-26</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("schedule")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Schedule
            </button>
            <button
              onClick={() => scrollToSection("teams")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Teams
            </button>
            <button
              onClick={() => scrollToSection("rules")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Rules
            </button>
            <button
              onClick={() => scrollToSection("prizes")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Prizes
            </button>
            <button
              onClick={() => scrollToSection("committee")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Committee
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("schedule")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Schedule
            </button>
            <button
              onClick={() => scrollToSection("teams")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Teams
            </button>
            <button
              onClick={() => scrollToSection("rules")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Rules
            </button>
            <button
              onClick={() => scrollToSection("prizes")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Prizes
            </button>
            <button
              onClick={() => scrollToSection("committee")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Committee
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

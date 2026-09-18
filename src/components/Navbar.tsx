'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MessageCircle, Menu, X, Box, Sparkles, Phone } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappUrl = "https://wa.me/5547999988998?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20J2%20Group%20e%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o."

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zinc-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 p-1 border border-white/10 shadow-lg group-hover:border-amber-500/50 transition-all">
            <Image
              src="/images/logo_j2_group.png"
              alt="J2 Group"
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-black tracking-wider text-white group-hover:text-amber-400 transition-colors">
              J2 GROUP
            </span>
            <span className="text-[10px] md:text-xs font-medium text-zinc-400 tracking-wider uppercase">
              Embalagens & Fitas
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Início
          </a>
          <a href="#produtos" className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Box className="w-3.5 h-3.5 text-amber-400" />
            Produtos
          </a>
          <a href="#recursos" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            Diferenciais
          </a>
          <a href="#contato" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Contato
          </a>
        </nav>

        {/* WhatsApp CTA Action */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="text-right hidden lg:block">
            <p className="text-[11px] text-zinc-400">Atendimento Rápido</p>
            <p className="text-xs font-semibold text-zinc-200 flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-400" /> (47) 99998-8998
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-black shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-black text-black" />
            Pedir no WhatsApp
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 hover:text-white"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-4">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-200 hover:text-amber-400 py-1"
          >
            Início
          </a>
          <a
            href="#produtos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-200 hover:text-amber-400 py-1"
          >
            Catálogo de Produtos
          </a>
          <a
            href="#recursos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-200 hover:text-amber-400 py-1"
          >
            Diferenciais de Fábrica
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-200 hover:text-amber-400 py-1"
          >
            Contato & Endereço
          </a>
          <div className="pt-3 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-black shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-black text-black" />
              Chamar no WhatsApp (47) 99998-8998
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

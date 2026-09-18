'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/5547999988998?text=Ol%C3%A1!%20Estou%20no%20site%20do%20J2%20Group%20e%20gostaria%20de%20um%20or%C3%A7amento."

  return (
    <aside aria-label="Atendimento via WhatsApp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline">Orçamento Rápido</span>
        <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping opacity-75 group-hover:hidden"></span>
      </a>
    </aside>
  )
}

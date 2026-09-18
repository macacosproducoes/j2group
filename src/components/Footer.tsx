'use client'

import React from 'react'
import Image from 'next/image'
import { MessageCircle, Phone, MapPin, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contato" className="bg-black border-t border-white/10 text-zinc-400 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-zinc-900 p-1 border border-white/10">
                <Image
                  src="/images/logo_j2_group.png"
                  alt="J2 Group"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-wider">J2 GROUP</span>
                <p className="text-xs text-amber-400 font-medium tracking-widest uppercase">Soluções em Embalagens</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Distribuição e fornecimento de caixas de papelão reforçadas e fitas adesivas industriais de alta performance com metragem real garantida.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs text-zinc-300">
                Atacado & Varejo
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs text-amber-400">
                Nota Fiscal Inclusa
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Início</a></li>
              <li><a href="#produtos" className="hover:text-amber-400 transition-colors">Catálogo de Produtos</a></li>
              <li><a href="#recursos" className="hover:text-amber-400 transition-colors">Diferenciais de Fábrica</a></li>
              <li><a href="#contato" className="hover:text-amber-400 transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Atendimento</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/5547999988998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  (47) 99998-8998
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Segunda a Sexta: 08h às 18h</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Atendimento para todo o Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p suppressHydrationWarning>© {new Date().getFullYear()} J2 GROUP Embalagens e Fitas. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

'use client'

import React from 'react'
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { ShieldCheck, Sparkles, MessageCircle, ArrowRight, Box } from "lucide-react"

export function SplineSceneBasic() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20embalagens%20JF%20Packs."

  return (
    <Card className="w-full min-h-[560px] md:h-[600px] bg-gradient-to-b from-zinc-950 via-zinc-900 to-black border border-white/10 relative overflow-hidden shadow-2xl rounded-3xl">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        size={360}
      />
      
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-6 md:p-12 relative z-10 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 w-fit backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Embalagens & Fitas Industriais
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-400 leading-[1.15]">
            JF PACKS <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
              Soluções em Embalagens
            </span>
          </h1>

          <p className="mt-5 text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed">
            Caixas de papelão reforçadas e fitas adesivas com metragem real garantida. 
            Direto da fábrica com o padrão industrial mais seguro e confiável do mercado.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-black shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Box className="w-4 h-4" />
              Ver Produtos & Preços
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/10 hover:border-amber-400/40 hover:text-white transition-all backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              Orçamento WhatsApp
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Metragem 100% Real Garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Pronta Entrega em SP e Região</span>
            </div>
          </div>
        </div>

        {/* Right content with Spline 3D Scene */}
        <div className="flex-1 relative min-h-[350px] lg:min-h-full w-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full min-h-[350px]"
          />
        </div>
      </div>
    </Card>
  )
}

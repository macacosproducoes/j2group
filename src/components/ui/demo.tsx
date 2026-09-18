'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { ShieldCheck, Sparkles, MessageCircle, ArrowRight, Box } from "lucide-react"

export function SplineSceneBasic() {
  const [robotLoaded, setRobotLoaded] = useState(false)
  const whatsappUrl = "https://wa.me/5547999988998?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20embalagens%20com%20o%20J2%20Group."

  useEffect(() => {
    // Sync the box entrance with the robot loading
    const timer = setTimeout(() => {
      setRobotLoaded(true)
    }, 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className="w-full min-h-[600px] lg:h-[640px] bg-[#07070a] border border-[#d4af37]/25 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.95)] rounded-3xl group">
      
      {/* Background Video Layer for the Hero/Head */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 filter brightness-95 contrast-125 transition-opacity duration-1000"
        >
          <source
            src="/videos/hero-engenharia.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark gradient mask over video so text and 3D robot have contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070a] via-[#07070a]/80 to-[#07070a]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-[#07070a]/70" />
      </div>

      {/* Dynamic Gold/Silver Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        size={400}
      />
      
      <div className="flex flex-col lg:flex-row h-full relative z-10">
        
        {/* Left content */}
        <div className="flex-1 p-6 md:p-12 relative z-10 flex flex-col justify-center">
          
          {/* Eyebrow badge with authentic metallic gold */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#f5de88] text-xs font-semibold tracking-wider uppercase mb-6 w-fit backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Embalagens &amp; Fitas Industriais
          </div>

          {/* Heading with Pure Chrome Silver and 24K Metallic Gold */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
            <span className="silver-gradient-text">J2 GROUP</span>
            <br />
            <span className="gold-gradient-text">
              Soluções em Embalagens
            </span>
          </h1>

          <p className="mt-5 text-[#cbd5e1] text-base md:text-lg max-w-xl leading-relaxed font-normal">
            Caixas de papelão reforçadas e fitas adesivas com metragem real garantida. 
            Direto da fábrica com o padrão industrial mais seguro e confiável do mercado.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm btn-gold-metallic hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <Box className="w-4 h-4 text-black" />
              <span>Ver Produtos &amp; Preços</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 border border-white/15 hover:border-[#d4af37]/50 hover:text-white transition-all backdrop-blur-md shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Orçamento WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span className="text-zinc-300">Metragem 100% Real Garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-zinc-300">Pronta Entrega com Nota Fiscal</span>
            </div>
          </div>
        </div>

        {/* Right content with Spline 3D Scene + Floating 3D Box (35% reduced, positioned lower on robot's hand, emerging in sync) */}
        <div className="flex-1 relative min-h-[440px] lg:min-h-full w-full flex items-center justify-center overflow-hidden">
          
          {/* Spline 3D Interactive Scene */}
          <div className="absolute inset-0 w-full h-full">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>

          {/* Floating 3D Box positioned on the robot's lower hand area, reduced by 35%, emerging together with the robot */}
          <AnimatePresence>
            {robotLoaded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.2, y: 70 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -16, 0],
                  rotateZ: [-2, 2.5, -2],
                  rotateX: [2, -2, 2],
                }}
                transition={{
                  opacity: { duration: 1.1, ease: "easeOut" },
                  scale: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                  y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  rotateZ: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                }}
                className="absolute bottom-6 sm:bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center justify-center"
              >
                {/* Ambient Metallic Golden Glow Aura behind Box */}
                <motion.div
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.3, 0.55, 0.3],
                  }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-[#d4af37]/35 via-[#e6c762]/20 to-transparent blur-2xl pointer-events-none"
                />

                {/* 35% reduced Box (was 390px, now 250px) */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-[250px] md:h-[250px] drop-shadow-[0_16px_32px_rgba(0,0,0,0.95)] drop-shadow-[0_0_28px_rgba(212,175,55,0.35)] filter">
                  <Image
                    src="/images/caixa-j2-box-3d-transparent.png"
                    alt="Caixa 3D J2 Group na mão do robô"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 768px) 220px, 260px"
                  />
                </div>

                {/* Dynamic Contact Shadow beneath the Box */}
                <motion.div
                  animate={{
                    scale: [1, 0.78, 1],
                    opacity: [0.7, 0.35, 0.7],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="w-36 sm:w-44 h-5 rounded-full bg-black/90 blur-md mt-[-15px] pointer-events-none"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Micro ambient floating particles for the 3D space */}
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute bottom-16 right-10 w-1.5 h-1.5 rounded-full bg-[#d4af37]/60 blur-[0.5px] animate-pulse" />
            <span className="absolute top-24 right-20 w-2 h-2 rounded-full bg-slate-200/40 blur-[0.5px] animate-ping" />
          </div>

        </div>

      </div>
    </Card>
  )
}

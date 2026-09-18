'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Truck } from 'lucide-react'

export function AntigravityFloating() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* Ambient Gold/Silver Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#aa7c11]/5 blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.18, 0.08],
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-5 w-96 h-96 rounded-full bg-gradient-to-tl from-slate-200/15 via-zinc-400/10 to-transparent blur-3xl pointer-events-none"
      />

      {/* Mini 3D Box Element 1 (Reduced by 80% ~60px) - Top Left Float */}
      <motion.div
        animate={{
          y: [0, -22, 0],
          rotateZ: [0, 8, -4, 0],
          rotateY: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden md:flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-[#101015]/80 border border-[#d4af37]/35 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] absolute top-32 left-8 z-10"
      >
        <div className="relative w-12 h-12 shrink-0 drop-shadow-[0_4px_12px_rgba(212,175,55,0.3)]">
          <Image
            src="/images/caixa-j2-box-3d-transparent.png"
            alt="Mini Caixa 3D J2 Group"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-xs font-bold text-white">Caixas Reforçadas</p>
          <p className="text-[10px] text-[#f5de88] font-mono">42×25×35 cm</p>
        </div>
      </motion.div>

      {/* Mini 3D Box Element 2 (Reduced by 80% ~55px) - Top Right Ambient Floating */}
      <motion.div
        animate={{
          y: [0, 26, 0],
          rotateZ: [-3, 6, -3],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="hidden lg:flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-[#101015]/80 border border-slate-300/25 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] absolute top-56 right-8 z-10"
      >
        <div className="relative w-12 h-12 shrink-0 drop-shadow-[0_4px_12px_rgba(255,255,255,0.2)]">
          <Image
            src="/images/caixa-j2-box-3d-transparent.png"
            alt="Mini Caixa 3D J2 Group"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-xs font-bold text-white">Metragem 100% Real</p>
          <p className="text-[10px] text-[#cbd5e1]">Fitas 50m a 500m</p>
        </div>
      </motion.div>

      {/* Mini 3D Box Free Floating in Space - Mid Left */}
      <motion.div
        animate={{
          y: [0, -35, 0],
          x: [0, 14, 0],
          rotateZ: [-6, 6, -6],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="hidden xl:block absolute top-[55%] left-10 z-10 pointer-events-none"
      >
        <div className="relative w-16 h-16 drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]">
          <Image
            src="/images/caixa-j2-box-3d-transparent.png"
            alt="Caixa 3D J2 Group Flutuante"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-12 h-2.5 rounded-full bg-black/60 blur-sm mt-1 mx-auto" />
      </motion.div>

      {/* Mini 3D Box Free Floating in Space - Lower Right */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -12, 0],
          rotateZ: [4, -8, 4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="hidden xl:block absolute top-[75%] right-14 z-10 pointer-events-none"
      >
        <div className="relative w-14 h-14 drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] drop-shadow-[0_0_15px_rgba(226,232,240,0.2)]">
          <Image
            src="/images/caixa-j2-box-3d-transparent.png"
            alt="Caixa 3D J2 Group Flutuante"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-10 h-2 rounded-full bg-black/60 blur-sm mt-1 mx-auto" />
      </motion.div>

      {/* Floating Badge - Bottom Left */}
      <motion.div
        animate={{
          y: [0, -16, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="hidden xl:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-950/85 border border-emerald-500/30 backdrop-blur-md shadow-xl absolute bottom-24 left-16 z-10"
      >
        <Truck className="w-4 h-4 text-emerald-400" />
        <span className="text-xs font-semibold text-zinc-200">Envio Ágil para Todo Brasil</span>
      </motion.div>

      {/* Micro floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30 - i * 8, 0],
            x: [0, (i % 2 === 0 ? 15 : -15), 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className={`absolute rounded-full pointer-events-none ${
            i % 2 === 0
              ? 'w-2 h-2 bg-[#d4af37]/60 blur-[1px]'
              : 'w-1.5 h-1.5 bg-slate-200/50 blur-[1px]'
          }`}
          style={{
            top: `${15 + i * 14}%`,
            left: `${10 + i * 15}%`,
          }}
        />
      ))}
    </div>
  )
}

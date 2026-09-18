'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Truck, Award, Zap, Factory, CheckCircle, ArrowRight } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'

const FEATURES = [
  {
    icon: Award,
    title: 'Metragem 100% Real',
    description: 'Nossos rolos de fita possuem exatamente a metragem anunciada. Chega de comprar rolos que acabam na metade do esperado.',
    tag: 'Garantia de Fábrica',
  },
  {
    icon: ShieldCheck,
    title: 'Papelão Onda C Reforçado',
    description: 'Caixas de alta resistência ao empilhamento e impactos no transporte rodoviário e aéreo. Proteja sua mercadoria sem sustos.',
    tag: 'Ultra Resistência',
  },
  {
    icon: Zap,
    title: 'Adesão Instantânea e Duradoura',
    description: 'Fórmula de cola acrílica industrial premium. Adere com firmeza em papelão virgem, reciclado e superfícies plásticas.',
    tag: 'Fita Industrial',
  },
  {
    icon: Factory,
    title: 'Preço Direto da Indústria',
    description: 'Sem intermediários. Compre no atacado com margem competitiva e faturamento flexível para empresas com CNPJ.',
    tag: 'B2B & Atacado',
  },
  {
    icon: Truck,
    title: 'Pronta Entrega Ágil',
    description: 'Estoque físico permanente para suprir demandas de emergência e picos de vendas como Black Friday e datas sazonais.',
    tag: 'Envio Imediato',
  },
  {
    icon: CheckCircle,
    title: 'Nota Fiscal e Garantia',
    description: '100% dos pedidos acompanham nota fiscal eletrônica com procedência assegurada e suporte pós-venda dedicado.',
    tag: 'Segurança Total',
  },
]

export function FeaturesSection() {
  return (
    <section id="recursos" className="py-20 md:py-28 relative bg-[#060608] overflow-hidden">
      
      {/* Decorative mini 3D box floating (reduced by 80%) on left side */}
      <motion.div
        animate={{
          y: [0, 24, 0],
          rotateZ: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute -left-3 top-40 w-16 h-16 pointer-events-none opacity-75 drop-shadow-[0_8px_20px_rgba(212,175,55,0.2)]"
      >
        <Image
          src="/images/caixa-j2-box-3d-transparent.png"
          alt="Mini Caixa 3D J2 Group"
          fill
          sizes="64px"
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#f5de88] bg-[#d4af37]/10 border border-[#d4af37]/35 mb-3 shadow-[0_0_12px_rgba(212,175,55,0.15)]">
            Por que escolher o J2 Group
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            <span className="silver-gradient-text">Padrão Industrial Que Faz</span> <br />
            <span className="gold-gradient-text">
              Sua Operação Não Parar
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#94a3b8]">
            Qualidade rigorosa pensada para quem embala dezenas ou milhares de pacotes todos os dias.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-[#101015]/60 border border-white/10 p-8 hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                <Spotlight
                  className="-top-20 left-10"
                  size={240}
                />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#181820] flex items-center justify-center text-[#d4af37] border border-[#d4af37]/35 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#cbd5e1] uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800/80 border border-white/10">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#f5de88] transition-colors mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#d4af37] group-hover:text-[#f5de88] transition-colors">
                  <span>Conhecer especificação</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Cinematic Factory Production Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 rounded-3xl border border-[#d4af37]/35 bg-[#0d0d12]/95 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.95)] group"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] md:h-72 w-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
            >
              <source src="/videos/producao-fabrica.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d12] via-[#0d0d12]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-[#0d0d12]/40" />
            
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#f5de88] bg-[#d4af37]/20 border border-[#d4af37]/40 backdrop-blur-md shadow-[0_0_12px_rgba(212,175,55,0.2)]">
                  Tecnologia &amp; Engenharia Fabril
                </span>
                <span className="text-xs text-[#94a3b8] font-mono hidden sm:inline">
                  J2 GROUP &bull; INDÚSTRIA BRASIL
                </span>
              </div>
              
              <div className="max-w-xl">
                <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                  Capacidade Produtiva em Grande Escala
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-4 max-w-lg">
                  Nossas linhas operam com maquinário automatizado de alta precisão para assegurar qualidade milimétrica nas caixas e rolos de fita adesiva.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://wa.me/5547999988998?text=Ol%C3%A1!%20Quero%20conhecer%20as%20condi%C3%A7%C3%B5es%20de%20fornecimento%20industrial%20do%20J2%20Group."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-metallic px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm hover:scale-105 transition-all inline-flex items-center gap-2"
                  >
                    <Factory className="w-4 h-4" />
                    Solicitar Fornecimento Industrial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

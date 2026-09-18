'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle2, Sparkles, ArrowUpRight, HelpCircle } from 'lucide-react'

interface ProductItem {
  id: string
  title: string
  spec: string
  category: string
  badge?: string
  badgeType?: 'gold' | 'silver' | 'emerald'
  price: string
  priceSub: string
  image: string
  whatsappMsg: string
  isSpecialCta?: boolean
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'caixa-42x25x35',
    title: 'Caixa de Papelão Lisa',
    spec: '42 × 25 × 35 cm',
    category: 'Caixa de Papelão Reforçada',
    badge: 'Mais Resistente',
    badgeType: 'silver',
    price: 'Sob Consulta',
    priceSub: 'Cotação por quantidade',
    image: '/images/caixa-j2-box-3d-transparent.png',
    whatsappMsg: 'Ol%C3%A1!%20Gostaria%20de%20cotar%20a%20Caixa%20de%20Papel%C3%A3o%20Lisa%2042x25x35cm%20com%20o%20J2%20Group.',
  },
  {
    id: 'fita-45x50',
    title: 'Fita Adesiva 45×50m',
    spec: '45mm × 50 metros',
    category: 'Rolo de Fita Adesiva Real',
    badge: 'Mais Econômico',
    badgeType: 'emerald',
    price: 'R$ 2,80',
    priceSub: 'a partir de',
    image: '/images/j2-fita-45x50-v2.png',
    whatsappMsg: 'Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20da%20Fita%20Adesiva%2045x50m%20(a%20partir%20de%20R%24%202%2C80)%20no%20J2%20Group.',
  },
  {
    id: 'fita-45x100',
    title: 'Fita Adesiva 45×100m',
    spec: '45mm × 100 metros',
    category: 'Rolo de Fita Adesiva Real',
    badge: 'Alta Rotação',
    badgeType: 'silver',
    price: 'R$ 4,20',
    priceSub: 'a partir de',
    image: '/images/j2-fita-45x100-v2.png',
    whatsappMsg: 'Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20da%20Fita%20Adesiva%2045x100m%20(a%20partir%20de%20R%24%204%2C20)%20no%20J2%20Group.',
  },
  {
    id: 'fita-45x200',
    title: 'Fita Adesiva 45×200m',
    spec: '45mm × 200 metros',
    category: 'Rolo de Fita Adesiva Real',
    badge: 'Rolo Duplo',
    badgeType: 'silver',
    price: 'R$ 7,50',
    priceSub: 'a partir de',
    image: '/images/j2-fita-45x200-v3.png',
    whatsappMsg: 'Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20da%20Fita%20Adesiva%2045x200m%20(a%20partir%20de%20R%24%207%2C50)%20no%20J2%20Group.',
  },
  {
    id: 'fita-45x300',
    title: 'Fita Adesiva 45×300m',
    spec: '45mm × 300 metros',
    category: 'Rolo de Fita Adesiva Real',
    badge: 'Campeã de Vendas',
    badgeType: 'gold',
    price: 'R$ 11,50',
    priceSub: 'a partir de',
    image: '/images/j2-fita-45x300-v2.png',
    whatsappMsg: 'Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20da%20Fita%20Adesiva%2045x300m%20(a%20partir%20de%20R%24%2011%2C50)%20no%20J2%20Group.',
  },
  {
    id: 'fita-45x500',
    title: 'Fita Adesiva 45×500m',
    spec: '45mm × 500 metros',
    category: 'Rolo de Fita Adesiva Real',
    badge: 'Maior Metragem',
    badgeType: 'gold',
    price: 'R$ 18,50',
    priceSub: 'a partir de',
    image: '/images/j2-fita-45x500-v2.png',
    whatsappMsg: 'Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20da%20Fita%20Adesiva%2045x500m%20(a%20partir%20de%20R%24%2018%2C50)%20no%20J2%20Group.',
  },
  {
    id: 'outras-medidas',
    title: 'Outras Medidas',
    spec: 'Fitas e Caixas sob medida',
    category: 'Projetos Especiais',
    badge: 'Personalizado',
    badgeType: 'gold',
    price: 'Solicitar Cotação',
    priceSub: 'Sob encomenda',
    image: '/images/j2-fita-especial-v2.png',
    whatsappMsg: 'Ol%C3%A1!%20Gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20para%20medidas%20especiais%20de%20fitas%2Fcaixas%20com%20o%20J2%20Group.',
    isSpecialCta: true,
  },
]

export function ProductsSection() {
  const baseWa = "https://wa.me/5547999988998"

  return (
    <section id="produtos" className="py-20 md:py-28 relative bg-gradient-to-b from-[#060608] via-[#0a0a0e] to-[#060608] overflow-hidden">
      
      {/* Subtle top divider with pure metallic gold accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      {/* Decorative ambient mini 3D box floating on section right border (reduced by 80%) */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotateZ: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute -right-4 top-28 w-16 h-16 pointer-events-none opacity-80 drop-shadow-[0_8px_20px_rgba(212,175,55,0.25)]"
      >
        <Image
          src="/images/caixa-j2-box-3d-transparent.png"
          alt="Mini 3D Box Decorativo"
          fill
          sizes="64px"
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#f5de88] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_12px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Catálogo Oficial J2 Group
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="silver-gradient-text">Embalagens &amp; </span>
            <span className="gold-gradient-text">Rolos Reais</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94a3b8]">
            Metragem 100% garantida de fábrica. Selecione o produto desejado e solicite seu orçamento imediato via WhatsApp.
          </p>
        </div>

        {/* Video Showcase - Rolos de Fita em Alta Produção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 rounded-2xl md:rounded-3xl border border-[#d4af37]/35 bg-[#101015]/90 overflow-hidden relative shadow-[0_15px_35px_rgba(0,0,0,0.9)] group"
        >
          <div className="relative aspect-[21/9] sm:aspect-[24/9] md:h-56 w-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            >
              <source src="/videos/rolos-fita.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#101015] via-[#101015]/50 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#d4af37]/20 text-[#f5de88] border border-[#d4af37]/40 mb-1.5 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
                  Produção Contínua &bull; Metragem Real
                </span>
                <h3 className="text-base sm:text-xl font-bold text-white leading-tight">
                  Rolos de Fita com Metragem 100% Aferida
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd5e1] max-w-lg hidden sm:block">
                  Bobinamento de alta precisão com cola acrílica industrial de máxima ancoragem.
                </p>
              </div>
              <a
                href="https://wa.me/5547999988998?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20rolos%20de%20fita%20no%20atacado%20J2%20Group."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-metallic text-xs sm:text-sm font-bold px-4 py-2 sm:py-2.5 rounded-xl whitespace-nowrap self-start sm:self-auto hover:scale-105 transition-all flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                Cotar Rolos no Atacado
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2-Column Grid on Mobile AND 2-Column Grid on Desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {PRODUCTS.map((prod, idx) => {
            const waLink = `${baseWa}?text=${prod.whatsappMsg}`
            return (
              <motion.article
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group relative rounded-2xl md:rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  prod.isSpecialCta
                    ? 'col-span-2 md:col-span-2 bg-gradient-to-r from-[#221a08]/70 via-[#121217]/95 to-[#0b0b0f] border-[#d4af37]/50 shadow-[0_15px_35px_rgba(212,175,55,0.12)]'
                    : 'bg-[#101015]/75 hover:bg-[#13131a] border-white/10 hover:border-[#d4af37]/45 shadow-lg hover:shadow-[0_15px_35px_rgba(0,0,0,0.85)]'
                }`}
              >
                {/* Badge */}
                {prod.badge && (
                  <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10">
                    <span className={`inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-bold tracking-wide uppercase ${
                      prod.badgeType === 'gold'
                        ? 'btn-gold-metallic shadow-md'
                        : prod.badgeType === 'emerald'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-100 border border-slate-700'
                    }`}>
                      {prod.badge}
                    </span>
                  </div>
                )}

                {/* Card Content & Image */}
                <div className="p-3.5 sm:p-6 flex flex-col">
                  {/* Product Image */}
                  <div className="relative w-full aspect-square max-h-48 sm:max-h-60 rounded-xl bg-[#08080c]/80 p-2 sm:p-4 mb-3 sm:mb-4 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-[#d4af37]/25 transition-all">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                  </div>

                  {/* Category & Title */}
                  <p className="text-[10px] sm:text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-1 truncate">
                    {prod.category}
                  </p>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-white group-hover:text-[#f5de88] transition-colors leading-snug">
                    {prod.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-[#cbd5e1] font-mono mt-0.5 sm:mt-1">
                    {prod.spec}
                  </p>
                </div>

                {/* Price & Action Bottom */}
                <div className="p-3.5 sm:p-6 pt-0 mt-auto">
                  <div className="pt-2 sm:pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-3">
                    <div>
                      <span className="text-[10px] sm:text-xs text-[#94a3b8] block">
                        {prod.priceSub}
                      </span>
                      <span className="text-base sm:text-2xl font-black text-[#d4af37] tracking-tight">
                        {prod.price}
                      </span>
                    </div>

                    <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#cbd5e1]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Estoque Real</span>
                    </div>
                  </div>

                  {/* Direct WhatsApp Action Button */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 sm:py-3 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${
                      prod.isSpecialCta
                        ? 'btn-gold-metallic'
                        : 'bg-[#181820] hover:bg-[#d4af37] hover:text-black text-zinc-100 border border-white/10 hover:border-[#d4af37]'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 group-hover:text-black transition-colors" />
                    <span>{prod.isSpecialCta ? 'Solicitar Cotação' : 'Pedir no WhatsApp'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom Banner for wholesale guarantee */}
        <div className="mt-12 p-4 sm:p-6 rounded-2xl bg-[#101015]/90 border border-[#d4af37]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] border border-[#d4af37]/35 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Precisa de Faturamento PJ ou Grandes Volumes?</h4>
              <p className="text-xs text-[#94a3b8]">Emitimos NF-e, condição especial para compras recorrentes e atacado direto de fábrica.</p>
            </div>
          </div>
          <a
            href="https://wa.me/5547999988998?text=Ol%C3%A1!%20Sou%20pessoa%20jur%C3%ADdica%20e%20gostaria%20de%20uma%20proposta%20comercial%20para%20faturamento%20no%20J2%20Group."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all"
          >
            Falar com Vendedor PJ
          </a>
        </div>
      </div>
    </section>
  )
}

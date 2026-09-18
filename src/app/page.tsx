import React from 'react'
import { Navbar } from '@/components/Navbar'
import { AntigravityFloating } from '@/components/AntigravityFloating'
import { SplineSceneBasic } from '@/components/ui/demo'
import { ProductsSection } from '@/components/ProductsSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-amber-400 selection:text-black">
      {/* Top Floating Antigravity Atmosphere */}
      <AntigravityFloating />

      {/* Main Navbar */}
      <Navbar />

      {/* Hero Section with Spline 3D Scene */}
      <section id="hero" className="pt-28 md:pt-36 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <SplineSceneBasic />
      </section>

      {/* Products Catalog - Strictly the requested items in 2x2 grid */}
      <ProductsSection />

      {/* Features & Resources Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </main>
  )
}

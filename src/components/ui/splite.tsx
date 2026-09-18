'use client'

import React, { Suspense, lazy, Component, ReactNode } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface ErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class SplineErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    console.warn("Spline 3D notice:", error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const loadingPlaceholder = (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
        <span className="text-[11px] tracking-widest text-amber-300/80 font-mono uppercase">Carregando Modelo 3D...</span>
      </div>
    </div>
  )

  return (
    <SplineErrorBoundary fallback={loadingPlaceholder}>
      <Suspense fallback={loadingPlaceholder}>
        <Spline
          scene={scene}
          className={className}
        />
      </Suspense>
    </SplineErrorBoundary>
  )
}

'use client'

import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    })

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Intercept internal anchor link clicks for fluid momentum scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (anchor) {
        const href = anchor.getAttribute('href')
        if (href && href.startsWith('#') && href.length > 1) {
          const targetEl = document.querySelector(href) as HTMLElement | null
          if (targetEl) {
            e.preventDefault()
            lenis.scrollTo(targetEl, { offset: -72, duration: 1.2 })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick, { capture: true })

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', handleAnchorClick, { capture: true })
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

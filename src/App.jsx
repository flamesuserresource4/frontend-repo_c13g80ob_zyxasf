import React, { useEffect, useRef } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  const bgRef = useRef(null)

  useEffect(() => {
    const el = bgRef.current
    if (!el) return
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 20
      const y = (e.clientY / innerHeight - 0.5) * 20
      el.style.setProperty('--x', `${x}deg`)
      el.style.setProperty('--y', `${-y}deg`)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Interactive background */}
      <div
        ref={bgRef}
        className="fixed inset-0 -z-0"
        style={{
          background: 'radial-gradient(1200px 600px at 50% 50%, rgba(56,189,248,0.15), transparent), radial-gradient(800px 400px at 50% 50%, rgba(168,85,247,0.15), transparent) ',
          transform: 'perspective(1000px) rotateX(var(--y, 0deg)) rotateY(var(--x, 0deg))',
          transition: 'transform 0.1s linear',
        }}
      />

      {/* Content */}
      <Hero />
      <Services />
      <Projects />
      <Footer />
    </div>
  )
}

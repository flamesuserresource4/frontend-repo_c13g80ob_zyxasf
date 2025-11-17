import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/80" />

      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
          >
            ÆTHER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg md:text-2xl text-white/80"
          >
            Interactive installations, projection mapping, and playful AI experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="mt-8 flex gap-4"
          >
            <a href="#services" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">Explore Services</a>
            <a href="#projects" className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">See Work</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

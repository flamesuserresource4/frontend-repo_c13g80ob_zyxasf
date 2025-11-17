import React from 'react'
import { Sparkles, Layers, Cpu } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Interactive Installations',
    desc: 'Touch, gesture, and sensor-driven spaces that respond to people in real-time.'
  },
  {
    icon: Layers,
    title: 'Projection Mapping',
    desc: 'Large-scale mapped visuals for stages, architecture, and immersive shows.'
  },
  {
    icon: Cpu,
    title: 'Interactive AI Content',
    desc: 'Generative visuals, voice, and computer vision that adapt to your audience.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_110%,rgba(147,51,234,0.15),transparent_40%)]" />
      <div className="relative container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Playful tech that moves people</h2>
        <p className="mt-3 text-white/70 max-w-2xl">We design for curiosity—mixing art, code, and spatial computing to craft memorable moments.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition">
              <s.icon className="h-10 w-10 text-white/90" />
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

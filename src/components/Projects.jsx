import React, { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProjectCard({ p }) {
  return (
    <a href={p.demo_url || '#'} target={p.demo_url ? '_blank' : '_self'} rel="noreferrer"
       className="group block rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
      <div className="aspect-video w-full overflow-hidden">
        {p.cover_image ? (
          <img src={p.cover_image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30" />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-semibold">{p.title}</h4>
          {p.year && <span className="text-white/50 text-sm">{p.year}</span>}
        </div>
        <p className="mt-1 text-white/70 text-sm">{p.summary}</p>
        {p.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.slice(0,4).map((t, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">{t}</span>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${API_BASE}/api/projects?limit=9`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="relative py-24 bg-black">
      <div className="relative container mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Selected work</h2>
            <p className="mt-3 text-white/70 max-w-2xl">A quick taste of installations, mappings, and AI pieces. More coming soon.</p>
          </div>
        </div>

        {loading ? (
          <p className="mt-12 text-white/70">Loading projects…</p>
        ) : (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

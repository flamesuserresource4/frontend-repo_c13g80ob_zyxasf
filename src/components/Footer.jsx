import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-black py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} ÆTHER — Interactive by design.</p>
        <div className="text-white/60 text-sm">
          Built with love for playful tech.
        </div>
      </div>
    </footer>
  )
}

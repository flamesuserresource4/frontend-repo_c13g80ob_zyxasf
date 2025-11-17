import React, { useCallback, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// Simple, playful portals that feel like touching a gateway to another scene
export default function Portals() {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const [ripple, setRipple] = useState(null) // { x, y, color }

  const portals = useMemo(
    () => [
      {
        id: 'services',
        label: 'Create',
        color: 'rgba(56,189,248,0.6)', // cyan-400
        glow: 'shadow-[0_0_60px_rgba(56,189,248,0.7)]',
        pos: { top: '22%', left: '18%' },
        action: { type: 'scroll', target: '#services' },
      },
      {
        id: 'projects',
        label: 'Explore',
        color: 'rgba(168,85,247,0.6)', // purple-500
        glow: 'shadow-[0_0_60px_rgba(168,85,247,0.7)]',
        pos: { top: '48%', left: '70%' },
        action: { type: 'scroll', target: '#projects' },
      },
      {
        id: 'lab',
        label: 'Test',
        color: 'rgba(250,204,21,0.6)', // amber-400
        glow: 'shadow-[0_0_60px_rgba(250,204,21,0.7)]',
        pos: { top: '70%', left: '40%' },
        action: { type: 'route', target: '/test' },
      },
    ],
    []
  )

  const trigger = useCallback((evt, action, color) => {
    // compute click point relative to viewport for ripple origin
    const rect = containerRef.current?.getBoundingClientRect()
    const x = evt.clientX - (rect?.left || 0)
    const y = evt.clientY - (rect?.top || 0)
    setRipple({ x, y, color })

    const go = () => {
      if (action.type === 'scroll') {
        const el = document.querySelector(action.target)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (action.type === 'route') {
        navigate(action.target)
      }
    }

    // let the ripple animate first, then navigate/scroll
    setTimeout(go, 450)

    // cleanup ripple after animation finishes
    setTimeout(() => setRipple(null), 900)
  }, [navigate])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 select-none">
      {/* Portals */}
      {portals.map((p) => (
        <button
          key={p.id}
          onClick={(e) => trigger(e, p.action, p.color)}
          className={`pointer-events-auto group absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 backdrop-blur-sm ${p.glow}`}
          style={{
            top: p.pos.top,
            left: p.pos.left,
            width: 90,
            height: 90,
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.12) 60%, rgba(255,255,255,0.06) 100%)',
          }}
        >
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ background: `radial-gradient(60% 60% at 50% 50%, ${p.color}, transparent)` }}
            />
          </div>
          <span className="absolute left-1/2 top-[110%] -translate-x-1/2 text-xs tracking-wide text-white/80 opacity-80 group-hover:opacity-100">
            {p.label}
          </span>
        </button>
      ))}

      {/* Ripple transition overlay */}
      <AnimatePresence>
        {ripple && (
          <motion.div
            key="ripple"
            initial={{ clipPath: `circle(0px at ${ripple.x}px ${ripple.y}px)`, opacity: 0.9 }}
            animate={{ clipPath: `circle(140vmax at ${ripple.x}px ${ripple.y}px)`, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(60% 60% at ${ripple.x}px ${ripple.y}px, ${ripple.color}, rgba(0,0,0,0.6))`,
              mixBlendMode: 'screen',
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

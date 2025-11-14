import React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Footer() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 60, damping: 20 })
  const y = useSpring(my, { stiffness: 60, damping: 20 })

  return (
    <footer
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mx.set(e.clientX - rect.left - rect.width / 2)
        my.set(e.clientY - rect.top - rect.height / 2)
      }}
      className="relative w-full overflow-hidden bg-[#0b0b12] py-16 text-white"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <p className="text-white/60">© {new Date().getFullYear()} Neon.Craft — Feel the Motion</p>
        <a href="#" className="text-cyan-300 hover:text-cyan-200">Privacy</a>
      </div>
      <motion.div style={{ x, y }} className="pointer-events-none absolute inset-0 opacity-40">
        {[...Array(60)].map((_, i) => (
          <span key={i} className="particle" style={{ left: `${(i*61)%100}%`, top: `${(i*37)%100}%`, animationDelay: `${i*0.2}s` }} />
        ))}
      </motion.div>
    </footer>
  )
}

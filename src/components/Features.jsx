import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Sparkles, Zap, Infinity, Cpu, Layers } from 'lucide-react'

const features = [
  { icon: Rocket, title: 'Zero to Warp', desc: 'Spring-powered entrances, scroll morphs, and ultra-fluid motion out of the box.' },
  { icon: Sparkles, title: 'Micro‑Interactions', desc: 'Buttons glow, cards tilt, icons shimmer. Every hover has a heartbeat.' },
  { icon: Zap, title: 'GSAP‑Style Energy', desc: 'Cinematic timing, elastic eases, and parallax depth that feels alive.' },
  { icon: Infinity, title: 'Seamless Loops', desc: 'Endless gradients, particle fields and kinetic typography that never stop.' },
  { icon: Cpu, title: 'WebGL Ready', desc: 'Spline 3D hero with room for Three.js, shader toys, and custom shaders.' },
  { icon: Layers, title: 'Glassmorphism', desc: 'Layered frosted surfaces, neon edges, and soft, volumetric shadows.' },
]

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#0b0b12] py-28 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_10%,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30, rotateX: -10, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            transition={{ type: 'spring', stiffness: 140, damping: 18, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_100px_-30px_rgba(56,189,248,0.25)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-fuchsia-500/0 to-purple-500/0 transition-opacity duration-500 group-hover:opacity-20" />
            <div className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" style={{ background: 'conic-gradient(from 90deg at 50% 50%, rgba(59,130,246,0.2), rgba(236,72,153,0.2), rgba(59,130,246,0.2))' }} />

            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 text-cyan-300 shadow-inner shadow-cyan-500/10">
                {React.createElement(f.icon, { className: 'h-6 w-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110' })}
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
              <motion.button whileHover={{ x: 4 }} className="mt-5 text-sm text-cyan-300/90 underline-offset-4 hover:text-cyan-200 hover:underline">
                Explore
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

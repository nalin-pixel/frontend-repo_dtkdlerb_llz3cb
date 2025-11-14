import React, { useMemo } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const words = ['Build Faster', 'Animate Everything', 'Feel the Future']

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useTransform(my, [-300, 300], [10, -10])
  const rotY = useTransform(mx, [-300, 300], [-12, 12])
  const transZ = useTransform(mx, [-300, 300], [0, 40])

  const headlineVariants = {
    initial: { y: 40, opacity: 0 },
    animate: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.25, type: 'spring', stiffness: 120, damping: 18 } })
  }

  const title = useMemo(() => {
    return 'Cinematic Experiences'
  }, [])

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#0b0b12] text-white"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mx.set(e.clientX - rect.left - rect.width / 2)
        my.set(e.clientY - rect.top - rect.height / 2)
      }}
    >
      <div className="absolute inset-0"> 
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradient glow overlays */}
      <div className="pointer-events-none absolute -inset-32 bg-[radial-gradient(closest-side,rgba(168,85,247,0.35),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 -left-32 w-1/2 bg-[radial-gradient(closest-side,rgba(59,130,246,0.25),transparent_70%)] blur-3xl" />

      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, translateZ: transZ }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md glass">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs text-white/70">Futuristic • Interactive • Real-time</span>
        </motion.div>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="neon-title text-balance bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-2"
          >
            {words.map((w, i) => (
              <motion.span key={w} custom={i} variants={headlineVariants} initial="initial" animate="animate" className="chip">
                {w}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-white/70"
        >
          A premium, sci‑fi inspired interface where every motion responds to you. Scroll down and feel the website breathe.
        </motion.p>

        <motion.div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} href="#features" className="btn-primary">
            Launch Experience
          </motion.a>
          <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} href="#learn" className="btn-ghost">
            Watch the Motion
          </motion.a>
        </motion.div>

        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          {[...Array(36)].map((_, i) => (
            <span key={i} className="particle" style={{ left: `${(i * 97) % 100}%`, top: `${(i * 53) % 100}%`, animationDelay: `${i * 0.35}s` }} />
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/60">
        <motion.span initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, repeat: Infinity, repeatType: 'mirror', duration: 1.4 }} className="inline-flex items-center gap-2 text-sm">
          <span className="h-2 w-2 rounded-full bg-white/60" /> Scroll
        </motion.span>
      </div>
    </section>
  )
}

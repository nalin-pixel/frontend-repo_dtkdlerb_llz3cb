import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b0b12] py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(99,102,241,0.2),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold">
          Ready to go ultra‑modern?
        </motion.h3>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mx-auto mt-3 max-w-2xl text-white/70">
          Launch an interface that feels alive. Cinematic scroll, neon glass, and micro‑interactions that convert.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(34,197,94,0.25)' }}
          whileTap={{ scale: 0.98 }}
          href="#"
          className="mt-8 inline-flex rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 px-6 py-3 font-semibold text-black shadow-2xl shadow-emerald-500/10"
        >
          Start Now
        </motion.a>
      </div>

      {/* animated waves */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 opacity-60">
        <svg className="h-full w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="0">
              <stop stopColor="#22d3ee" offset="0%" />
              <stop stopColor="#a78bfa" offset="100%" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            fill="url(#g1)"
            d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,165.3C672,171,768,149,864,133.3C960,117,1056,107,1152,106.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  )
}

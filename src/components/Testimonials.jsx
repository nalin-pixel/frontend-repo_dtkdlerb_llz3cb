import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { quote: 'It feels like touching the future. Every scroll is a scene change.', author: 'Ava, Creative Director' },
  { quote: 'The most immersive web experience I have ever seen.', author: 'Liam, Product Lead' },
  { quote: 'Breathtaking motion design—our demo blew investors away.', author: 'Noah, Founder' },
  { quote: 'A living interface that delights with every interaction.', author: 'Isla, UX Researcher' },
]

export default function Testimonials() {
  return (
    <section id="love" className="relative w-full bg-[#0b0b12] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center text-3xl font-bold">
          Trusted by visionaries
        </motion.h2>

        <div className="relative perspective-1000">
          <motion.div
            initial={{ rotateY: -15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.author}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 160, damping: 20, delay: i * 0.06 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="absolute -left-10 -top-10 h-28 w-28 rotate-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 blur-2xl" />
                <p className="relative z-10 text-lg text-white/90">“{t.quote}”</p>
                <footer className="relative z-10 mt-4 text-sm text-white/60">— {t.author}</footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

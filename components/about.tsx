'use client'

import { motion } from 'framer-motion'
import { aboutData } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-border px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[auto_1fr] md:gap-20">
        {/* Vertical section title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="flex items-start gap-6"
        >
          <h2 className="writing-vertical hidden text-4xl font-bold tracking-[0.3em] md:block">
            私について
          </h2>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-[0.4em] text-primary uppercase">
              01
            </span>
            <h2 className="text-3xl font-bold md:hidden">Sobre mí</h2>
            <span className="hidden font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase md:block">
              Sobre mí
            </span>
          </div>
        </motion.div>

        <div className="flex max-w-2xl flex-col gap-8">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="text-2xl leading-relaxed font-medium text-balance md:text-3xl"
          >
            {aboutData.headline}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="flex flex-col gap-5 leading-relaxed text-muted-foreground"
          >
            {aboutData.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>

          {/* Facts row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="mt-4 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4"
          >
            {aboutData.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 bg-background p-5"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {fact.label}
                </span>
                <span className="font-medium">{fact.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

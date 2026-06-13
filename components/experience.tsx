'use client'

import { motion } from 'framer-motion'
import { experienceData } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-16 flex items-end justify-between gap-4"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-[0.4em] text-primary uppercase">
              03
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">Experiencia</h2>
          </div>
          <span
            aria-hidden="true"
            className="text-2xl font-semibold tracking-[0.3em] text-muted-foreground dark:text-foreground/80"
          >
            経験
          </span>
        </motion.div>

        <ul className="flex flex-col">
          {experienceData.map((exp, i) => (
            <motion.li
              key={`${exp.company}-${exp.role}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              className="border-t border-border last:border-b"
            >
              <div className="group grid gap-4 py-10 transition-colors hover:bg-card md:grid-cols-[120px_1fr] md:gap-10 md:px-6">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {exp.period}
                  </span>
                </div>
                <div className="flex max-w-xl flex-col gap-3">
                  <h3 className="text-xl font-semibold text-balance md:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-xs tracking-[0.15em] text-primary uppercase">
                    {exp.company}
                  </p>
                  <p className="leading-relaxed text-pretty text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/lib/data'

const skillGroups = [
  { kanji: '基盤', label: 'Lenguajes', items: skillsData.lenguajes },
  { kanji: '構造', label: 'Frameworks', items: skillsData.frameworks },
  { kanji: '保存', label: 'Bases de Datos', items: skillsData.basesDeDatos },
  { kanji: '道具', label: 'Infraestructura', items: skillsData.infraestructura },
  { kanji: '学習', label: 'Metodologías', items: skillsData.metodologias },
]

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Skills() {
  return (
    <section
      id="skills"
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
              02
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">Tecnologías</h2>
          </div>
          <span
            aria-hidden="true"
            className="text-2xl font-semibold tracking-[0.3em] text-muted-foreground dark:text-foreground/80"
          >
            技術
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              variants={fadeUp}
              className="group flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-card"
            >
              <span
                aria-hidden="true"
                className="text-4xl font-bold text-muted-foreground/40 transition-colors group-hover:text-primary dark:text-foreground/30 dark:group-hover:text-primary"
              >
                {group.kanji}
              </span>
              <h3 className="font-mono text-xs tracking-[0.3em] uppercase">
                {group.label}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border pb-2 text-sm leading-relaxed text-muted-foreground last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

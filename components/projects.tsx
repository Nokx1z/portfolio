'use client'

import { motion } from 'framer-motion'
import { projectsData } from '@/lib/data'

const kanjiNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export function Projects() {
  return (
    <section
      id="projects"
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
              04
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">Proyectos</h2>
          </div>
          <span
            aria-hidden="true"
            className="text-2xl font-semibold tracking-[0.3em] text-muted-foreground dark:text-foreground/80"
          >
            作品
          </span>
        </motion.div>

        <ul className="flex flex-col">
          {projectsData.map((project, i) => (
            <motion.li
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              className="border-t border-border last:border-b"
            >
              <div className="group grid gap-4 py-10 transition-colors hover:bg-card md:grid-cols-[80px_1fr_auto] md:items-start md:gap-10 md:px-6">
                <span
                  aria-hidden="true"
                  className="text-3xl font-bold text-muted-foreground/40 transition-colors group-hover:text-primary dark:text-foreground/30 dark:group-hover:text-primary"
                >
                  {kanjiNumbers[i] ?? `0${i + 1}`}
                </span>
                <div className="flex max-w-xl flex-col gap-3">
                  <h3 className="text-xl font-semibold text-balance md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs tracking-[0.15em] text-primary uppercase">
                    {project.type}
                  </p>
                  <p className="leading-relaxed text-pretty text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border px-3 py-1 font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] text-primary uppercase transition-colors hover:text-foreground"
                    >
                      Visitar →
                    </a>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

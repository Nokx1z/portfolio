'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  SiDotnet,
  SiTypescript,
  SiNestjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiDocker,
} from 'react-icons/si'
import { Download, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/lib/data'

const techIcons: Record<string, React.ReactNode> = {
  '.NET': <SiDotnet className="size-3.5" />,
  TypeScript: <SiTypescript className="size-3.5" />,
  NestJS: <SiNestjs className="size-3.5" />,
  'Node.js': <SiNodedotjs className="size-3.5" />,
  PHP: <SiPhp className="size-3.5" />,
  PostgreSQL: <SiPostgresql className="size-3.5" />,
  Docker: <SiDocker className="size-3.5" />,
}

const navLinks = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Tecnologías' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
  { href: siteConfig.cv, label: 'Descargar CV', external: true },
]

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="relative flex flex-col overflow-hidden px-6 pt-9 pb-10 md:px-12 md:pt-12 lg:px-20">
      {/* Subtle animated background — calm floating orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -top-1/4 -left-1/4 h-[60vh] w-[60vw] rounded-full opacity-[0.06] dark:opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, currentColor, transparent)' }}
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 h-[50vh] w-[50vw] rounded-full opacity-[0.04] dark:opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, currentColor, transparent)' }}
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      {/* Top bar */}
      <header className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-2.5 font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-30" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {siteConfig.alias}
          </span>
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Backend Developer
          </span>
        </div>
        <div className="flex items-center gap-6">
          {/* Desktop nav */}
          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center gap-8 font-mono text-xs tracking-[0.2em] uppercase">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    {link.external && <Download className="size-3" />}
                  </a>
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-foreground"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile menu button */}
          <button
            className="relative z-50 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-40 flex h-full w-3/4 flex-col gap-8 border-l border-border bg-background p-8 pt-24 md:hidden"
              aria-label="Navegación móvil"
            >
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className="inline-flex items-center gap-2 font-mono text-lg tracking-[0.15em] uppercase transition-colors hover:text-primary"
                    >
                      {link.label}
                      {link.external && <Download className="size-3.5 hidden md:inline" />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Vertical kanji on the right — tategaki, like the poster references */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-6 hidden select-none md:right-12 md:block lg:right-20"
      >
        <p className="writing-vertical text-5xl leading-tight font-semibold tracking-[0.35em] lg:text-6xl">
          開発者
        </p>
      </div>

      {/* Vertical small text on the left edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-2 hidden select-none lg:block"
      >
        <p className="writing-vertical font-mono text-[10px] tracking-[0.5em] text-muted-foreground uppercase">
          Backend Engineering — .NET / TypeScript
        </p>
      </div>

      {/* Main hero content */}
      <motion.div
        className="relative z-10 flex flex-1 flex-col justify-center py-10 md:py-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-16 md:ml-12 lg:ml-24">
          {/* Avatar */}
          <motion.div variants={fadeUp} className="shrink-0 self-center md:self-auto">
            <span className="block w-64 h-64 md:w-80 md:h-80 overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-300 rounded-full">
              <Image
                src="/images/nokx1z.png"
                alt={siteConfig.name}
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </span>
          </motion.div>

          {/* Text */}
          <div className="max-w-xl">
            <motion.p
              variants={fadeUp}
              className="mb-4 font-mono text-xs tracking-[0.4em] text-primary uppercase"
            >
              バックエンド開発者
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl font-extrabold tracking-tight leading-none md:text-7xl"
            >
              <span className="font-console text-primary dark:text-foreground">{siteConfig.alias}</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-xl font-medium text-muted-foreground md:text-2xl"
            >
              {siteConfig.name}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-xl leading-snug text-balance md:text-2xl"
            >
              Construyo <span className="text-primary">sistemas</span> que perduran.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-md leading-relaxed text-pretty text-muted-foreground"
            >
              Desarrollador backend especializado en .NET y TypeScript. Código
              limpio, arquitecturas simples y la disciplina de seguir aprendiendo
              todos los días.
            </motion.p>

            {/* Tech stack badges */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-row flex-wrap gap-3 md:flex-nowrap"
            >
              {['.NET', 'TypeScript', 'NestJS', 'Node.js', 'PHP'].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:border-primary hover:text-primary"
                >
                  <span className="text-primary">{techIcons[tech]}</span>
                  {tech}
                </span>
              ))}
            </motion.div>


          </div>
        </div>
      </motion.div>

      {/* Bottom rule */}
      <div className="relative z-10 flex items-end justify-between border-t border-border pt-4">
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
          {siteConfig.alias} — Scroll
        </span>
        <span
          aria-hidden="true"
          className="text-sm tracking-[0.3em] text-muted-foreground"
        >
          ↓ 下へ
        </span>
      </div>
    </section>
  )
}

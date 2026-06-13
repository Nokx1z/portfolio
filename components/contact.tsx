'use client'

import { Mail } from 'lucide-react'
import { SiGithub, SiDiscord } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/data'

const contactIcons: Record<string, React.ReactNode> = {
  Email: <Mail className="size-4" />,
  GitHub: <SiGithub className="size-4" />,
  LinkedIn: <FaLinkedin className="size-4" />,
  Discord: <SiDiscord className="size-4" />,
}

const contactLinks = [
  { label: 'Email', href: `mailto:${siteConfig.email}` },
  { label: 'GitHub', href: siteConfig.github },
  { label: 'LinkedIn', href: siteConfig.linkedin },
  { label: 'Discord', href: `https://discord.com/users/${siteConfig.discord}` },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-border px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      {/* Vertical kanji accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 right-6 hidden select-none md:right-12 md:block lg:right-20"
      >
        <p className="writing-vertical text-4xl font-semibold tracking-[0.35em] text-muted-foreground/40 dark:text-foreground/80">
          連絡先
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="mx-auto flex max-w-6xl flex-col gap-12"
      >
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs tracking-[0.4em] text-primary uppercase">
            05
          </span>
          <h2 className="max-w-2xl text-4xl leading-tight font-black text-balance md:text-6xl">
            Hablemos.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            ¿Tienes un proyecto, una oportunidad o simplemente quieres
            conversar sobre backend? Escríbeme.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-4 font-mono text-sm tracking-[0.15em] uppercase">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <span className="text-primary">{contactIcons[link.label]}</span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-12 flex items-end justify-between border-t border-border pt-6">
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
            &copy; 2026 {siteConfig.alias} — Hecho con calma
          </span>
          <span
            aria-hidden="true"
            className="text-sm tracking-[0.3em] text-muted-foreground"
          >
            ありがとう
          </span>
        </div>
      </motion.div>
    </footer>
  )
}

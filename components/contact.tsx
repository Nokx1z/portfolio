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
        <p className="writing-vertical text-4xl font-semibold tracking-[0.35em] text-muted-foreground/40">
          連絡先
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs tracking-[0.4em] text-primary uppercase">
            04
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
          <a
            href="mailto:tu@email.com"
            className="border-b border-foreground pb-1 transition-colors hover:border-primary hover:text-primary"
          >
            Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-foreground pb-1 transition-colors hover:border-primary hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-foreground pb-1 transition-colors hover:border-primary hover:text-primary"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-12 flex items-end justify-between border-t border-border pt-6">
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
            © 2026 — Hecho con calma
          </span>
          <span
            aria-hidden="true"
            className="text-sm tracking-[0.3em] text-muted-foreground"
          >
            ありがとう
          </span>
        </div>
      </div>
    </footer>
  )
}

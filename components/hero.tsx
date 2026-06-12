import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 py-10 md:px-12 lg:px-20">
      {/* Top bar */}
      <header className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Portafolio — 2026
          </span>
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Backend Developer
          </span>
        </div>
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8 font-mono text-xs tracking-[0.2em] uppercase">
            <li>
              <a
                href="#about"
                className="text-foreground transition-colors hover:text-primary"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-foreground transition-colors hover:text-primary"
              >
                Tecnologías
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-foreground transition-colors hover:text-primary"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-foreground transition-colors hover:text-primary"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

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
      <div className="relative z-10 flex flex-1 flex-col justify-center gap-8 py-16 md:py-0">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-xs tracking-[0.4em] text-primary uppercase">
            バックエンド開発者
          </p>
          <h1 className="text-5xl leading-[1.1] font-black text-balance md:text-7xl lg:text-8xl">
            Construyo
            <br />
            <span className="text-primary">sistemas</span>
            <br />
            que perduran.
          </h1>
        </div>
        <p className="max-w-md leading-relaxed text-pretty text-muted-foreground">
          Desarrollador backend especializado en .NET y TypeScript. Código
          limpio, arquitecturas simples y la disciplina de seguir aprendiendo
          todos los días.
        </p>
      </div>

      {/* Ink illustration anchored bottom-right */}
      <div className="pointer-events-none absolute right-0 bottom-0 w-64 opacity-80 select-none md:w-96 lg:w-[480px]">
        <Image
          src="/images/ink-branch.png"
          alt=""
          width={480}
          height={480}
          priority
          className="mix-blend-multiply"
        />
      </div>

      {/* Bottom rule */}
      <div className="relative z-10 flex items-end justify-between border-t border-border pt-4">
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
          06.15 — Scroll
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

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-border px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[auto_1fr] md:gap-20">
        {/* Vertical section title */}
        <div className="flex items-start gap-6">
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
        </div>

        <div className="flex max-w-2xl flex-col gap-8">
          <p className="text-2xl leading-relaxed font-medium text-balance md:text-3xl">
            Estudiante de 3er año de Ingeniería Informática y desarrollador
            backend en constante formación.
          </p>
          <div className="flex flex-col gap-5 leading-relaxed text-muted-foreground">
            <p>
              Mi enfoque está en el ecosistema de <strong className="text-foreground">.NET</strong> y{' '}
              <strong className="text-foreground">TypeScript</strong>, trabajando con frameworks
              como <strong className="text-foreground">NestJS</strong> para construir APIs y
              servicios robustos, mantenibles y bien estructurados.
            </p>
            <p>
              Creo en la simplicidad como principio de diseño: menos
              complejidad, más claridad. Cada sistema que construyo busca ese
              equilibrio entre funcionalidad y elegancia — la misma filosofía
              que admiro del diseño japonés.
            </p>
            <p>
              Siempre estoy dispuesto a aprender algo nuevo, ya sea un patrón
              de arquitectura, una herramienta o una forma distinta de pensar
              un problema.
            </p>
          </div>

          {/* Facts row */}
          <div className="mt-4 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-3">
            <div className="flex flex-col gap-1 bg-background p-5">
              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Rol
              </span>
              <span className="font-medium">Backend Developer</span>
            </div>
            <div className="flex flex-col gap-1 bg-background p-5">
              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Formación
              </span>
              <span className="font-medium">Ing. Informática — 3er año</span>
            </div>
            <div className="col-span-2 flex flex-col gap-1 bg-background p-5 md:col-span-1">
              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Filosofía
              </span>
              <span className="font-medium">改善 — Mejora continua</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

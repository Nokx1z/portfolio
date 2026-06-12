const skillGroups = [
  {
    kanji: '基盤',
    label: 'Lenguajes',
    items: ['C#', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    kanji: '構造',
    label: 'Frameworks',
    items: ['.NET / ASP.NET Core', 'NestJS', 'Entity Framework', 'Node.js'],
  },
  {
    kanji: '道具',
    label: 'Herramientas',
    items: ['Git', 'Docker', 'PostgreSQL', 'REST APIs'],
  },
  {
    kanji: '学習',
    label: 'Aprendiendo',
    items: ['Arquitectura limpia', 'Microservicios', 'Testing', 'CI/CD'],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-[0.4em] text-primary uppercase">
              02
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">Tecnologías</h2>
          </div>
          <span
            aria-hidden="true"
            className="text-2xl font-semibold tracking-[0.3em] text-muted-foreground"
          >
            技術
          </span>
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="group flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-card"
            >
              <span
                aria-hidden="true"
                className="text-4xl font-bold text-muted-foreground/40 transition-colors group-hover:text-primary"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

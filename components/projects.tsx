import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '一',
    title: 'API de Gestión de Inventario',
    description:
      'API REST construida con ASP.NET Core y Entity Framework. Arquitectura en capas, autenticación JWT y documentación con Swagger.',
    stack: ['.NET', 'PostgreSQL', 'Docker'],
    href: '#',
  },
  {
    number: '二',
    title: 'Microservicio de Notificaciones',
    description:
      'Servicio en NestJS para envío de notificaciones por correo y push. Colas de mensajes y procesamiento asíncrono.',
    stack: ['NestJS', 'TypeScript', 'Redis'],
    href: '#',
  },
  {
    number: '三',
    title: 'Sistema de Autenticación',
    description:
      'Módulo de autenticación y autorización reutilizable con roles, permisos y refresh tokens, siguiendo buenas prácticas de seguridad.',
    stack: ['.NET', 'Identity', 'SQL Server'],
    href: '#',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-[0.4em] text-primary uppercase">
              03
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">Proyectos</h2>
          </div>
          <span
            aria-hidden="true"
            className="text-2xl font-semibold tracking-[0.3em] text-muted-foreground"
          >
            作品
          </span>
        </div>

        <ul className="flex flex-col">
          {projects.map((project) => (
            <li key={project.title} className="border-t border-border last:border-b">
              <a
                href={project.href}
                className="group grid gap-4 py-10 transition-colors hover:bg-card md:grid-cols-[80px_1fr_auto] md:items-start md:gap-10 md:px-6"
              >
                <span
                  aria-hidden="true"
                  className="text-3xl font-bold text-muted-foreground/40 transition-colors group-hover:text-primary"
                >
                  {project.number}
                </span>
                <div className="flex max-w-xl flex-col gap-3">
                  <h3 className="text-xl font-semibold text-balance md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="leading-relaxed text-pretty text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border px-3 py-1 font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="hidden size-6 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary md:block"
                />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-muted-foreground">
          {'Estos proyectos son ejemplos — reemplázalos con tus repositorios reales de GitHub.'}
        </p>
      </div>
    </section>
  )
}

// lib/data.ts

// Configuración general del sitio y enlaces de contacto
export const siteConfig = {
  name: "Enyell Duarte",
  alias: "Nokx1z",
  email: "enyelldev@gmail.com",
  github: "https://github.com/Nokx1z",
  linkedin: "https://linkedin.com/in/nokx1z",
  discord: "nokx1z",
  cv: "/CV_EnyellDuarte.pdf",
};

// Información de la sección "Sobre mí" optimizada para reclutadores
export const aboutData = {
  headline: "Desarrollador Backend | TSU en Informática e Ingeniero en curso con más de 2 años de práctica continua en la construcción de APIs robustas y optimización de sistemas.",
  
  paragraphs: [
    "Soy un desarrollador backend con más de 2 años de práctica continua en el diseño y construcción de aplicaciones, APIs REST robustas y servicios eficientes. Mi enfoque principal abarca el ecosistema de TypeScript (NestJS, Node.js) y C# (ASP.NET Core), complementado con una sólida base en PHP para el desarrollo de arquitecturas estructuradas como MVC.",
    "Aporto un valor competitivo único gracias a un trasfondo de más de 7 años administrando infraestructura tecnológica, redes LAN y servidores. Esta experiencia previa me otorga una visión integral del ciclo de vida del software, permitiéndome diseñar arquitecturas backend con una comprensión profunda de cómo operarán y se desplegarán en entornos de producción reales utilizando Docker y bases de datos relacionales.",
    "Mi filosofía de desarrollo se centra en la simplicidad (改善 — Kaizen): eliminar la complejidad innecesaria para priorizar la mantenibilidad, la seguridad y el rendimiento óptimo de los datos."
  ],

  // Datos clave ordenados por importancia para el escaneo de un reclutador
  facts: [
    { label: "Especialidad", value: "Desarrollo Backend / APIs REST" },
    { label: "Educación Superior", value: "TSU en Informática & Ing. (3er Año)" },
    { label: "Trayectoria Técnica", value: "2+ Años Backend • 7+ Años Infraestructura" },
    { label: "Metodología", value: "改善 — Kaizen (Código Limpio y Eficiente)" }
  ]
};

// Inventario de habilidades y tecnologías (Skills)
export const skillsData = {
  lenguajes: ["TypeScript", "C#", "JavaScript", "PHP"],
  frameworks: ["NestJS", "ASP.NET Core (.NET)", "Node.js", "Express", "Next.js"],
  basesDeDatos: ["PostgreSQL", "MySQL", "MongoDB (En aprendizaje)"],
  infraestructura: ["Docker", "Git / GitHub / GitLab", "CI/CD", "AWS (En aprendizaje: EC2, S3, RDS)", "Redes LAN / Mikrotik"],
  metodologias: ["Scrum", "Kanban", "Arquitectura Limpia", "Diseño de APIs REST"]
};

// Historial laboral estructurado
export const experienceData = [
  {
    role: "Técnico en Soporte de Sistemas e Infraestructura",
    company: "Cecosesola",
    period: "2018 - Actualidad",
    description: "Administración y mantenimiento crítico de la infraestructura tecnológica de la organización. Gestión de configuraciones de red local (LAN), diagnóstico avanzado de incidentes en hardware/sistemas y aseguramiento de la disponibilidad operativa. Co-diseño de soluciones tecnológicas en equipos multidisciplinarios alineadas a objetivos estratégicos."
  }
];

// Portafolio de proyectos (puedes añadir más objetos aquí en el futuro)
export const projectsData = [
  {
    title: "Sistema de Inventario Web",
    type: "Proyecto Académico",
    tech: ["PHP", "MySQL", "Arquitectura MVC", "JavaScript"],
    description: "Aplicación web completa para la gestión de inventarios con operaciones CRUD optimizadas. Implementación de una arquitectura MVC estricta para garantizar la separación de conceptos entre la lógica de negocio y la capa de presentación. Integración de manejo de sesiones seguras y control de acceso básico.",
    link: "https://sysinescolara.onrender.com/"
  }
];
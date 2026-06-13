'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button
        className="font-mono text-xs tracking-[0.2em] opacity-0 border border-border px-3 py-1.5 bg-background rounded-md fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50"
        aria-label="Cambiar modo de color"
      >
        [   ]
      </button>
    )
  }

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const isDark = theme === 'dark'

    if (!document.startViewTransition) {
      setTheme(isDark ? 'light' : 'dark')
      return
    }

    const x = event.clientX
    const y = event.clientY

    const transition = document.startViewTransition(() => {
      setTheme(isDark ? 'light' : 'dark')
    })

    transition.ready.then(() => {
      requestAnimationFrame(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0% at ${x}px ${y}px)`,
              `circle(150% at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 550,
            easing: 'cubic-bezier(0.2, 0.9, 0.3, 1)',
            pseudoElement: '::view-transition-new(root)',
          },
        )
      })
    })
  }

  return (
    <button
      onClick={toggleTheme}
      className="font-mono text-xs tracking-[0.2em] transition-all hover:text-primary hover:scale-105 border border-border px-3 py-1.5 bg-background rounded-md flex items-center gap-2 fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50"
      aria-label="Cambiar modo de color"
    >
      {theme === 'dark' ? (
        <>
          <span className="text-blue-300 font-bold">月</span>
          <span className="text-muted-foreground text-[10px]">[ OSCURO ]</span>
        </>
      ) : (
        <>
          <span className="text-red-500 font-bold">日</span>
          <span className="text-muted-foreground text-[10px]">[ CLARO ]</span>
        </>
      )}
    </button>
  )
}

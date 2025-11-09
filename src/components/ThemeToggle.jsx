import React, { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} className="px-2 py-1 border rounded">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}

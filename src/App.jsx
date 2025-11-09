import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

// lazy load resume to keep initial bundle small
const LazyResume = React.lazy(() => import('./components/Resume'))

export default function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen antialiased">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-lg font-semibold">Ajay Bhashaveni</div>
          <nav className="flex items-center gap-4">
            <ThemeToggle />
            <a className="text-sm text-slate-600 dark:text-slate-300 hover:underline" href="#about">About</a>
            <a className="text-sm text-slate-600 dark:text-slate-300 hover:underline" href="#projects">Projects</a>
            <a className="text-sm text-slate-600 dark:text-slate-300 hover:underline" href="#resume">Resume</a>
            <a className="text-sm text-slate-600 dark:text-slate-300" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
          {/* Resume section added below */}
          <div id="resume" className="mt-10">
            {/* lazy import Resume component to keep initial bundle small */}
            <React.Suspense fallback={<div>Loading resume…</div>}>
              <LazyResume />
            </React.Suspense>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

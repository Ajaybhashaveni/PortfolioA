import React, { useEffect, useState } from 'react'
import gatePic from '../assets/GATE_PIC.png'

const phrases = [
  'ECE Student | AI/ML & Embedded Systems Enthusiast',
  'Deep Learning Researcher • Embedded Systems Engineer',
  'Building Smart Electronics & ML Solutions'
]

function Typewriter() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1)
      if (subIndex === phrases[index].length) {
        setTimeout(() => {
          setSubIndex(0)
          setIndex((prev) => (prev + 1) % phrases.length)
        }, 1200)
      }
    }, 80)
    return () => clearTimeout(timeout)
  }, [subIndex, index])

  useEffect(() => {
    const id = setInterval(() => setBlink((v) => !v), 500)
    return () => clearInterval(id)
  }, [])

  return (
    <h3 className="text-lg text-slate-600 dark:text-slate-300 mt-2">
      {phrases[index].substring(0, subIndex)}{blink ? '|' : ' '}
    </h3>
  )
}

export default function Hero() {
  const [hasResume, setHasResume] = useState(false)

  useEffect(() => {
    // check if a Resume.pdf file exists in assets
    fetch('/src/assets/Resume.pdf', { method: 'HEAD' })
      .then(res => setHasResume(res.ok))
      .catch(() => setHasResume(false))
  }, [])

  return (
    <section className="flex flex-col items-center text-center py-8">
      <div className="w-40 h-40 md:w-48 md:h-48 overflow-hidden avatar-circle animate-zoom">
        <img src={gatePic} alt="Ajay Bhashaveni" className="w-full h-full object-cover" />
      </div>
      <h1 className="mt-6 text-3xl md:text-4xl font-bold">Ajay Bhashaveni</h1>
      <Typewriter />

      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {hasResume ? (
          <a href="/src/assets/Resume.pdf" download className="px-4 py-2 bg-primary text-white rounded shadow">📄 Download Resume (PDF)</a>
        ) : (
          <button onClick={() => { document.getElementById('resume')?.scrollIntoView({behavior:'smooth'}); setTimeout(()=>window.print(),500) }} className="px-4 py-2 bg-primary text-white rounded shadow">📄 Print Resume</button>
        )}
        <a href="https://github.com/Ajaybhashaveni" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">💻 GitHub</a>
        <a href="https://www.linkedin.com/in/ajay-bhashaveni-3a2aa8288" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">🔗 LinkedIn</a>
      </div>
    </section>
  )
}

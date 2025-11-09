import React from 'react'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RepoCarousel from './RepoCarousel'

const projects = [
  {
    title: 'Smart Helmet for Alcohol Detection and Speed Automation',
    desc: 'Designed a user-friendly system that tracks speed, location, and safety; includes an auto-control feature if the driver loses control.',
    tech: ['C', 'DBMS']
  },
  {
    title: 'House Price Prediction',
    desc: 'Built a predictive model using Linear Regression and Decision Trees to estimate property values.',
    tech: ['Python', 'scikit-learn']
  },
  {
    title: 'IoT Water Irrigation System',
    desc: 'Automated irrigation using sensors and cloud-based dashboards.',
    tech: ['IoT', 'Cloud']
  }
]

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('All')

  const allTags = useMemo(() => {
    const tags = new Set()
    projects.forEach(p => p.tech.forEach(t => tags.add(t)))
    return ['All', ...Array.from(tags).sort()]
  }, [])

  const filtered = projects.filter(p => {
    const matchesQuery = (p.title + ' ' + p.desc + ' ' + p.tech.join(' ')).toLowerCase().includes(query.toLowerCase())
    const matchesTag = tag === 'All' || p.tech.includes(tag)
    return matchesQuery && matchesTag
  })

  return (
    <section id="projects" className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="flex items-center gap-3">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search projects..." className="px-3 py-2 border rounded text-sm" />
          <select value={tag} onChange={(e)=>setTag(e.target.value)} className="px-2 py-2 border rounded text-sm">
            {allTags.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div className="mt-4 grid gap-4">
        {filtered.map((p) => (
          <article key={p.title} onClick={() => setSelected(p)} className="cursor-pointer p-4 bg-white dark:bg-slate-800 rounded-lg border shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">{t}</span>)}
                </div>
              </div>
              <div className="ml-4 flex items-center gap-2">
                <a onClick={(e)=>{e.stopPropagation(); window.open('https://github.com/Ajaybhashaveni?tab=repositories','_blank')}} className="text-sm px-3 py-1 border rounded">View Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <RepoCarousel />

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="max-w-2xl w-full p-6 bg-white dark:bg-slate-900 rounded shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{selected.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{selected.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">{selected.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">{t}</span>)}</div>
                </div>
                <div className="ml-4">
                  <button onClick={() => setSelected(null)} className="px-3 py-1 border rounded">Close</button>
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                {/* placeholder for more details, images or links */}
                <p>This panel can include screenshots, architecture diagrams, links to live demos, and deeper technical notes about the implementation.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

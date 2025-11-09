import React from 'react'

const items = [
  'Vice President of IoT Club at SR University',
  '"Basics of Remote Sensing" — ISRO',
  '"Career Essentials in Generative AI" — Microsoft & LinkedIn',
  'Multiple Coursera certifications (AI, VLSI, Project Management, Circuits)',
  'HackerRank Certificate for Python'
]

export default function Achievements(){
  return (
    <section id="achievements" className="mt-10">
      <h2 className="text-2xl font-semibold">Achievements & Certifications</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        {items.map(i => (
          <div key={i} className="p-3 bg-white dark:bg-slate-800 rounded border text-sm">{i}</div>
        ))}
      </div>
    </section>
  )
}

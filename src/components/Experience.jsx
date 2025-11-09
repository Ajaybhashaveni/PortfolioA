import React from 'react'

export default function Experience(){
  const experiences = [
    {
      title: 'NIT Warangal — Deep Learning Internship',
      desc: 'Developed and evaluated a Quantum Vision Transformer model for video anomaly detection using TensorFlow and PyTorch.'
    },
    {
      title: 'CodSoft — Python Internship',
      desc: 'Built Python-based automation and ML scripts for beginner-level projects.'
    }
  ]

  return (
    <section id="experience" className="mt-10">
      <h2 className="text-2xl font-semibold">Experience / Internships</h2>
      <div className="mt-4 space-y-3">
        {experiences.map(e => (
          <div key={e.title} className="p-4 bg-slate-50 dark:bg-slate-800 rounded border">
            <h3 className="font-medium">{e.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

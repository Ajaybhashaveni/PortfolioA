import React, { useEffect, useState } from 'react'

const skillBuckets = [
  { name: 'Python', pct: 95 },
  { name: 'Java', pct: 80 },
  { name: 'MATLAB', pct: 75 },
  { name: 'TensorFlow', pct: 85 },
  { name: 'PyTorch', pct: 80 },
  { name: 'PennyLane', pct: 60 },
  { name: 'LTSpice', pct: 70 },
  { name: 'Tinkercad', pct: 70 },
  { name: 'Embedded Systems', pct: 88 },
  { name: 'IoT', pct: 78 }
]

export default function Skills(){
  const [mounted, setMounted] = useState(false)
  useEffect(()=>{ setMounted(true) }, [])

  return (
    <section id="skills" className="mt-10">
      <h2 className="text-2xl font-semibold">Technical Skills</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">A snapshot of my core skills and proficiency levels.</p>

      <div className="mt-4 grid gap-3">
        {skillBuckets.map(s => (
          <div key={s.name} className="p-3 bg-slate-50 dark:bg-slate-800 rounded border">
            <div className="flex justify-between items-center">
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">{s.pct}%</div>
            </div>
            <div className="mt-2 bg-slate-200 dark:bg-slate-700 rounded h-2 overflow-hidden">
              <div style={{ width: mounted ? `${s.pct}%` : '0%' }} className="h-2 bg-teal-500 transition-all duration-800" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

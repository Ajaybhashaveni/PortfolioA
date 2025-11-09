import React, { useEffect, useState } from 'react'

export default function RepoCarousel(){
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/Ajaybhashaveni/repos?sort=updated&per_page=6')
      .then(r => r.json())
      .then(data => setRepos(Array.isArray(data) ? data : []))
      .catch(()=> setRepos([]))
  }, [])

  if (!repos.length) return null

  return (
    <section className="mt-8">
      <h3 className="text-lg font-medium">Latest Repositories</h3>
      <div className="mt-3 flex gap-3 overflow-x-auto py-2">
        {repos.map(r => (
          <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="min-w-[220px] p-3 bg-white dark:bg-slate-800 border rounded shadow-sm hover:scale-[1.01] transition">
            <h4 className="font-semibold">{r.name}</h4>
            <p className="text-sm mt-1 text-slate-600 dark:text-slate-300">{r.description || 'No description'}</p>
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">★ {r.stargazers_count} • {r.language || '—'}</div>
          </a>
        ))}
      </div>
    </section>
  )
}

import React, { useRef } from 'react'

export default function Resume(){
  const resumeRef = useRef()

  function handlePrint(){
    const content = resumeRef.current.innerHTML
    const printWindow = window.open('', '_blank')
    printWindow.document.write(`
      <html>
        <head>
          <title>Resume - Ajay Bhashaveni</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <style>
            body{font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; padding:20px; color:#0f172a}
            h1{font-size:20px;margin-bottom:6px}
            h2{font-size:14px;margin-top:14px}
            .muted{color:#374151}
            .section{margin-top:10px}
          </style>
        </head>
        <body>${content}</body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
  }

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded border shadow-sm">
      <div className="flex justify-between items-start">
        <div ref={resumeRef} className="max-w-3xl">
          <header>
            <h1 className="text-2xl font-bold">Ajay Bhashaveni</h1>
            <div className="muted text-sm">ECE Student • AI/ML & Embedded Systems Enthusiast • Telangana, India</div>
            <div className="mt-2 text-sm">Email: <a href="mailto:bhashaveniajayyadav@gmail.com">bhashaveniajayyadav@gmail.com</a> • Phone: +91-7989712097</div>
          </header>

          <section className="section">
            <h2 className="font-semibold">Summary</h2>
            <p className="muted">I’m Ajay Bhashaveni, a B.Tech ECE student at SR University with hands-on experience in deep learning research and embedded systems. I build prototypes that integrate AI algorithms with hardware platforms and enjoy turning research into working systems.</p>
          </section>

          <section className="section">
            <h2 className="font-semibold">Education</h2>
            <div className="muted">SR University — B.Tech in Electronics and Communication Engineering (2023–2027)</div>
            <div className="text-sm mt-1">GPA: <strong>9.93 / 10</strong></div>
          </section>

          <section className="section">
            <h2 className="font-semibold">Experience</h2>
            <div className="muted">
              <strong>NIT Warangal — Deep Learning Internship</strong>
              <div className="text-sm">Developed and evaluated a Quantum Vision Transformer model for video anomaly detection using TensorFlow and PyTorch.</div>
            </div>
            <div className="muted mt-2">
              <strong>CodSoft — Python Internship</strong>
              <div className="text-sm">Built Python automation and ML scripts for beginner-level projects.</div>
            </div>
          </section>

          <section className="section">
            <h2 className="font-semibold">Skills</h2>
            <div className="muted text-sm">Python, Java, MATLAB; TensorFlow, PyTorch, PennyLane; LTSpice, Tinkercad; Embedded Systems, IoT, Cloud Analytics</div>
          </section>

          <section className="section">
            <h2 className="font-semibold">Projects (selected)</h2>
            <ul className="muted text-sm list-disc ml-5">
              <li><strong>Smart Helmet</strong> — Alcohol detection and speed automation system integrating sensors and control logic.</li>
              <li><strong>House Price Prediction</strong> — ML model using regression and decision trees.</li>
              <li><strong>IoT Water Irrigation</strong> — Sensor-driven automated irrigation with cloud dashboard.</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="font-semibold">Publications & Manuscripts</h2>
            <ul className="muted text-sm list-disc ml-5">
              <li>
                <strong>Pre-Amplifier Based Nanoscale Cross Coupled Dynamic Voltage Comparator for Future Analog to Digital Converters: A Reliability Study</strong>
                <div className="text-sm mt-1">Status: <em>Manuscript / Unpublished</em>. (If you have a PDF or an abstract you'd like displayed, I can embed it here or link it.)</div>
              </li>
            </ul>
          </section>
        </div>

        <div className="ml-6 flex flex-col gap-3">
          <button onClick={handlePrint} className="px-4 py-2 bg-primary text-white rounded">Print / Download PDF</button>
          <a href="/src/assets/Resume.pdf" className="px-4 py-2 border rounded text-sm" download>Download (PDF)</a>
        </div>
      </div>
    </div>
  )
}

import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact(){
  const form = useRef()
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!service || !template || !key) {
      setStatus('Please set EmailJS env variables (VITE_EMAILJS_*)')
      return
    }

    setLoading(true)
    emailjs.sendForm(service, template, form.current, key)
      .then(() => {
        setStatus('Message sent — thank you!')
        form.current.reset()
      })
      .catch(() => setStatus('Failed to send — check keys/config'))
      .finally(() => setLoading(false))
  }

  return (
    <section id="contact" className="mt-10">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form ref={form} onSubmit={sendEmail} className="space-y-3">
          <input name="user_name" required placeholder="Name" className="w-full p-2 border rounded" />
          <input name="user_email" type="email" required placeholder="Email" className="w-full p-2 border rounded" />
          <textarea name="message" required placeholder="Message" className="w-full p-2 border rounded h-32" />
          <div className="flex items-center gap-3">
            <button type="submit" disabled={loading} className="px-4 py-2 bg-primary text-white rounded">
              {loading ? 'Sending…' : 'Send Message'}
            </button>
            {status && <span className="text-sm text-slate-600">{status}</span>}
          </div>
        </form>

        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded border">
          <h4 className="font-medium">Get in touch</h4>
          <p className="mt-2 text-sm">Email: <a href="mailto:bhashaveniajayyadav@gmail.com" className="text-primary">bhashaveniajayyadav@gmail.com</a></p>
          <p className="mt-1 text-sm">Phone: +91-7989712097</p>
          <div className="mt-3 flex gap-3">
            <a href="https://github.com/Ajaybhashaveni" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/ajay-bhashaveni-3a2aa8288" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

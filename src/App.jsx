import React, { useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Building2, Calculator, CheckCircle2, Gauge, LineChart, Mail, MapPin, Phone, Play, Rocket, Wallet } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
    <div className="mx-auto max-w-7xl px-6">{children}</div>
  </section>
)

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15">{children}</span>
)

const GradientTitle = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
    {children}
  </h2>
)

const Stat = ({ label, value }) => (
  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
    <div className="text-3xl md:text-4xl font-extrabold text-white">{value}</div>
    <div className="text-white/70 mt-1 text-sm">{label}</div>
  </div>
)

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col items-start justify-center">
        <Badge>IMMERZO HyperReality</Badge>
        <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">Step Inside.</span>{' '}
          <span>Live the Story.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg sm:text-xl text-white/80">
          India’s First HyperReality Theater — Powered by IMMERZO CAVE Technology.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => scrollTo('franchise')} className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-5 py-3 transition">
            Become a Franchise Partner
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button onClick={() => scrollTo('malls')} className="group inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white px-5 py-3 ring-1 ring-white/15">
            For Malls & Leasing Teams
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button onClick={() => scrollTo('inquiry')} className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-400 hover:to-indigo-400 text-white px-5 py-3">
            Book a Demo Experience
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:flex gap-3 opacity-90">
          <Stat label="Setup Area" value="250 sq. ft." />
          <Stat label="ROI" value="6–8 months" />
          <Stat label="Headsets" value="0 (Group Experience)" />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-black to-[#0B0D12] text-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <GradientTitle>About IMMERZO</GradientTitle>
          <p className="mt-5 text-white/80 leading-relaxed">
            IMMERZO is India’s first CAVE-based HyperReality Theater. Our multi-surface projection system (three walls + floor) turns a compact 250 sq. ft. space into a 3D immersive cinema — no headsets, no motion sickness. Designed for group experiences and rapid deployment across Indian cities.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {[
              '3-wall + floor projection',
              'Group experience — no headsets',
              'Zero motion sickness',
              'Compact 250 sq. ft. install',
              'India-ready & scalable',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-cyan-400" size={18} />
                <span className="text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 p-2">
          <div className="aspect-video rounded-xl bg-[radial-gradient(circle_at_30%_20%,#22d3ee22_0,transparent_40%),radial-gradient(circle_at_80%_10%,#a78bfa22_0,transparent_45%),radial-gradient(circle_at_60%_80%,#06b6d422_0,transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] flex items-center justify-center text-white/70">
            <div className="text-center p-6">
              <Play className="mx-auto mb-3 opacity-70" />
              <p>Immersive story worlds across walls and floor. Headset‑free. Cinematic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Franchise() {
  return (
    <Section id="franchise" className="bg-[#0B0D12] text-white">
      <div className="flex items-center gap-3 mb-6">
        <Badge>Franchise Opportunity</Badge>
      </div>
      <GradientTitle>A Future-Proof Business With Fast ROI</GradientTitle>
      <p className="mt-4 text-white/80 max-w-3xl">Launch an anchor entertainment attraction in just 250 sq. ft. with predictable returns and low operating overhead.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {[
          { icon: Wallet, text: 'ROI in 6–8 months' },
          { icon: Gauge, text: 'Low operational cost' },
          { icon: MapPin, text: 'Small space — 250 sq. ft.' },
          { icon: Rocket, text: 'High footfall attraction' },
          { icon: LineChart, text: 'Scalable content library' },
          { icon: Building2, text: 'Full training + marketing support' },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
            <Icon className="text-cyan-400" />
            <p className="text-white/85">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10">
          <h3 className="text-xl font-semibold">Projected Payback</h3>
          <div className="mt-4 h-40 rounded-xl bg-black/30 ring-1 ring-white/10 flex items-end">
            <div className="w-full flex items-end gap-2 p-4">
              {[40, 55, 70, 85, 100, 120, 140, 165].map((v, i) => (
                <div key={i} style={{ height: `${v / 2}%` }} className="flex-1 rounded-md bg-gradient-to-t from-cyan-500/70 to-fuchsia-400/70" />
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm text-white/70">Illustrative revenue growth over 8 months. Many partners achieve breakeven between months 6–8.</p>
        </div>

        <div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/5">
          <h3 className="text-xl font-semibold">Profit Counter (Illustrative)</h3>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <Stat label="Avg Tickets/Day" value="120" />
            <Stat label="Avg Ticket (₹)" value="350" />
            <Stat label="Monthly Days" value="30" />
          </div>
          <div className="mt-4 rounded-xl bg-black/30 ring-1 ring-white/10 p-4">
            <p className="text-sm text-white/70">Projected Monthly Gross</p>
            <p className="text-3xl font-extrabold text-white mt-1">₹12,60,000</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Malls() {
  const points = [
    'Acts as an anchor attraction in entertainment zones',
    'Ideal for 4th floor / leisure area next to bowling, cinema, FEC',
    'Works in spaces as small as 250 sq. ft.',
    'High engagement for families, teens, and groups',
    'Strong weekend traffic driver',
    'Suitable for unused corners and activation zones',
  ]
  const models = ['Revenue share', 'Fixed rental', 'Hybrid models']

  return (
    <Section id="malls" className="bg-gradient-to-b from-[#0B0D12] to-black text-white">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <GradientTitle>Transform Your Mall Into a Destination.</GradientTitle>
          <p className="mt-3 text-white/80">IMMERZO increases dwell time, footfall, and repeat visits.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <div key={p} className="flex items-start gap-2 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <CheckCircle2 className="mt-0.5 text-fuchsia-400" size={18} />
                <p className="text-white/85 text-sm">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-white/70 text-sm">Flexible partnership models:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {models.map((m) => (
                <span key={m} className="rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/10">{m}</span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 font-semibold">
              Contact for Mall Partnerships
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { label: 'Dwell Time', value: '+28%' },
            { label: 'Weekend Footfall', value: '+35%' },
            { label: 'Repeat Visits', value: '+22%' },
          ].map((d) => (
            <div key={d.label} className="rounded-2xl p-5 bg-white/5 ring-1 ring-white/10 text-center">
              <div className="text-3xl font-extrabold text-white">{d.value}</div>
              <div className="text-white/70 text-xs mt-1">{d.label}</div>
            </div>
          ))}
          <div className="sm:col-span-3 rounded-2xl p-6 bg-black/40 ring-1 ring-white/10">
            <p className="text-sm text-white/70">Revenue Share Examples</p>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              <Stat label="Model A" value="70/30" />
              <Stat label="Model B" value="60/40" />
              <Stat label="Model C" value="Fixed + Rev" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Gallery() {
  const scenes = ['Roller Coaster', 'Space Mission', 'Underwater', 'Horror', 'Educational', 'Adventure']
  return (
    <Section id="gallery" className="bg-black text-white">
      <div className="flex items-center gap-3 mb-6"><Badge>Experience Gallery</Badge></div>
      <GradientTitle>Headset‑Free Group Experiences</GradientTitle>
      <p className="mt-3 text-white/80">Short loops from our immersive rooms — ride, learn, and explore together.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {scenes.map((s) => (
          <div key={s} className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <div className="aspect-video bg-[conic-gradient(at_30%_40%,rgba(56,189,248,0.2),rgba(168,85,247,0.2),rgba(79,70,229,0.2),rgba(56,189,248,0.2))]" />
            <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <div>
                <p className="font-semibold">{s}</p>
                <p className="text-xs text-white/70">100% Headset‑Free Group Experience</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function WhyWorks() {
  const points = [
    'Unique CAVE HyperReality tech',
    'High WOW factor → strong customer attraction',
    'Repeat visits due to large content library',
    'Plug‑and‑play operation',
    'Ideal for all ages',
    'Proven performance in Indian malls',
  ]
  return (
    <Section id="why" className="bg-[#0B0D12] text-white">
      <GradientTitle>Why IMMERZO Works</GradientTitle>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {points.map((p) => (
          <div key={p} className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <CheckCircle2 className="text-cyan-400 mt-0.5" />
            <p className="text-white/85 text-sm">{p}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function ROICalculator() {
  const [dailyFootfall, setDailyFootfall] = useState(120)
  const [avgTicket, setAvgTicket] = useState(350)
  const [days, setDays] = useState(30)
  const capex = 800000  // illustrative CAPEX
  const opexPct = 0.35  // illustrative OPEX percentage

  const monthlyGross = useMemo(() => dailyFootfall * avgTicket * days, [dailyFootfall, avgTicket, days])
  const monthlyNet = useMemo(() => Math.round(monthlyGross * (1 - opexPct)), [monthlyGross])
  const monthsToROI = useMemo(() => Math.max(1, Math.ceil(capex / (monthlyNet || 1))), [capex, monthlyNet])

  return (
    <Section id="roi" className="bg-black text-white">
      <div className="flex items-center gap-3 mb-6"><Badge>ROI & Business Calculator</Badge><Calculator size={18} className="opacity-70" /></div>
      <GradientTitle>Project Your 6–8 Month ROI</GradientTitle>
      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <label className="block text-sm text-white/80">Daily Footfall: {dailyFootfall}</label>
          <input type="range" min="40" max="300" value={dailyFootfall} onChange={(e) => setDailyFootfall(parseInt(e.target.value))} className="w-full" />

          <label className="block mt-6 text-sm text-white/80">Avg Ticket (₹): {avgTicket}</label>
          <input type="range" min="150" max="700" step="10" value={avgTicket} onChange={(e) => setAvgTicket(parseInt(e.target.value))} className="w-full" />

          <label className="block mt-6 text-sm text-white/80">Operating Days/Month: {days}</label>
          <input type="range" min="20" max="31" value={days} onChange={(e) => setDays(parseInt(e.target.value))} className="w-full" />

          <p className="mt-6 text-xs text-white/60">Assumptions: OPEX {Math.round(opexPct * 100)}%, illustrative CAPEX ₹{capex.toLocaleString('en-IN')}.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 ring-1 ring-white/10 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <Stat label="Monthly Gross" value={`₹${monthlyGross.toLocaleString('en-IN')}`} />
            <Stat label="Monthly Net" value={`₹${monthlyNet.toLocaleString('en-IN')}`} />
            <Stat label="Projected Payback" value={`${monthsToROI} months`} />
            <Stat label="Target Range" value="6–8 months" />
          </div>
          <div className="mt-6 h-2 w-full rounded bg-black/40 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" style={{ width: `${Math.min(100, (8 / monthsToROI) * 100)}%` }} />
          </div>
          <p className="mt-3 text-sm text-white/70">Dial the sliders to see how footfall and ticketing impact ROI.</p>
        </div>
      </div>
    </Section>
  )
}

function InquiryForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', business_type: '', reason: 'Franchise', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${API_BASE}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          city: form.city,
          business_type: form.business_type,
          reason: form.reason,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.detail || 'Error')
      setStatus('✅ Request received. Our team will contact you shortly.')
      setForm({ name: '', phone: '', email: '', city: '', business_type: '', reason: 'Franchise', message: '' })
    } catch (err) {
      setStatus('❌ Could not submit. Please try again.')
    }
  }

  return (
    <Section id="inquiry" className="bg-[#0B0D12] text-white">
      <div className="flex items-center gap-3 mb-6"><Badge>Franchise & Mall Inquiry</Badge><Mail size={18} className="opacity-70" /></div>
      <GradientTitle>Request a Proposal</GradientTitle>
      <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-4">
        {[
          { key: 'name', label: 'Name', type: 'text' },
          { key: 'phone', label: 'Phone', type: 'tel' },
          { key: 'email', label: 'Email', type: 'email' },
          { key: 'city', label: 'City', type: 'text' },
        ].map((f) => (
          <div key={f.key}>
            <label className="text-sm text-white/70">{f.label}</label>
            <input required className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" type={f.type} value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
          </div>
        ))}
        <div>
          <label className="text-sm text-white/70">Business Type</label>
          <input className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" type="text" value={form.business_type} onChange={(e) => setForm({ ...form, business_type: e.target.value })} />
        </div>
        <div>
          <label className="text-sm text-white/70">Reason for Inquiry</label>
          <select className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })}>
            <option>Franchise</option>
            <option>Mall Leasing</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-white/70">Message</label>
          <textarea rows={4} className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold">
            Request Proposal
            <ArrowRight size={16} />
          </button>
          {status && <p className="text-sm text-white/80">{status}</p>}
        </div>
      </form>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <p className="text-lg font-bold">IMMERZO</p>
          <p className="text-white/70 mt-2 text-sm">India’s first CAVE-based HyperReality Theater.</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Contact</p>
          <div className="mt-2 flex items-center gap-2 text-white/80"><Phone size={16} /> <a href="tel:+919999999999">+91 99999 99999</a></div>
          <div className="mt-2 flex items-center gap-2 text-white/80"><Mail size={16} /> <a href="mailto:hello@immerzo.in">hello@immerzo.in</a></div>
          <div className="mt-2"><a className="text-cyan-400" href="https://wa.me/919999999999" target="_blank" rel="noreferrer">WhatsApp Us</a></div>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Resources</p>
          <div className="mt-2 flex flex-col gap-2 text-white/80">
            <button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:underline">Download Franchise Deck</button>
            <button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:underline">Mall Partnership Deck</button>
            <div className="flex gap-3 mt-2">
              <a href="#" className="hover:text-cyan-300">LinkedIn</a>
              <a href="#" className="hover:text-cyan-300">Instagram</a>
              <a href="#" className="hover:text-cyan-300">YouTube</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">© {new Date().getFullYear()} IMMERZO. All rights reserved.</div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Franchise */}
      <Franchise />

      {/* Malls */}
      <Malls />

      {/* Gallery */}
      <Gallery />

      {/* Why Works */}
      <WhyWorks />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Inquiry */}
      <InquiryForm />

      {/* Footer */}
      <Footer />
    </div>
  )
}

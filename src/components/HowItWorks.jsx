import { Bluetooth, Timer, BarChart2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '01',
    icon: Bluetooth,
    title: 'Detects Your Audio Devices',
    description:
      'Earwise listens for Bluetooth earbud and headphone connections. The moment your device pairs, a new session begins — no manual input needed.',
    detail: 'Uses standard Bluetooth system events',
  },
  {
    number: '02',
    icon: Timer,
    title: 'Tracks Duration & Volume Trends',
    description:
      'Throughout your session, Earwise logs listening duration and captures volume level trends to build a clear picture of your audio habits.',
    detail: 'Runs quietly as a foreground service',
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'Generates Personal Insights',
    description:
      'After each session, your data is processed locally to generate wellness scores, history entries, and actionable listening insights.',
    detail: 'All computation happens on-device',
  },
]

function StepCard({ number, icon: Icon, title, description, detail, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s ease ${index * 150}ms`,
      }}
    >
      {/* Connector line */}
      {index < 2 && (
        <div className="hidden md:block absolute top-12 left-[calc(100%+1rem)] right-0 h-px bg-gradient-to-r from-[#2a2a2a] to-transparent w-16 z-10" />
      )}

      <div className="group bg-[#111] border border-[#1e1e1e] rounded-2xl p-7 h-full card-hover relative overflow-hidden">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        {/* Step number */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#404040] transition-all duration-300">
            <Icon size={20} className="text-[#777] group-hover:text-[#aaa] transition-colors duration-300" strokeWidth={1.4} />
          </div>
          <span className="text-4xl font-bold text-[#1e1e1e] group-hover:text-[#252525] transition-colors duration-300 leading-none select-none">
            {number}
          </span>
        </div>

        <h3 className="text-[#e0e0e0] font-semibold text-lg mb-3 tracking-tight">{title}</h3>
        <p className="text-[#666] text-sm leading-relaxed mb-5">{description}</p>

        {/* Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161616] border border-[#252525]">
          <div className="w-1 h-1 rounded-full bg-[#555]" />
          <span className="text-[10px] text-[#555] tracking-wide">{detail}</span>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [titleRef, titleInView] = useInView({ threshold: 0.2 })

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
        <div className="absolute inset-0 bg-[#0d0d0d]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div
          ref={titleRef}
          className="mb-16 text-center"
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="section-label mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] tracking-tight max-w-xl mx-auto leading-tight">
            Three simple steps to smarter listening.
          </h2>
          <p className="mt-4 text-[#666] max-w-sm mx-auto text-sm">
            Earwise works quietly in the background, so you can focus on what matters.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <StepCard key={step.number} {...step} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#444]">
            Earwise never records audio, reads media, or accesses content — only connection events and session timing.
          </p>
        </div>
      </div>
    </section>
  )
}

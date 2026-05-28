import { Clock, Volume2, History, Activity, Layout, Cloud, Lock } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: Clock,
    title: 'Listening Time Tracking',
    description: 'Automatically logs every earbud and headphone session — from morning commutes to late-night focus blocks.',
  },
  {
    icon: Volume2,
    title: 'Volume Insights',
    description: 'Visualise your average volume exposure over time and understand your listening habits at a glance.',
  },
  {
    icon: History,
    title: 'Session History',
    description: 'Browse a clean timeline of past sessions including duration, device, and volume trends.',
  },
  {
    icon: Activity,
    title: 'Audio Wellness Analytics',
    description: 'Personalised wellness scores help you stay informed about safe listening practices throughout the day.',
  },
  {
    icon: Layout,
    title: 'Minimalist Widgets',
    description: 'Glanceable home screen widgets keep your daily listening stats one tap away — beautiful and functional.',
  },
  {
    icon: Cloud,
    title: 'Optional Cloud Sync',
    description: 'Securely back up your data via Firebase. Entirely optional — the app works fully offline without an account.',
  },
  {
    icon: Lock,
    title: 'Privacy-Focused Design',
    description: 'Zero audio recording. Zero media access. Your listening data stays on your device unless you choose to sync.',
  },
]

function FeatureCard({ icon: Icon, title, description, index }) {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className="group relative bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 card-hover"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`,
      }}
    >
      {/* Subtle top highlight */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="flex flex-col gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#404040] transition-colors duration-300">
          <Icon size={18} className="text-[#888] group-hover:text-[#b0b0b0] transition-colors duration-300" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="font-semibold text-[#e5e5e5] text-base mb-1.5 tracking-tight">{title}</h3>
          <p className="text-sm text-[#666] leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const [titleRef, titleInView] = useInView({ threshold: 0.2 })

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div
          ref={titleRef}
          className="mb-16"
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="section-label mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] tracking-tight max-w-lg leading-tight">
            Everything you need to listen smarter.
          </h2>
          <p className="mt-4 text-[#666] max-w-md text-base">
            Built for audio-conscious people who care about their wellbeing and want insight without complexity.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

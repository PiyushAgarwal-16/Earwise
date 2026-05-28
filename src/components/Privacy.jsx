import { MicOff, FileX, MessageSquareOff, HardDrive, Cloud, Ban } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const privacyPoints = [
  {
    icon: MicOff,
    title: 'No Audio Recording',
    description: 'Earwise never records, captures, or processes any audio content. Your conversations and media stay completely private.',
    positive: true,
  },
  {
    icon: FileX,
    title: 'No Media Access',
    description: "Earwise doesn't read your music, podcasts, or any media files. It only detects that a device is connected.",
    positive: true,
  },
  {
    icon: MessageSquareOff,
    title: 'No Conversation Data',
    description: 'Phone calls and conversations are never touched. Earwise has no access to communication content whatsoever.',
    positive: true,
  },
  {
    icon: HardDrive,
    title: 'Local-First Storage',
    description: 'All listening session data is stored locally on your device by default. Nothing leaves your phone unless you choose.',
    positive: true,
  },
  {
    icon: Cloud,
    title: 'Optional Cloud Sync',
    description: 'If you opt in, data is encrypted and synced via Firebase. You can export or delete your data at any time.',
    positive: true,
  },
  {
    icon: Ban,
    title: 'Never Sold to Advertisers',
    description: 'Your data is yours. Earwise generates zero revenue from your data and never shares it with third parties.',
    positive: true,
  },
]

export default function Privacy() {
  const [titleRef, titleInView] = useInView({ threshold: 0.2 })

  return (
    <section id="privacy" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
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
          <p className="section-label mb-3">Privacy & Data</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] tracking-tight max-w-xl leading-tight">
            Built on trust. Designed for privacy.
          </h2>
          <p className="mt-4 text-[#666] max-w-lg text-base leading-relaxed">
            Privacy isn't an afterthought in Earwise — it's the foundation. Here's exactly what we do and don't do with your data.
          </p>
        </div>

        {/* Big trust banner */}
        <div className="mb-10 relative overflow-hidden bg-[#0f0f0f] border border-[#222] rounded-2xl p-8 md:p-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/[0.02] blur-3xl" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { metric: '0', label: 'Bytes of audio recorded' },
              { metric: 'Local', label: 'Data stored by default' },
              { metric: '100%', label: 'Transparent permissions' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <div className="text-4xl font-bold text-[#e0e0e0] tracking-tight">{s.metric}</div>
                <div className="text-sm text-[#555]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {privacyPoints.map(({ icon: Icon, title, description }, i) => {
            const [ref, inView] = [null, true] // simplified
            return (
              <div
                key={title}
                className="group bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 card-hover"
                style={{
                  animation: `fadeUp 0.5s ease ${i * 80}ms both`,
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                </div>

                <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#252525] flex items-center justify-center mb-4 group-hover:border-[#383838] transition-all duration-300">
                  <Icon size={18} className="text-[#888] group-hover:text-[#aaa] transition-colors" strokeWidth={1.4} />
                </div>
                <h3 className="font-semibold text-[#e0e0e0] text-sm mb-2 tracking-tight">{title}</h3>
                <p className="text-xs text-[#5a5a5a] leading-relaxed">{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

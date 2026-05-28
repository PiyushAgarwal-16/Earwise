import { Bluetooth, Bell, Cpu, RefreshCw } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const permissions = [
  {
    icon: Bluetooth,
    permission: 'BLUETOOTH_CONNECT',
    label: 'Bluetooth',
    reason: 'Detects when earbuds or headphones connect and disconnect via Bluetooth — this is the core of how Earwise knows a listening session has started.',
    badge: 'Required',
  },
  {
    icon: Bell,
    permission: 'POST_NOTIFICATIONS',
    label: 'Notifications',
    reason: 'Enables an optional persistent notification that confirms background tracking is active. You can disable this in settings at any time.',
    badge: 'Optional',
  },
  {
    icon: Cpu,
    permission: 'FOREGROUND_SERVICE',
    label: 'Foreground Service',
    reason: 'Keeps the tracking service running reliably in the background so sessions are accurately logged even when the app is not in the foreground.',
    badge: 'Required',
  },
  {
    icon: RefreshCw,
    permission: 'RECEIVE_BOOT_COMPLETED',
    label: 'Boot Permission',
    reason: 'Restores the tracking service automatically after your device restarts, so you never miss a session due to a reboot.',
    badge: 'Optional',
  },
]

export default function Permissions() {
  const [titleRef, titleInView] = useInView({ threshold: 0.2 })

  return (
    <section id="permissions" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[#0d0d0d] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <div
          ref={titleRef}
          className="mb-16 text-center"
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="section-label mb-3">Permissions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] tracking-tight max-w-xl mx-auto leading-tight">
            Transparent by design.
          </h2>
          <p className="mt-4 text-[#666] max-w-md mx-auto text-sm">
            We only request permissions essential to the app's function. Here's exactly why each one is needed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {permissions.map(({ icon: Icon, permission, label, reason, badge }, i) => (
            <div
              key={permission}
              className="group bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 card-hover"
              style={{
                animation: `fadeUp 0.5s ease ${i * 100}ms both`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#404040] transition-all duration-300">
                    <Icon size={18} className="text-[#888] group-hover:text-[#aaa] transition-colors" strokeWidth={1.4} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#444] mb-0.5">{permission}</p>
                    <p className="font-semibold text-[#e0e0e0] text-sm">{label}</p>
                  </div>
                </div>
                <span className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${
                  badge === 'Required'
                    ? 'border-[#333] text-[#888] bg-[#1a1a1a]'
                    : 'border-[#252525] text-[#555] bg-transparent'
                }`}>
                  {badge}
                </span>
              </div>
              <p className="text-xs text-[#5a5a5a] leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#3a3a3a] mt-10">
          Earwise requests only what's needed. No location, no contacts, no camera, no microphone access.
        </p>
      </div>
    </section>
  )
}

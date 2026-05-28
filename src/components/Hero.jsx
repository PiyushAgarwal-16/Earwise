import { Download, ChevronRight, Headphones, BarChart2, Shield } from 'lucide-react'

function PhoneMockup() {
  return (
    <div className="relative w-[260px] md:w-[300px] mx-auto animate-float">
      {/* Glow behind phone */}
      <div className="absolute inset-0 blur-[60px] bg-white/5 rounded-full scale-75 translate-y-8 animate-pulse-slow" />

      {/* Phone shell */}
      <div className="relative z-10 w-full aspect-[9/19] rounded-[36px] bg-[#111] border border-[#2a2a2a] shadow-[0_40px_80px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <span className="text-[10px] text-[#555] font-medium">9:41</span>
          <div className="w-16 h-4 bg-[#1a1a1a] rounded-full" />
          <div className="flex gap-1">
            {[3, 4, 5].map((h, i) => (
              <div key={i} className={`w-[3px] rounded-full bg-[#555]`} style={{ height: h * 2 + 4 }} />
            ))}
          </div>
        </div>

        {/* App content */}
        <div className="px-4 py-2 flex flex-col gap-3 h-full">
          {/* App header */}
          <div className="flex items-center justify-between mt-1">
            <div>
              <p className="text-[10px] text-[#555] tracking-wider uppercase">Today</p>
              <p className="text-sm font-semibold text-[#e5e5e5] leading-tight">Dashboard</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center">
              <Headphones size={12} className="text-[#888]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Main stat card */}
          <div className="bg-[#1a1a1a] rounded-2xl p-3 border border-[#252525]">
            <p className="text-[9px] text-[#555] uppercase tracking-wider mb-1">Listening Time</p>
            <p className="text-2xl font-bold text-[#e5e5e5] leading-none">2h 34m</p>
            <p className="text-[9px] text-[#555] mt-1">↑ 18% from yesterday</p>
            {/* Mini chart bars */}
            <div className="flex items-end gap-1 mt-3 h-8">
              {[30, 50, 45, 70, 55, 80, 65].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i === 5 ? 'bg-[#888]' : 'bg-[#2a2a2a]'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Two small stat cards */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#1a1a1a] rounded-xl p-2.5 border border-[#252525]">
              <BarChart2 size={12} className="text-[#666] mb-1" strokeWidth={1.5} />
              <p className="text-[9px] text-[#555]">Avg Volume</p>
              <p className="text-sm font-semibold text-[#ccc]">62 dB</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-2.5 border border-[#252525]">
              <Shield size={12} className="text-[#666] mb-1" strokeWidth={1.5} />
              <p className="text-[9px] text-[#555]">Wellness</p>
              <p className="text-sm font-semibold text-[#ccc]">Good</p>
            </div>
          </div>

          {/* Session cards */}
          <div className="space-y-2">
            <p className="text-[9px] text-[#555] uppercase tracking-wider">Recent Sessions</p>
            {[
              { name: 'Morning Walk', dur: '42m', vol: '58 dB' },
              { name: 'Work Focus', dur: '1h 12m', vol: '65 dB' },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between bg-[#1a1a1a] rounded-xl px-3 py-2 border border-[#252525]">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-lg bg-[#252525] flex items-center justify-center">
                    <Headphones size={9} className="text-[#777]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[9px] font-medium text-[#ccc]">{s.name}</p>
                    <p className="text-[8px] text-[#555]">{s.vol}</p>
                  </div>
                </div>
                <p className="text-[9px] text-[#777]">{s.dur}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="home">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.015] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-white/[0.008] rounded-full blur-[80px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-20 grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2a2a2a] bg-[#111]/80 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#888] animate-pulse" />
            <span className="text-xs text-[#777] tracking-wide font-medium">Android Audio Wellness App</span>
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#f5f5f5] leading-[1.05] tracking-tight">
              Understand<br />Your Listening<br />
              <span className="text-gradient">Habits.</span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-[#737373] text-base md:text-lg leading-relaxed max-w-md">
            Earwise tracks your earbud and headphone usage to deliver listening analytics and audio wellness insights — all stored privately on your device.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-6 py-4 border-y border-[#1a1a1a]">
            {[
              { value: '100%', label: 'Offline capable' },
              { value: '0', label: 'Audio recorded' },
              { value: 'Local', label: 'Data storage' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="text-lg font-bold text-[#f0f0f0] tracking-tight">{s.value}</span>
                <span className="text-xs text-[#555]">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div id="download" className="flex flex-wrap gap-3 items-center">
            <a href="#" className="btn-primary">
              <Download size={16} strokeWidth={2} />
              Download for Android
            </a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.querySelector('#how-it-works').scrollIntoView({ behavior: 'smooth' }) }} className="btn-secondary">
              Learn More
              <ChevronRight size={14} />
            </a>
          </div>

          <p className="text-xs text-[#444] -mt-2">Free · No account required · No ads</p>
        </div>

        {/* Right: Phone mockup */}
        <div className="flex justify-center md:justify-end">
          <PhoneMockup />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  )
}

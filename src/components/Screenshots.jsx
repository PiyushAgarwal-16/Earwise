import { useState } from 'react'
import { BarChart2, Clock, Activity, Layout, Settings, Headphones } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const screens = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: BarChart2,
    preview: () => (
      <div className="flex flex-col gap-2 p-3 h-full">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8px] font-semibold text-[#ccc]">Dashboard</span>
          <div className="w-4 h-4 rounded-full bg-[#222] flex items-center justify-center">
            <Headphones size={7} className="text-[#888]" strokeWidth={1.5} />
          </div>
        </div>
        <div className="bg-[#1e1e1e] rounded-xl p-3 border border-[#2a2a2a]">
          <p className="text-[7px] text-[#555] mb-0.5">Today</p>
          <p className="text-xl font-bold text-[#e5e5e5]">2h 34m</p>
          <div className="flex items-end gap-0.5 mt-2 h-6">
            {[30,55,40,75,60,85,65].map((h,i) => (
              <div key={i} className={`flex-1 rounded-sm ${i===5?'bg-[#888]':'bg-[#2a2a2a]'}`} style={{height:`${h}%`}} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[['Avg Vol','62 dB'],['Sessions','3']].map(([k,v]) => (
            <div key={k} className="bg-[#1e1e1e] rounded-xl p-2 border border-[#2a2a2a]">
              <p className="text-[7px] text-[#555]">{k}</p>
              <p className="text-sm font-bold text-[#d0d0d0]">{v}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-[#1e1e1e] rounded-xl p-2 border border-[#2a2a2a]">
          <p className="text-[7px] text-[#555] mb-1.5">Wellness</p>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 rounded-full bg-[#2a2a2a] flex-1 overflow-hidden">
              <div className="h-full bg-[#888] rounded-full" style={{width:'72%'}} />
            </div>
            <span className="text-[7px] text-[#888]">72%</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'history',
    label: 'History',
    icon: Clock,
    preview: () => (
      <div className="flex flex-col gap-2 p-3 h-full">
        <p className="text-[8px] font-semibold text-[#ccc] mb-1">Session History</p>
        {[
          {name:'Morning Walk',dur:'42m',vol:'58 dB',time:'7:30 AM'},
          {name:'Work Focus',dur:'1h 12m',vol:'65 dB',time:'10:00 AM'},
          {name:'Lunch Break',dur:'28m',vol:'55 dB',time:'1:00 PM'},
          {name:'Commute Home',dur:'36m',vol:'70 dB',time:'6:00 PM'},
        ].map((s,i) => (
          <div key={i} className="flex items-center justify-between bg-[#1e1e1e] rounded-xl px-2.5 py-2 border border-[#2a2a2a]">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-lg bg-[#252525] flex items-center justify-center">
                <Headphones size={8} className="text-[#666]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[8px] font-medium text-[#ccc]">{s.name}</p>
                <p className="text-[6px] text-[#444]">{s.time} · {s.vol}</p>
              </div>
            </div>
            <p className="text-[7px] text-[#666]">{s.dur}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'insights',
    label: 'Insights',
    icon: Activity,
    preview: () => (
      <div className="flex flex-col gap-2 p-3 h-full">
        <p className="text-[8px] font-semibold text-[#ccc] mb-1">Weekly Insights</p>
        <div className="bg-[#1e1e1e] rounded-xl p-2.5 border border-[#2a2a2a]">
          <p className="text-[7px] text-[#555] mb-1">Listening Trend</p>
          <div className="flex items-end gap-1 h-10">
            {[40,60,45,80,55,70,65].map((h,i) => (
              <div key={i} className="flex flex-col items-center gap-0.5 flex-1">
                <div className={`w-full rounded-sm ${i===3?'bg-[#888]':'bg-[#2a2a2a]'}`} style={{height:`${h}%`}} />
                <span className="text-[5px] text-[#444]">{'MTWTFSS'[i]}</span>
              </div>
            ))}
          </div>
        </div>
        {[{label:'Avg Daily Time',value:'2h 18m'},{label:'Peak Vol Day',value:'Thursday'},{label:'Wellness Score',value:'8.2/10'}].map((item) => (
          <div key={item.label} className="flex items-center justify-between bg-[#1e1e1e] rounded-xl px-2.5 py-2 border border-[#2a2a2a]">
            <p className="text-[7px] text-[#555]">{item.label}</p>
            <p className="text-[8px] font-semibold text-[#ccc]">{item.value}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'widget',
    label: 'Widget',
    icon: Layout,
    preview: () => (
      <div className="flex flex-col items-center justify-center gap-3 p-4 h-full">
        <p className="text-[7px] text-[#444] uppercase tracking-wider">Home Screen</p>
        <div className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-3">
          <div className="flex items-center gap-2 mb-2.5">
            <Headphones size={10} className="text-[#888]" strokeWidth={1.5} />
            <span className="text-[8px] font-medium text-[#aaa]">Earwise</span>
          </div>
          <p className="text-xl font-bold text-[#e5e5e5]">2h 34m</p>
          <p className="text-[7px] text-[#555] mb-2">Today&apos;s listening</p>
          <div className="flex items-end gap-0.5 h-4">
            {[30,55,40,75,60,85,65].map((h,i) => (
              <div key={i} className={`flex-1 rounded-sm ${i===5?'bg-[#777]':'bg-[#2a2a2a]'}`} style={{height:`${h}%`}} />
            ))}
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-1.5">
          <div className="bg-[#1e1e1e] rounded-xl p-2 border border-[#2a2a2a] text-center">
            <p className="text-sm font-bold text-[#ccc]">62</p>
            <p className="text-[6px] text-[#444]">Avg dB</p>
          </div>
          <div className="bg-[#1e1e1e] rounded-xl p-2 border border-[#2a2a2a] text-center">
            <p className="text-sm font-bold text-[#ccc]">3</p>
            <p className="text-[6px] text-[#444]">Sessions</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    preview: () => (
      <div className="flex flex-col gap-1.5 p-3 h-full">
        <p className="text-[8px] font-semibold text-[#ccc] mb-1">Settings</p>
        {[
          {section:'Tracking',items:['Auto-detect BT','Background service','Boot restore']},
          {section:'Data',items:['Cloud sync','Export data','Delete history']},
          {section:'Appearance',items:['Theme','Widget style']},
        ].map((group) => (
          <div key={group.section} className="bg-[#1e1e1e] rounded-xl border border-[#2a2a2a] overflow-hidden">
            <p className="text-[6px] text-[#444] uppercase tracking-wider px-2.5 pt-2">{group.section}</p>
            {group.items.map((item, j) => (
              <div key={item} className={`flex items-center justify-between px-2.5 py-1.5 ${j < group.items.length-1 ? 'border-b border-[#252525]' : ''}`}>
                <p className="text-[7px] text-[#aaa]">{item}</p>
                <div className="w-5 h-3 rounded-full bg-[#333] relative">
                  <div className={`absolute w-2.5 h-2.5 rounded-full bg-[#888] top-0.5 ${j%2===0?'right-0.5':'left-0.5'}`} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    ),
  },
]

function PhoneFrame({ label, icon: Icon, isActive, onClick, children }) {
  return (
    <div
      className={`flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 ${isActive ? 'scale-105' : 'opacity-50 hover:opacity-75'}`}
      onClick={onClick}
    >
      <div
        className="relative rounded-[28px] border overflow-hidden transition-all duration-300"
        style={{
          width: '130px',
          aspectRatio: '9/19',
          background: '#111',
          borderColor: isActive ? '#333' : '#1e1e1e',
          boxShadow: isActive ? '0 20px 50px rgba(0,0,0,0.7)' : '0 8px 20px rgba(0,0,0,0.4)',
        }}
      >
        <div className="flex items-center justify-between px-3 pt-3 pb-1">
          <span className="text-[6px] text-[#444]">9:41</span>
          <div className="w-8 h-2 rounded-full bg-[#1a1a1a]" />
          <div className="flex gap-0.5">
            {[3,4.5,6].map((h,i) => (
              <div key={i} className="w-[2px] bg-[#444] rounded-full" style={{height:h}} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden" style={{height:'calc(100% - 28px)'}}>
          {children}
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <Icon size={12} className={`transition-colors ${isActive ? 'text-[#aaa]' : 'text-[#444]'}`} strokeWidth={1.5} />
        <span className={`text-xs font-medium transition-colors ${isActive ? 'text-[#bbb]' : 'text-[#444]'}`}>{label}</span>
      </div>
    </div>
  )
}

export default function Screenshots() {
  const [active, setActive] = useState(0)
  const [titleRef, titleInView] = useInView({ threshold: 0.2 })

  return (
    <section id="screenshots" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d0d] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.015] rounded-full blur-[100px]" />
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
          <p className="section-label mb-3">App Screenshots</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] tracking-tight max-w-xl mx-auto leading-tight">
            Beautiful. Minimal. Functional.
          </h2>
          <p className="mt-4 text-[#666] max-w-sm mx-auto text-sm">
            Every screen is designed for clarity — no clutter, just the insights you need.
          </p>
        </div>

        <div className="flex justify-center items-end gap-4 md:gap-6 flex-wrap">
          {screens.map((screen, i) => (
            <PhoneFrame
              key={screen.id}
              label={screen.label}
              icon={screen.icon}
              isActive={active === i}
              onClick={() => setActive(i)}
            >
              <screen.preview />
            </PhoneFrame>
          ))}
        </div>

        <p className="text-center text-xs text-[#333] mt-10">
          Tap any screen to highlight it
        </p>
      </div>
    </section>
  )
}

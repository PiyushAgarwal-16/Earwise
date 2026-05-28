import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const faqs = [
  {
    question: 'Does Earwise record audio?',
    answer: 'No. Earwise never records, captures, or processes any audio whatsoever. It only detects Bluetooth device connection and disconnection events through standard Android system APIs. Your conversations, music, and media content remain completely private.',
  },
  {
    question: 'Does it work fully offline?',
    answer: 'Yes, completely. All tracking, session logging, and analytics work entirely on-device without any internet connection. Cloud sync is a fully optional feature — the app functions 100% offline by default.',
  },
  {
    question: 'Is cloud sync optional?',
    answer: 'Absolutely. Cloud sync is opt-in only. You can use Earwise indefinitely without creating an account or enabling sync. If you choose to enable it, data is securely stored via Firebase and can be deleted at any time.',
  },
  {
    question: 'Does it support Bluetooth speakers?',
    answer: 'Earwise is designed primarily for earbuds and headphones, but it will detect any Bluetooth audio device that connects to your phone. Speaker sessions will appear in your history and you can filter or label them as needed.',
  },
  {
    question: 'Why does Earwise run in the background?',
    answer: 'To ensure sessions are tracked accurately from start to finish, Earwise uses a foreground service. Without this, Android may terminate the app mid-session, resulting in incomplete data. The service is lightweight and designed to have minimal battery impact.',
  },
  {
    question: 'What data is collected?',
    answer: 'Only session metadata: when a device connected, when it disconnected, and estimated volume levels. No audio content, no location, no personal identifiers. All data stays on your device unless you explicitly enable cloud sync.',
  },
  {
    question: 'How accurate is the volume tracking?',
    answer: 'Earwise tracks system volume levels (the audio stream volume setting on your device) rather than measuring actual decibel output from your headphones. This provides a reliable relative measure of your listening habits over time.',
  },
]

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className="border border-[#1e1e1e] rounded-2xl overflow-hidden bg-[#111] transition-all duration-300 hover:border-[#2a2a2a]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms, border-color 0.2s`,
      }}
    >
      <button
        id={`faq-btn-${index}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-[#d0d0d0] text-sm pr-4">{question}</span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#2a2a2a] flex items-center justify-center transition-all duration-300 ${open ? 'rotate-180 bg-[#1e1e1e]' : ''}`}>
          <ChevronDown size={13} className="text-[#666]" />
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '200px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div className="px-6 pb-5 border-t border-[#1a1a1a]">
          <p className="text-sm text-[#5a5a5a] leading-relaxed pt-4">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [titleRef, titleInView] = useInView({ threshold: 0.2 })

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div
          ref={titleRef}
          className="mb-12 text-center"
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="section-label mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] tracking-tight leading-tight">
            Common questions.
          </h2>
          <p className="mt-4 text-[#666] text-sm">
            Everything you need to know about Earwise.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} {...faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

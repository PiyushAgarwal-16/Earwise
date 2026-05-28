import { Link } from 'react-router-dom'
import { Headphones, Mail, ExternalLink, Trash2 } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-[#1a1a1a] bg-[#080808]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center">
                <Headphones size={16} className="text-white/70" strokeWidth={1.5} />
              </div>
              <span className="font-semibold text-[#e0e0e0] tracking-tight">Earwise</span>
            </div>
            <p className="text-sm text-[#4a4a4a] leading-relaxed max-w-xs">
              Audio wellness analytics for Android. Understand your listening habits, protect your hearing.
            </p>
            <div className="flex items-center gap-2 mt-2">
              {['Android', 'Privacy-first'].map((tag) => (
                <div key={tag} className="px-3 py-1.5 rounded-full border border-[#1e1e1e] bg-[#111] inline-flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#555]" />
                  <span className="text-[10px] text-[#444] tracking-wide">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* App section links */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold text-[#333] uppercase tracking-widest mb-1">App</p>
            {[['#features','Features'],['#how-it-works','How It Works'],['#screenshots','Screenshots'],['#faq','FAQ']].map(([href, label]) => (
              <a key={href} href={href} onClick={(e) => handleNav(e, href)} className="text-sm text-[#444] hover:text-[#888] transition-colors">{label}</a>
            ))}
          </div>

          {/* Legal links — includes Data Deletion */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold text-[#333] uppercase tracking-widest mb-1">Legal</p>
            <a href="#" className="text-sm text-[#444] hover:text-[#888] transition-colors flex items-center gap-1.5">Privacy Policy <ExternalLink size={10} /></a>
            <a href="#" className="text-sm text-[#444] hover:text-[#888] transition-colors flex items-center gap-1.5">Terms of Service <ExternalLink size={10} /></a>

            {/* Data Deletion link — important for Play Store compliance */}
            <Link
              to="/delete-data"
              className="text-sm text-[#444] hover:text-[#888] transition-colors flex items-center gap-1.5 mt-1 group"
            >
              <Trash2 size={11} className="text-[#3a3a3a] group-hover:text-[#666] transition-colors" strokeWidth={1.5} />
              Request Data Deletion
            </Link>

            <a href="mailto:hello@earwise.app" className="text-sm text-[#444] hover:text-[#888] transition-colors flex items-center gap-1.5 mt-1"><Mail size={12} />hello@earwise.app</a>
          </div>
        </div>

        <div className="pt-8 border-t border-[#131313] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#333]">© {currentYear} Earwise. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <p className="text-xs text-[#2a2a2a]">Made with care for audio wellness.</p>
            <Link to="/delete-data" className="text-xs text-[#2a2a2a] hover:text-[#444] transition-colors">
              Data Deletion
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

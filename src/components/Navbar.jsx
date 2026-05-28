import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Headphones } from 'lucide-react'

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#privacy', label: 'Privacy' },
  { href: '#screenshots', label: 'Screenshots' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#1a1a1a]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-white/15 transition-all duration-200">
            <Headphones size={16} className="text-white/80" strokeWidth={1.5} />
          </div>
          <span className="font-semibold text-[#f5f5f5] text-base tracking-tight">Earwise</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-[#737373] hover:text-[#f5f5f5] transition-colors duration-200 tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            onClick={(e) => handleNavClick(e, '#download')}
            className="btn-primary !py-2.5 !px-5 !text-sm"
          >
            Get the App
          </a>
        </div>

        {/* Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden w-8 h-8 flex items-center justify-center text-[#a3a3a3] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-[#1a1a1a] bg-[#0a0a0a]/95 backdrop-blur-xl ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-[#a3a3a3] hover:text-[#f5f5f5] py-2.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#1a1a1a] mt-1">
            <a href="#download" onClick={(e) => handleNavClick(e, '#download')} className="btn-primary !text-sm w-full justify-center">
              Get the App
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

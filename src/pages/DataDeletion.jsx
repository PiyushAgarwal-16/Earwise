import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Headphones,
  ArrowLeft,
  Trash2,
  UserX,
  Database,
  History,
  Cloud,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Loader2,
  Shield,
  Clock,
  ChevronRight,
} from 'lucide-react'

// ─── Replace with your real email ────────────────────────────────────────────
const FORMSUBMIT_EMAIL = 'Piyusha437@gmail.com'
// ─────────────────────────────────────────────────────────────────────────────

const deletionItems = [
  { icon: UserX,   label: 'Account information',           detail: 'Email address and profile data' },
  { icon: History, label: 'Synced listening history',      detail: 'All session records backed up to the cloud' },
  { icon: Cloud,   label: 'Cloud backup data',             detail: 'Any Firebase-stored analytics and wellness data' },
  { icon: Database,label: 'Usage analytics (if synced)',   detail: 'Volume trends, session durations and insights' },
]

// ─── Status states ────────────────────────────────────────────────────────────
const STATUS = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', ERROR: 'error' }

export default function DataDeletion() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(STATUS.IDLE)
  const formRef             = useRef(null)

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = () => {
    const e = {}
    if (!form.name.trim())                        e.name    = 'Full name is required.'
    if (!form.email.trim())                       e.email   = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                                  e.email   = 'Please enter a valid email address.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  // ── Submit via FormSubmit.co fetch API ──────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      return
    }

    setStatus(STATUS.LOADING)

    try {
      const body = new FormData()
      body.append('name',    form.name.trim())
      body.append('email',   form.email.trim())
      body.append('message', form.message.trim() || '(No additional message provided)')
      body.append('_subject', `[Earwise] Data Deletion Request — ${form.email.trim()}`)
      body.append('_captcha', 'false')
      body.append('_template', 'table')

      const res = await fetch(`https://formsubmit.co/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus(STATUS.SUCCESS)
        setForm({ name: '', email: '', message: '' })
        setErrors({})
      } else {
        setStatus(STATUS.ERROR)
      }
    } catch {
      setStatus(STATUS.ERROR)
    }
  }

  const handleReset = () => setStatus(STATUS.IDLE)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-['Inter',sans-serif]">

      {/* ── Minimal nav ──────────────────────────────────────────────────────── */}
      <header className="border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center group-hover:bg-white/12 transition-all">
              <Headphones size={15} className="text-white/70" strokeWidth={1.5} />
            </div>
            <span className="font-semibold text-[#e0e0e0] text-sm tracking-tight">Earwise</span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs text-[#555] hover:text-[#999] transition-colors"
          >
            <ArrowLeft size={13} />
            Back to home
          </Link>
        </div>
      </header>

      {/* ── Page body ─────────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">

        {/* Page heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2a2a2a] bg-[#111] mb-5">
            <Trash2 size={12} className="text-[#666]" strokeWidth={1.5} />
            <span className="text-[10px] text-[#555] tracking-widest uppercase font-medium">Data & Privacy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] tracking-tight leading-tight mb-4">
            Request Data Deletion
          </h1>
          <p className="text-[#5a5a5a] text-base max-w-xl leading-relaxed">
            You have the right to request permanent deletion of your Earwise account and all
            associated cloud data at any time. Complete the form below and we will process
            your request promptly.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">

          {/* ── Left: info panel ─────────────────────────────────────────────── */}
          <aside className="md:col-span-2 flex flex-col gap-4">

            {/* What gets deleted */}
            <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <AlertTriangle size={14} className="text-[#666]" strokeWidth={1.5} />
                <p className="text-xs font-semibold text-[#555] uppercase tracking-wider">What will be deleted</p>
              </div>
              <div className="flex flex-col gap-4">
                {deletionItems.map(({ icon: Icon, label, detail }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#1a1a1a] border border-[#252525] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={13} className="text-[#666]" strokeWidth={1.4} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#ccc] leading-snug">{label}</p>
                      <p className="text-[11px] text-[#444] mt-0.5 leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Permanent warning */}
            <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                  <Shield size={14} className="text-[#777]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#bbb] mb-1">Permanent & Irreversible</p>
                  <p className="text-[11px] text-[#444] leading-relaxed">
                    Deletion is permanent. Once processed, your data cannot be recovered.
                    Local data stored on your device is unaffected and must be cleared separately
                    by uninstalling the app.
                  </p>
                </div>
              </div>
            </div>

            {/* Processing time */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl">
              <Clock size={13} className="text-[#555] flex-shrink-0" strokeWidth={1.5} />
              <p className="text-[11px] text-[#444]">
                Deletion requests are usually processed within <span className="text-[#666] font-medium">7 days</span>.
              </p>
            </div>
          </aside>

          {/* ── Right: form ──────────────────────────────────────────────────── */}
          <div className="md:col-span-3">

            {/* SUCCESS state */}
            {status === STATUS.SUCCESS && (
              <div className="bg-[#111] border border-[#222] rounded-2xl p-8 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                  <CheckCircle2 size={26} className="text-[#888]" strokeWidth={1.4} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#e0e0e0] mb-2 tracking-tight">Request Received</h2>
                  <p className="text-sm text-[#555] leading-relaxed max-w-sm">
                    Your data deletion request has been submitted. We will process it
                    within <strong className="text-[#666] font-medium">7 days</strong> and confirm via the email address you provided.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="mt-2 text-xs text-[#444] hover:text-[#777] transition-colors underline underline-offset-4"
                >
                  Submit another request
                </button>
              </div>
            )}

            {/* ERROR state */}
            {status === STATUS.ERROR && (
              <div className="bg-[#111] border border-[#222] rounded-2xl p-8 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                  <XCircle size={26} className="text-[#666]" strokeWidth={1.4} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#e0e0e0] mb-2 tracking-tight">Submission Failed</h2>
                  <p className="text-sm text-[#555] leading-relaxed max-w-sm">
                    Something went wrong. Please try again, or email us directly at{' '}
                    <a
                      href={`mailto:${FORMSUBMIT_EMAIL}?subject=[Earwise] Data Deletion Request`}
                      className="text-[#777] underline underline-offset-2 hover:text-[#aaa] transition-colors"
                    >
                      {FORMSUBMIT_EMAIL}
                    </a>
                    .
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="mt-2 text-xs text-[#444] hover:text-[#777] transition-colors underline underline-offset-4"
                >
                  Try again
                </button>
              </div>
            )}

            {/* FORM (idle + loading) */}
            {(status === STATUS.IDLE || status === STATUS.LOADING) && (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-7 flex flex-col gap-5"
              >
                {/* Top border accent */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" style={{position:'relative',top:0,left:0,right:0,marginBottom:'-20px'}} />

                <div className="mb-1">
                  <h2 className="text-base font-semibold text-[#d0d0d0] tracking-tight">Deletion Request Form</h2>
                  <p className="text-xs text-[#444] mt-1">All fields marked as required must be completed.</p>
                </div>

                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="del-name" className="text-xs font-medium text-[#666] tracking-wide">
                    Full Name <span className="text-[#444]">*</span>
                  </label>
                  <input
                    id="del-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={`w-full bg-[#0e0e0e] border rounded-xl px-4 py-3 text-sm text-[#d0d0d0] placeholder-[#333] outline-none transition-all duration-200
                      focus:border-[#3a3a3a] focus:bg-[#111] hover:border-[#2a2a2a]
                      ${errors.name ? 'border-[#3a3a3a] bg-[#111]' : 'border-[#1e1e1e]'}`}
                    disabled={status === STATUS.LOADING}
                    aria-describedby={errors.name ? 'del-name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="del-name-error" className="text-[11px] text-[#888] flex items-center gap-1 mt-0.5">
                      <XCircle size={10} strokeWidth={2} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="del-email" className="text-xs font-medium text-[#666] tracking-wide">
                    Email Address <span className="text-[#444]">*</span>
                  </label>
                  <input
                    id="del-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={`w-full bg-[#0e0e0e] border rounded-xl px-4 py-3 text-sm text-[#d0d0d0] placeholder-[#333] outline-none transition-all duration-200
                      focus:border-[#3a3a3a] focus:bg-[#111] hover:border-[#2a2a2a]
                      ${errors.email ? 'border-[#3a3a3a] bg-[#111]' : 'border-[#1e1e1e]'}`}
                    disabled={status === STATUS.LOADING}
                    aria-describedby={errors.email ? 'del-email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="del-email-error" className="text-[11px] text-[#888] flex items-center gap-1 mt-0.5">
                      <XCircle size={10} strokeWidth={2} /> {errors.email}
                    </p>
                  )}
                  <p className="text-[10px] text-[#333] mt-0.5">
                    Use the email address associated with your Earwise account.
                  </p>
                </div>

                {/* Optional message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="del-message" className="text-xs font-medium text-[#666] tracking-wide">
                    Additional Message <span className="text-[#333] font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="del-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any additional context or instructions for your request…"
                    className="w-full bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl px-4 py-3 text-sm text-[#d0d0d0] placeholder-[#333] outline-none resize-none transition-all duration-200 focus:border-[#3a3a3a] focus:bg-[#111] hover:border-[#2a2a2a]"
                    disabled={status === STATUS.LOADING}
                  />
                </div>

                {/* Consent notice */}
                <div className="flex items-start gap-3 p-4 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl">
                  <AlertTriangle size={13} className="text-[#444] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-[11px] text-[#3a3a3a] leading-relaxed">
                    By submitting this form you confirm you are the account holder and consent to
                    permanent deletion. This action cannot be undone.
                  </p>
                </div>

                {/* Submit */}
                <button
                  id="del-submit-btn"
                  type="submit"
                  disabled={status === STATUS.LOADING}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-semibold
                    bg-[#f0f0f0] text-[#0a0a0a] hover:bg-[#ddd] active:bg-[#ccc]
                    disabled:opacity-40 disabled:cursor-not-allowed
                    transition-all duration-200 hover:shadow-[0_4px_16px_rgba(240,240,240,0.08)]"
                >
                  {status === STATUS.LOADING ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Trash2 size={15} strokeWidth={2} />
                      Submit Deletion Request
                      <ChevronRight size={14} strokeWidth={2} className="ml-auto opacity-50" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-[#2e2e2e]">
                  Requests are processed within 7 days · hello@earwise.app
                </p>
              </form>
            )}

          </div>
        </div>

        {/* ── Bottom note ───────────────────────────────────────────────────── */}
        <div className="mt-12 pt-8 border-t border-[#151515] text-center">
          <p className="text-xs text-[#2e2e2e]">
            For questions about your data, contact us at{' '}
            <a
              href="mailto:hello@earwise.app"
              className="text-[#444] hover:text-[#666] transition-colors underline underline-offset-2"
            >
              hello@earwise.app
            </a>
            {' '}· Only cloud-synced data is affected. Local on-device data can be removed by uninstalling the app.
          </p>
        </div>
      </main>
    </div>
  )
}

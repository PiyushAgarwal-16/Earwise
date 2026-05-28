import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Privacy from './components/Privacy'
import Permissions from './components/Permissions'
import Screenshots from './components/Screenshots'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import DataDeletion from './pages/DataDeletion'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Privacy />
        <Permissions />
        <Screenshots />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"            element={<LandingPage />} />
        <Route path="/delete-data" element={<DataDeletion />} />
      </Routes>
    </BrowserRouter>
  )
}

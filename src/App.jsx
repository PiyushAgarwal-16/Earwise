import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Privacy from './components/Privacy'
import Permissions from './components/Permissions'
import Screenshots from './components/Screenshots'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
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

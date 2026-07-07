import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Program, { TrainingPlans } from './components/Program'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import StatsBar from './components/StatsBar'
import ValueSection from './components/ValueSection'
import CtaBanner from './components/CtaBanner'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SideDecor from './components/SideDecor'
import SectionDivider from './components/SectionDivider'

function App() {
  return (
    <div className="theme-v3">
      <SideDecor />
      <Navbar />
      <main className="main-v3">
        <Hero />
        <SectionDivider />
        <Program />
        <SectionDivider />
        <About />
        <SectionDivider />
        <TrainingPlans />
        <SectionDivider />
        <HowItWorks />
        <StatsBar />
        <ValueSection />
        <CtaBanner />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

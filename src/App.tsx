import Nav from './components/Nav'
import Hero from './components/Hero'
import ContrastBand from './components/ContrastBand'
import WhoItsFor from './components/WhoItsFor'
import HowItWorks from './components/HowItWorks'
import Promises from './components/Promises'
import UseCases from './components/UseCases'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ContrastBand />
        <WhoItsFor />
        <HowItWorks />
        <Promises />
        <UseCases />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

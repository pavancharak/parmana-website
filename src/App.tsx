import Nav from './components/Nav'
import Hero from './components/Hero'
import WhoItsFor from './components/WhoItsFor'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhoItsFor />
        <HowItWorks />
        <UseCases />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

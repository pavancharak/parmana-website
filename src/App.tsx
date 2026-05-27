import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Demos from './components/Demos'
import LogsComparison from './components/LogsComparison'
import DataSovereignty from './components/DataSovereignty'
import UseCases from './components/UseCases'
import WhyItHoldsUp from './components/WhyItHoldsUp'
import ForDevelopers from './components/ForDevelopers'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Demos />
        <LogsComparison />
        <DataSovereignty />
        <UseCases />
        <WhyItHoldsUp />
        <ForDevelopers />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

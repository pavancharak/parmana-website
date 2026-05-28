import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import LogsComparison from './components/LogsComparison'
import DataSovereignty from './components/DataSovereignty'
import UseCases from './components/UseCases'
import BuiltInIndia from './components/BuiltInIndia'
import CallToAction from './components/CallToAction'
import ParmanaOrigin from './components/ParmanaOrigin'
import Builders from './components/Builders'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <LogsComparison />
        <DataSovereignty />
        <UseCases />
        <BuiltInIndia />
        <CallToAction />
        <ParmanaOrigin />
        <Builders />
      </main>
      <Footer />
    </>
  )
}

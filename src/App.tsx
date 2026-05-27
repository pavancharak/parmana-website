import Nav from './components/Nav'
import Hero from './components/Hero'
import BuiltInIndia from './components/BuiltInIndia'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import LogsComparison from './components/LogsComparison'
import DataSovereignty from './components/DataSovereignty'
import UseCases from './components/UseCases'
import WhyItHoldsUp from './components/WhyItHoldsUp'
import ForDevelopers from './components/ForDevelopers'
import CallToAction from './components/CallToAction'
import ParmanaOrigin from './components/ParmanaOrigin'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BuiltInIndia />
        <Problem />
        <HowItWorks />
        <LogsComparison />
        <DataSovereignty />
        <UseCases />
        <WhyItHoldsUp />
        <ForDevelopers />
        <CallToAction />
        <ParmanaOrigin />
      </main>
      <Footer />
    </>
  )
}

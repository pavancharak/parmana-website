import Nav from './components/Nav'
import DecisionExecution from './components/DecisionExecution'
import HowItWorks from './components/HowItWorks'
import LogsComparison from './components/LogsComparison'
import DataSovereignty from './components/DataSovereignty'
import ParmanaOrigin from './components/ParmanaOrigin'
import Builders from './components/Builders'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <DecisionExecution />
        <HowItWorks />
        <LogsComparison />
        <DataSovereignty />
<ParmanaOrigin />
        <Builders />
      </main>
      <Footer />
    </>
  )
}

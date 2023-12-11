import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Bookkeeping from './pages/services/Bookkeeping.jsx';
import Contact from './pages/Contact.jsx';
import ServicesIndex from './pages/services/ServicesIndex.jsx';
import FinancialStatements from './pages/services/FinancialStatements.jsx';
import ForensicAccounting from './pages/services/ForensicAccounting.jsx';
import NewBusinessFormation from './pages/services/NewBusinessFormation.jsx';
import Payroll from './pages/services/Payroll.jsx';
import QuickBooksSetup from './pages/services/QuickBooksSetup.jsx';
import TaxPlanning from './pages/services/TaxPlanning.jsx';
import TaxPreparation from './pages/services/TaxPreparation.jsx';
import TaxProblems from './pages/services/TaxProblems.jsx';
import QuickBooksTraining from './pages/services/QuickBooksTraining.jsx';
import AboutIndex from './pages/about/AboutIndex.jsx';
import OurTeam from './pages/about/OurTeam.jsx';
import OurValues from './pages/about/OurValues.jsx';
import {HashRouter, Route, Routes} from 'react-router-dom'
import './style.css'

function App()
{
  return <HashRouter>
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/about" element= {<About />} />
            <Route path="/services" element= {<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HashRouter>
}

export default App
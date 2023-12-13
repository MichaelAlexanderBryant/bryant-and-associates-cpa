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
import {Route, Routes} from 'react-router-dom'
import { Fragment } from "react"
import './style.css'
import CfoAdvisory from './pages/services/CfoAdvisory.jsx';
import NonProfitAccounting from './pages/services/NonProfitAccounting.jsx';
import TrustAccounting from './pages/services/TrustAccounting.jsx';
import NotFound from './pages/NotFound.jsx';
import LogIn from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx';

function App()
{
  return <Fragment>
                <Routes>
                    <Route path="/" element= {<Home />} />
                    <Route path="/about" element= {<About />} >
                        <Route index element={<AboutIndex />} />
                        <Route path="/about/our-values" element={<OurValues />} />
                        <Route path="/about/our-team" element={<OurTeam />} />
                    </Route>
                    <Route path="/services" element= {<Services />} >
                        <Route index element={<ServicesIndex />} />
                        <Route path="/services/bookkeeping" element={<Bookkeeping />} />
                        <Route path="/services/business-and-cfo-advisory" element={<CfoAdvisory />} />
                        <Route path="/services/financial-statements" element={<FinancialStatements />} />
                        <Route path="/services/litigation-support-and-forensic-accounting" element={<ForensicAccounting />} />
                        <Route path="/services/new-business-formation" element={<NewBusinessFormation />} />
                        <Route path="/services/non-profit-accounting" element={<NonProfitAccounting />} />
                        <Route path="/services/payroll" element={<Payroll />} />
                        <Route path="/services/quickbooks-setup" element={<QuickBooksSetup />} />
                        <Route path="/services/tax-planning" element={<TaxPlanning />} />
                        <Route path="/services/tax-preparation" element={<TaxPreparation />} />
                        <Route path="/services/tax-problems" element={<TaxProblems />} />
                        <Route path="/services/trust-accounting" element={<TrustAccounting />} />
                        <Route path="/services/quickbooks-training" element={<QuickBooksTraining />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/log-in" element={<LogIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Fragment>
        
}

export default App
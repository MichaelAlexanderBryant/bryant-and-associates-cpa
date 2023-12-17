import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Services from './pages/services/Services.jsx';
import Bookkeeping from './pages/services/articles/Bookkeeping.jsx';
import Contact from './pages/contact/Contact.jsx';
import ServicesIndex from './pages/services/ServicesIndex.jsx';
import FinancialStatements from './pages/services/articles/FinancialStatements.jsx';
import ForensicAccounting from './pages/services/articles/ForensicAccounting.jsx';
import NewBusinessFormation from './pages/services/articles/NewBusinessFormation.jsx';
import Payroll from './pages/services/articles/Payroll.jsx';
import QuickBooksSetup from './pages/services/articles/QuickBooksSetup.jsx';
import TaxPlanning from './pages/services/articles/TaxPlanning.jsx';
import TaxPreparation from './pages/services/articles/TaxPreparation.jsx';
import TaxProblems from './pages/services/articles/TaxProblems.jsx';
import QuickBooksTraining from './pages/services/articles/QuickBooksTraining.jsx';
import AboutIndex from './pages/about/AboutIndex.jsx';
import OurTeam from './pages/about/OurTeam.jsx';
import OurValues from './pages/about/OurValues.jsx';
import {Route, Routes} from 'react-router-dom'
import { Fragment } from "react"
import './style.css'
import CfoAdvisory from './pages/services/articles/CfoAdvisory.jsx';
import NonprofitAccounting from './pages/services/articles/NonprofitAccounting.jsx';
import TrustAccounting from './pages/services/articles/TrustAccounting.jsx';
import NotFound from './pages/NotFound.jsx';
import LogIn from './pages/client-portal/log-in/LogIn.jsx';
import SignUp from './pages/client-portal/log-in/SignUp.jsx';
import ForgotPassword from './pages/client-portal/log-in/ForgotPassword.jsx';
import DashboardHome from './pages/client-portal/dashboard/DashboardHome.jsx';
import DashboardIndex from './pages/client-portal/dashboard/DashboardIndex.jsx';
import Documents from './pages/client-portal/dashboard/Documents.jsx';
import Payment from './pages/client-portal/dashboard/Payment.jsx';
import MyProfile from './pages/client-portal/dashboard/MyProfile.jsx';
import Settings from './pages/client-portal/dashboard/Settings.jsx';
import PaymentHistory from './pages/client-portal/dashboard/PaymentHistory.jsx';

import PrivateRoute from './utils/PrivateRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import ResetPassword from './pages/client-portal/log-in/ResetPassword.jsx';

function App()
{
  return <Fragment>
                <AuthProvider>
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
                            <Route path="/services/non-profit-accounting" element={<NonprofitAccounting />} />
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
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset-password/:uid/:token" element={<ResetPassword />} />
                        <Route path="/dashboard" element={<PrivateRoute/>}>
                            <Route path="/dashboard" element={<DashboardHome />} >
                                <Route index element={<DashboardIndex/>} />
                                <Route path="/dashboard/documents" element={<Documents />} />
                                <Route path="/dashboard/payment" element={<Payment />} />
                                <Route path="/dashboard/payment-history" element={<PaymentHistory />} />
                                <Route path="/dashboard/profile" element={<MyProfile />} />
                                <Route path="/dashboard/settings" element={<Settings />} />
                            </Route>
                        </Route>
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </AuthProvider>
            </Fragment>
        
}

export default App
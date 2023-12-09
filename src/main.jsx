import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
    children: [
      { index: true, element: <ServicesIndex />},
      { path: "bookkeeping", element: <Bookkeeping />},
      { path: "financial-statements", element: <FinancialStatements/>},
      { path: "forensic-accounting", element: <ForensicAccounting />},
      { path: "new-business-formation", element: <NewBusinessFormation />},
      { path: "payroll", element: <Payroll />},
      { path: "quickbooks-setup", element:<QuickBooksSetup/>},
      { path: "quickbooks-training", element:<QuickBooksTraining />},
      { path: "tax-planning", element: <TaxPlanning />},
      { path: "tax-preparation", element: <TaxPreparation />},
      { path: "tax-problems", element: <TaxProblems />}
    ]
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

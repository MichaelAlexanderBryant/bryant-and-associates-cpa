function ServicesIndex() {
    return (
        <div>
            <h1 className="title">Services</h1>
            <div className="services-container">
                <div className="business-services">
                    <h2>Business Services</h2>
                    <ul className="no-bullet-indent services-list">
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/bookkeeping">Bookkeeping</a></li>
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/payroll">Payroll</a></li>
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/financial-statements">Financial Statements</a></li>
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/new-business-formation">New Business Formation</a></li>
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/non-profit-accounting">Non-Profit Accounting</a></li>
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/cfo-advisory">CFO Advisory</a></li>
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/forensic-accounting">Forensic Accounting</a></li>
                    </ul>
                </div>
                <div className="tax-services">
                    <h2>Tax Services</h2>
                    <ul className="no-bullet-indent services-list">
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/tax-preparation">Tax Preparation</a></li>
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/tax-planning">Tax Planning</a></li>
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/tax-problems">Tax Problems</a></li>
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/trust-accounting">Trust Accounting</a></li>
                    </ul>
                </div>
                <div className="quickbooks-services">
                    <h2>QuickBooks Services</h2>
                    <ul className="no-bullet-indent services-list">
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/quickbooks-setup">QuickBooks Setup</a></li>
                        <li><a className="services-item" href="/bryant-and-associates-cpa/#/services/quickbooks-training">QuickBooks Training</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServicesIndex;
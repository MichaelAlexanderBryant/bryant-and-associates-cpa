function ServicesIndex() {
    return (
        <div>
            <div className="services-container">
                <div className="business-services">
                    <h2>Business Services</h2>
                    <ul className="no-bullet-indent">
                        <li><a className="services-item" href="/services/bookkeeping">Bookkeeping</a></li>
                        <li><a className="services-item" href="/services/payroll">Payroll</a></li>
                        <li><a className="services-item" href="/services/financial-statements">Financial Statements</a></li>
                        <li><a className="services-item" href="/services/new-business-formation">New Business Formation</a></li>
                        <li><a className="services-item" href="/services/forensic-accounting">Forensic Accounting</a></li>
                    </ul>
                </div>
                <div className="tax-services">
                    <h2>Tax Services</h2>
                    <ul className="no-bullet-indent">
                        <li><a className="services-item" href="/services/tax-preparation">Tax Preparation</a></li>
                        <li><a className="services-item" href="/services/tax-planning">Tax Planning</a></li>
                        <li><a className="services-item" href="/services/tax-problems">Tax Problems</a></li>
                    </ul>
                </div>
                <div className="quickbooks-services">
                    <h2>QuickBooks Services</h2>
                    <ul className="no-bullet-indent">
                        <li><a className="services-item" href="/services/quickbooks-setup">QuickBooks Setup</a></li>
                        <li><a className="services-item" href="/services/quickbooks-training">QuickBooks Training</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServicesIndex;
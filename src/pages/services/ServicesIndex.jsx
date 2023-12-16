function ServicesIndex() {
    return (
        <div>
            <h1 className="title">Services</h1>
            <div className="services-container">
                <div className="business-services">
                    <h2>Business & Advisory Services</h2>
                    <ul className="no-bullet-indent services-list">
                        <li><a className="services-item" href="/#/services/bookkeeping">Bookkeeping</a></li>
                        <li><a className="services-item" href="/#/services/payroll">Payroll</a></li>
                        <li><a className="services-item" href="/#/services/financial-statements">Financial Statements</a></li>
                        <li><a className="services-item" href="/#/services/new-business-formation">New Business Formation</a></li>
                        <li><a className="services-item" href="/#/services/business-and-cfo-advisory">Business & CFO Advisory</a></li>
                        <li><a className="services-item" href="/#/services/quickbooks-setup">QuickBooks Setup</a></li>
                        <li><a className="services-item" href="/#/services/quickbooks-training">QuickBooks Training</a></li>
                    </ul>
                </div>
                <div className="tax-services">
                    <h2>Tax Services</h2>
                    <ul className="no-bullet-indent services-list">
                        <li><a className="services-item" href="/#/services/individual-taxes">Individual Taxes</a></li>
                        <li><a className="services-item" href="/#/services/business-taxes">Business Taxes</a></li>
                        <li><a className="services-item" href="/#/services/nonprofit-taxes">Nonprofit Taxes</a></li>
                        <li><a className="services-item" href="/#/services/hoa-taxes">HOA Taxes</a></li>
                        <li><a className="services-item" href="/#/services/trust-taxes">Trust Taxes</a></li>
                        <li><a className="services-item" href="/#/services/tax-problems">Tax Problems</a></li>
                    </ul>
                </div>
                <div className="other-services">
                    <h2>Other Services</h2>
                    <ul className="no-bullet-indent services-list">
                        <li><a className="services-item" href="/#/services/litigation-support-and-forensic-accounting">Litigation Support & Forensic Accounting</a></li>
                        <li><a className="services-item" href="/#/services/nonprofit-accounting">Nonprofit Accounting</a></li>
                        <li><a className="services-item" href="/#/services/trust-accounting">Trust Accounting</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServicesIndex;
function ServicesIndex() {
    return (
        <div>
            <div className="services-container">
                <div className="business-services">
                    <h2>Business Services</h2>
                    <ul className="no-bullet-indent">
                        <li><a className="services-item" href="/services/bookkeeping">Bookkeeping</a></li>
                        <li><a className="services-item" href="">Payroll</a></li>
                        <li><a className="services-item" href="">Financial Statements</a></li>
                        <li><a className="services-item" href="">New Business Formation</a></li>
                        <li><a className="services-item" href="">Forensic Accounting</a></li>
                    </ul>
                </div>
                <div className="tax-services">
                    <h2>Tax Services</h2>
                    <ul className="no-bullet-indent">
                        <li><a className="services-item" href="">Tax Preparation</a></li>
                        <li><a className="services-item" href="">Tax Planning</a></li>
                        <li><a className="services-item" href="">Tax Problems</a></li>
                    </ul>
                </div>
                <div className="quickbooks-services">
                    <h2>QuickBooks Services</h2>
                    <ul className="no-bullet-indent">
                        <li><a className="services-item" href="">QuickBooks Setup</a></li>
                        <li><a className="services-item" href="">QuickBooks Training</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServicesIndex;
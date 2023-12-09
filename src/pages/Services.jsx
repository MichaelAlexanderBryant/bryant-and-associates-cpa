import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function Services() {
    return (
        <div>
            <NavigationBar />
            <div className="content-container">
                <h1>Services</h1>
                <div className="services-container">
                    <div className="business-services">
                        <h2>Business Services</h2>
                        <ul>
                            <li>Bookkeeping</li>
                            <li>Payroll</li>
                            <li>Financial Statements</li>
                            <li>New Business Formation</li>
                            <li>Forensic Accounting</li>
                        </ul>
                    </div>
                    <div className="tax-services">
                        <h2>Tax Services</h2>
                        <ul>
                            <li>Tax Preparation</li>
                            <li>Tax Planning</li>
                            <li>Tax Problems</li>
                        </ul>
                    </div>
                    <div className="quickbooks-services">
                        <h2>QuickBooks Services</h2>
                        <ul>
                            <li>QuickBooks Setup</li>
                            <li>QuickBooks Training</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services;
function DashboardIndex() {
    return (
        <>
            <div className="dashboard-home-content-container">
                <div className="recent-documents-container">
                    <h2>Recent Documents</h2>
                    <p>No recent documents.</p>
                    <p><a href="/#/dashboard/documents" className="dashboard-index-link">View more documents</a></p>
                </div>
                <div className="recent-payments-container">
                    <h2>Recent Payments</h2>
                    <p>No recent payments.</p>
                    <p><a href="/#/dashboard/payment" className="dashboard-index-link">View more payments</a></p>
                </div>
            </div>

        </>
    )
}

export default DashboardIndex;
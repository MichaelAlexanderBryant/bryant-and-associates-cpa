import DashboardNav from "../../../components/DashboardNav";

function DashboardHome() {
    return (

                    
        <div className="dashboard-grid">
            <DashboardNav />
            <div className="dashboard-content-container">
                <div className="dashboard-content">
                    <a href="/#" className="nav-title title">
                        <div><h1 className="bryant-title">Bryant & Associates <span className="cpa-title">CPA</span></h1></div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome;
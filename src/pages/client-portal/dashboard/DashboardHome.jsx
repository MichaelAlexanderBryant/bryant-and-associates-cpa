import { Outlet } from "react-router-dom";
import DashboardNav from "../../../components/DashboardNav";

function DashboardHome() {
    return (
        <div className="dashboard-grid-rows">
            <div className="dashboard-content">
                <a href="/#" className="nav-title title">
                    <div className="dashboard-title"><h1 className="bryant-title">Bryant & Associates <span className="cpa-title">CPA</span></h1></div>
                </a>
            </div>     
            <div className="dashboard-grid-columns">
                <DashboardNav />
                <div className="dashboard-content-container">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardHome;
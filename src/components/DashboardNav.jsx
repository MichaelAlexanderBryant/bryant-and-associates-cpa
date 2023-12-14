import home from "../assets/home.svg"
import documents from "../assets/documents.svg"
import payment from "../assets/payment.svg"
import profile from "../assets/profile.svg"
import settings from "../assets/settings.svg"
import logOut from "../assets/log-out.svg"

function DashboardNav() {
    return (
        <div className="dashboard-nav-container">
            <ul className="dashboard-nav-list">
                <li className="no-bullet-indent ">
                    <a href="/#/dashboard" className="dashboard-nav-link">
                        <div className="flex-align">
                            <img src={home} className="dashboard-icon"/><span className="">Home</span>
                        </div>
                    </a>
                </li>
                <li className="no-bullet-indent ">
                    <a href="/#/dashboard/documents" className="dashboard-nav-link">
                        <div className="flex-align">
                            <img src={documents} className="dashboard-icon"/><span className="">Documents</span>
                        </div>
                    </a>
                </li>
                <li className="no-bullet-indent ">
                    <a href="/#/dashboard/payment" className="dashboard-nav-link">
                        <div className="flex-align">
                            <img src={payment} className="dashboard-icon"/><span className="">Make Payment</span>
                        </div>
                    </a>
                </li>
                <li className="no-bullet-indent ">
                    <a href="/#/dashboard/profile" className="dashboard-nav-link">
                        <div className="flex-align">
                            <img src={profile} className="dashboard-icon"/><span className="">My Profile</span>
                        </div>
                    </a>
                </li>
                <li className="no-bullet-indent ">
                    <a href="/#/dashboard/settings" className="dashboard-nav-link">
                        <div className="flex-align">
                            <img src={settings} className="dashboard-icon"/><span className="">Settings</span>
                        </div>
                    </a>
                </li>
                <li className="no-bullet-indent ">
                    <a href="/#/log-in" className="dashboard-nav-link">
                        <div className="flex-align">
                            <img src={logOut} className="dashboard-icon"/><span className="">Log Out</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default DashboardNav;
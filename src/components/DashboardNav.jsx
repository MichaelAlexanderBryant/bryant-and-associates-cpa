import home from "../assets/home.svg"
import documents from "../assets/documents.svg"
import payment from "../assets/payment.svg"
import profile from "../assets/profile.svg"
import settings from "../assets/settings.svg"

function DashboardNav() {
    return (
        <div className="dashboard-nav-container">
            <ul className="dashboard-nav-list">
                <li className="no-bullet-indent flex-align"><img src={home} className="dashboard-icon"/><span>Home</span></li>
                <li className="no-bullet-indent flex-align"><img src={documents} className="dashboard-icon"/><span>Documents</span></li>
                <li className="no-bullet-indent flex-align"><img src={payment} className="dashboard-icon"/><span>Make Payment</span></li>
                <li className="no-bullet-indent flex-align"><img src={profile} className="dashboard-icon"/><span>My Profile</span></li>
                <li className="no-bullet-indent flex-align"><img src={settings} className="dashboard-icon"/><span>Settings</span></li>
            </ul>
        </div>
    )
}

export default DashboardNav;
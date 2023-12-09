import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import taxPrep from "../assets/tax-prep-banner.jpg"
import { Outlet } from "react-router-dom";

function Services() {
    return (
        <div>
            <NavigationBar />
            <img src={taxPrep} className="homepage-photo"/>
            <div className="content-container">
                <h1>Services</h1>
                <div className="services-container">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services;
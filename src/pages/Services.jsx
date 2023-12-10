import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import taxPrep from "../assets/tax-prep-banner.jpg"
import { Outlet } from "react-router-dom";

function Services() {
    return (
        <div>
            <NavigationBar page="services" />
            <img src={taxPrep} className="homepage-photo"/>
            <div className="content-container">
                <h1 className="title">Services</h1>
                <div className="services-container">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services;
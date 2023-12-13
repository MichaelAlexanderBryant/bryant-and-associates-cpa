import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import taxPrep from "../../assets/tax-prep-banner.jpg"
import taxPrep800 from "../../assets/tax-prep-banner-800w.jpg"
import { Outlet } from "react-router-dom";

function Services() {
    return (
        <div>
            <NavigationBar page="services" />
            <picture>
                <source media="(max-width: 800px)" srcSet={taxPrep800} sizes="800px"/>
                <img src={taxPrep} className="homepage-photo"/>
            </picture>
            <div className="content-container">
                <div className="services-container">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services;
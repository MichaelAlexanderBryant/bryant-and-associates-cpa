import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import personCalc from "../../assets/person-calc-banner.jpg"
import personCalc800 from "../../assets/person-calc-banner-800w.jpg"
import { Outlet } from "react-router-dom";
import { useState } from "react";

function About() {
    let [hamburgerOpen, setHamburgerOpen] = useState(false);

    function passHamburgerOpen(status) {
        setHamburgerOpen(status);
    }

    return (
        <div className={hamburgerOpen? "hide-overflow about-outer-container": "about-outer-container"}>
            <NavigationBar passHamburgerOpen={passHamburgerOpen} page="about"/>
            <picture>
                <source media="(max-width: 800px)" srcSet={personCalc800} sizes="800px"/>
                <img src={personCalc} className="homepage-photo"/>
            </picture>
            <div className="content-container">
                <div className="about-container">
                    <Outlet />
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default About;
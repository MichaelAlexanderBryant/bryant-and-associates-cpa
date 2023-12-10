import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import personCalc from "../assets/person-calc-banner.jpg"
import { Outlet } from "react-router-dom";

function About() {
    return (
        <>
            <NavigationBar page="about"/>
            <img src={personCalc} className="homepage-photo"/>
            <div className="content-container">
                <div className="about-container">
                    <Outlet />
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default About;
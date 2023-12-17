import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import personCalc from "../../assets/person-calc-banner.jpg"
import personCalc800 from "../../assets/person-calc-banner-800w.jpg"
import { Outlet } from "react-router-dom";

function About() {
    return (
        <>
            <NavigationBar page="about"/>
            <picture>
                <source media="(max-width: 800px)" srcSet={personCalc800} sizes="800px"/>
                <img src={personCalc} className="homepage-photo"/>
            </picture>
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
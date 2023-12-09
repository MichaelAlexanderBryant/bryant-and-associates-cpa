import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import personCalc from "../assets/person-calc-banner.jpg"
import { Outlet } from "react-router-dom";

function About() {
    return (
        <>
            <NavigationBar/>
            <img src={personCalc} className="homepage-photo"/>
            <div className="content-container">
                <h1>About</h1>
                <Outlet />
            </div>
            <Footer/>
        </>
    )
}

export default About;
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import personCalc from "../assets/person-calc-banner.jpg"

function About() {
    return (
        <>
            <NavigationBar/>
            <img src={personCalc} className="homepage-photo"/>
            <div className="content-container">
                <h1>About</h1>
                <p>We'd like to provide you with an opportunity to get to know our firm's values as well as a little about our staff before you come to see us. 
                    The following pages should give you an idea of what we're all about. We hope you enjoy them!</p>
                <h2>Our Values</h2>
                <p>Our firm provides outstanding service to our clients because of our dedication to the three underlying principles.</p>
                <h2>Our Team</h2>
                <p>Bryant & Associates CPA is a full-service CPA firm licensed in California.</p>
            </div>
            <Footer/>
        </>
    )
}

export default About;
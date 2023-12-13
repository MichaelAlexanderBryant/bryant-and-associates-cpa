import NavigationBar from "../components/NavigationBar";
import logIn from "../assets/log-in.jpg";
import logIn800 from "../assets/log-in-800w.jpg";
import Footer from "../components/Footer";

function LogIn() {
    return (
        <>
            <NavigationBar page="log-in"/>
            <picture>
                <source media="(max-width: 800px)" srcSet={logIn800} sizes="800px"/>
                <img src={logIn} className="homepage-photo"/>
            </picture>
            <div className="content-container">
                <h1>Log In</h1>
            </div>
            <Footer/>
        </>
    )
}

export default LogIn;
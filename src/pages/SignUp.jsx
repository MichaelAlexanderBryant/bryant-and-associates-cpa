import NavigationBar from "../components/NavigationBar";
import logIn from "../assets/log-in.jpg";
import logIn800 from "../assets/log-in-800w.jpg";
import Footer from "../components/Footer";

function SignUp() {
    return (
        <>
            <NavigationBar page="log-in"/>
            <picture>
                <source media="(max-width: 800px)" srcSet={logIn800} sizes="800px"/>
                <img src={logIn} className="homepage-photo"/>
            </picture>
            <div className="content-container">
                <h1>Client Portal</h1>
                <div className="log-in-container">
                    <div className="form-container">
                        <form className="log-in-form">
                            <label className="log-in-username">
                                Your name:
                                <input type="text" placeholder="First and last"/>
                            </label>
                            <label className="log-in-username">
                                Email:
                                <input type="email"/>
                            </label>
                            <label className="log-in-password">
                                Password:
                                <input type="password" />
                            </label>
                            <label className="log-in-password">
                                Re-enter Password:
                                <input type="password" />
                            </label>
                            <input type="submit" value="Create Account" />
                        </form>
                        <div className="log-in-subtext">Already have an account? <a href="/#/log-in" className="create-account-link">Log in.</a></div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default SignUp;
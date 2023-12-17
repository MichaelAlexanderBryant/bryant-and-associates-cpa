import NavigationBar from "../../../components/NavigationBar";
import logIn from "../../../assets/log-in.jpg";
import logIn800 from "../../../assets/log-in-800w.jpg";
import Footer from "../../../components/Footer";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

function LogIn() {

    let {logInUser} = useContext(AuthContext);

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
                        <form className="log-in-form" onSubmit={logInUser}>
                            <label className="log-in-username">
                                Email:
                                <input type="email" name="email" className="email-input" placeholder="" required/>
                                <div className="error-message">Please enter a valid email address.</div>
                            </label>
                            <label className="log-in-password">
                                Password:
                                <input type="password" name="password" className="password-input" required/>
                            </label>
                            <input type="submit" value="Log In" className="log-in-button"/>
                        </form>
                        <div className="log-in-subtext">
                            <p><a href="/#/forgot-password" className="forgot-password-link">Forgot Your Password?</a></p>
                            <p className="sign-up-subtext">New to Bryant & Associates CPA? <a href="/#/sign-up" className="create-account-link">Create an account.</a></p>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default LogIn;
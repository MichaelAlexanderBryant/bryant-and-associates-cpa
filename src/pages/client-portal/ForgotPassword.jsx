import NavigationBar from "../../components/NavigationBar";
import logIn from "../../assets/log-in.jpg";
import logIn800 from "../../assets/log-in-800w.jpg";
import Footer from "../../components/Footer";

function ForgotPassword() {
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
                                Email:
                                <input type="email"/>
                            </label>
                            <input type="submit" value="Reset Password" />
                        </form>
                        <p>Nevermind I remember. <a href="/#/log-in" className="create-account-link">Log in.</a></p>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default ForgotPassword;
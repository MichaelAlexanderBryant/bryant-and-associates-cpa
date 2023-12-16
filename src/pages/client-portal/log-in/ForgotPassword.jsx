import NavigationBar from "../../../components/NavigationBar";
import logIn from "../../../assets/log-in.jpg";
import logIn800 from "../../../assets/log-in-800w.jpg";
import Footer from "../../../components/Footer";
import { useNavigate } from "react-router-dom";
import changePassword from "../../../utils/api/ChangePassword";

function ForgotPassword() {

    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        let response = await changePassword(e);
        if (response.status === 200) {
            navigate('/log-in');
        }
    }
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
                        <form className="log-in-form" onSubmit={onSubmit}>
                            <label className="log-in-username">
                                Email:
                                <input type="email"/>
                            </label>
                            <input type="submit" value="Reset Password" className="reset-password-button"/>
                        </form>
                        <p><a href="/#/log-in" className="create-account-link">Back to log in.</a></p>
                    </div>
                </div>  
            </div>
            <Footer/>
        </>
    )
}

export default ForgotPassword;
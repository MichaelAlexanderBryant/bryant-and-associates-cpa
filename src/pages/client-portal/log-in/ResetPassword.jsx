import NavigationBar from "../../../components/NavigationBar";
import logIn from "../../../assets/log-in.jpg";
import logIn800 from "../../../assets/log-in-800w.jpg";
import Footer from "../../../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import postNewPassword from "../../../utils/api/PostNewPassword";

function ResetPassword() {

    let location = useLocation();
    location = location.pathname.split("/");

    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        let response = await postNewPassword(e,location[2],location[3]);
        console.log(response);
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
                                New Password:
                                <input type="password"/>
                            </label>
                            <label className="log-in-username">
                                Re-enter New Password:
                                <input type="password"/>
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

export default ResetPassword;
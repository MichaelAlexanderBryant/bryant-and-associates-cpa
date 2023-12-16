import NavigationBar from "../../../components/NavigationBar";
import logIn from "../../../assets/log-in.jpg";
import logIn800 from "../../../assets/log-in-800w.jpg";
import Footer from "../../../components/Footer";
import { useNavigate } from "react-router-dom";
import createAccount from "../../../utils/api/CreateAccount";

function SignUp() {
    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        let response = await createAccount(e);
        if (response.status === 204) {
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
                                First name:
                                <input type="text" name="first_name"/>
                            </label>
                            <label className="log-in-username">
                                Last name:
                                <input type="text" name="last_name"/>
                            </label>
                            <label className="log-in-username">
                                Email:
                                <input type="email" name="email"/>
                            </label>
                            <label className="log-in-password">
                                Password:
                                <input type="password" name="password1"/>
                            </label>
                            <label className="log-in-password">
                                Re-enter Password:
                                <input type="password" name="password2"/>
                            </label>
                            <input type="submit" value="Create Account" className="create-account-button" />
                        </form>
                        <p>Already have an account? <a href="/#/log-in" className="create-account-link">Log in.</a></p>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default SignUp;
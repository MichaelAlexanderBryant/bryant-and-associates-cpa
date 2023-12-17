import email from "../assets/email.svg"
import telephone from "../assets/telephone.svg"
import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";

function NavigationBar({page}) {

    NavigationBar.propTypes = {
        page: PropTypes.string
    };

    NavigationBar.defaultProps = {
        page: "home"
    };

    let location = useLocation();
    location = location["pathname"].split("/")[1];
    const clientPortalPaths = ['log-in', 'forgot-password', 'sign-up','reset-password'];

    return (
        <>
        <div className="header-container header-top">
            <ul className="header-email-phone no-bullet-indent content-container">
                <li>
                    <img className="nav-icon" src={email}/>
                    <a className="nav-email-telephone-num" href="mailto:socalcpa123@gmail.com">socalcpa123@gmail.com</a>
                </li>
                <li>
                    <img className="nav-icon" src={telephone}/>
                    <a className="nav-email-telephone-num" href="tel:7602895078">(760) 289-5078</a>
                </li>
            </ul>
        </div>
        <div className="content-container">
            <div className="name-navbar-container">
                <a href="/#" className="nav-title title"><div><h1 className="bryant-title">Bryant & Associates <span className="cpa-title">CPA</span></h1></div></a>
                <div className="navbar-container">
                    <ul className="no-bullet-indent">
                        <li className="navbar-item"><a href="/#" className={ location['pathname'] == '/' ?" active-page" : null}>Home</a></li>
                        <li className="navbar-item"><a href="/#/services" className={ location['pathname'] == '/services' ?" active-page" : null}>Services</a></li>
                        <li className="navbar-item"><a href="/#/about" className={ location['pathname'] == '/about' ?" active-page" : null}>About</a></li>
                        <li className="navbar-item"><a href="/#/contact" className={ location['pathname'] == '/contact' ?" active-page" : null}>Contact</a></li>
                        <li><a href="/#/log-in" className="nav-client-portal-decoration">
                            <div className={ clientPortalPaths.includes(location) ? "nav-client-portal-active" : "nav-client-portal"}>
                                Client Portal
                            </div></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavigationBar;
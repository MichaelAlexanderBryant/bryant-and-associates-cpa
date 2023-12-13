import email from "../assets/email.svg"
import telephone from "../assets/telephone.svg"
import PropTypes from 'prop-types'

function NavigationBar({page}) {

    NavigationBar.propTypes = {
        page: PropTypes.string
    };

    NavigationBar.defaultProps = {
        page: "home"
    };

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
                    
                        {page == "home" ?

                            <ul className="no-bullet-indent">
                                <li className="navbar-item"><a href="/#" className="active-page">Home</a></li>
                                <li className="navbar-item"><a href="/#/about">About</a></li>
                                <li className="navbar-item"><a href="/#/services">Services</a></li>
                                <li className="navbar-item"><a href="/#/contact">Contact</a></li>
                                <li><a href="/#/log-in" className="nav-client-portal-decoration"><div className="nav-client-portal">Client Portal</div></a></li>
                            </ul> :

                            page == "about" ?

                            <ul className="no-bullet-indent">
                                <li className="navbar-item"><a href="/#">Home</a></li>
                                <li className="navbar-item"><a href="/#/about" className="active-page">About</a></li>
                                <li className="navbar-item"><a href="/#/services">Services</a></li>
                                <li className="navbar-item"><a href="/#/contact">Contact</a></li>
                                <li><a href="/#/log-in" className="nav-client-portal-decoration"><div className="nav-client-portal">Client Portal</div></a></li>
                            </ul> :

                            page == "services" ?

                            <ul className="no-bullet-indent">
                                <li className="navbar-item"><a href="/#">Home</a></li>
                                <li className="navbar-item"><a href="/#/about">About</a></li>
                                <li className="navbar-item"><a href="/#/services" className="active-page">Services</a></li>
                                <li className="navbar-item"><a href="/#/contact">Contact</a></li>
                                <li><a href="/#/log-in" className="nav-client-portal-decoration"><div className="nav-client-portal">Client Portal</div></a></li>
                            </ul> :

                            page == "contact" ?

                            <ul className="no-bullet-indent">
                                <li className="navbar-item"><a href="/#">Home</a></li>
                                <li className="navbar-item"><a href="/#/about">About</a></li>
                                <li className="navbar-item"><a href="/#/services">Services</a></li>
                                <li className="navbar-item"><a href="/#/contact" className="active-page">Contact</a></li>
                                <li><a href="/#/log-in" className="nav-client-portal-decoration"><div className="nav-client-portal">Client Portal</div></a></li>
                            </ul> :

                            <ul className="no-bullet-indent">
                                <li className="navbar-item"><a href="/#">Home</a></li>
                                <li className="navbar-item"><a href="/#/about">About</a></li>
                                <li className="navbar-item"><a href="/#/services">Services</a></li>
                                <li className="navbar-item"><a href="/#/contact">Contact</a></li>
                                <li><a href="/#/log-in" className="nav-client-portal-decoration"><div className="nav-client-portal">Client Portal</div></a></li>
                            </ul>


                        }
                </div>
            </div>
        </div>
        </>
    )
}

export default NavigationBar;
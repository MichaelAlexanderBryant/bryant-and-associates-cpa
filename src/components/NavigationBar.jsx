import email from "../assets/email.svg"
import telephone from "../assets/telephone.svg"

function NavigationBar() {
    return (
        <>
        <div className="header-container">
            <ul className="header-email-phone no-bullet-indent content-container">
                <li>
                    <img className="nav-icon" src={email}/>
                    socalcpa123@gmail.com
                </li>
                <li>
                    <img className="nav-icon" src={telephone}/>
                    (760) 289-5078
                </li>
            </ul>
        </div>
        <div className="content-container">
            <div className="name-navbar-container">
                <h1>Bryant & Associates CPA</h1>
                <div className="navbar-container">
                    <ul className="no-bullet-indent">
                        <li className="navbar-item"><a href="/">Home</a></li>
                        <li className="navbar-item"><a href="/about">About</a></li>
                        <li className="navbar-item"><a href="/services">Services</a></li>
                        <li className="navbar-item"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavigationBar;
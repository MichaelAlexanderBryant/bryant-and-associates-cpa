import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import helpImage from "../assets/home-page-banner.jpg"
import helpImage800 from "../assets/home-page-banner-800w.jpg"
import knowUs from "../assets/know-us.svg"
import help from "../assets/get-help.svg"
import contactUs from "../assets/contact.svg"

function Home() {
    return (
        <div>
            <NavigationBar page={"home"} />
            <picture>
                <source media="(max-width: 800px)" srcSet={helpImage800} sizes="800px"/>
                <img src={helpImage} className="homepage-photo"/>
            </picture>
            <div className="content-container mobile-no-padding">
                <div className="homepage-container">
                    <div className="homepage-box-container">
                        <a href="/#/about" className="clickable-box">
                            <div className="homepage-box1">
                                <img src={knowUs} className="home-icon box-icon"/>
                                <h2 className="homepage-box-title">Get to Know Us</h2>
                                <p>Our team has been helping clients in the San Diego, California area for years. Find out what makes us tick...</p>
                            </div>
                        </a>
                        <a href="/#/services" className="clickable-box">
                            <div className="homepage-box2">
                                <img src={help} className="home-icon box-icon"/>
                                <h2 className="homepage-box-title">Get Help</h2>
                                <p>We offer services for business owners, executives, and individuals. Find out how we can help...</p>
                            </div>
                        </a>
                        <a href="/#/contact" className="clickable-box">
                            <div className="homepage-box3">
                                <img src={contactUs} className="home-icon box-icon"/>
                                <h2 className="homepage-box-title">Get in Touch</h2>
                                <ul className="no-bullet-indent">
                                    <li className="get-in-touch-item">(760) 289-5078</li>
                                    <li className="get-in-touch-item">socalcpa123@gmail.com</li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div className="homepage-intro-container">
                        <h2>San Diego County, California, Bryant & Associates CPA</h2>
                        <p>We are a full-service accounting firm licensed in California. We offer a broad range of services for business owners, executives, and independent
                            professionals. We are affordable, experienced, and friendly.
                        </p>
                        <p>Please call us today - we'll be happy to offer you an initial consultation. Thanks for visiting!</p>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Home;
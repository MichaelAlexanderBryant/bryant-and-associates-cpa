import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import helpImage from "../assets/need-help-banner.jpg"

function Home() {
    return (
        <div>
            <NavigationBar />
            <img src={helpImage} className="homepage-photo"/>
            <div className="content-container">
                <div className="homepage-intro-container">
                    <p>We are a full-service accounting firm licensed in California. We offer a broad range of services for business owners, executives, and independent
                        professionals. We are affordable, experienced, and friendly.
                    </p>
                    <p>Please call us today - we'll be happy to offer you an initial consultation. Thanks for visiting!</p>
                </div>
                <div className="homepage-box-container">
                    <a href="/about" className="clickable-box">
                        <div className="homepage-box">
                            <h2>Get to Know Us</h2>
                            <p>Our team has been helping clients in the San Diego, California area for years. Find out what makes us tick...</p>
                        </div>
                    </a>
                    <a href="/services" className="clickable-box">
                        <div className="homepage-box">
                            <h2>Get Help</h2>
                            <p>We offer services for business owners, executives, and individuals. Find out how we can help...</p>
                        </div>
                    </a>
                    <a href="/contact" className="clickable-box">
                        <div className="homepage-box">
                            <h2>Get in Touch</h2>
                            <ul className="no-bullet-indent">
                                <li className="get-in-touch-item">(760) 289-5078</li>
                                <li className="get-in-touch-item">socalcpa123@gmail.com</li>
                            </ul>
                        </div>
                    </a>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Home;
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import contactUs from "../../assets/contact-banner.jpg"
import contactUs800 from "../../assets/contact-banner-800w.jpg"

function Contact() {
    return (
        <>
            <NavigationBar page="contact" />
            <picture>
                <source media="(max-width: 800px)" srcSet={contactUs800} sizes="800px"/>
                <img src={contactUs} className="homepage-photo"/>
            </picture>
            <div className="content-container">
                <h1>Contact</h1>
                <div className="contact-content">
                    <div className="contact-left-column">
                        <div>
                            <ul className="no-bullet-indent">
                                <li className="contact-item contact-name">Bryant & Associates CPA</li>
                                <li className="contact-item">3800 Oceanic Drive, Suite 116</li>
                                <li className="contact-item">Oceanside, CA 92056</li>
                                <li className="contact-item"><a className="contact-email-telephone" href="mailto:socalcpa123@gmail.com">socalcpa123@gmail.com</a></li>
                                <li className="contact-item"><a className="contact-email-telephone" href="tel:7602895078">(760) 289-5078</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="hours-container">
                                <div>
                                    <ul className="no-bullet-indent">
                                        <li className="contact-item">Monday</li>
                                        <li className="contact-item">Tuesday</li>
                                        <li className="contact-item">Wednesday</li>
                                        <li className="contact-item">Thursday</li>
                                        <li className="contact-item">Friday</li>
                                        <li className="contact-item">Saturday</li>
                                        <li className="contact-item">Sunday</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="no-bullet-indent">
                                        <li className="contact-item">8 AM - 6 PM</li>
                                        <li className="contact-item">8 AM - 6 PM</li>
                                        <li className="contact-item">8 AM - 6 PM</li>
                                        <li className="contact-item">8 AM - 6 PM</li>
                                        <li className="contact-item">8 AM - 5 PM</li>
                                        <li className="contact-item">By Appointment</li>
                                        <li className="contact-item">Closed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe className="g-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6676.799162943334!2d-117.30868876983644!3d33.20361920183526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc710d8c4fffff%3A0x2362caf46a940d5b!2s3800%20Oceanic%20Dr%20%23116%2C%20Oceanside%2C%20CA%2092056!5e0!3m2!1sen!2sus!4v1702139249549!5m2!1sen!2sus"></iframe>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default Contact;








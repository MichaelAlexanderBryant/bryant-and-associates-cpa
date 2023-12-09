import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function Contact() {
    return (
        <>
            <NavigationBar/>
            <div className="content-container">
                <h1>Contact</h1>
                <div>
                    <ul className="no-bullet-indent">
                        <li className="contact-item contact-name">Bryant & Associates CPA</li>
                        <li className="contact-item">3800 Oceanic Drive, Suite 116</li>
                        <li className="contact-item">Oceanside, CA 92056</li>
                        <li className="contact-item">socalcpa123@gmail.com</li>
                        <li className="contact-item">Phone: (760) 289-5078</li>
                    </ul>
                </div>
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
            <Footer/>
        </>
    )
}

export default Contact;








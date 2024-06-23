import React from 'react'
import './ContactUs.css'
import Map from './Map'; 

const ContactUs = () => {
    return (
        <>
            <div className="contact-page">
                <header className="contact-header">
                    <div className="overlay">
                        <h1>Contact</h1>
                        <p>Contact Us</p>
                    </div>
                </header>

                <section className="contact-info-section">
                    <h2>Get in touch with us!</h2>
                    <div className="contact-info-icons">
                        <div className="info-icon">
                            <i className="fas fa-phone"></i>
                            <p>+233543201893</p>
                        </div>
                        <div className="info-icon">
                            <i className="fas fa-envelope"></i>
                            <p>info@giindia.com</p>
                        </div>
                        <div className="info-icon">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>Global Infoventures Pvt. Ltd.<br />
                                H-65 Sector 63, Noida</p>
                        </div>
                    </div>
                </section>

                <section className="contact-form-section">
                    <form className="contact-form">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Phone" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </section>

                <section className="social-media-section">
                    <h2>Connect with us</h2>
                    <div className="social-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </section>

                <footer className="contact-footer">
                    <div className="map">
                        <Map />
                    </div>
                    <div className="footer-content">
                        <h2>Your Company</h2>
                        <p>Footer text and links</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default ContactUs

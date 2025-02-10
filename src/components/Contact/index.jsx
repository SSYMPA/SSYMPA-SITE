import { useEffect } from "react";
import "./index.scss";

const Contact = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".reveal");
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="contact-container">
            <h1 className="contact-heading reveal">Contact Us</h1>
            <p className="contact-description reveal">
                We’re here to assist you! Reach out to us through our official contact numbers.
            </p>

            <div className="contact-box reveal">
                <h2 className="contact-subheading">Official Contact Numbers</h2>
                
                <p className="contact-number">📞 9790581600</p>
                <a href="tel:9790581600" className="call-btn">Call Now</a>

                <p className="contact-number">📞 7305952467</p>
                <a href="tel:7305952467" className="call-btn">Call Now</a>
            </div>

            <div className="faq-section reveal">
                <h2 className="faq-heading">Frequently Asked Questions</h2>
                <div className="faq-item">
                    <p className="faq-question">How can I contact customer support?</p>
                    <p className="faq-answer">You can reach us via our official numbers listed above.</p>
                </div>
                <div className="faq-item">
                    <p className="faq-question">What are your support hours?</p>
                    <p className="faq-answer">Monday to Saturday, 9 AM to 7 PM.</p>
                </div>
            </div>

            <button className="scroll-to-top reveal">⬆ Scroll to Top</button>
        </div>
    );
};

export default Contact;

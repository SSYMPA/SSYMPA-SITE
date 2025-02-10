import "./index.scss";

const Location = () => {
    return (
        <div className="location-container">
            <h1 className="location-heading">Visit Our Office</h1>
            
            <p className="location-description">
                We are located in the heart of <strong>Coimbatore</strong>, at <strong>Cross Cut Road</strong>, one of the busiest commercial areas in the city.
                Our office is easily accessible via <strong>public transport, taxis, and private vehicles</strong>.
            </p>

            <iframe
                className="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2695245727554!2d76.95454877499335!3d11.017039954015236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859bdf90e4cf3%3A0xdf560fb7c2d991f0!2sCross%20Cut%20Rd%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715600000000"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="location-details">
                <h2>📍 Address</h2>
                <p><strong>SSYMPA</strong><br /> Cross Cut Road, Coimbatore, Tamil Nadu, India</p>

                <h2>🕒 Office Hours</h2>
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>

                <h2> 🚀 Nearby Landmarks</h2>
                <ul>
                    <li>Gandhipuram Bus Stand - 5 mins away</li>
                    <li>Brookefields Mall - 10 mins away</li>
                    <li>Coimbatore Railway Station - 15 mins away</li>
                    <li>Avinashi Road - 8 mins away</li>
                    <li>Fun Republic Mall - 12 mins away</li>
                </ul>
            </div>
        </div>
    );
};

export default Location;

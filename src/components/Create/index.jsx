import { useState } from "react";
import ssympa from "/src/assets/pngs/ssympa.png"; 
import "./index.scss";

const Create = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        company: "",
        budget: "",
        projectType: "",
        technology: "",
        theme: "",
        deadline: "",
        mobileApp: "",
        additionalInfo: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Show Loader

        const subject = encodeURIComponent("New Client Requirement Form Submission");
        const body = encodeURIComponent(
            `Client Name: ${formData.name}\n` +
            `Client Email: ${formData.email}\n` +
            `Contact Number: ${formData.contact}\n` +
            `Company Name: ${formData.company}\n` +
            `Budget: ${formData.budget}\n` +
            `Project Type: ${formData.projectType}\n` +
            `Preferred Technology: ${formData.technology}\n` +
            `Theme Preference: ${formData.theme}\n` +
            `Deadline: ${formData.deadline}\n` +
            `Mobile App Required: ${formData.mobileApp}\n` +
            `Additional Info: ${formData.additionalInfo}`
        );

        const mailtoLink = `mailto:ssympa.info@gmail.com,ssympahr@gmail.com,ssympacep@gmail.com?subject=${subject}&body=${body}`;

        // Simulate delay for loader animation
        setTimeout(() => {
            setLoading(false); // Hide Loader
            window.location.href = mailtoLink;
        }, 2000);
    };

    return (
        <div className="create-container">
            {/* Expanding Loader with Logo */}
            {loading && (
                <div className="expanding-loader">
                    <img src={ssympa} alt="SSYMPA Logo" />
                </div>
            )}

            <h1 className="create-heading">Requirements Form</h1>
            <form className="create-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
                <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
                <input type="text" name="contact" placeholder="Contact Number" required onChange={handleChange} />
                <input type="text" name="company" placeholder="Company/Business Name" onChange={handleChange} />
                <input type="text" name="budget" placeholder="Estimated Budget (USD)" required onChange={handleChange} />

                <select name="projectType" required onChange={handleChange}>
                    <option value="">Select Project Type</option>
                    <option value="Website">Website Development</option>
                    <option value="Software">Software Development</option>
                    <option value="IT Service">IT Service</option>
                </select>

                <input type="text" name="technology" placeholder="Preferred Tech Stack (React, Node, etc.)" onChange={handleChange} />
                <input type="text" name="theme" placeholder="Preferred Theme/Style" onChange={handleChange} />
                <input type="date" name="deadline" placeholder="Project Deadline" onChange={handleChange} />

                <select name="mobileApp" required onChange={handleChange}>
                    <option value="">Do you need a Mobile App?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <textarea name="additionalInfo" placeholder="Additional Information" rows="7" onChange={handleChange}></textarea>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Create;

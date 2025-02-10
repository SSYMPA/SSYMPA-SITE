import './index.scss';
import { FaEnvelope } from 'react-icons/fa';

const emails = [
    { address: "ssympa.info@gmail.com", description: "For any clarifications and doubts" },
    { address: "ssympaceo@gmail.com", description: "Contacting directly to the CEO of the company" },
    { address: "ssympahr@gmail.com", description: "For HR-related contacts" },
];

const Mail = () => {
    return (
        <div className="mail-container">
            <h1 className="mail-heading">Company Emails</h1>
            <div className="mail-list">
                {emails.map((email, index) => (
                    <div key={index} className="mail-card">
                        <FaEnvelope className="mail-icon" />
                        <h2 className="mail-address">{email.address}</h2>
                        <p className="mail-description">{email.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mail;

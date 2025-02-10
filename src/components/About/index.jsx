import './index.scss';
import ssympa from '/src/assets/pngs/ssympa.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="logo-container">
                <img src={ssympa} alt="SSYMPA Logo" />
            </div>
            <h1 className="about-heading">About SSYMPA</h1>
            <p>
                <strong>SSYMPA</strong> is a leading software development, IT, and technology solutions company, founded by Sanjeev and Saravanan. As the proud owners, they have built SSYMPA with a mission to deliver efficient, cost-effective, and highly professional services. Unlike other tech companies, SSYMPA is dedicated to providing top-notch solutions at the most affordable rates without compromising on quality.
            </p>
            <p className="slogan">
    <em>&quot;Innovative, Impactful, Reliable Solutions&quot;</em>
</p>


            <p>
                At SSYMPA, we don’t just create solutions; we create revolutionary advancements that transform industries. We believe in cutting-edge technology, innovative problem-solving, and delivering results that matter. Our services are built on the foundation of reliability, scalability, and performance.
            </p>
            <h2>Our Commitment to Excellence</h2>
            <p>
                We take pride in our ability to deliver exceptional quality services that set us apart. Every project we undertake is backed by a team of experienced professionals who bring their expertise and passion for innovation to the table.
            </p>
            <h2>24/7 Customer Support</h2>
            <p>
                Customer satisfaction is at the heart of SSYMPA. Our dedicated support team is available 24/7 to assist you with any technical challenges, project queries, or consultations. We believe in building long-term relationships with our clients by ensuring a seamless experience at every stage.
            </p>
            <h2>Why Choose SSYMPA?</h2>
            <ul>
                <li>✅ Affordable & Professional Services</li>
                <li>✅ Innovative & Future-Ready Solutions</li>
                <li>✅ Reliable, Scalable & Secure Applications</li>
                <li>✅ Customer-Centric Approach with 24/7 Support</li>
                <li>✅ Experienced Tech Experts Delivering Excellence</li>
            </ul>
        </div>
    );
}

export default About;

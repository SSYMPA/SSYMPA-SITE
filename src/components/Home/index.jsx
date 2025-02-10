import './index.scss';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo/index';

const Home = () => {
    const navigate = useNavigate(); // Hook for navigation

    return ( 
        <div className="container home-page">
            <div className="content-box">
                <div className="text-zone">
                    <h1 className="typing-effect">
                        Welcome, <br /> to SSYMPA!
                    </h1>
                    <p className="company-info">
                        SSYMPA is a highly efficient technology solutions provider, 
                        offering cutting-edge <span>Software Development</span>, 
                        <span> Website Development</span>, and <span>IT Services</span>. 
                        We empower businesses with scalable and innovative solutions.
                    </p>
                    <button className="about-btn" onClick={() => navigate('/about')}>
                        About Us
                    </button>
                </div>
            </div>
            <Logo/>
        </div> 
    );
}

export default Home;

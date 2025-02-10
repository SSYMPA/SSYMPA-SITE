import { Link, NavLink } from 'react-router-dom';
import ssympa from '/src/assets/pngs/ssympa.png'; 
import ssympa_name from '/src/assets/pngs/ssympa_name.png';
import home from '/src/assets/pngs/home.svg';
import mail from '/src/assets/pngs/mail.svg';
import call from '/src/assets/pngs/call.svg';
import location from '/src/assets/pngs/location.svg';
import './index.scss';

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      {/* Logo Section */}
      <Link className='logo' to='/'>
        <img className='logo-img' src={ssympa} alt="logo" />
        <div className='logo-name-container'>
          <img className='logo-name' src={ssympa_name} alt='company_name' />
        </div>
      </Link>

      {/* Navigation Section */}
      <div className='back-box'>
        <nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <img src={home} alt="Home" />
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            <img src={call} alt="Contact" />
          </NavLink>
          <NavLink to="/mail" className={({ isActive }) => (isActive ? "active" : "")}>
            <img src={mail} alt="Mail" />
          </NavLink>
          <NavLink to="/location" className={({ isActive }) => (isActive ? "active" : "")}>
            <img src={location} alt="Location" />
          </NavLink>
          <NavLink to="/create" className={({ isActive }) => (isActive ? "active text-button" : "text-button")}>
            Create
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

import { Outlet } from 'react-router-dom';
import ssympa from '/src/assets/pngs/ssympa.png';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return ( 
        <div className="layout-container">
            <Sidebar />
            <div className='page'>
                {/* Watermark logo */}
                <img src={ssympa} alt="SSympa Watermark" className='watermark-logo' />
                <div className='page'>
                <Outlet />
            </div>
            </div>
            <footer className="copyright-bar">
        &copy; {new Date().getFullYear()} SSYMPA. All Rights Reserved.
      </footer>
        </div> 
    );
};

export default Layout;

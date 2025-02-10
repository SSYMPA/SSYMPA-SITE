import './index.scss';
import ssympa from '/src/assets/pngs/ssympa.png';
const Logo = () => {
    return(<div className='logo-container'>
        <img className='solid-logo' src={ssympa} alt="company-logo" />
    </div>)
}

export default Logo;
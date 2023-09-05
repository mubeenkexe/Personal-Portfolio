import Logo from '../assets/imgs/icon.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="w-full h-20 flex items-center justify-center absolute z-50 md:justify-between">
                
                <Link to="/">
                    <img src={Logo} alt="Logo" className='w-11 md:ml-4' />
                </Link>

                <div className='hidden mr-16 space-x-40 font-semibold text-xs md:flex'>

                    <Link to="/aboutme"> About Me </Link>
                    <Link to="/mywork"> My Work</Link>
                    <Link to="/contactme"> Contact Me </Link>

                </div>

            </header>
        </>
    );
};

export default Header;
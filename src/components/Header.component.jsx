import Logo from '../assets/imgs/icon.png'

const Header = () => {
    return (
        <>
            <header className="w-full h-20 flex items-center justify-between absolute z-50">
                <a href="/">
                <img src={Logo} alt="Logo" className='ml-7 w-11' />
                </a>

                <div className='mr-16 space-x-40 font-semibold text-xs'>
                    <a href="aboutme">About Me</a>
                    <a href="mywork">My Work</a>
                    <a href="contactme">Contact Me</a>
                </div>

            </header>
        </>
    );
};

export default Header;
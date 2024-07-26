import './header.css'

function Header() {
    return (<header className='header'>
        <img src='/images/Logo.svg' alt='Little Lemon Logo' />

        <nav>
            <ul className='header-nav'>
                <li className='nav-item'><a href="/home">HOME</a></li>
                <li className='nav-item'><a href="/about">ABOUT</a></li>
                <li className='nav-item'><a href="/menu">MENU</a></li>
                <li className='nav-item'><a href="/reservations">RESERVATIONS</a></li>
                <li className='nav-item'><a href="/online-order">ONLINE ORDER</a></li>
                <li className='nav-item'><a href="/contact">LOGIN</a></li>
            </ul>
        </nav>
    </header>);
}
export default Header;
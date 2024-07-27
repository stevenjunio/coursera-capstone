import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return (<header className='header'>
        <Link to={"/"}>
            <img className='logo' src='/images/Logo.svg' alt='Little Lemon Logo' /></Link>

        <nav className='nav-header'>
            <ul className='header-nav'>
                <li className='nav-item'><Link to={"/"} href="/home">HOME</Link></li>
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
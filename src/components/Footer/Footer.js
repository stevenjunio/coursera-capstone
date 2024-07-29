import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <nav id="footer" className="footer">

                <div className="footer-logo">
                    <img src="/images/Logo.svg" alt="logo" className="footer-logo-img" />
                </div>
                <div>
                    <p className="footer-header">Quick Links</p>
                    <ul className="footer-links">
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/menu">Menu</a>
                        </li>
                        <li>
                            <a href="/reservations">Reservations</a>
                        </li>
                        <li>
                            <a href="/online-order">Online Order</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="footer-header">Contact</p>
                    <ul className="footer-links">
                        <li>
                            <a href="/address">Address</a>
                        </li>
                        <li>
                            <a href="/phone">Phone</a>
                        </li>
                        <li>
                            <a href="/email">Email</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="footer-header">Follow Us</p>
                    <ul id="social-media-links" className="footer-links">
                        <li>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                X{" "}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

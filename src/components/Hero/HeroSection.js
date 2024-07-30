import { Link } from "react-router-dom";
import "./herosection.css";

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-section-inner">
                <div className="hero-text-content">
                    <h1 className="hero-section-title">Little Lemon</h1>
                    <p className="hero-section-subtitle">Chicago</p>
                    <p className="hero-section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link
                        className="cta-btn"
                        style={{ height: "60px", alignContent: "center" }}
                        to={"/reservations"}
                    >
                        Reserve a Table
                    </Link>
                </div>
                <img
                    className="hero-image"
                    src="/images/little-lemons-restaurant-food.png"
                    alt="Little lemons restaurant food"
                />
            </div>
        </section>
    );
}

import { useEffect } from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/Hero/HeroSection";
import RestaurantSpecials from "../../components/RestaurantSpecials/RestaurantSpecials";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function Home() {
    useEffect(() => {
        document.title = "Little Lemon Restaurant - Chicago";
    }, []);

    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <RestaurantSpecials />
                <Testimonials />
                <AboutUs />
            </main>
            <Footer />
        </>
    );
}

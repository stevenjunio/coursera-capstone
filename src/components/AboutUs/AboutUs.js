import "./aboutus.css";

export default function AboutUs() {
    return (
        <section className="about-us-main-container">
            <div className="about-us-text-content">
                <div className="about-us-header">
                    <h1 className="about-us-title">Little Lemon</h1>
                    <p className="about-us-location">Chicago</p>
                </div>
                <p>
                    Our restaurant is a family owned business that has been serving the
                    community for over 20 years. We take pride in providing our customers
                    with the best dining experience possible. Our menu is full of
                    delicious dishes that are sure to please everyone. We use only the
                    freshest ingredients and our chefs are highly skilled in the art of
                    cooking. Come visit us today and see for yourself why we are the best
                    restaurant in town!
                </p>
            </div>
            <div className="about-us-images">
                <img width={300} src="/images/mario-and-adrian-a.png" alt="" />
                <img width={300} src="/images/mario-and-adrian-b.png" alt="" />
            </div>
        </section>
    );
}

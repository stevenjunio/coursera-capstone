import FoodItemCard from "../FoodItemCard/FoodItemCard";
import "./restaurantSpecials.css";

export default function RestaurantSpecials() {
    return (
        <section className="restaurant-specials">
            <div className="specials-header">
                <h2 className="specials-header-text">This weeks specials!</h2>
                <button className="cta-btn online-menu-btn">Online Menu</button>
            </div>
            <FoodItemCard />
        </section>
    );
}

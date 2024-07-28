import FoodItemCard from "../FoodItemCard/FoodItemCard";
import "./restaurantSpecials.css";


const specials = [{
    name: "Greek Salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "/images/greek-salad.png",
    price: 12.99,
},
{
    name: "Brushetta",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "/images/bruschetta.png",
    price: 5.99,
},
{
    name: "Lemon Dessert",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "/images/lemon-dessert.png",
    price: 5.00,
}
]

export default function RestaurantSpecials() {
    return (
        <section className="restaurant-specials">
            <div className="specials-header">
                <h2 className="specials-header-text">This weeks specials!</h2>
                <button className="cta-btn online-menu-btn">Online Menu</button>
            </div>
            <div className="specials-cards">
                {specials.map((special, index) => (
                    <FoodItemCard
                        key={index}
                        name={special.name}
                        description={special.description}
                        image={special.image}
                        price={special.price}
                    />
                ))}</div>
        </section>
    );
}

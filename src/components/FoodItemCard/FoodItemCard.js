import "./foodItemCard.css";



export default function FoodItemCard() {
    return (
        <div className="food-item-card">
            <img src="/images/greek-salad.png" alt="greek salad" />
            <div className="food-card-text-content">
                <h3>Food Item Card</h3>
                <p>
                    The famous greek salad of crispy lettuce, peppers, olives and our
                    Chicago style feta cheese, garnished with crunchy garlic and rosemary
                    croutons.{" "}
                </p>
                <div className="order-delivery-section">
                    <p className="order-delivery">Order a delivery</p>
                    <img width={20} src="/images/scooter-delivery.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

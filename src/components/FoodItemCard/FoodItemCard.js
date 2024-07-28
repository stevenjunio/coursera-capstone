import "./foodItemCard.css";

export default function FoodItemCard({ name, description, image, price }) {
    return (
        <div className="food-item-card">
            <img src={image} alt={name} />
            <div className="food-card-text-content">
                <h3>{name}</h3>
                <p className="food-card-description">{description}</p>
                <div className="order-delivery-section">
                    <p className="order-delivery">Order a delivery</p>
                    <img width={20} src="/images/scooter-delivery.svg" alt="scooter delivery" />
                </div>
                <p className="price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
}

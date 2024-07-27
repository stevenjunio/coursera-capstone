import "./foodItemCard.css"

export default function FoodItemCard() {
    return (
        <div className="food-item-card">
            <img src="/images/greek-salad.png" alt="greek salad" />
            <div className="food-card-text-content">
                <h3>Food Item Card</h3>
                <p>Food Item Card Description</p>
            </div>
        </div>
    );
}

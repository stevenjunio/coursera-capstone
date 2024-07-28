import "./testimonialsCard.css";

export default function TestimonialsCard({
    rating,
    review,
    reviewer,
    reviewerImage,
}) {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i}>&#9733;</span>); // filled star
            } else {
                stars.push(<span key={i}>&#9734;</span>); // empty star
            }
        }
        return stars;
    };

    return (
        <div className="testimonials-card">
            <div className="review-rating">{renderStars(rating)}</div>
            <div className="reviewer-details">
                <img width={50} src={reviewerImage} alt={reviewer} />
                <p>{reviewer}</p>
            </div>
            <p>{review}</p>
        </div>
    );
}

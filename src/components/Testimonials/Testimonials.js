import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import "./testimonials.css";

const testimonials = [
    {
        rating: 5,
        review: "The food here is absolutely delicious! Every bite was a delight.",
        reviewer: "John Doe",
        reviewerImage: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        rating: 5,
        review: "Amazing flavors and great presentation. Highly recommend the pasta!",
        reviewer: "Jane Doe",
        reviewerImage: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        rating: 5,
        review: "Best dining experience I've had in a long time. The desserts are to die for!",
        reviewer: "John Smith",
        reviewerImage: "https://randomuser.me/api/portraits/men/2.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials-main-container">
            <h2 className="testimonials-header">Testimonials</h2>
            <div className="testimonials">
                {testimonials.map((testimonial, index) => {
                    return (
                        <TestimonialsCard
                            key={index}
                            rating={testimonial.rating}
                            review={testimonial.review}
                            reviewer={testimonial.reviewer}
                            reviewerImage={testimonial.reviewerImage}
                        />
                    );
                })}
            </div>
        </section>
    );
}

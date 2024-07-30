import { redirect, useNavigate, } from "react-router-dom";
import { submitAPI } from "../../utils/api";
import "./bookingform.css";
import { useState } from "react";





export default function BookingForm({ availableTimes, setAvailableTimes }) {
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(date, time, guests, occasion);
        navigate("/reservation-confirmed");
        if (submitAPI(e.formData))
            setSubmitted(true);


    };

    return (<>
        <form className="booking-form" onSubmit={handleSubmit}>
            <h1>Book a table</h1>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                style={{ marginBottom: "1rem" }}
                id="res-date"
                value={date}
                onChange={(e) => {
                    setDate(e.currentTarget.value);
                    setAvailableTimes(e.currentTarget.value);
                }}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                style={{ marginBottom: "1rem" }}
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.currentTarget.value)}
            >
                {availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                style={{ marginBottom: "1rem" }}
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.currentTarget.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                style={{ marginBottom: "1rem" }}
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.currentTarget.value)}
            >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input className="cta-btn" type="submit" value="Make Your reservation" style={{ width: "fit-content" }} />
        </form>

    </>);
}

import { useReducer } from "react";
import BookingForm from "../../components/BookingForm/BookingForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const initializeTimes = () => {
    return [
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
    ];
};

function reducer(state, action) {
    //random list of times for dummy purposes

    const timeStart = 16;
    const timeEnd = 21;
    const times = [];

    for (let i = timeStart; i <= timeEnd; i++) {
        if (Math.random() < 0.5) {
            times.push(`${i}:00`);
        }
        if (Math.random() < 0.5) {
            times.push(`${i}:30`);
        }
    }
    const newState = times.filter((time) => time !== "14:00");
    return newState;
}

export default function ReserveTable() {
    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());
    console.log(availableTimes);

    const updateTimes = (date) => {
        console.log(`the date is ${date}`);
        dispatch({ type: "update", payload: date });
    };

    return (
        <>
            <Header />
            <main style={{ minHeight: "54vh" }}>
                <BookingForm
                    availableTimes={availableTimes}
                    setAvailableTimes={updateTimes}
                />
            </main>
            <Footer />
        </>
    );
}


export { initializeTimes }
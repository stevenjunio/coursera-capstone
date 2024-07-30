import { useEffect, useReducer } from "react";
import BookingForm from "../../components/BookingForm/BookingForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { fetchAPI } from "../../utils/api";

const initializeTimes = () => {
    console.log(`random`,);

    return fetchAPI(new Date())
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
    useEffect(() => {
        document.title = "Reserve a table";
    }, []);

    const updateTimes = (date) => {
        console.log(`the date is ${date}`);
        dispatch({ type: "update", payload: date });
    };

    return (
        <>
            <Header />
            <main style={{ minHeight: "50vh" }}>
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
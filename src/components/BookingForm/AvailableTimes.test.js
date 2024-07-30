import { fireEvent, render, screen } from "@testing-library/react";
import { initializeTimes } from "../../pages/Home/ReserveTable";
import BookingForm from "./BookingForm";

test("returns correct intial reservation times", () => {
    const result = initializeTimes();
    expect(result).toEqual([
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
    ]);
}
)

test.skip("updates the available times after changing dates", () => {
    //just checks for this one time, this doesn't actually render when it re-renders
    render(<BookingForm availableTimes={[
        "12:11",
    ]} />);
    const timeInput = screen.getByLabelText(/Choose time/i);

    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: "2023-12-12" } });
    console.log(`the new date`, dateInput)


    console.log(timeInput);

    expect(timeInput.value).not.toEqual("12:11");
}


)
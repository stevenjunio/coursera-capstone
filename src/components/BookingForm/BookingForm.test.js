import { render, screen } from "@testing-library/react"
import BookingForm from "./BookingForm"

test("renderings the booking form header", () => {
    render(<BookingForm availableTimes={[
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
    ]} />)
    expect(screen.getByText("Book a table")).toBeInTheDocument()
})

test("returns correct intial reservation times", function () {

})
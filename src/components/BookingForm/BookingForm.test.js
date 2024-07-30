import { fireEvent, render, screen } from "@testing-library/react"
import BookingForm from "./BookingForm"
import { MemoryRouter, Route, Routes } from "react-router-dom"

test("rendering the booking form header", () => {
    render(<MemoryRouter><BookingForm availableTimes={[
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
    ]} /></MemoryRouter>)
    expect(screen.getByText("Book a table")).toBeInTheDocument()
})

test("users can submit and get redirected to confirmation page", async () => {
    render(
        <MemoryRouter initialEntries={['/booking']}>
            <Routes>
                <Route path="/booking" element={<BookingForm availableTimes={[
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
                ]} setAvailableTimes={jest.fn()} />} />
                <Route path="/reservation-confirmed" element={<div>Booking confirmed</div>} />
            </Routes>
        </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeInput = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionInput = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole("button");

    // Simulate user input
    fireEvent.change(dateInput, { target: { value: '2023-10-10' } });
    fireEvent.change(timeInput, { target: { value: '12:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Check for redirection to confirmation page
    const confirmationMessage = await screen.findByText(/Booking confirmed/i);
    expect(confirmationMessage).toBeInTheDocument();
});
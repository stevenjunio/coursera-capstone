import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function ReservationConfirmed() {
    return (
        <><Header />
            <div className="booking-form-submitted" >
                <h1>Thank you for your reservation</h1>
                <p>Your reservation has been confirmed.</p>
            </div>
            <Footer />
        </>
    );
}
import React, { useState } from "react";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import ConfirmationPopup from "../components/ConfirmationPopup";

const BookingFlow = () => {
  const [step, setStep] = useState(1);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [passengerData, setPassengerData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="booking-container">
      {/* <aside className="sidebar">
        <ul>
          <li className={step === 1 ? "active" : ""}>Select Date and Time</li>
          <li className={step === 2 ? "active" : ""}>Passenger Details</li>
          <li>Booking Summary</li>
        </ul>
      </aside> */}

      <main className="container main-content">
      <div className="hero-banner">
  <div className="hero-content">
    
    {/* LEFT SIDE — LOGO */}
    <img 
      src="https://i.ibb.co/vv11Vmdf/visit-my-sheep-logo-high.webp"      // ← अपना लोगो path दो
      alt="Company Logo"
      className="hero-logo"
    />

    {/* RIGHT SIDE — HEADING + SUBTEXT */}
    <div className="hero-text">
      <h1>Visit My Sheep Transportation</h1>
      <p>Book Your Trip Now!</p>
    </div>

  </div>
</div>


        <div className="flow-card">
          {step === 1 && (
            <StepOne
              selectedTrip={selectedTrip}
              setSelectedTrip={setSelectedTrip}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              goNext={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <StepTwo
              passengerData={passengerData}
              setPassengerData={setPassengerData}
              selectedTrip={selectedTrip}
              selectedDate={selectedDate}
              confirmBooking={() => setShowPopup(true)}
              goBack={() => setStep(1)}
            />
          )}
        </div>
      </main>

      {showPopup && (
        <ConfirmationPopup
          passengerData={passengerData}
          selectedTrip={selectedTrip}
          selectedDate={selectedDate}
          close={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default BookingFlow;

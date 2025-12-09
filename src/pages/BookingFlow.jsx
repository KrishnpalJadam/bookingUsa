// import React, { useState } from "react";
// import StepOne from "../components/StepOne";
// import StepTwo from "../components/StepTwo";
// import ConfirmationPopup from "../components/ConfirmationPopup";

// const BookingFlow = () => {
//   const [step, setStep] = useState(1);
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [passengerData, setPassengerData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     age: "",
//   });
//   const [showPopup, setShowPopup] = useState(false);

//   return (
//     <div className="booking-container">
//       {/* <aside className="sidebar">
//         <ul>
//           <li className={step === 1 ? "active" : ""}>Select Date and Time</li>
//           <li className={step === 2 ? "active" : ""}>Passenger Details</li>
//           <li>Booking Summary</li>
//         </ul>
//       </aside> */}

//       <main className="container main-content">
//       <div className="hero-banner">
//   <div className="hero-content">

//     {/* LEFT SIDE — LOGO */}
//     <img 
//       src="https://i.ibb.co/vv11Vmdf/visit-my-sheep-logo-high.webp"      // ← अपना लोगो path दो
//       alt="Company Logo"
//       className="hero-logo"
//     />

//     {/* RIGHT SIDE — HEADING + SUBTEXT */}
//     <div className="hero-text">
//       <h1>Visit My Sheep Transportation</h1>
//       <p>Book Your Trip Now!</p>
//     </div>

//   </div>
// </div>


//         <div className="flow-card">
//           {step === 1 && (
//             <StepOne
//               selectedTrip={selectedTrip}
//               setSelectedTrip={setSelectedTrip}
//               selectedDate={selectedDate}
//               setSelectedDate={setSelectedDate}
//               goNext={() => setStep(2)}
//             />
//           )}

//           {step === 2 && (
//             <StepTwo
//               passengerData={passengerData}
//               setPassengerData={setPassengerData}
//               selectedTrip={selectedTrip}
//               selectedDate={selectedDate}
//               confirmBooking={() => setShowPopup(true)}
//               goBack={() => setStep(1)}
//             />
//           )}
//         </div>
//       </main>

//       {showPopup && (
//         <ConfirmationPopup
//           passengerData={passengerData}
//           selectedTrip={selectedTrip}
//           selectedDate={selectedDate}
//           close={() => setShowPopup(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default BookingFlow;
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { fetchTrips } from "../trips/tripsSlice";
// import { fetchTrips } from "../features/trips/tripsSlice";
// // import { createBooking } from "../bookings/bookingSlice";
// import { createBooking } from "../features/bookings/bookingSlice";
// import StepOne from "../components/StepOne";
// import StepTwo from "../components/StepTwo";
// import ConfirmationPopup from "../components/ConfirmationPopup";

// const BookingFlowRedux = () => {
//   const dispatch = useDispatch();
//   const { trips, status } = useSelector(state => state.trips);
//   const bookingState = useSelector(state => state.booking);

//   const [step, setStep] = useState(1);
//   const [selectedTrip, setSelectedTripLocal] = useState(null); // object
//   const [selectedDate, setSelectedDate] = useState("");
//   const [ticketUrl, setTicketUrl] = useState("");
//   const [passengerData, setPassengerData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     age: ""
//   });
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     if (status === "idle") dispatch(fetchTrips());
//   }, [dispatch, status]);

//   // when user picks trip in UI we set local but we should pick trip from trips array
//   const setSelectedTrip = (trip) => {
//     // if incoming is object from StepOne it's fine; ensure full object from trips list
//     if (!trip) {
//       setSelectedTripLocal(null);
//       return;
//     }
//     if (typeof trip === "object" && trip._id) {
//       setSelectedTripLocal(trip);
//       return;
//     }
//     // if id
//     const found = trips.find(t => String(t._id) === String(trip) || String(t.id) === String(trip));
//     setSelectedTripLocal(found || null);
//   };

//   // const confirmBooking = async () => {
//   //   // build payload
//   //   const payload = {
//   //     tripId: selectedTrip._id,
//   //     date: selectedDate,
//   //     passenger: passengerData
//   //   };
//   //   const resultAction = await dispatch(createBooking(payload));
//   //   if (createBooking.fulfilled.match(resultAction)) {
//   //     setShowPopup(true);
//   //   } else {
//   //     alert("Booking failed: " + (resultAction.payload?.message || resultAction.error?.message));
//   //   }
//   // };
// const handleBookingConfirmed = (booking) => {
//   setBookingResult(booking);
//   setShowPopup(true);
// };

//   return (
//     <div>
//       <div className="hero-banner"> {/* same hero markup you had */} </div>

//       <div className="flow-card">
//         {step === 1 && (
//           <StepOne
//   trips={trips} // 🔥 from backend
//   selectedTrip={selectedTrip}
//   setSelectedTrip={setSelectedTrip}
//   selectedDate={selectedDate}
//   setSelectedDate={setSelectedDate}
//   goNext={() => setStep(2)}
// />

//         )}

//         {step === 2 && (
//           <StepTwo
//             passengerData={passengerData}
//             setPassengerData={setPassengerData}
//             selectedTrip={selectedTrip}
//             selectedDate={selectedDate}
//             // confirmBooking={() => confirmBooking()}
//             confirmBooking={handleBookingConfirmed}
//             goBack={() => setStep(1)}
//           />
//         )}
//       </div>

//       {showPopup && (
//         <ConfirmationPopup
//           passengerData={passengerData}
//           selectedTrip={selectedTrip}
//           selectedDate={selectedDate}
//           close={() => setShowPopup(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default BookingFlowRedux;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrips } from "../features/trips/tripsSlice";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import ConfirmationPopup from "../components/ConfirmationPopup";

const BookingFlow = () => {
  const dispatch = useDispatch();
  const { trips, status } = useSelector((state) => state.trips);

  const [step, setStep] = useState(1);
  const [selectedTrip, setSelectedTripLocal] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [bookingResult, setBookingResult] = useState(null);  // ✅ FIXED
  const [ticketUrl, setTicketUrl] = useState("");

  const [passengerData, setPassengerData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  // Load trips
  useEffect(() => {
    if (status === "idle") dispatch(fetchTrips());
  }, [dispatch, status]);

  // Map selectedTrip coming from StepOne properly
  const setSelectedTrip = (trip) => {
    if (!trip) return setSelectedTripLocal(null);

    if (typeof trip === "object" && trip._id) {
      setSelectedTripLocal(trip);
      return;
    }

    const found = trips.find((t) => String(t._id) === String(trip));
    setSelectedTripLocal(found || null);
  };

  const confirmBooking = async () => {
    // build payload
    const payload = {
      tripId: selectedTrip._id,
      date: selectedDate,
      passenger: passengerData
    };
    const resultAction = await dispatch(createBooking(payload));
    if (createBooking.fulfilled.match(resultAction)) {
      setShowPopup(true);
    } else {
      alert("Booking failed: " + (resultAction.payload?.message || resultAction.error?.message));
    }
  };
  const handleBookingConfirmed = (booking) => {
    setBookingResult(booking);
    setShowPopup(true);
  };
  return (
    <div className="container mt-2">
      <div className="hero-banner"> {/* same hero markup you had */}
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
      {/* </div> */}
      <div className="flow-card">
        {step === 1 && (
          <StepOne
            trips={trips} // 🔥 from backend
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
            confirmBooking={handleBookingConfirmed} // NEW CORRECT FUNCTION
            goBack={() => setStep(1)}
          />
        )}
      </div>

      {
        showPopup && (
          <ConfirmationPopup
            passengerData={passengerData}
            selectedTrip={selectedTrip}
            selectedDate={selectedDate}
            close={() => setShowPopup(false)}
          />
        )
      }
    </div >
  );
};

export default BookingFlow;

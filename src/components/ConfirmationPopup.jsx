// import React, { useEffect } from "react";
// import { CheckCircle, XCircle } from "lucide-react";
// import { formatPrettyDate } from "../utils/dateUtils";

// const ConfirmationPopup = ({ passengerData, selectedTrip, selectedDate, close,ticketUrl }) => {
//   useEffect(() => {
//     // simple auto-close after 6s optionally
//     const t = setTimeout(close, 6000);
//     return () => clearTimeout(t);
//   }, [close]);

//   return (
//     <div className="popup-backdrop" onClick={close}>
//       <div className="popup-card" onClick={(e) => e.stopPropagation()}>
//         <div className="popup-icon">
//           <CheckCircle size={48} color="#0a7a3f" />
//         </div>

//         <h3>Booking Confirmed!</h3>
//         <p className="muted">Thank you, {passengerData.fullName}.</p>

//         <div className="popup-info">
//           <div><strong>Trip:</strong> {selectedTrip?.name} — {selectedTrip?.time}</div>
//           <div><strong>Date:</strong> {formatPrettyDate(selectedDate)}</div>
//           <div><strong>Email:</strong> {passengerData.email}</div>
//         </div>

//         <div className="popup-actions">
//           <button className="btn-primary" onClick={close}>Close</button>
//         </div>

//         <div className="confetti"> {/* Decorative, CSS animated rain */} </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationPopup;
// import React from "react";
// import { CheckCircle, Download } from "lucide-react";
// import { formatPrettyDate } from "../utils/dateUtils";

// const ConfirmationPopup = ({ booking, close }) => {
//   if (!booking) return null;

//   return (
//     <div className="popup-backdrop">
//       <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        
//         <div className="popup-icon">
//           <CheckCircle size={58} color="#0a7a3f" />
//         </div>

//         <h2>Booking Confirmed!</h2>
//         <p className="muted">Thank you, {booking.passenger.fullName}</p>

//         <div className="popup-info">

//           <div>
//             <strong>Trip:</strong> {booking.trip?.name} — {booking.trip?.time}
//           </div>

//           <div>
//             <strong>Date:</strong> {formatPrettyDate(booking.date)}
//           </div>

//           <div>
//             <strong>Booking ID:</strong> {booking._id}
//           </div>

//           <div>
//             <strong>Paid:</strong> <span style={{ color: "#0a7a3f" }}>${booking.pricePaid}</span>
//           </div>

//           <div>
//             <strong>Email:</strong> {booking.passenger.email}
//           </div>

//         </div>

//         {/* Download Ticket Button */}
//         <button
//           className="btn-primary"
//           onClick={() => window.open(`${import.meta.env.VITE_API_URL}/api/bookings/${booking._id}/ticket`, "_blank")}
//           style={{ marginTop: "15px" }}
//         >
//           <Download className="inline-icon" /> Download Ticket (PDF)
//         </button>

//         <div className="popup-actions">
//           <button className="btn-secondary" onClick={close}>Close</button>
//         </div>

//         <div className="confetti"></div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationPopup;
import React from "react";
import { CheckCircle } from "lucide-react";
import { formatPrettyDate } from "../utils/dateUtils";

const ConfirmationPopup = ({ passengerData, selectedTrip, selectedDate, ticketUrl, close }) => {
  return (
    <div className="popup-backdrop" onClick={close}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        
        <div className="popup-icon">
          <CheckCircle size={48} color="#0a7a3f" />
        </div>

        <h3>Booking Confirmed!</h3>
        <p className="muted">Thank you, {passengerData.fullName}.</p>

        <div className="popup-info">
          <div><strong>Trip:</strong> {selectedTrip?.name} — {selectedTrip?.time}</div>
          <div><strong>Date:</strong> {formatPrettyDate(selectedDate)}</div>
          <div><strong>Email:</strong> {passengerData.email}</div>
        </div>

        {ticketUrl && (
          <button
            className="btn-primary"
            style={{ marginTop: "15px" }}
            onClick={() => window.open(ticketUrl, "_blank")}
          >
            🎫 Download Ticket (PDF)
          </button>
        )}

        <div className="popup-actions">
          <button className="btn-secondary" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;

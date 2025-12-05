import React, { useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { formatPrettyDate } from "../utils/dateUtils";

const ConfirmationPopup = ({ passengerData, selectedTrip, selectedDate, close }) => {
  useEffect(() => {
    // simple auto-close after 6s optionally
    const t = setTimeout(close, 6000);
    return () => clearTimeout(t);
  }, [close]);

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

        <div className="popup-actions">
          <button className="btn-primary" onClick={close}>Close</button>
        </div>

        <div className="confetti"> {/* Decorative, CSS animated rain */} </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;

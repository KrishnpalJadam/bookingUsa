import React, { useEffect, useState } from "react";
import axios from "axios";
import Filters from "./Filters";
import BookingsTable from "./BookingsTable";
import { exportBookingsPDF } from "./pdfUtils";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/bookings`);
    setBookings(res.data);
    setFiltered(res.data);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">📅 Admin Booking Dashboard</h2>

      <Filters bookings={bookings} setFiltered={setFiltered} />

      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-danger"
          onClick={() => exportBookingsPDF(filtered)}
        >
          Download PDF
        </button>
      </div>

      <BookingsTable data={filtered} />
    </div>
  );
};

export default AdminDashboard;

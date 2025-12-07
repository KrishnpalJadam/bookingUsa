import React, { useEffect, useState } from "react";
import axios from "axios";
import Filters from "./Filters";
import BookingsTable from "./BookingsTable";
import { exportBookingsPDF } from "./pdfUtils";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/bookings`);
    setBookings(res.data);
    setFiltered(res.data);
  };

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentData = filtered.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="admin-container container bg-white py-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="page-title">📅 Booking Management</h2>

        <button className="btn btn-primary-gradient" onClick={() => exportBookingsPDF(filtered)}>
          Download PDF
        </button>
      </div>

      {/* FILTERS */}
      <Filters bookings={bookings} setFiltered={setFiltered} />

      {/* TABLE */}
      <BookingsTable data={currentData} />

      {/* PAGINATION */}
      <div className="pagination-wrapper">
        <ul className="pagination">
          {[...Array(totalPages)].map((_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              <button className="page-link">{i + 1}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React, { useState } from "react";

const Filters = ({ bookings, setFiltered }) => {
  const [date, setDate] = useState("");
  const [trip, setTrip] = useState("");

  const uniqueTrips = [...new Set(bookings.map(b => b.trip?.name))];

  const applyFilters = () => {
    let filtered = bookings;

    if (date) {
      filtered = filtered.filter(b => b.date === date);
    }

    if (trip) {
      filtered = filtered.filter(b => b.trip?.name === trip);
    }

    setFiltered(filtered);
  };

  return (
    <div className="card p-3 mb-4">
      <h5>🔎 Filters</h5>

      <div className="row mt-3">
        <div className="col-md-4">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label>Trip</label>
          <select
            className="form-control"
            onChange={(e) => setTrip(e.target.value)}
          >
            <option value="">All Trips</option>
            {uniqueTrips.map((t, idx) => (
              <option key={idx}>{t}</option>
            ))}
          </select>
        </div>

        <div className="col-md-4 d-flex align-items-end">
          <button className="btn btn-primary w-100" onClick={applyFilters}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;

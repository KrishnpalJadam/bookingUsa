import React, { useState } from "react";

const Filters = ({ bookings, setFiltered }) => {
  const [date, setDate] = useState("");
  const [trip, setTrip] = useState("");

  const uniqueTrips = [...new Set(bookings.map(b => b.trip?.name))];

  const applyFilters = () => {
    let result = bookings;

    if (date) result = result.filter(b => b.date === date);
    if (trip) result = result.filter(b => b.trip?.name === trip);

    setFiltered(result);
  };

  return (
    <div className="card filter-card shadow-sm mb-4">
      <h5 className="filter-title">🔎 Filters</h5>

      <div className="row mt-3">
        <div className="col-md-4">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="col-md-4">
          <label className="form-label">Trip</label>
          <select className="form-select" onChange={(e) => setTrip(e.target.value)}>
            <option value="">All Trips</option>
            {uniqueTrips.map((t, index) => (
              <option key={index}>{t}</option>
            ))}
          </select>
        </div>

        <div className="col-md-4 d-flex align-items-end">
          <button className="btn btn-primary-gradient w-100" onClick={applyFilters}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;

import React from "react";

const BookingsTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Trip</th>
            <th>Passenger</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Date</th>
            <th>Paid ($)</th>
          </tr>
        </thead>

        <tbody>
          {data.map((b) => (
            <tr key={b._id}>
              <td>{b.trip?.name}</td>
              <td>{b.passenger.fullName}</td>
              <td>{b.passenger.email}</td>
              <td>{b.passenger.phone}</td>
              <td>{b.passenger.gender}</td>
              <td>{b.passenger.age}</td>
              <td>{b.date}</td>
              <td>{b.pricePaid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTable;

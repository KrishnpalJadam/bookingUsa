import React from "react";

const BookingsTable = ({ data }) => {
  return (
    <div className="card shadow-sm p-0 table-card">
      <div className="table-responsive">

  
      <table className="table modern-table mb-0">
        <thead>
          <tr>
            <th>Sr.</th>
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
          {data.map((b, index) => (
            <tr key={b._id}>
              <td>{index+1}</td>
              <td>{b.trip?.name}</td>
              <td>{b.passenger.fullName}</td>
              <td>{b.passenger.email}</td>
              <td>{b.passenger.phone}</td>
              <td>{b.passenger.gender}</td>
              <td>{b.passenger.age}</td>
              <td>{b.date}</td>
              <td>
                <span className="badge status-paid">
                  ${b.pricePaid}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
    </div>
  );
};

export default BookingsTable;

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportBookingsPDF = (rows) => {
  const doc = new jsPDF();

  doc.text("Bookings Report", 14, 15);

  autoTable(doc, {
    startY: 20,
    head: [
      ["Trip", "Passenger", "Email", "Phone", "Gender", "Age", "Date", "Paid ($)"],
    ],
    body: rows.map((b) => [
      b.trip?.name,
      b.passenger.fullName,
      b.passenger.email,
      b.passenger.phone,
      b.passenger.gender,
      b.passenger.age,
      b.date,
      b.pricePaid,
    ]),
  });

  doc.save("bookings-report.pdf");
};

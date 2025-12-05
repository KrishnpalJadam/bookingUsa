import React, { useMemo } from "react";
import { User, Mail, Phone, Heart, DollarSign, ArrowRightCircle } from "lucide-react";

const CHILD_PRICE = 50;

const StepTwo = ({ passengerData, setPassengerData, selectedTrip, selectedDate, confirmBooking, goBack }) => {
  const update = (e) => {
    const { name, value } = e.target;
    setPassengerData(prev => ({ ...prev, [name]: value }));
  };

  const ticket = useMemo(() => {
    const age = Number(passengerData.age || 0);
    const isChild = age > 0 && age < 16;
    const price = isChild ? CHILD_PRICE : (selectedTrip?.basePrice || 0);
    return { isChild, price };
  }, [passengerData.age, selectedTrip]);

  const validate = () => {
    if (!passengerData.fullName || !passengerData.email || !passengerData.phone || !passengerData.gender || passengerData.age === "") {
      return false;
    }
    // simple email and phone checks (can be extended)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passengerData.email)) return false;
    if (!/^\d{7,}$/.test(passengerData.phone.replace(/\D/g, ""))) return false;
    return true;
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!validate()) {
      alert("Please fill all details correctly.");
      return;
    }
    confirmBooking();
  };

  return (
    <section className="step-card">
      <div className="step-card-inner">
        <h3 className="section-title green">Passenger Details</h3>

        <form className="passenger-form" onSubmit={handleConfirm}>
          <div className="row g-3">
            <div className="col-6">
              <label className="label"><User className="inline-icon" /> Full Name</label>
              <input name="fullName" value={passengerData.fullName} onChange={update} className="input" />
            </div>

            <div className="col-6">
              <label className="label"><Mail className="inline-icon" /> Email</label>
              <input name="email" value={passengerData.email} onChange={update} className="input" />
            </div>

            <div className="col-6">
              <label className="label"><Phone className="inline-icon" /> Phone</label>
              <input name="phone" value={passengerData.phone} onChange={update} className="input" />
            </div>

            <div className="col-3">
              <label className="label"><Heart className="inline-icon" /> Gender</label>
              <select name="gender" value={passengerData.gender} onChange={update} className="input">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-3">
              <label className="label">Age</label>
              <input type="number" name="age" value={passengerData.age} onChange={update} className="input" min="0" max="120" />
            </div>

            <div className="col-12">
              <div className="price-box">
                <DollarSign /> <strong>Ticket Price:</strong> ${ticket.price} {ticket.isChild && <em className="muted"> (Child rate applied)</em>}
              </div>
            </div>

          </div>

          <div className="btn-row">
            <button type="button" className="btn-secondary" onClick={goBack}>Back</button>
            <button type="submit" className="btn-primary">
              <ArrowRightCircle className="me-2" /> Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StepTwo;

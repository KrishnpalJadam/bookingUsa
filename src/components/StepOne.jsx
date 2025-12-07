// import React from "react";
// import { BusFront, Calendar } from "lucide-react";
// import { TRIP_OPTIONS } from "../data/trips";
// import { isWeekend, formatPrettyDate } from "../utils/dateUtils";

// const StepOne = ({ selectedTrip, setSelectedTrip, selectedDate, setSelectedDate, goNext }) => {
//   const handleTrip = (e) => {
//     const id = Number(e.target.value);
//     const trip = TRIP_OPTIONS.find(t => t.id === id) || null;
//     setSelectedTrip(trip);
//   };

//   const handleDate = (e) => setSelectedDate(e.target.value);

//   const valid = selectedTrip && selectedDate && isWeekend(selectedDate);

//   return (
//     <section className="step-card">
//       <div className="step-card-inner">
//         <h3 className="section-title"><BusFront className="icon" /> Select Date and Time</h3>

//         <div className="row inputs-row">
//           <div className="col-left">
//             <label className="label">Select trip:</label>
//             <select className="input-select" value={selectedTrip?.id || ""} onChange={handleTrip}>
//               <option value="">Choose a trip</option>
//               {TRIP_OPTIONS.map(t => (
//                 <option key={t.id} value={t.id}>
//                   {t.name} — {t.time} — ${t.basePrice}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="col-right">
//             <label className="label"><Calendar className="small-icon" /> Date:</label>
//             <input
//               type="date"
//               className={`input-date ${selectedDate && !isWeekend(selectedDate) ? "invalid" : ""}`}
//               value={selectedDate}
//               onChange={handleDate}
//               min={new Date().toISOString().split("T")[0]}
//             />
//             {selectedDate && !isWeekend(selectedDate) && (
//               <div className="small-error">Please choose a Saturday or Sunday</div>
//             )}
//           </div>
//         </div>

//         <div className="hero-date">
//           {selectedDate ? (
//             <div className="date-display">
//               <Calendar className="big-icon" /> <span>{formatPrettyDate(selectedDate)}</span>
//             </div>
//           ) : (
//             <div className="date-display muted">
//               <Calendar className="big-icon" /> Select a date to preview
//             </div>
//           )}
//         </div>

//         <div className="actions">
//           <button className={`btn-primary ${!valid ? "btn-disabled" : ""}`} onClick={() => valid && goNext()}>
//             Continue
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StepOne;
import React from "react";
import { BusFront, Calendar } from "lucide-react";
import { isWeekend, formatPrettyDate } from "../utils/dateUtils";

const StepOne = ({ trips, selectedTrip, setSelectedTrip, selectedDate, setSelectedDate, goNext }) => {

  const handleTrip = (e) => {
    const id = e.target.value;
    const trip = trips.find(t => String(t._id) === id) || null;
    setSelectedTrip(trip);
  };

  const handleDate = (e) => setSelectedDate(e.target.value);

  const valid = selectedTrip && selectedDate && isWeekend(selectedDate);

  return (
    <section className="step-card">
      <div className="step-card-inner">
        
        <h3 className="section-title">
          <BusFront className="icon" /> Select Date and Time
        </h3>

        <div className="row inputs-row">

          {/* Trip Selector */}
          <div className="col-left">
            <label className="label">Select trip:</label>
            <select
              className="input-select"
              value={selectedTrip?._id || ""}
              onChange={handleTrip}
            >
              <option value="">Choose a trip</option>

              {trips?.map(t => (
                <option key={t._id} value={t._id}>
                  {t.name} — {t.time} — ${t.basePrice}
                </option>
              ))}

            </select>
          </div>

          {/* Date Selector */}
          <div className="col-right">
            <label className="label">
              <Calendar className="small-icon" /> Date:
            </label>

            <input
              type="date"
              className={`input-date ${selectedDate && !isWeekend(selectedDate) ? "invalid" : ""}`}
              value={selectedDate}
              onChange={handleDate}
              min={new Date().toISOString().split("T")[0]}
            />

            {selectedDate && !isWeekend(selectedDate) && (
              <div className="small-error">Please choose a Saturday or Sunday</div>
            )}
          </div>

        </div>

        {/* Selected Date Preview */}
        <div className="hero-date">
          {selectedDate ? (
            <div className="date-display">
              <Calendar className="big-icon" />
              <span>{formatPrettyDate(selectedDate)}</span>
            </div>
          ) : (
            <div className="date-display muted">
              <Calendar className="big-icon" /> Select a date to preview
            </div>
          )}
        </div>

        {/* Continue Button */}
        <div className="actions">
          <button
            className={`btn-primary ${!valid ? "btn-disabled" : ""}`}
            onClick={() => valid && goNext()}
          >
            Continue
          </button>
        </div>

      </div>
    </section>
  );
};

export default StepOne;

import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from "../features/trips/tripsSlice";
import bookingReducer from "../features/bookings/bookingSlice";
import paypalReducer from "../features/payments/paypalSlice";

export const store = configureStore({
  reducer: {
    trips: tripsReducer,
    booking: bookingReducer,
    paypal: paypalReducer,

  }
});

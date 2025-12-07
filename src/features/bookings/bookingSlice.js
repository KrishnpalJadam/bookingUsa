import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const createBooking = createAsyncThunk(
  "booking/createBooking",
  async (payload, { rejectWithValue }) => {
    console.log("Creating booking with payload:", payload);
    try {
      const res = await axios.post(`${API}/bookings`, payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState: { bookings: [], currentBooking: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => { state.status = "loading"; })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentBooking = action.payload.booking;
        state.bookings.push(action.payload.booking);
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || action.error.message;
      });
  }
});

export default bookingSlice.reducer;

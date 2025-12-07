import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API =  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const fetchTrips = createAsyncThunk("trips/fetchTrips", async () => {
  const res = await axios.get(`${API}/trips`);
  return res.data;
});

const tripsSlice = createSlice({
  name: "trips",
  initialState: { trips: [], status: "idle", error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrips.pending, (state) => { state.status = "loading"; })
      .addCase(fetchTrips.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trips = action.payload;
      })
      .addCase(fetchTrips.rejected, (state, action) => {
        state.status = "failed"; state.error = action.error.message;
      });
  }
});

export default tripsSlice.reducer;

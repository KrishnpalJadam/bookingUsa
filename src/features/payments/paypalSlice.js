 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const createOrder = createAsyncThunk(
  "paypal/createOrder",
  async (payload) => {
    const res = await axios.post(`${API}/paypal/create-order`, payload);
    return res.data; // { orderId, amount }
  }
);

export const captureOrder = createAsyncThunk(
  "paypal/captureOrder",
  async (payload) => {
    const res = await axios.post(`${API}/paypal/capture-order`, payload);
    return res.data; // { booking }
  }
);

const paypalSlice = createSlice({
  name: "paypal",
  initialState: {},
  reducers: {},
});

export default paypalSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface VehicleState {
  id: number;
  headline: string;
  description: string;
  images: string[];
  year: number;
  miles: number;
  drivetrain: string;
  engine: string;
  color: string;
  MPG_city: number;
  MPG_highway: number;
  makeName: string;
  modelName: string;
  features: string;
  price: number;
};

const initialState: VehicleState[] = [];

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getVehicles.fulfilled, (_state, action) => {
      return action.payload
    })
  }
});

export const getVehicles = createAsyncThunk(
  "vehicles/getVehicles",
  async () => {
    const response = await fetch("http://localhost:3000/cars-on-lot");
    const allVehicles = await response.json();
    return allVehicles
    }
)

export default vehiclesSlice.reducer
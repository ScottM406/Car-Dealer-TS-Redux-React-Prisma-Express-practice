import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface VehicleState {
  headline: string;
  description: string;
  image: string;
  year: number;
  miles: number;
  drivetrain: string;
  engine: string;
  color: string;
  MPG_city: number;
  MPG_highway: number;
  modelId: number;
  features: string;
  price: number;
};

const initialState: VehicleState[] = [];

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getVehicles.fulfilled, (state, action) => {
      return action.payload
    })
  }

});

export const getVehicles = createAsyncThunk(
  "vehicles/getVehicles",
  async () => {
    const response = await fetch("http://localhost:3000/cars-on-lot");
    const allVehicles = await response.json();
    console.log(allVehicles);
    return allVehicles
    }
)
export default vehicleSlice.reducer
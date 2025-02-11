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

const initialState: VehicleState = {
  id: 0,
  headline: "",
  description: "",
  images: [],
  year: 0,
  miles: 0,
  drivetrain: "",
  engine: "",
  color: "",
  MPG_city: 0,
  MPG_highway: 0,
  makeName: "",
  modelName: "",
  features: "",
  price: 0
};

const singleVehicleSlice = createSlice({
  name: "singleVehicle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpecificVehicle.fulfilled, (_state, action) => {
      return action.payload
    })
  }
})

export const getSpecificVehicle = createAsyncThunk(
  "vehicles/getSpecificVehicle",
  async (id) => {
    const response = await fetch(`http://localhost:3000/cars-on-lot/${id}`)
    const vehicle = await response.json();
    return vehicle
  }
)

export default singleVehicleSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Model {
 name: string;
 cars_on_lot: Car[]
}

interface Car {
  id: number;
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
  makeName: string;
  modelName: string;
  features: string;
  price: number;
};

interface MakeState {
  name: string
  description: string
  models: Model[]
}

const initialState: MakeState[] = [];

const makesSlice = createSlice({
  name: "makes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMakes.fulfilled, (_state, action) => {
      return action.payload;
    })
  }
})

export const getMakes = createAsyncThunk(
  "addInventory/getMakes",
  async () => {
    const response = await fetch("http://localhost:3000/makes")
    const makes = await response.json();
      return makes
  }
)

export default makesSlice.reducer;
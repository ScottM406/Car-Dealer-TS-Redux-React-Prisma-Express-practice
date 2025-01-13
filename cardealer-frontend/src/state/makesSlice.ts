import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Model {
 name: string;
}

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
    builder.addCase(getMakes.fulfilled, (state, action) => {
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
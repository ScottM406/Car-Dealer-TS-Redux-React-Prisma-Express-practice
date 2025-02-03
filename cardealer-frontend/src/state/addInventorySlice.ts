import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddInverntoryState {
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
  makeName: string
  modelName: string;
  features: string;
  price: number;
}

export const initialState: AddInverntoryState = {
  headline: "",
  description: "",
  images: [""],
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
}

const addInventorySlice = createSlice({
  name: "addInventory",
  initialState,
  reducers: {
    setAddInventoryInputValue: (state, action: PayloadAction<{ field: keyof AddInverntoryState; value: any}>) => {
      (state[action.payload.field] as typeof state[keyof AddInverntoryState]) = action.payload.value;
    }
  },
})

export const { setAddInventoryInputValue } = addInventorySlice.actions;
export default addInventorySlice.reducer
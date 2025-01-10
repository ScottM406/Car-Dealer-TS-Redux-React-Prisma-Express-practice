import { configureStore } from "@reduxjs/toolkit";
import addInventoryReducer from './addInventorySlice'
import AddInventroy from "../components/AddInventory";


export const store = configureStore({
  reducer: {
    addInventory: addInventoryReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
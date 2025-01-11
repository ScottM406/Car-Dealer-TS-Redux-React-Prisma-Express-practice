import { configureStore } from "@reduxjs/toolkit";
import addInventoryReducer from './addInventorySlice'
import vehiclesReducer from './vehiclesSlice';



export const store = configureStore({
  reducer: {
    addInventory: addInventoryReducer,
    vehicles: vehiclesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
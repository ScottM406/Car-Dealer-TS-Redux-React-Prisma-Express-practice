import { configureStore } from "@reduxjs/toolkit";
import addInventoryReducer from './addInventorySlice'
import vehiclesReducer from './vehiclesSlice';
import makesReducer from './makesSlice';



export const store = configureStore({
  reducer: {
    addInventory: addInventoryReducer,
    vehicles: vehiclesReducer,
    makes: makesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
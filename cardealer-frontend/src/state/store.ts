import { configureStore } from "@reduxjs/toolkit";
import addInventoryReducer from './addInventorySlice'
import vehiclesReducer from './vehiclesSlice';
import makesReducer from './makesSlice';
import singleVehicleReducer from './singleVehicleSlice'



export const store = configureStore({
  reducer: {
    addInventory: addInventoryReducer,
    vehicles: vehiclesReducer,
    singleVehicle: singleVehicleReducer,
    makes: makesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
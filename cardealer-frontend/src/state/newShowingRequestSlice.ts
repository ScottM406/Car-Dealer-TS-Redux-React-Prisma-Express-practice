import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface NewShowingRequest {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  desiredTime: string;
  testDriveRequested: boolean;
  carsOnLotID: number
}

const initialState: NewShowingRequest = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  emailAddress: "",
  desiredTime: "",
  testDriveRequested: false,
  carsOnLotID: 0
}

interface SetInputValuePayload {
  field: keyof NewShowingRequest;
  value: string | boolean
}

const newShowingRequestSlice = createSlice({
  name: "newShowingRequest",
  initialState,
  reducers: {
    setNewShowingRequestInputValue: (state, action: PayloadAction<SetInputValuePayload>) => {
      (state[action.payload.field] as typeof state[keyof NewShowingRequest]) = action.payload.value;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postNewShowingRequest.fulfilled, (_state, action) => {
      return action.payload;
    })
  }
});

export const postNewShowingRequest = createAsyncThunk(
  "newShowingRequest/postNewShowingRequest",
  async (showingRequestData: NewShowingRequest) => {
    const response = await fetch("http://localhost:3000/showing-requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(showingRequestData)
    });
    const data = await response.json()
    return data;
  }
)

export const { setNewShowingRequestInputValue } = newShowingRequestSlice.actions
export default newShowingRequestSlice.reducer
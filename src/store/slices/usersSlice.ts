import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { resetCount } from "./counterSlice";
export interface UsersSliceState {
  data: any[];
  errorMessage: string;
  isLoading: boolean;
}
const initialState: UsersSliceState = {
  data: [],
  errorMessage: "",
  isLoading: false,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) {
        throw new Error("There is some Error While Fetching");
      }
      const result = await response.json();
      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return { ...state, isLoading: false, data: action.payload };
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log("ERL:::", action);
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload as string,
      };
    });
    builder.addCase(resetCount, (state) => {
      return { ...state, data: [], errorMessage: "" };
    });
  },
});

export default counterSlice.reducer;

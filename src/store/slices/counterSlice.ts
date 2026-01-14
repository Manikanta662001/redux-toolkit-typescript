import {
  createAction,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
export interface CounterSliceState {
  count: number;
}
const initialState: CounterSliceState = {
  count: 0,
};

export const resetCount = createAction("counter/reset");

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetCount, (state) => {
      state.count = 0;
    });
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

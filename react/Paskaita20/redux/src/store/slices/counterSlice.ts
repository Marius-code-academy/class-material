import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 20,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
});

export const counterSelector = (state: RootState) => state.counter.counter;
export const { decrement, increment, incrementByAmount } = counterSlice.actions;

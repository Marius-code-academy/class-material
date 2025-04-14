import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";

export const store = configureStore({
  // Funkcijos kurios daro pakeitimus state
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

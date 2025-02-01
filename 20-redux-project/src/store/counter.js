import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// preparing a slice of our global state
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  // all the reducers which the state needs
  reducers: {
    increment(state) {
      // mutation is alowed, ReduxToolkit create a clone of the state
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

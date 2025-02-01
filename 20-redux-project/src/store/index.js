import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// preparing a slice of our global state
const counterSlice = createSlice({
  name: "counter",
  initialState,
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

// action creators
// counterSlice.actions.toggleCounter

// manage merging multiple Reducers into one big Reducer
const store = configureStore({
  reducer:
    counterSlice.reducer /*{ counter: counterSlice.reducer }, // a map of reducers */,
});

export const counterActions = counterSlice.actions;
export default store;

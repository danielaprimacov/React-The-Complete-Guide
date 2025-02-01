import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// action creators
// counterSlice.actions.toggleCounter

// manage merging multiple Reducers into one big Reducer
const store = configureStore({
  // a map of reducers
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

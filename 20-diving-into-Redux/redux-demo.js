// importing Redux
const redux = require("redux");

// Reducer function - returns a new state object - will manipulate with data
const counterReducer = (state = { counter: 0 }, action) => {
  // state must have a default value, overweise it will be undefined

  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state; // unchanged - default state
};

// creating a store
const store = redux.createStore(counterReducer);

// subscribtion function - will be triggerd when ever the state changes
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

//dispatch Action -> a JS Object
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

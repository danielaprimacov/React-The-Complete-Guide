import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

// Creating a Custom Hook
const useStore = () => {
  const setState = useState(globalState)[1]; // updating function

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);
};

import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const Initialexpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 6, 1),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 6, 5),
  },
  { id: "e3", title: "New TV", amount: 799.49, date: new Date(2023, 10, 10) },
  {
    id: "e4",
    title: "Food",
    amount: 245.78,
    date: new Date(2023, 4, 22),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Initialexpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </div>
  );
};

export default App;

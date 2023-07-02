import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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

  return (
    <div className="expenses">
      <h2>Let's get started!</h2>
      {/* <ExpenseItem
      expense={expenses[0]}
      ></ExpenseItem> */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;

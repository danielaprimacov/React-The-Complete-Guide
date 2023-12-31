import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState("2023");

  // let filterInfoText = "2021, 2022 & 2023";

  // if (filterValue === "2021") {
  //   filterInfoText = "2020, 2022 & 2023";
  // } else if (filterValue === "2022") {
  //   filterInfoText = "2020, 2021 & 2023";
  // } else if(filterValue === "2023") {
  //   filterInfoText = "2020, 2021 & 2022";
  // }

  const onSelectedFilterValueHandler = (filter) => {
    setFilterValue(filter);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterValue;
  });

  return (
    // <ExpenseItem
    //   expense={expenses[0]}
    //   ></ExpenseItem>
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectedFilterValue={onSelectedFilterValueHandler}
          selected={filterValue}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {/* <p>Data for years {filterInfoText} is hidden.</p> */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found!</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        <ExpensesList items={filteredExpenses} />
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;

import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [show, showForm] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    showForm(false);
  };
  
  const showFormHandler = () => {
    showForm(true);
  }
  
  const closeFormHandler = () => {
    showForm(false);
  }

  return (
    <div className="new-expense">
      {!show && <button onClick={showFormHandler}>Add New Expense</button>}
      {show && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeFormHandler} />}
    </div>
  );
};

export default NewExpense;

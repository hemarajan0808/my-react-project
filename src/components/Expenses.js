import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [] = useState("");

  const FilterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
  };
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter onFilterChange={FilterChangeHandler} />
        
        {props.item.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        
      </div>
    </div>
  );
}

export default Expenses;

import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpenses =() =>{
    const[]= useState('');

    const saveExpenseDataHandler =(enteredExpenseData)=>{

        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        
        };
        console.log(expenseData)
    }
    const displayContent =()=>{

    }
    return (
        <div className="new-expense">
            <button onChange={displayContent}>Add New Expense</button>
            <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}/>


        </div>
    )
}
export default NewExpenses;
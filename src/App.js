import React, {useState} from 'react';
import logo from './logo.svg';
//import './App.css';
import Expenses from './components/Expenses';
import NewExpenses from './components/NewExpensesFolder/NewExpenses';

const DummyData =[
  { title:'Car Insurance', amount : 300.54, date : new Date(2021, 2, 16)},
  { title:'Home Insurance', amount : 488.99, date : new Date(2022, 3, 22)},
  { title: 'Pet Insurance', amount : 789.55, date : new Date(2001, 7, 8)},
  { title:'Auto Insurance', amount : 245.43, date : new Date(2012, 11, 4)},
  
];

function App() {
  const [expenses, setExpenses]=useState(DummyData)
 

const addExpenseHandler = expense=>{
  setExpenses ((prevExpenses) => {
    return ([expense, ...prevExpenses])

  });
}
  return (
    <div>
    <NewExpenses  onAddExpense = {addExpenseHandler}/>
    
    <Expenses item={expenses}/>
    </div>
  )
}

export default App;

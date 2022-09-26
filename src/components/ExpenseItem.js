import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

     const clickHandler =() => {
         setTitle('updated');
        console.log('Clicked!!!') 
    }

  return (
    <div className="expense-item">
       <ExpenseDate date ={props.date}/>
      <div className="expense-item__description ">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">$ {props.amount}</div>
      <button onClick={clickHandler} type="submit"> Change Title </button>
    </div>
  );
}

export default ExpenseItem;



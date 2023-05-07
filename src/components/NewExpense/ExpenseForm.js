import React, { useState } from "react";
import "./ExpenseForm.css";

 
function ExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const ChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const [enteredAmount, setAmount] = useState("");
  const ChangeAmountHandler = (e) => {
    setAmount(e.target.value);
  };
  const [enteredDate, setDate] = useState("");
  const ChangeDateHandler = (e) => {
    setDate(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    const ExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(ExpenseData);
    
    setTitle('');
    setAmount('');
    setDate('')
  };

  let DisplayedElement;
  const [beforeClick,afterClick] = useState (false);
 const AddNewExpenseHandler =()=>{
  afterClick(true);
 }
 const CancelNewExpenseHandler =()=>{
  afterClick(false);
 }
 if(beforeClick === false){
  DisplayedElement= (<button type="submit" onClick ={AddNewExpenseHandler}>Add New Expense</button>)
 }else{
  DisplayedElement =(<form onSubmit={SubmitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={ChangeTitleHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={ChangeAmountHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2024-01-01"
          value={enteredDate}
          onChange={ChangeDateHandler}
        />
      </div>
    </div>
    <div className="new-expense__actions">
    <button onClick={CancelNewExpenseHandler}>Cancel</button>
    <button type="submit">Add Expense</button>
    </div>
  </form>)
}

  return ( <div>{DisplayedElement}</div>)

  }
export default ExpenseForm;

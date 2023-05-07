import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [SelectedDefaultyear, SetFilterdYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    SetFilterdYear(selectedYear);
  };
  const FilteredExpenseList = props.items.filter(
    (item) => item.date.getFullYear().toString() === SelectedDefaultyear
  );



  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={SelectedDefaultyear}
        onfilterChangeHandler={filterChangeHandler}
      />
      <ExpensesChart expenses={FilteredExpenseList}/>
      <ExpensesList items ={FilteredExpenseList}/>
    </Card>
  );
}

export default Expenses;

import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
 
  let expenseContent = (
    <h2 className="expenses-list__fallback">*No results found for this year</h2>
  );
  if (props.items.length > 0) {
    expenseContent = props.items.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });
  }
  return <ul className="expenses-list">{expenseContent}</ul> ;
};

export default ExpensesList;

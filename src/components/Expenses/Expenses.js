import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');

  const selectFilterHandler = (filterValue) => {
    setFilterYear(filterValue);
    console.log(filterValue);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onSelectFilter={selectFilterHandler} />

        {props.expenseItens.map((expenseItem) => (
          <ExpenseItem
            date={expenseItem.date}
            title={expenseItem.title}
            amount={expenseItem.amount}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;

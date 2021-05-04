import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from './ExpensesChart';
import ExpenseList from './ExpensesList';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const selectFilterHandler = (filterValue) => {
    setFilterYear(filterValue);
  };

  const filteredExpenses = props.expenseItens.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );



  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onSelectFilter={selectFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList expenseItens={filteredExpenses} />
      </Card>
    </li>
  );
};
export default Expenses;

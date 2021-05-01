import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenseItens.map((expenseItem) => (
      <ExpenseItem
        date={expenseItem.date}
        title={expenseItem.title}
        amount={expenseItem.amount}
      />
      ))}
    </Card>
  );
}
export default Expenses;

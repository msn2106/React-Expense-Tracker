import Card from "../core/Card";
import '../../styles/Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
import { useEffect, useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [expenseItems, setExpenseItems] = useState(props.items);
  const [selectedYear, setSelectedYear] = useState('2020');
  const onYearChangeHandler = (changedYear) => {
    setSelectedYear(changedYear);
  }
  
  useEffect(()=>{
    setExpenseItems(props.items);
  },[props.items])

  const filteredExpenses = expenseItems.filter((expense) => expense.date.getFullYear().toString() === selectedYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onYearChange={onYearChangeHandler}/>
        {
          // this called abusing
          // filteredExpenses.length < 1 && <p>No Records found!!!</p>
        }
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses;
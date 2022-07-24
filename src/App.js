import React from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newexpense/NewExpense";
import { expenses } from "./data/ExpensesData";

const App = () => {
  const addExpenseDataHandler = (expenseData) => {
    console.log(expenseData);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler}/>
      <Expenses items={expenses}/>
    </div>
  );

  // same thing as above
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {} , "Let's get started!"),
  //   React.createElement(Expenses, { items : expenses})
  // );
}

export default App;

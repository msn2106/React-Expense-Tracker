import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newexpense/NewExpense";
import { dummyExpenses } from "./data/ExpensesData";

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseDataHandler = (singleExpenseData) => {
    console.log(singleExpenseData);
    setExpenses((prevExpenses)=>{
      return [singleExpenseData, ...prevExpenses];
    });
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

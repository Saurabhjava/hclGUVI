import React, { useState } from "react";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import Summary from "./Summary";

export default function BudgetTracker() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addIncome = (amount) => {
    setIncomes([...incomes, { id: Date.now(), amount: parseFloat(amount) }]);
  };

  const addExpense = (amount) => {
    setExpenses([...expenses, { id: Date.now(), amount: parseFloat(amount) }]);
  };

  const totalIncome = incomes.reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h1>Budget Balance Assistant</h1>

      <div>
        <IncomeForm onAddIncome={addIncome} />
        <ExpenseForm onAddExpense={addExpense} />
      </div>

      <Summary
        incomes={incomes}
        expenses={expenses}
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        balance={balance}
      />
    </div>
  );
}

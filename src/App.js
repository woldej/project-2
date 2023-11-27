import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import EditExpenseForm from './EditExpenseForm';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleEditExpense = (expense) => {
    const updatedExpenses = expenses.map((e) => (e.id === expense.id ? expense : e));
    setExpenses(updatedExpenses);
    setEditingExpense(null);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
return (
    <div className="App"></div>
  )}

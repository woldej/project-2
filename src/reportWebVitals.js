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

  // Add the reportWebVitals function
  React.useEffect(() => {
    // Replace 'console.log' with your analytics tracking code
    console.log('[reportWebVitals] Performance metrics:', {
      firstPaint: performance.getEntriesByType('first-paint')[0].startTime,
      firstContentfulPaint: performance.getEntriesByType('first-contentful-paint')[0].startTime,
      largestContentfulPaint: performance.getEntriesByType('largest-contentful-paint')[0].startTime,
    });
  }, []);

  return (
    <div className="App">
      <ExpenseList
        expenses={expenses}
        handleDeleteExpense={handleDeleteExpense}
      />
      <AddExpenseForm handleAddExpense={handleAddExpense} />
      {editingExpense && <EditExpenseForm expense={editingExpense} handleEditExpense={handleEditExpense} />}
    </div>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import EditExpenseForm from './components/EditExpenseForm';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="logo">Expense Tracker</h1>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<ExpenseList />} />
            <Route path="/add" element={<AddExpenseForm />} />
            <Route path="/edit/:id" element={<EditExpenseForm />} />
          </Routes>
        </main>
        <footer>
          &copy; 2023 Expense Tracker
        </footer>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Expense Tracker</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Expenses</Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">Add Expense</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

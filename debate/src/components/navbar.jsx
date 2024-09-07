import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="#barchart">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="#piechart">Statistics</Link>
        </li>
        <li className="navbar-item">
          <Link to="#aboutus">About Us</Link>
        </li>
      </ul>
    <Link to="/barchart">Bar Chart</Link>
    <Link to="/piechart">Pie Chart</Link>
    <Link to="/linechart1">Line Chart 1</Link>
    <Link to="/linechart2">Line Chart 2</Link>
  </nav>
);
};
export default Navbar;

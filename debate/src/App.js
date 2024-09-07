
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "./Rpp.css"
import Stats from './pages/Stats';
// Assuming you want to use App.css instead of Rpp.css




const App = () => {
  return (
    <>
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/stats" element={<Stats />} /> {/* Home Page Route */}
        {/* Add more routes here */}
      </Routes>
    </div>
  </Router>

      {/* <Navbar /> */}
      
     
    </>
  );
};

export default App;

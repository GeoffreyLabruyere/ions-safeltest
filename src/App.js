import './App.css';
import NavBar from './component/NavBar';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact />
          <Route path='/products' exact />
          <Route path='/about-us' exact />
          <Route path='/Contact-us' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;

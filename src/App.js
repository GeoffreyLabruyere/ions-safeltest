import './App.css';
import NavBar from './component/NavBar';
import React from 'react';
import ContactUs from './component/ContactUs';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          
          <Route path='/Contact-us' element={<ContactUs/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

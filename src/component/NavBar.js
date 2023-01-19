import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import SAFELlogo from './SAFEL.png';
import './NavBar.css';
import SearchBar from './SearchBar';


function NavBar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-top'>
          <div className='navbar-container'>
            <img src={SAFELlogo} className='resp-img'/>
            <div>
              <SearchBar/>
            </div>
            <div className="navigation">
              <Link to="/" className="navigation-button">Home</Link>
              <Link to="/about-us" className="navigation-button">À propos de nous</Link>
              <Link to="/contact-us" className="navigation-button">Nous contacter</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import SAFELlogo from './SAFEL.png';
import './NavBar.css';
import Banner from './Banner'

function NavBar() {

  const [cls, setCls] = useState("green");

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-top'>
          <div className='navbar-container'>
            <img src={SAFELlogo} className='resp-img'/>
            <span>
              <Link to="/about" className='resp-button'>About</Link>
              <Link to="/about" className='resp-button'>About2</Link>
              <Link to="/about" className='resp-button'>About3</Link>
            </span>
          </div>
            <style>{`
            .red {color: red}
            .green {color: green}
          `}</style>
          <button
            className={cls}
            onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}
          >
            ButtonZDZD
          </button>
          <Link to="/another-page">
            <span className="navbar-button">Button</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
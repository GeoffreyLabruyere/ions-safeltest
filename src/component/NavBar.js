import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SAFELlogo from './SAFEL.png';
import './NavBar.css';

function NavBar() {
  const {click, setClick} = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-top'>
          <div className='navbar-container'>
            <img src={SAFELlogo} className='resp-img'/>
          </div>
          <div className='buttons'>
            <Link to="/about" className='resp-button'>About</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
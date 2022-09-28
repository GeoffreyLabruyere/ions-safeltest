import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SAFELlogo from './SAFEL.png';

function NavBar() {
  const {click, setClick} = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <img src={SAFELlogo} width="300px" height="100px" />
        </div>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times': 'fas fa-bars'} />
        </div>
        <ul className='menu-icon' onClick={handleClick}>
            <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                  Products
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign up
                </Link>
            </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
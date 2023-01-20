import React from 'react';
import {Link} from 'react-router-dom';
import SAFELlogo from './SAFELBLUE.png';
import './NavBar.css';
import SearchBar from './SearchBar';
import LoginButton from './Login';


function NavBar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-top'>
            <div className='navbar-container'>
              <img src={SAFELlogo} className='resp-img'/>
              <SearchBar/>
              <div>
                <Link to="/" className="navigation-button">Accueil</Link>
                <Link to="/products" className="navigation-button">Nos produits</Link>
                <Link to="/about-us" className="navigation-button">À propos de nous</Link>
                <Link to="/contact-us" className="navigation-button">Nous contacter</Link>
              </div>
             <Link to="/sign-in" className="sign">Se connecter</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
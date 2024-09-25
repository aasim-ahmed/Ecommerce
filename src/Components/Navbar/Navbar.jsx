import React from 'react';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'



function inputtext(e){

console.log(e);


}

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="" className='logo' />
      </div>
      <div className="search-container">
        <input type="text" placeholder='Search Product Here' onChange={inputtext} />

      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Clothings">Clothings</Link></li>
        <li><Link to="/Electronics">Electronics</Link></li>
        <li><Link to="/Footwear">Foot-wear</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/cart" className="cart-icon">
          <ShoppingCartOutlinedIcon />
        </Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

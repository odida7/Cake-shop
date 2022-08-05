import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import {FiMenu} from 'react-icons/fi';


function Navbar() {

  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <div className='navbar'>
      <div className='logo' id={open ? 'open' : 'close'}>
          <h1> FINE.CAKE </h1>
           
          <div className='hiddenLinks' >
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/info'>Info</Link>
            <Link to='/contact'>Contact</Link>
          </div>

      </div>

      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/info'>Info</Link>
        <Link to='/contact'>Contact</Link>

        <button onClick={toggleNavbar}>
          <FiMenu />
        </button>
        
      </div>

    </div>
  )
}

export default Navbar;

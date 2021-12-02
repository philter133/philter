import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import logo from './logo.png';


function Nav() {

  const navStyle = {
    color: '#FAF9F5',
    textDecoration: 'none',
    fontSize: "3vmin",
    font: "Righteous",
    padding: "1vh",
    display: "flex"
  };

  const logoStyle = {
    width: "50vmin",
    heigt: "50vmin",
    borderRadius: "1.3vw",
    margin: "1vh"
  };

  return (


    <nav>
      <Link to="/">
      <img style={logoStyle} src={logo}/>
      </Link>
        <ul className="nav-links">  

          <Link style={navStyle} to='/filter'>
          <li className='nav-links-style'>Filter</li>
          </Link>

          <Link style={navStyle} to='/adapter'>
          <li className='nav-links-style'>Adapter</li>
          </Link>

          <Link style={navStyle} to='/gallery'>
          <li className='nav-links-style'>Gallery</li>
          </Link>

          <Link style={navStyle} to='/about'>
          <li className='nav-links-style'>Developers</li>
          </Link>

        </ul>

    </nav>
  );
}

export default Nav;

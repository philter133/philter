import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'


function Nav() {

  const navStyle = {
    color: '#FAF9F5',
    textDecoration: 'none',
    fontSize: "35px",
    font: "Righteous"
  };

  return (


    <nav>
        <h3 className="logo-style">logo</h3>

        <ul className="nav-links">  

          <Link style={navStyle}  to='/'>
          <li className='nav-links-style'>Homepage</li>
          </Link>

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

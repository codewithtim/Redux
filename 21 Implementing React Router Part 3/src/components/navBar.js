import React from 'react';
import { Link } from 'react-router';

const NavBar = (props) => (
  <nav>
    <Link to='/'>
      Home
    </Link>
    <Link to='users'>
     Users
    </Link>
  </nav>
)

export default NavBar;
import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Challenge</h1>
    <header>
      <h1></h1>
      <NavLink to='/' activeClassName='is-active'>Home</NavLink>
      <NavLink to='/portfolio' activeClassName='is-active'>Portfolio</NavLink>
      <NavLink to='/contact' activeClassName='is-active'>Contact</NavLink>
    </header>
  </div>
)

export default Header;

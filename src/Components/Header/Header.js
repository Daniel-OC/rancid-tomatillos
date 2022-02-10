import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className="logo">
        <h1>Palomino + O'Connell | Fine Film Critics</h1>
      </section>
      <nav>
        <NavLink to='/' className="activate">Home</NavLink>
        <NavLink to='/694919' className="activate">About</NavLink>
        <NavLink to='/search' className="activate">Search</NavLink>
      </nav>
    </header>
  )
}

export default Header;
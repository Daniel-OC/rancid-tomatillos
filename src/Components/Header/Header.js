import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className="logo">
        <h1>Palomino + O'Connell | Fine Film Critics</h1>
      </section>
    </header>
  )
}

export default Header;
import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Palomino + O'Connell | Fine Film Critics</h1>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </header>
  )
}

export default Header;
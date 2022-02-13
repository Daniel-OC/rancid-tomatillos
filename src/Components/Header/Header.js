import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <section className='logo'>
        <h1 onClick={() => {window.location.href='/'}}>Palomino + O'Connell | Fine Film Critics</h1>
      </section>
    </header>
  );
};

export default Header;
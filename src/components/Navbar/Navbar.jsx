import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  const activeClass = 'active';

  return (
    <div className="navbar">
      <NavLink to="/" activeClassName={activeClass} exact>Форма</NavLink>
      <NavLink to="/palette" activeClassName={activeClass}>Палитра</NavLink>
    </div>
  );
};

export default Navbar;

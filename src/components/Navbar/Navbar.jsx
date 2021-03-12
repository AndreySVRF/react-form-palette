import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { changeTheme } from '../../actions/theme';

import './Navbar.scss';

import changeThemeIcon from '../../assets/images/change-theme.svg';


const Navbar = () => {
  const activeClass = 'active';

  const dispatch = useDispatch();
  const { lightTheme } = useSelector(state => state.theme);

  const onChangeTheme = () => {
    dispatch(changeTheme(!lightTheme))
  }

  return (
    <div className="navbar">
      <div className="navbar__links">
        <NavLink to="/" activeClassName={activeClass} exact>Форма</NavLink>
        <NavLink to="/palette" activeClassName={activeClass}>Палитра</NavLink>
      </div>
      <div className="navbar__setting">
        <div onClick={() => onChangeTheme()} className="change-theme">
          <img src={changeThemeIcon} alt="change-theme"/>
          <span>Сменить тему</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

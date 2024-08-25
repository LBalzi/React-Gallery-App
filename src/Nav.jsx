import React from 'react';
import { NavLink } from 'react-router-dom';
//Navigation Component: Provides links for navigating to different routes in the application
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/search/cats">
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to="/search/dogs">
            Dogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/search/humans">
            Humans
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Nav;

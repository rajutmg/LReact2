import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  return (
    <>
      <div id="reactMenu">
        <NavLink exact activeClassName="active_class" to="/">
          ABOUT
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">
          CONTACT
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/search">
          SEARCH
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/user/Raju/Tamang">
          USER
        </NavLink>
      </div>

      {/* <NavLink exact activeClassName="active_class" to="/">
        ABOUT Page
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">
        CONTACT Page
      </NavLink> */}
      {/* <br />
      <br /> */}
      {/* <Link to="/">ABOUT Page</Link>
      <Link to="/contact">CONTACT Page</Link>
      <br />
      <br />
      <a href="/">About Page</a>
      <a href="/contact">Contact Page</a> */}
    </>
  );
};
export default Menu;

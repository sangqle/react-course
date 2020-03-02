import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <h1>Expnesify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      add page
    </NavLink>
  </header>
);

export default Header;

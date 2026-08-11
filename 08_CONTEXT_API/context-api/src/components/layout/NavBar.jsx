import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-container-child">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sobreNos">Sobre Nós</NavLink>
        </li>
        <li>
          <NavLink to="/projetos">Projetos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

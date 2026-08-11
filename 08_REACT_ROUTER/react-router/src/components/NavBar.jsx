// 2 - links com react router
import "./NavBar.css";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}

      {/* Uso do isActive do NavLink */}
      {/* <NavLink
        to="/"
        className={(isActive) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={(isActive) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        Sobre
      </NavLink> */}

      {/* Aproveitando a inserção "automatica" do .active*/}

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default NavBar;

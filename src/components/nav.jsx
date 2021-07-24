import React from "react";

const NavBar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand h1">
        Total Items:
        <span className="nav-item badge btn-primary">{totalCount}</span>
        <br />
      </span>
    </nav>
  );
};

export default NavBar;

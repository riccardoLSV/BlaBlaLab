import React from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = () => (
  <div className="header-nav">
    <div className="header-nav-wrapper">
      <Link to="/">
        <img src={logo} className="logo" alt="BlaBlaLab" />
      </Link>
      <div>
        <Link className="link-to" to="/about">
          About
        </Link>
        <Link className="link-to" to="/products">
          Products
        </Link>
      </div>
    </div>
  </div>
);

export default Navbar;

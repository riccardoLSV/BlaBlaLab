import React from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = () => (
  <div className="header-nav">
    <div className="header-nav-wrapper">
      <Link className="link-to" to="/">
        BlaBlalab
      </Link>
      <Link to="/">
        <img src={logo} className="logo" alt="BlaBlaLab" />
      </Link>
      <div>
        {/*<Link className="link-to" to="/about">
          About
        </Link>
        <Link className="link-to" to="/products">
          Products
</Link>*/}
        <ul>
          <li>
            <Link className="icon-facebook" to="/" />
          </li>
          <li>
            <Link className="icon-youtube" to="/" />
          </li>
          <li>
            <Link className="icon-instagram" to="/" />
          </li>
        </ul>
      </div>
    </div>
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Categoria</Link>
        </li>
        <li>
          <Link to="/">Categoria</Link>
        </li>
        <li>
          <Link to="/">Categoria</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;

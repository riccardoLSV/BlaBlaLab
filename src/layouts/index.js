import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="BlaBLaLab Blog" />
    <Navbar />
    <div className="blog-container">{children()}</div>
    <footer>BlaBlaLab</footer>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

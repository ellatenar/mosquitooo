import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Header from "./Header";
import "../assets/stylesheets/global.sass";

const Layout = ({ children, pageName, title }) => {
  let className = "";

  if (pageName) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>
          {title && title !== "Heather Holmes"
            ? `${title} – MOSQUITO`
            : `MOSQUITO`}
        </title>
      </Helmet>
      <div className="wrapper">
        <Header title={title} />
        <main className={pageName === "Index" ? "index-main" : undefined}>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
};

export default Layout;

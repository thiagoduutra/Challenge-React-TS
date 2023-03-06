import React from "react";
import home from "./BreadImages/home.png";
import arrow from "./BreadImages/arrow.png";

import "./style.css";

const BreadCrumb = () => {
  return (
    <div className="container-bread">
      <div className="BreadCrumb">
        <a href="/sobre">
          <img
            className="BreadCrump-image1"
            src={home}
            alt="Ícone Home BreadCrumb"
          />
        </a>

        <img
          className="BreadCrump-image2"
          src={arrow}
          alt="Ícone Arrow BreadCrumb"
        />
        <a className="BreadCrumb-text" href="/">
          INSTITUCIONAL
        </a>
      </div>
    </div>
  );
};

export default BreadCrumb;

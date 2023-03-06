import React from "react";

import BreadCrumb from "../../Components/BreadCrumb";
import CustomFormCont from "../../Components/CustomForm/CustomFormContato";
import Navigation from "../../Components/Navigation";

import "./style.css";

const Contato = () => {
  return (
    <div className="main-contato__container">
      <BreadCrumb />
      <h2 className="subTitle">INSTITUCIONAL</h2>
      <div className="main-form">
        <div className="container-form">
          <Navigation />
          <div className="custom-form">
            <CustomFormCont />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;

import React from "react";
import "./style.css";
import logoM3Desktop from "../ImagesHeader/Logo-M3-Desktop.png";
import search from "../ImagesHeader/search.png";
import cart from "../ImagesHeader/cart.png";
import { NavLink } from "react-router-dom";

const HeaderDesktop = () => {
  return (
    <header className="header-desktop">
      <div className="page-header">
        <div className="page-header__container">
          <a href="/" className="page-header__logo">
            <img
              className="page-header__imgLogo"
              src={logoM3Desktop}
              alt="Logo M3 academy"
            />
          </a>
          <div className="page-header__input">
            <input
              type="text"
              placeholder="Buscar..."
              className="page-header__inputSearch"
            />
            <button className="page-header__iconSearch">
              <img
                className="page-header__imgSearch"
                src={search}
                alt="Icone Search Header"
              />
            </button>
          </div>
          <div className="page-header__links">
            <NavLink to="/" className="page-header-join">
              ENTRAR
            </NavLink>
            <button className="page-header-iconCart">
              <img
                className="page-header__cart"
                src={cart}
                alt="Icone Cart Header"
              />
            </button>
          </div>
        </div>

        <div className="page-belowHeader">
          <div className="page-belowHeader__containerBelow">
            <div className="page-belowHeader__links">
              <NavLink to="/" className="page-belowHeader-nav">
                CURSOS
              </NavLink>
              <NavLink to="/" className="page-belowHeader-nav">
                SAIBA MAIS
              </NavLink>
              <NavLink to="/" className="page-belowHeader-nav">
                INSTITUCIONAIS
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderDesktop;

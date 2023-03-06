import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoM3Desktop from "../ImagesHeader/Logo-M3-Desktop.png";
import search from "../ImagesHeader/search.png";
import cart from "../ImagesHeader/cart.png";
import "./style.css";
import menu from "../ImagesHeader/menu.png";
import closeMenu from "../ImagesHeader/close-menu.png";

const HeaderTablets = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const body = document.querySelector("body") as HTMLElement;
    body.classList.toggle("menu");
  }, []);

  return (
    <header className="header-tablets">
      <div className="page-header">
        <div className="page-header__container">
          <div className="page-header__menu">
            <button
              className="page-header__btnMenu"
              onClick={() => setOpen(!open)}
              aria-label={`${open ? "Fechar" : "Abrir"} menu`}
            >
              <img src={menu} alt="Menu tablet" />
            </button>

            <div
              className={`menu-tablet ${open ? "actived" : "disabled"}`}
              aria-hidden={!open}
            >
              <div className="page-belowHeader__links">
                <div className="page-header__links">
                  <Link to="/" className="page-header-join">
                    ENTRAR
                  </Link>
                </div>
                <Link to="/" className="page-belowHeader-nav cursos nav-cursos">
                  CURSOS
                </Link>
                <Link to="/" className="page-belowHeader-nav">
                  SAIBA MAIS
                </Link>
                <Link to="/" className="page-belowHeader-nav">
                  INSITUCIONAIS
                </Link>

                <button
                  className="page-belowHeader__btnClose"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  <img src={closeMenu} alt="Fechar Menu" />
                </button>
              </div>
            </div>

            <a className="page-header__link-logo" href="sobre">
              <img
                className="page-header__logo"
                src={logoM3Desktop}
                alt="Logo M3 Academy"
              />
            </a>

            <div className="page-header__links">
              <button className="page-header__iconCart">
                <img className="page-header__cart" src={cart} alt="" />
              </button>
            </div>
          </div>

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
        </div>
      </div>
    </header>
  );
};

export default HeaderTablets;

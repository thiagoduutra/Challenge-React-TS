import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const NavigationTablets = () => {
  return (
    <div className="menu-desktop">
      <div className="menu-navigation">
        <div className="menu-navigation__subMenu">
          <div className="menu-navigation__description">
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive ? "ativo menu-link" : "menu-link"
              }
            >
              Sobre
            </NavLink>
          </div>

          <div className="menu-navigation__description">
            <NavLink
              to="/formaDePagamento"
              className={({ isActive }) =>
                isActive ? "ativo menu-link" : "menu-link"
              }
            >
              Forma de Pagamento
            </NavLink>
          </div>

          <div className="menu-navigation__description">
            <NavLink
              to="/entrega"
              className={({ isActive }) =>
                isActive ? "ativo menu-link" : "menu-link"
              }
            >
              Entrega
            </NavLink>
          </div>

          <div className="menu-navigation__description">
            <NavLink
              to="/trocaDevolucao"
              className={({ isActive }) =>
                isActive ? "ativo menu-link" : "menu-link"
              }
            >
              Troca e Devolução
            </NavLink>
          </div>

          <div className="menu-navigation__description">
            <NavLink
              to="/segurancaPrivacidade"
              className={({ isActive }) =>
                isActive ? "ativo menu-link" : "menu-link"
              }
            >
              Segurança e Privacidade
            </NavLink>
          </div>

          <div className="menu-navigation__description">
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive ? "ativo menu-link" : "menu-link"
              }
            >
              Contato
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationTablets;

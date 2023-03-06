import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from "../ImagesFooter/facebook-icon.png";
import Instagram from "../ImagesFooter/instagram-icon.png";
import Twitter from "../ImagesFooter/twitter-icon.png";
import Youtube from "../ImagesFooter/youtube-icon.png";
import Linkedin from "../ImagesFooter/linkedin-icon.png";
import Master from "../ImagesFooter/Master-icon.png";
import Visa from "../ImagesFooter/visa-icon.png";
import American from "../ImagesFooter/american-icon.png";
import Elo from "../ImagesFooter/elo-icon.png";
import Hiper from "../ImagesFooter/hiper-icon.png";
import Paypal from "../ImagesFooter/paypal-icon.png";
import Boleto from "../ImagesFooter/boleto-icon.png";
import VtexCert from "../ImagesFooter/vtexCert-icon.png";
import VtexIcon from "../ImagesFooter/vtex-icon.png";
import M3 from "../ImagesFooter/m3-icon.png";
import Wpp from "../ImagesFooter/whatsapp.png";
import Top from "../ImagesFooter/top.png";

const FooterDesktop = () => {
  return (
    <footer className="footer-desktop">
      <div className="footer-desktop__container">
        <div className="footer-desktop__columns">
          <div className="footer-desktop__links">
            <h4 className="footer-link__title">INSTITUCIONAL</h4>

            <ul className="footer-link__itemList">
              <li className="footer-link__item">
                <NavLink className="footer-links__link" to="/">
                  Quem Somos
                </NavLink>
              </li>

              <li className="footer-link__item">
                <NavLink className="footer-links__link" to="/">
                  Política de Privacidade
                </NavLink>
              </li>

              <li className="footer-link__item">
                <NavLink className="footer-links__link" to="/">
                  Segurança
                </NavLink>
              </li>

              <li className="footer-link__item lastChild">
                <NavLink className="footer-links__link" to="/">
                  Seja um Revendedor
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-desktop__links">
            <h4 className="footer-link__title">DÚVIDAS</h4>

            <ul className="footer-link__itemList">
              <li className="footer-link__item">
                <NavLink className="footer-links__link" to="/">
                  Entrega
                </NavLink>
              </li>
              <li className="footer-link__item">
                <NavLink className="footer-links__link" to="/">
                  Pagamento
                </NavLink>
              </li>
              <li className="footer-link__item">
                <NavLink className="footer-links__link" to="/">
                  Troca e devoluções
                </NavLink>
              </li>
              <li className="footer-link__item lastChild">
                <NavLink className="footer-links__link" to="/">
                  Dúvidas Frequentes
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-desktop__links">
            <h4 className="footer-link__title">INSTITUCIONAL</h4>

            <ul className="footer-link__itemList">
              <li className="footer-link__item">
                <NavLink className="footer-links__link linkAtendimento" to="/">
                  Atendimento ao Consumidor
                </NavLink>
              </li>

              <li className="footer-link__item">
                <NavLink className="footer-links__link" to="/">
                  Política de Privacidade
                </NavLink>
              </li>

              <li className="footer-link__item">
                <NavLink className="footer-links__link" to="/">
                  Segurança
                </NavLink>
              </li>

              <li className="footer-link__item lastChild">
                <NavLink className="footer-links__link" to="/">
                  Seja um Revendedor
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-desktop__links">
            <ul
              className="footer-link__itemList
            social-medias"
            >
              <li>
                <a
                  href="/"
                  target="_blank"
                  title="Facebook"
                  rel="noopener noreferrer"
                >
                  <img
                    className="footer-links__IconSocial"
                    src={Facebook}
                    alt="Ícone Facebook"
                  />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  title="Instagram"
                  rel="noopener noreferrer"
                >
                  <img
                    className="footer-links__IconSocial"
                    src={Instagram}
                    alt="Ícone Instagram"
                  />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  title="Twitter"
                  rel="noopener noreferrer"
                >
                  <img
                    className="footer-links__IconSocial"
                    src={Twitter}
                    alt="Ícone Twitter"
                  />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  title="Youtube"
                  rel="noopener noreferrer"
                >
                  <img
                    className="footer-links__IconSocial"
                    src={Youtube}
                    alt="Ícone Youtube"
                  />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  title="Linkedin"
                  rel="noopener noreferrer"
                >
                  <img
                    className="footer-links__IconSocial"
                    src={Linkedin}
                    alt="Ícone Linkedin"
                  />
                </a>
              </li>
            </ul>
            <a className="footer-link__site" href="/" rel="noopener noreferrer">
              www.loremipsum.com
            </a>
          </div>
        </div>
      </div>

      <section className="footer-desktop__infos">
        <div className="footer-infos__container">
          <div className="footer-infos__structure">
            <div className="footer-infos__text">
              <span className="footer-infos__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>

            <ul className="footer-infos__payment">
              <li>
                <img
                  className="footer-link__payment"
                  src={Master}
                  alt="Ícone MasterCard"
                />
              </li>

              <li>
                <img
                  className="footer-link__payment"
                  src={Visa}
                  alt="Ícone Visa"
                />
              </li>

              <li>
                <img
                  className="footer-link__payment"
                  src={American}
                  alt="Ícone American"
                />
              </li>

              <li>
                <img
                  className="footer-link__payment"
                  src={Elo}
                  alt="Ícone Elo"
                />
              </li>

              <li>
                <img
                  className="footer-link__payment"
                  src={Hiper}
                  alt="Ícone HiperCard"
                />
              </li>

              <li>
                <img
                  className="footer-link__payment"
                  src={Paypal}
                  alt="Ícone Paypal"
                />
              </li>

              <li>
                <img
                  className="footer-link__payment"
                  src={Boleto}
                  alt="Ícone Boleto"
                />
              </li>

              <div className="footer-infos__divider"></div>

              <ul className="footer-infos__vtexCert">
                <li>
                  <img className="vtexCert" src={VtexCert} alt="" />
                </li>
              </ul>
            </ul>

            <div className="footer-infos__contDev">
              <div className="footer-infos__developed">
                <a
                  href="https://www.vtex.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Powered by</span>

                  <img className="vtexIcon" src={VtexIcon} alt="Ícone Vtex" />
                </a>

                <a
                  href="https://m3ecommerce.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Developed by</span>
                  <img className="m3Icon" src={M3} alt="Ícone M3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-redes">
        <div className="footer-newsletter-whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=5599999999999"
            target="_blank"
            title="WhatsApp"
            rel="noreferrer noopener"
          >
            <img src={Wpp} alt="WhatsApp" />
          </a>
        </div>

        <div className="footer-newsletter-scrollUp">
          <i
            onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
            className="footer-newsletter-scrollUp-icon"
          >
            <img src={Top} alt="ScrollUp" />
          </i>
        </div>
      </div>
    </footer>
  );
};
export default FooterDesktop;

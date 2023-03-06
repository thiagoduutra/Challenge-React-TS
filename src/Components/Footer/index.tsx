import React, { useState, useEffect } from "react";
import FooterDesktop from "./FooterDesktop";
import FooterTablets from "./FooterTablets";
import "./style.css";

const Footer = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindow = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindow);
    return () => {
      window.removeEventListener("resize", handleWindow);
    };
  }, []);

  return (
    <footer>{width <= 1024 ? <FooterTablets /> : <FooterDesktop />}</footer>
  );
};

export default Footer;

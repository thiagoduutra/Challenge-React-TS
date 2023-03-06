import React, { useEffect, useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderTablets from "./HeaderTablets";
import "./style.css";

const Header = () => {
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
    <header>{width <= 1024 ? <HeaderTablets /> : <HeaderDesktop />}</header>
  );
};
export default Header;

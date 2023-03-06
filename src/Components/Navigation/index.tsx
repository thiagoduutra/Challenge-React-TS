import React, { useEffect, useState } from "react";
import NaviDesktop from "./NaviDesktop";
import NaviTablets from "./NaviTablets";

import "./style.css";

const Navigation = () => {
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

  return <>{width <= 1024 ? <NaviTablets /> : <NaviDesktop />}</>;
};

export default Navigation;

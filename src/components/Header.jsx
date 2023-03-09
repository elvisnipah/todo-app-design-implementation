import React, { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext";

import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";
import bgMobileLight from "../assets/bg-mobile-light.jpg";
import bgMobileDark from "../assets/bg-mobile-dark.jpg";

function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <header
      className={
        "bg-transparent flex py-8 px-6 justify-between text-white pb-32"
      }
      style={{
        backgroundImage: `url(${darkMode ? bgMobileDark : bgMobileLight})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <p className="text-3xl tracking-[0.3em] font-bold">TODO</p>
      <button>
        <img
          src={darkMode ? sunIcon : moonIcon}
          alt="Icon to toggle dark mode"
          onClick={toggleDarkMode}
        />
      </button>
    </header>
  );
}

export default Header;

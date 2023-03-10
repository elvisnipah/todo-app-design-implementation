import React, { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext";

import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";
import bgMobileLight from "../assets/bg-mobile-light.jpg";
import bgMobileDark from "../assets/bg-mobile-dark.jpg";
import bgDesktopDark from "../assets/bg-desktop-dark.jpg";
import bgDesktopLight from "../assets/bg-desktop-light.jpg";

function Header(props) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  let image;

  if (darkMode && props.windowSize < 768) {
    image = bgMobileDark;
  } else if (darkMode && props.windowSize >= 768) {
    image = bgDesktopDark;
  } else if (!darkMode && props.windowSize < 768) {
    image = bgMobileLight;
  } else {
    image = bgDesktopLight;
  }

  return (
    <header
      className={"text-white pb-32"}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className="flex py-8 px-6 justify-between md:w-[700px] mx-auto">
        <p className="text-3xl tracking-[0.3em] font-bold">TODO</p>
        <button>
          <img
            src={darkMode ? sunIcon : moonIcon}
            alt="Icon to toggle dark mode"
            onClick={toggleDarkMode}
          />
        </button>
      </section>
    </header>
  );
}

export default Header;

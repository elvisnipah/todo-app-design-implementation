import React from "react";

import moonIcon from "../assets/icon-moon.svg";
import bgMobileLight from "../assets/bg-mobile-light.jpg";

function Header() {
  return (
    <header
      className="bg-transparent flex py-8 px-6 justify-between text-white pb-32"
      style={{ backgroundImage: `url(${bgMobileLight})` }}
    >
      <p className="text-2xl tracking-[0.3em] font-bold">TODO</p>
      <button>
        <img src={moonIcon} alt="Icon to toggle dark mode" />
      </button>
    </header>
  );
}

export default Header;

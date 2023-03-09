import React from "react";

import checkIcon from "../../assets/icon-check.svg";

function CheckButton(props) {
  return (
    <button
      className={`border-2 w-5 h-5 rounded-full flex items-center justify-center  ${
        props.checked ? "bg-gradient-to-r border-none" : "border-2"
      } from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]`}
      disabled={props.disabled}
      onClick={() => props.markComplete(props.id)}
    >
      {props.checked && <img src={checkIcon} alt="Checked button" />}
    </button>
  );
}

export default CheckButton;

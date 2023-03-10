import React from "react";

import checkIcon from "../../assets/icon-check.svg";

function CheckButton(props) {
  return (
    <button
      className={`border-2 w-5 h-5 rounded-full flex items-center justify-center   ${
        props.checked
          ? "bg-gradient-to-r border-none"
          : "dark:border-[hsl(237,14%,26%)] group-hover:border-transparent group-hover:[background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))_border-box] dark:group-hover:[background:linear-gradient(hsl(235,24%,19%),hsl(235,24%,19%))_padding-box,linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))_border-box]"
      } from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]`}
      disabled={props.disabled}
      onClick={() => props.markComplete(props.id)}
    >
      {props.checked && <img src={checkIcon} alt="Checked button" />}
    </button>
  );
}

export default CheckButton;

import React from "react";
import closeIcon from "../../assets/icon-cross.svg";

function CloseButton(props) {
  return (
    <button
      className="w-5 h-5 flex items-center justify-center"
      onClick={() => props.deleteTodo(props.id)}
    >
      <img src={closeIcon} alt="Close button" />
    </button>
  );
}

export default CloseButton;

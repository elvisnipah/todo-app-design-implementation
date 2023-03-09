import React, { useState } from "react";
import { nanoid } from "nanoid";

import CheckButton from "../ui/CheckButton";

function TodoInput(props) {
  const [todoInfo, setTodoInfo] = useState({
    id: "",
    text: "",
    completed: false,
  });

  const handleTextChange = (e) => {
    setTodoInfo((prevTodoInfo) => {
      return {
        ...prevTodoInfo,
        text: e.target.value,
      };
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && todoInfo.text !== "") {
      props.addTodo({
        ...todoInfo,
        id: nanoid(),
      });

      todoInfo.text = "";
    }
  };

  return (
    <div className="mx-6 bg-white flex p-4 gap-4 items-center rounded-lg">
      <CheckButton disabled={true} />
      <input
        type="text"
        placeholder="Create a new todo..."
        className="focus:outline-none placeholder:text-sm"
        value={todoInfo.text}
        onChange={handleTextChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

export default TodoInput;

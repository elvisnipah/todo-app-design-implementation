import React from "react";
import CheckButton from "../ui/CheckButton";
import CloseButton from "../ui/CloseButton";

function TodoItem(props) {
  return (
    <div className="flex w-full gap-4 p-4 border-b-2">
      <CheckButton
        checked={props.completed}
        markComplete={props.markComplete}
        id={props.id}
      />
      <p className="w-[80%]">
        {props.completed ? (
          <s className="text-gray-400">{props.text}</s>
        ) : (
          props.text
        )}
      </p>
      <CloseButton deleteTodo={props.deleteTodo} id={props.id} />
    </div>
  );
}

export default TodoItem;

import React from "react";
import CheckButton from "../ui/CheckButton";
import CloseButton from "../ui/CloseButton";

function TodoItem(props) {
  return (
    <div
      className="flex w-full gap-4 p-4 border-b-2 text-gray-700 dark:border-[hsl(237,14%,26%)] dark:bg-[hsl(235,24%,19%)] dark:text-[hsl(234,39%,85%)] cursor-pointer group"
      draggable
      onDragStart={(e) => props.dragStart(e, props.index)}
      onDragEnter={(e) => props.dragEnter(e, props.index)}
      onDragEnd={props.drop}
    >
      <CheckButton
        checked={props.completed}
        markComplete={props.markComplete}
        id={props.id}
      />
      <p className="max-w-[75%] break-words">
        {props.completed ? (
          <s className="dark:text-[hsl(233,14%,35%)] text-gray-400">
            {props.text}
          </s>
        ) : (
          props.text
        )}
      </p>
      <CloseButton deleteTodo={props.deleteTodo} id={props.id} />
    </div>
  );
}

export default TodoItem;
